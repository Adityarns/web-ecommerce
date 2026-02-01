import { prisma } from "../db/database.js";

export const getMenu = async () => {
  const menu = await prisma.gudang_mymatcha.findMany();
  return menu;
};

export const getMenuById = async (id) => {
  if (typeof id !== "number") {
    throw Error("Id is not a number");
  }
  const menu = await prisma.gudang_mymatcha.findUnique({
    where: {
      kode_barang: id,
    },
  });
  if (!menu) {
    throw Error("Menu is not found");
  }
  return menu;
};

export const addMenu = async (newMenu) => {
  if (!(newMenu.nama_barang && newMenu.harga_barang && newMenu.stok_barang)) {
    throw Error("Terdapat data yang tidak lengkap");
  }
  const menu = await prisma.gudang_mymatcha.create({
    data: {
      nama_barang: newMenu.nama_barang,
      harga_barang: newMenu.harga_barang,
      stok_barang: newMenu.stok_barang,
    },
  });
  return menu;
};

export const updateMenu = async (id, menuData) => {
  await getMenuById(id);
  const menu = await prisma.gudang_mymatcha.update({
    where: {
      kode_barang: id,
    },
    data: {
      nama_barang: menuData.nama_barang,
      harga_barang: menuData.harga_barang,
      stok_barang: menuData.stok_barang,
    },
  });
  return menu;
};

export const deleteMenu = async (id) => {
  await getMenuById(id);
  await prisma.gudang_mymatcha.delete({
    where: {
      kode_barang: id,
    },
  });
};
