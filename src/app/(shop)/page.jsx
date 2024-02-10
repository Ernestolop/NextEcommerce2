import { redirect } from 'next/navigation';
import { Title } from '@/components';
import { ProductsGrid } from '@/components';
import { initialData } from '@/seed/seed';
import { getPaginatedProductsWithImages } from '@/actions';

//const products = initialData.products;

export const metadata = {
  title: 'Teslo Shop',
  description: 'Tienda de tesla',
}

const Shop = async ({ searchParams }) => {

  const { page, take } = searchParams

  const { products } = await getPaginatedProductsWithImages({ page, take });

  if (products.length === 0) {
    redirect('/');
  }

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