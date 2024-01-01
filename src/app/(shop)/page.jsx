import { Title } from '@/components';
import { ProductsGrid } from '@/components';
import { initialData } from '@/seed/seed';

const products = initialData.products;

export const metadata = {
  title: 'Teslo Shop',
  description: 'Tienda de tesla',
}

const Shop = () => {
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