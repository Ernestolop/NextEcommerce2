import { Title } from '@/components';

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
    </div>
  )
}

export default Shop;