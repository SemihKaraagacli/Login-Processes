const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fetchAllUser = async (req, res) => {
  const allUser = await prisma.user.findMany();
  res.json(allUser);
};

module.exports = { fetchAllUser };
