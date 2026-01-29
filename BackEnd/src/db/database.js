import dotenv from "dotenv";
import pg from "pg";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

dotenv.config();

// Buat connection pool untuk PostgreSQL
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Buat adapter dari pool
const adapter = new PrismaPg(pool);

// Inisialisasi PrismaClient dengan adapter
export const prisma = new PrismaClient({
  adapter,
});

// Graceful shutdown
process.on("SIGINT", async () => {
  // putus koneksi orm ke database
  await prisma.$disconnect();
  //putus semua koneksi
  await pool.end();
  // matikan semua proses node.js
  process.exit(0);
});
