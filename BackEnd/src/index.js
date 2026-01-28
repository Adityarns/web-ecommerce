import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import cors from "cors";

dotenv.config();

// Buat connection pool untuk PostgreSQL
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Buat adapter dari pool
const adapter = new PrismaPg(pool);

// Inisialisasi PrismaClient dengan adapter
const prisma = new PrismaClient({
  adapter,
  log: ["query", "error", "warn"],
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Endpoint dasar untuk cek server
app.get("/api", (req, res) => {
  res.send("Hello, World!");
});

// Endpoint untuk mengambil data menu/gudang
app.get("/api/menu", async (req, res) => {
  try {
    const menu = await prisma.gudang_mymatcha.findMany();
    res.json(menu);
  } catch (error) {
    console.error("Error saat mengambil data:", error);
    res.status(500).json({
      message: "Gagal mengambil data dari database",
      error: error.message,
    });
  }
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  await pool.end();
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
