-- CreateTable
CREATE TABLE "gudang_mymatcha" (
    "kode_barang" CHAR(5) NOT NULL,
    "nama_barang" VARCHAR(50) NOT NULL,
    "harga_barang" INTEGER NOT NULL,
    "stok_barang" INTEGER NOT NULL,

    CONSTRAINT "barang_pkey" PRIMARY KEY ("kode_barang")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
