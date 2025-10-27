// components/Home/SwiperSection.tsx
'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: '/images/slider/slider1.jpg',
    title: 'Аренда спецтехники в Перми',
    description: 'Экскаваторы, погрузчики, краны, манипуляторы',
    buttonText: 'Оставить заявку',
    linkText: 'Подробнее'
  },
  {
    id: 2,
    image: '/images/slider/slider2.jpg',
    title: 'Строительная техника',
    description: 'Для любых строительных работ',
    buttonText: 'Оставить заявку',
    linkText: 'Подробнее'
  }
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  
  return (
    <>
      <button 
        className="swiper-nav swiper-nav-prev"
        onClick={() => swiper.slidePrev()}
        aria-label="Предыдущий слайд"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button 
        className="swiper-nav swiper-nav-next"
        onClick={() => swiper.slideNext()}
        aria-label="Следующий слайд"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </>
  );
};

export default function SwiperSection() {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="swiper-section">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        spaceBetween={0}
        slidesPerView={1}
        //navigation
        // pagination={{ 
        //   clickable: true,
        //   renderBullet: (index, className) => {
        //     return `<span class="${className}">${index + 1}</span>`;
        //   }
        // }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="main-swiper"
      >
        <SwiperNavButtons />

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="swiper-slide-background"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="swiper-slide-overlay">
                <div className="container">
                  <div className="swiper-content">
                    <h1 className="swiper-title" data-swiper-parallax="-300">
                      {slide.title}
                    </h1>
                    <p className="swiper-description" data-swiper-parallax="-200">
                      {slide.description}
                    </p>
                    <div className="swiper-buttons" data-swiper-parallax="-100">
                      <Link href="/contact" className="btn btn-primary btn-large">
                        {slide.buttonText}
                      </Link>
                      <Link href="/services" className="btn btn-secondary btn-large">
                        {slide.linkText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
{/*         
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </section>
  );
}