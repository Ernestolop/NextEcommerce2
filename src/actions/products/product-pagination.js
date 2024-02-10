'use server';

import prisma from "@/lib/prisma.mjs";

export const getPaginatedProductsWithImages = async () => {

    try {

        const products = await prisma.product.findMany({
            take: 10,
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