'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Логика для sticky хедера
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Активируем sticky когда хедер доходит до верха окна
        setIsSticky(scrollPosition > headerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { href: "/services", label: "О компании" },
    { href: "/catalog", label: "Каталог запчастей" },
    { href: "/about", label: "О компании" },
    { href: "/reviews", label: "Отзывы" },
    { href: "/contacts", label: "Контакты" },
    { href: "/promotions", label: "Акции" }
  ];

  return (
    <>
      {/* Весь хедер в одном блоке */}
      <div 
        ref={headerRef}
        className={`header-container ${isSticky ? 'sticky' : ''}`}
      >
        {/* Верхняя часть */}
        <div className="header-top-section">
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
                <Link href="/" className="logo-link" onClick={closeMenu}>
                  <Image 
                    src="/images/logotip.png" 
                    alt="Мустанг59" 
                    width={80} 
                    height={80} 
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

        {/* Меню - теперь часть основного хедера */}
        <nav className="main-menu">
          <div className="menu-container">
            {/* Десктопное меню - скрывается на мобилках */}
            <div className="menu-content">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} className="menu-link">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Бургер меню для мобильных - показывается только на мобилках */}
            <button 
              className="burger-menu"
              onClick={toggleMenu}
              data-open={isMenuOpen}
              aria-label="Открыть меню"
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Мобильное меню */}
      <div 
        className="mobile-menu-overlay" 
        data-open={isMenuOpen}
        onClick={closeMenu}
      />
      
      <nav 
        ref={mobileMenuRef}
        className="mobile-menu"
        data-open={isMenuOpen}
      >
        <div className="mobile-menu-header">
          <div className="mobile-menu-title">Меню</div>
          <button 
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Закрыть меню"
          >
            ×
          </button>
        </div>
        <div className="mobile-menu-content">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="mobile-menu-link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}