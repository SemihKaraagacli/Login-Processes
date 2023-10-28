const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addUser };
