'use client'

import Link from 'next/link';
import clsx from 'clsx';
import { IoCloseOutline, IoSearchOutline, IoPersonOutline, IoTicketOutline, IoLogInOutline, IoLogOutOutline, IoShirtOutline, IoPeopleOutline } from 'react-icons/io5';
import { useUiStore } from '@/store';

const Sidebar = () => {

    const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen);
    const closeMenu = useUiStore(state => state.closeSideMenu);

    return (
        <div>

            {
                isSideMenuOpen &&
                (
                    <>
                        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
                        <div onClick={closeMenu} className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>
                    </>
                )
            }


            <nav className={
                clsx(
                    'fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
                    {
                        'translate-x-full': !isSideMenuOpen,
                    }
                )
            }>
                <IoCloseOutline
                    size={40}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={closeMenu}
                />
                <div className='relative mt-14'>
                    <IoSearchOutline size={20} className='absolute top-2 left-2' />
                    <input
                        type="search"
                        placeholder='Buscar'
                        className='w-full bg-gray-50 pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 rounded'
                    />
                    <Link
                        href="/"
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        <IoPersonOutline size={30} />
                        <span className='ml-3 text-xl'>Perfil</span>
                    </Link>
                    <Link
                        href="/"
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        <IoTicketOutline size={30} />
                        <span className='ml-3 text-xl'>Ordenes</span>
                    </Link>
                    <Link
                        href="/"
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        <IoLogInOutline size={30} />
                        <span className='ml-3 text-xl'>Ingresar</span>
                    </Link>
                    <Link
                        href="/"
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        <IoLogOutOutline size={30} />
                        <span className='ml-3 text-xl'>Salir</span>
                    </Link>
                    <div className='w-full h-px bg-gray-200 my-10'></div>
                    <Link
                        href="/"
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        <IoShirtOutline size={30} />
                        <span className='ml-3 text-xl'>Productos</span>
                    </Link>
                    <Link
                        href="/"
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        <IoTicketOutline size={30} />
                        <span className='ml-3 text-xl'>Ordenes</span>
                    </Link>
                    <Link
                        href="/"
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    >
                        <IoPeopleOutline size={30} />
                        <span className='ml-3 text-xl'>Usuarios</span>
                    </Link>
                </div>
            </nav>

        </div>
    )
}

export default Sidebar;