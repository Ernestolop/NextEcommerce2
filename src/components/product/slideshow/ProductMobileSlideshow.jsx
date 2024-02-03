'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import './slideshow.css';

// import required modules
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';

const ProductMobileSlideshow = ({ images, title, className }) => {

    return (
        <div className={className}>
            <Swiper
                style={{
                    width: '100vw',
                    height: '500px',
                }}
                autoplay={{ delay: 2500 }}
                pagination={true}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper2"
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image src={`/products/${image}`}
                                alt={title}
                                width={600}
                                height={500}
                                className='object-cover'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default ProductMobileSlideshow;