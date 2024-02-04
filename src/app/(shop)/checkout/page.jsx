import Link from "next/link";
import Image from "next/image";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

const CheckoutPage = () => {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar Orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar Orden</span>
            <Link href="/cart" className="underline mb-5">
              Editar Carrito
            </Link>

            {
              productsInCart.map(product => (
                <div key={product.slug} className="flex mb-5">
                  <Image
                    style={{
                      width: 100,
                      height: 100
                    }}
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="mr-5 rounded"
                  />
                  <div className="">
                    <p>{product.title}</p>
                    <p>${product.price} X 3</p>
                    <p className="font-bold">Subtotal ${product.price * 3}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Dirección de Entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Ernesto López</p>
              <p>Calle 2 Casi Fidel Maiz</p>
              <p>Barrio Maria Auxiliadora</p>
              <p>Mariano Roque Alonso</p>
              <p>CP 1234</p>
              <p>123 123 123</p>
            </div>

            <div
              className="w-full h-0.5 rounded bg-gray-200 mb-10"
            />

            <h2 className="text-2xl mb-2">Resumen de Orden</h2>
            <div className="grid grid-cols-2">
              <span>Nro. Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$300</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$300</span>

              <span className="text-2xl mt-5">Total</span>
              <span className="text-right text-2xl mt-5">$300</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <Link href="/orders/123" className="flex btn-primary justify-center">
                Confirmar Orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default CheckoutPage;