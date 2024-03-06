'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';
import { useCartStore, useUiStore } from '@/store';

const TopMenu = ({titleFont}) => {

  const [loaded, setLoaded] = useState(false);
  const openMenu = useUiStore(state => state.openSideMenu);
  const totalItemsInCart = useCartStore(state => state.getTotalItems());

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <nav className="flex p-5 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`${titleFont} antialiased font-bold`}>Teslo</span>
          <span> | Shop</span>
        </Link>
      </div>

      <div className='hidden sm:block'>
        <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 ' href="/gender/men">Hombres</Link>
        <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 ' href="/gender/women">Mujeres</Link>
        <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 ' href="/gender/kid">Niños</Link>
      </div>

      <div className='flex items-center'>
        <Link href="/search" className='mx-2'>
          <IoSearchOutline className='w-5 h-5' />
        </Link>
        <Link href={
          (totalItemsInCart === 0 && loaded) ? "/cart/empty" : "/cart"
        } className='mx-2'>
          <div className="relative">
            {
              loaded && (
                <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>{totalItemsInCart}</span>
              )
            }
            <IoCartOutline className='w-5 h-5' />
          </div>
        </Link>
        <button
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
          onClick={openMenu}
        >
          Menú
        </button>
      </div>

    </nav>
  )
}

export default TopMenu;