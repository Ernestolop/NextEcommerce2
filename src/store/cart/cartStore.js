'use client'

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(

    persist(
        (set, get) => ({
            cart: [],

            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce((total, item) => total + item.quantity, 0);
            },

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
            },

            updateProductQuantity: (productToUpdate, newQuantity) => {
                const { cart } = get();

                if (newQuantity < 1) return;

                const updateCartProducts = cart.map(item => {
                    if (item.id === productToUpdate.id && item.size === productToUpdate.size) {
                        return {
                            ...item,
                            quantity: newQuantity
                        }
                    }
                    return item;
                })

                set({
                    cart: updateCartProducts
                })
            },

            removeProduct: (productToRemove) => {
                const { cart } = get();

                const updateCartProducts = cart.filter(item => (item.id !== productToRemove.id || item.size !== productToRemove.size))

                set({
                    cart: updateCartProducts
                })
            },

        }),
        {
            name: 'shopping-cart'
        }
    )
)