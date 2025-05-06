import { PrismaClient } from "../../generated/prisma";
import { withAccelerate } from '@prisma/extension-accelerate'


const prisma = new PrismaClient().$extends(withAccelerate());

export const getAllProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
}
