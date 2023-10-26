const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
  });
};

module.exports = { addUser };
