'use client'

import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: [],

    addProductToCart: product => {
        const { cart } = get();

        const productInCart = cart.some(
            item => (item.id === product.id && item.size === product.size)
        )

        if (!productInCart) {
            set({
                cart: [...cart, product]
            })
            return;
        }

        const updateCartProducts = cart.map(item => {
            if (item.id === product.id && item.size === product.size) {
                return {
                    ...item,
                    quantity: item.quantity + product.quantity
                }
            }
            return item;
        })

        set({
            cart: updateCartProducts
        })
    }
}))