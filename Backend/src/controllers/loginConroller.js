const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loginValidation = async (req, res) => {
  const { username, email, password } = req.body;
  const a = await prisma.user.findFirst({
    where: { email: email },
  });
  res.json(a);
};

module.exports = { loginValidation };
