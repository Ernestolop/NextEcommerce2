import { titleFont } from "@/config/fonts";

export const metadata = {
  title: 'Ecommerce - Shop',
  description: 'Tienda del ecommerce',
}

const Shop = () => {
  return (
    <div className="">
      <h1>Hello World!!</h1>
      <h1 className={titleFont.className}>Hello World!!</h1>
    </div>
  )
}

export default Shop;