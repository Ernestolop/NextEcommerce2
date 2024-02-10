'use client';
import { useEffect, useState } from "react";
import { getProductStockBySlug } from "@/actions/products/get-product-stock-by-slug";

const StockLabel = ({ slug }) => {

    const [stock, setStock] = useState(0);
    const [loding, setLoding] = useState(true);

    useEffect(() => {
        getStock()
    }, [])

    const getStock = async () => {
        const inStock = await getProductStockBySlug(slug);
        setStock(inStock);
        setLoding(false);
    }

    return (
        <>

            {loding ? (
                <div className='bg-gray-200 animate-pulse'>&nbsp;</div>
            ) : (
                <p className='text-lg mb-5 font-bold'>Stock: {stock}</p>
            )}
        </>
    )
}

export default StockLabel;