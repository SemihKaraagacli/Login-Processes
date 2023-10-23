const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loginValidation = async (req, res) => {
  const { id, username, email, password } = req.body;
};

module.exports = { loginValidation };
