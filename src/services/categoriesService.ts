import { PrismaClient } from "../../generated/prisma";
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate());

export const getAllCategories = async () => {
    const categories = await prisma.category.findMany();
    return categories;
}