import clsx from 'clsx'
import React from 'react'

const SizeSelector = ({ selectedSize, avaibleSizes, onSizeChange }) => {
    return (
        <div className='my-5'>
            <h3 className="font-bold mb-4">Tallas disponibles</h3>
            <div className="flex">
                {
                    avaibleSizes.map(size => (
                        <button
                            key={size}
                            onClick={() => onSizeChange(size)}
                            className={
                                clsx(
                                    "mx-2 hover:underline text-lg",
                                    {
                                        "underline": size === selectedSize
                                    }
                                )
                            }
                        >
                            {size}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default SizeSelector;