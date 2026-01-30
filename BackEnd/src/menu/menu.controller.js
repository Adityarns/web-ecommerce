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
  if (!(newMenu.nama_barang && newMenu.harga_barang && newMenu.stok_barang)) {
    res.status(400).send("Terdapat data yang tidak lengkap");
  }
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

export const updateMenu = async (req, res) => {
  const menuId = req.params.id;
  const menuData = req.body;

  if (
    !(menuData.nama_barang && menuData.harga_barang && menuData.stok_barang)
  ) {
    res.status(400).send("Terdapat data yang tidak lengkap");
  }

  const menu = await prisma.gudang_mymatcha.update({
    where: {
      kode_barang: parseInt(menuId),
    },
    data: {
      nama_barang: menuData.nama_barang,
      harga_barang: menuData.harga_barang,
      stok_barang: menuData.stok_barang,
    },
  });
  res.status(200).send({
    data: menu,
    message: "Berhasil di update",
  });
};

export const patchMenu = async (req, res) => {
  const menuId = req.params.id;
  const menuData = req.body;

  const menu = await prisma.gudang_mymatcha.update({
    where: {
      kode_barang: parseInt(menuId),
    },
    data: {
      nama_barang: menuData.nama_barang,
      harga_barang: menuData.harga_barang,
      stok_barang: menuData.stok_barang,
    },
  });
  res.status(200).send({
    data: menu,
    message: "Berhasil di update",
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
