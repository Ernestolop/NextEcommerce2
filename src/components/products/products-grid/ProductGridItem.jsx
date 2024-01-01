'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductGridItem = ({ product }) => {

    const [displayImage, setDisplayImage] = useState(product.images[0]);

    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={`/products/${displayImage}`}
                    width={500}
                    height={500}
                    alt={product.title}
                    className='w-full object-cover rounded'
                    onMouseEnter={() => setDisplayImage(product.images[1])}
                    onMouseLeave={() => setDisplayImage(product.images[0])}
                />
            </Link>
            <div className='p-4 flex flex-col'>
                <Link
                    href={`/product/${product.slug}`}
                    className='hover:text-blue-600'
                >
                    {product.title}
                </Link>
                <span className='font-bold'>${product.price}</span>
            </div>
        </div >
    )
}

export default ProductGridItem;