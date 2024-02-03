'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

const ProductSlideshow = ({ images, title, className }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                autoplay={{ delay: 2500 }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image src={`/products/${image}`}
                                alt={title}
                                width={1024}
                                height={800}
                                className='rounded-lg object-contain'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image src={`/products/${image}`}
                                alt={title}
                                width={300}
                                height={300}
                                className='rounded-lg object-cover'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default ProductSlideshow;