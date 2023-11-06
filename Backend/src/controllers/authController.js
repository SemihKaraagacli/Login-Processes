const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const authenticationToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Yetkisiz giriş: token hatalı" });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) {
      console.error("JWT doğrulama hatası: " + err);
      return res.status(403).json({ message: "Hata: Token doğrulanmadı" });
    }
    req.user = user;
    next();
  });
};

const fetchAllUser = async (req, res) => {
  const allUser = await prisma.user.findMany();
  res.json(allUser);
};

module.exports = { authenticationToken, fetchAllUser };
