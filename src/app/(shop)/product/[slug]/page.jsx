export const revalidate = 60 * 60 * 24 * 7; // 1 week

import { notFound } from "next/navigation";
import { ProductSlideshow, ProductMobileSlideshow, StockLabel } from "@/components";
import AddToCart from './ui/AddToCart';
import { titleFont } from "@/config/fonts";
import { getProductBySlug } from "@/actions";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      title: product?.title,
      description: product?.description,
      // https://misitioweb.com/producto/image.jpg
      images: [
        `products/${product?.images[0]}`,
      ]
    },
  }
}

const Product = async ({ params }) => {

  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">

      <div className="col-span-1 md:col-span-2">
        {/* Mobile */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="md:hidden"
        />
        {/* Destokp */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      <div className="col-span-1 px-5">
        <StockLabel slug={product.slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-xl `}> {product.title} </h1>
        <p className="text-lg mb-5"> ${product.price} </p>

        <AddToCart
          product={product}
        />

        <h3 className="font-bold text-sm ">Descripción</h3>
        <p className="font-light"> {product.description} </p>
      </div>

    </div>
  )
}

export default Product