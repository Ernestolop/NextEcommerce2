'use client';

import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

const QuantitySelector = ({ quantity, onQuantityChange }) => {

    const handleQuantityChange = value => {
        if (quantity + value < 1) {
            return;
        }
        onQuantityChange(quantity + value);
    }

    return (
        <div className='flex'>
            <button
                onClick={() => handleQuantityChange(-1)}
            >
                <IoRemoveCircleOutline />
            </button>
            <span className='width-20 mx-3 px-5 bg-gray-100 text-center rounded'>
                {quantity}
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