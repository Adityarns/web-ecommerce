import express from "express";
import {
  addMenu,
  deleteMenu,
  getMenu,
  getMenuById,
  patchMenu,
  updateMenu,
} from "./menu.controller.js";
const router = express.Router();

router.get("/Menu", getMenu);
router.get("/Menu/:id", getMenuById);
router.post("/Menu", addMenu);
router.put("/Menu/:id", updateMenu);
router.patch("/Menu/:id", patchMenu);
router.delete("/Menu/:id", deleteMenu);

export default router;
