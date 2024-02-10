import { redirect } from 'next/navigation';
import { ProductsGrid, Pagination, Title } from '@/components';
import { getPaginatedProductsWithImages } from '@/actions';

export const metadata = {
  title: 'Teslo Shop',
  description: 'Tienda de tesla',
}

const Shop = async ({ searchParams }) => {

  const { page, take } = searchParams

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page, take });

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
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

export default Shop;