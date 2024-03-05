'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from "@/store";
import { QuantitySelector } from '@/components';

const ProductsInCart = () => {

    const [load, setLoad] = useState(true);
    const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
    const productsInCart = useCartStore(state => state.cart);

    useEffect(() => {
        setLoad(false);
    }, [])

    if (load) {
        return (
            <p>Cargando...</p>
        )
    }

    return (
        <div>
            {
                productsInCart.map(product => (
                    <div key={`${product.slug}-${product.size}`} className="flex mb-5">
                        <Image
                            style={{
                                width: 100,
                                height: 100
                            }}
                            src={`/products/${product.image}`}
                            alt={product.title}
                            width={100}
                            height={100}
                            className="mr-5 rounded"
                        />
                        <div>
                            <Link
                                href={`/product/${product.slug}`}
                                className="hover:underline cursor-pointer"
                            >{product.title} - {product.size}</Link>
                            <p>${product.price}</p>
                            <QuantitySelector
                                quantity={product.quantity}
                                onQuantityChange={quantity => updateProductQuantity(product, quantity)}
                            />
                            <button className="underline mt-3">
                                Remover
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsInCart;