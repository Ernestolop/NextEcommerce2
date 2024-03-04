'use client';

import { useState } from 'react';
import { QuantitySelector, SizeSelector } from "@/components";

const AddToCart = ({ product }) => {

    const [size, setSize] = useState();

    return (
        <>

            <SizeSelector
                selectedSize={size}
                avaibleSizes={product.sizes}
                onSizeChange={setSize}
            />

            <QuantitySelector
                quantity={3}
            />

            <button className="btn-primary my-5">Agregar al carrito</button>
        </>
    )
}

export default AddToCart;