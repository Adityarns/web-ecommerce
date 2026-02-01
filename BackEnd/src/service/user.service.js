import { prisma } from "../db/database.js";

export const addUser = async (req, res) => {
  const newUser = req.body;
  const user = await prisma.user.create({
    data: {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    },
  });
  res.send({
    data: user,
    message: "user berhasil ditambahkan",
  });
};
