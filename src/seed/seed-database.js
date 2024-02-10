import prisma from '../lib/prisma.mjs/index.js'
import { initialData } from './seed.js';

const main = async () => {

    //1- Borrar registros previos
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany()
    ]);

    const { categories, products } = initialData;

    //Categoria
    const categoriesData = categories.map(name => ({ name }));
    await prisma.category.createMany({ data: categoriesData });

    const categoriesDB = await prisma.category.findMany();
    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name] = category.id;
        return map;
    }, {});

    //Productos
    products.forEach(async product => {
        const { images, type, ...productData } = product;
        const categoryId = categoriesMap[type];

        const productDb = await prisma.product.create({
            data: {
                ...productData,
                categoryId
            }
        });

        //Imagenes
        const imagesData = images.map(url => ({
            url,
            productId: productDb.id
        }));

        await prisma.productImage.createMany({ data: imagesData });

    });


    console.log('Seed ejecutado con éxito');

}

(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();