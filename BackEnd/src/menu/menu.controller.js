import { prisma } from "../db/database.js";

export const getMenu = async (req, res) => {
  const menu = await prisma.gudang_mymatcha.findMany();
  return res.status(200).json({
    data: menu,
    message: "Menu berhasil didapatkan",
  });
};

export const getMenuById = async (req, res) => {
  const menuId = req.params.id;
  const menu = await prisma.gudang_mymatcha.findUnique({
    where: {
      kode_barang: parseInt(menuId),
    },
  });
  if (!menu) {
    return res.status(400).send("menu tidak ditemukan");
  }
  res.send(menu);
};

export const addMenu = async (req, res) => {
  const newMenu = req.body;
  const menu = await prisma.gudang_mymatcha.create({
    data: {
      nama_barang: newMenu.nama_barang,
      harga_barang: newMenu.harga_barang,
      stok_barang: newMenu.stok_barang,
    },
  });
  res.status(201).send({
    data: menu,
    message: "Menu berhasil ditambahkan",
  });
};

export const deleteMenu = async (req, res) => {
  const menuId = req.params.id;
  await prisma.gudang_mymatcha.delete({
    where: {
      kode_barang: parseInt(menuId),
    },
  });
  res.status(200).send("Menu berhasil dihapus");
};
