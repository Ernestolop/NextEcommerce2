'use server';

import prisma from "@/lib/prisma.mjs";

export const getPaginatedProductsWithImages = async ({ page = 1, take = 12 }) => {

    const maxTake = 12 * 5;

    if (isNaN(Number(page)) || page < 1) page = 1;
    if (isNaN(Number(take)) || take < 1) take = 12;
    if (take > maxTake) take = maxTake;

    take = Number(take);

    try {

        const products = await prisma.product.findMany({
            take,
            skip: (page - 1) * take,
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        });

        return {
            products: products.map(product => {
                return {
                    ...product,
                    images: product.ProductImage.map(image => image.url)
                }
            })
        };

    } catch (error) {
        throw new Error("No se pudieron obtener los productos con imágenes. Error: " + error);
    }

}