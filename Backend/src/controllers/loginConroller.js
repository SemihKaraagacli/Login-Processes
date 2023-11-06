const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginValidation = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    res.status(404).json({ message: "Email hatalı hatası" });
  } else {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jwt.sign({ email }, process.env.JWT_KEY, {
        expiresIn: "1m",
      });
      const id = user.id;
      res.status(200).json({ token, id });
    } else {
      res.status(401).json({ message: "Yanlış şifre" });
    }
  }
};
module.exports = { loginValidation };
