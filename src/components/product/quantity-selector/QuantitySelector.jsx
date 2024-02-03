'use client';

import { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

const QuantitySelector = ({ quantity }) => {

    const [count, setCount] = useState(quantity);

    const handleQuantityChange = value => {
        if (count + value < 1) {
            return;
        }
        setCount(count + value);
    }

    return (
        <div className='flex'>
            <button
                onClick={() => handleQuantityChange(-1)}
            >
                <IoRemoveCircleOutline />
            </button>
            <span className='width-20 mx-3 px-5 bg-gray-100 text-center rounded'>
                {count}
            </span>
            <button
                onClick={() => handleQuantityChange(1)}
            >
                <IoAddCircleOutline />
            </button>
        </div>
    )
}

export default QuantitySelector;