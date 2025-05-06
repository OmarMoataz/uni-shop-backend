/*
  Warnings:

  - Added the required column `originalPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salePrice` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "originalPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "salePrice" DECIMAL(65,30) NOT NULL;
