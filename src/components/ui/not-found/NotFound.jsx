import Link from 'next/link'
import Image from 'next/image'
import { titleFont } from '@/config/fonts'

const NotFound = () => {
    return (
        <div className='flex flex-col md:flex-row h-[800px] w-full justify-center items-center align-middle'>

            <div className="text-center px-5 mx-5">
                <h1 className={`${titleFont.className} antialiased text-9xl `}>404</h1>
                <p className='font-semibold text-xl'>Ops! Lo sentimos mucho</p>
                <p className="font-light">
                    <span>Puedes regresar al </span>
                    <Link href="/" className='font-normal hover:underline transition-all'>Inicio</Link>
                </p>
            </div>

            <div className='px-5 mx-5'>
                <Image
                    src="/imgs/starman_750x750.png"
                    alt='Starman'
                    className='p-5 sm:p-0'
                    width={550}
                    height={550}
                />
            </div>

        </div>
    )
}

export default NotFound;