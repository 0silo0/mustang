'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.classList.remove('menu-open');
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Блокировка скролла на touch устройствах
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (isMenuOpen) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Верхняя линия */}
        <div className="header-topline">
          <div className="topline-content">
            <div className="topline-left"></div>
            <div className="topline-right">
              <span className="topline-email">info@mustang59.ru</span>
              <span className="topline-hours">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
            </div>
          </div>
        </div>

        {/* Основная линия */}
        <div className="header-mainline">
          <div className="mainline-content">
            {/* Левый блок - логотип и название */}
            <div className="mainline-left">
              <Link href="/" className="logo-link">
                <Image 
                  src="/images/logotip.png" 
                  alt="Мустанг59" 
                  width={120} 
                  height={120} 
                  className="logo-image"
                  priority
                />
              </Link>
              <div className="company-name">
                <h1 className="company-title">Мустанг59</h1>
                <p className="company-slogan">Профессиональный поставщик услуг транспортировки</p>
              </div>
            </div>

            {/* Правый блок - контакты */}
            <div className="mainline-right">
              <div className="contact-phone">
                <span className="phone-number">+7 (123) 456-78-90</span>
                <span className="phone-label">Бесплатная консультация</span>
              </div>
              <div className="contact-form">
                <input 
                  type="tel" 
                  placeholder="Введите ваш телефон" 
                  className="phone-input"
                />
                <button className="call-button">Позвонить мне</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Меню */}
      <nav className="main-menu">
        <div className="menu-container">
          <div className="menu-content">
            <Link href="/services" className="menu-link">О компании</Link>
            <Link href="/catalog" className="menu-link">Каталог запчастей</Link>
            <Link href="/about" className="menu-link">О компании</Link>
            <Link href="/reviews" className="menu-link">Отзывы</Link>
            <Link href="/contacts" className="menu-link">Контакты</Link>
            <Link href="/promotions" className="menu-link">Акции</Link>
          </div>
        </div>
      </nav>

      {/* Оверлей для мобильного меню */}
      <div 
        className="mobile-menu-overlay" 
        data-open={isMenuOpen}
        onClick={closeMenu}
      />
    </header>
  );
}