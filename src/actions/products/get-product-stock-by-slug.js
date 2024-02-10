'use server';
export const getProductStockBySlug = async slug => {

    try {
        const stock = await prisma.product.findFirst({
            select: {
                inStock: true
            },
            where: {
                slug
            }
        })

        return stock?.inStock ?? 0;
    } catch (error) {
        throw new Error("No se pudo obtener el stock del producto por el slug. Error: " + error)
    }

}