import { notFound } from "next/navigation";
import { ProductSlideshow, ProductMobileSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";

const Product = ({ params }) => {
  const { slug } = params;
  const product = initialData.products.find(product => product.slug === slug);
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
        <h1 className={`${titleFont.className} antialiased font-bold text-xl `}> {product.title} </h1>
        <p className="text-lg mb-5"> ${product.price} </p>

        <SizeSelector
          selectedSize={product.sizes[0]}
          avaibleSizes={product.sizes}
        />

        <QuantitySelector
          quantity={3}
        />

        <button className="btn-primary my-5">Agregar al carrito</button>

        <h3 className="font-bold text-sm ">Descripción</h3>
        <p className="font-light"> {product.description} </p>
      </div>
    </div>
  )
}

export default Product