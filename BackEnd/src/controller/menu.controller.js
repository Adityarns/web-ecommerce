import express from "express";
import {
  addMenu,
  deleteMenu,
  getMenu,
  getMenuById,
  patchMenu,
  updateMenu,
} from "../service/menu.service.js";
const router = express.Router();

router.get("/Menu", async (req, res) => {
  try {
    const menu = await getMenu();
    res.status(200).send(menu);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/Menu/:id", async (req, res) => {
  const menuId = parseInt(req.params.id);
  const menu = await getMenuById(menuId);
  res.status(200).send(menu);
});
router.post("/Menu", async (req, res) => {
  try {
    const newMenu = req.body;
    const menu = await addMenu(newMenu);
    res.status(201).send({
      data: menu,
      message: "Menu berhasil ditambahkan",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
router.delete("/Menu/:id", async (req, res) => {
  try {
    const menuId = parseInt(req.params.id);
    await deleteMenu(menuId);
    res.status(200).send("Menu berhasil dihapus");
  } catch (error) {
    res.status(400).send(error);
  }
});
router.put("/Menu/:id", async (req, res) => {
  try {
    const menuId = parseInt(req.params.id);
    const menuData = req.body;
    const menu = await updateMenu(menuId, menuData);
    res.status(200).send({
      data: menu,
      message: "Menu berhasil diupdate",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
router.patch("/Menu/:id", async (req, res) => {
  try {
    const menuId = parseInt(req.params.id);
    const menuData = req.body;
    const menu = await patchMenu(menuId, menuData);
    res.status(200).send({
      data: menu,
      message: "Menu berhasil diupdate",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
