'use client';

import { useState } from 'react';
import { QuantitySelector, SizeSelector } from "@/components";

const AddToCart = ({ product }) => {

    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState(1);
    const [posted, setPosted] = useState(false)

    const addToCart = () => {
        setPosted(!posted);
        if (!size) return;
    }

    return (
        <>

            {
                (posted && !size) && (
                    <span className="mt-2 text-red-500">Debe seleccionar una talla*</span>
                )
            }

            <SizeSelector
                selectedSize={size}
                avaibleSizes={product.sizes}
                onSizeChange={setSize}
            />

            <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
            />

            <button
                className="btn-primary my-5"
                onClick={addToCart}
            >
                Agregar al carrito
            </button>
        </>
    )
}

export default AddToCart;