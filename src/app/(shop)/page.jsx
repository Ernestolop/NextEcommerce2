import { Title } from '@/components';
import { ProductsGrid } from '@/components';
import { initialData } from '@/seed/seed';
import { getPaginatedProductsWithImages } from '@/actions';

//const products = initialData.products;

export const metadata = {
  title: 'Teslo Shop',
  description: 'Tienda de tesla',
}

const Shop = async () => {

  const { products } = await getPaginatedProductsWithImages();

  return (
    <div className="">
      <Title
        title="Tienda"
        subtitle="Todos los productos de Tesla"
      />
      <ProductsGrid products={products} />
    </div>
  )
}

export default Shop;