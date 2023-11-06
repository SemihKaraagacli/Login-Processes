const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const saltRound = 12;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });
    res.status(200).json({ message: "Kayıt oluşturuldu." });
  } catch (error) {
    console.log("hash hatası: " + error);
    res.status(500).json({ message: "kayıt başarısız." });
  }
};

module.exports = { addUser };
