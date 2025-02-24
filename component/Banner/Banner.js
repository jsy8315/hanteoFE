'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { usePathname } from 'next/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../Banner/Banner.module.css";
import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 1,
    imgSrc: '/banner-images/hanteochart.png',
    alt: '배너1',
    link: 'https://www.hanteochart.com/',
  },
  {
    id: 2,
    imgSrc: '/banner-images/hanteonews.png',
    alt: '배너2',
    link: 'https://hanteonews.com/',
  },
  {
    id: 3,
    imgSrc: '/banner-images/hanteowhosfan.png',
    alt: '배너3',
    link: 'https://whosfan.io/',
  },
];

export default function Banner() {
  const pathname = usePathname();
  const tabRoutes = ['/chart', '/music', '/culture', '/fans', '/photo'];

  if (tabRoutes.includes(pathname)) {
    return null; // 탭 페이지에서는 배너 숨김
  }

  return (
    <div className="banner">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
        className="banner-element"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link href={banner.link} target="_blank">
              <div className="image-container">
                <Image
                  src={banner.imgSrc}
                  alt={`Banner ${banner.id}`}
                  width={1024}   
                  height={576}   
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  style={{ width: '100%', height: 'auto' }}
                  priority={banner.id === 1}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

