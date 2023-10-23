const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fetchAllUser = async (req, res) => {
  const allUser = await prisma.user.findMany();
  res.status(201).json(allUser);
};

const addUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { addUser, fetchAllUser };
