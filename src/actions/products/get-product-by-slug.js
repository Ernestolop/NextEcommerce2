'use server';

import prisma from "@/lib/prisma.mjs";

export const getProductBySlug = async (slug) => {

    try {
        const product = await prisma.product.findFirst({
            include: {
                ProductImage: {
                    select: {
                        url: true
                    }
                }
            },
            where: {
                slug
            }
        })

        if (!product) return null;


        return {
            ...product,
            images: product.ProductImage.map(image => image.url)
        }

    } catch (error) {
        throw new Error("No se pudo obtener el producto por el slug. Error: " + error)
    }

}