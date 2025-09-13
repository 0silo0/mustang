"use client";

import Link from 'next/link';
import { techData } from '@/data/catalog';
import { useState, useEffect, useMemo } from 'react';

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Группировка техники по категориям
  const { filteredTech, groupedTech } = useMemo(() => {
    if (searchQuery) {
      const filtered = techData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { filteredTech: filtered, groupedTech: null };
    }

    // Группируем только если нет поискового запроса
    const grouped = techData.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, typeof techData>);

    return { filteredTech: [], groupedTech: grouped };
  }, [searchQuery]);

  // Отслеживание прокрутки
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="catalog-page">
      <div className="container py-8">
        <div className="mb-8">
          <Link href="/" className="btn-back">
            ← Назад на главную
          </Link>
          <h1 className="text-3xl font-bold mt-4">Вся наша техника</h1>
          
          {/* Поле поиска */}
          <div className="search-container mt-6 relative max-w-md">
            <input
              type="text"
              placeholder="Поиск техники..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
              >
                ✕
              </button>
            )}
          </div>

          {/* Информация о результатах поиска */}
          {searchQuery && (
            <p className="mt-4 text-gray-400">
              Найдено {filteredTech.length} из {techData.length} единиц техники
            </p>
          )}
        </div>
        
        {/* Режим поиска */}
        {searchQuery && (
          <>
            {filteredTech.length > 0 ? (
              <div className="tech-cards-grid">
                {filteredTech.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`/catalog/${item.slug}`} 
                    className="tech-card tech-card-image-type"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="tech-card-image"
                    />
                    <div className="tech-card-content">
                      <h3 className="tech-card-title">{item.title}</h3>
                      <p className="tech-card-category">{item.category}</p>
                      <div className="mt-4">
                        <span className="btn btn-secondary">Подробнее</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400">Техника по вашему запросу не найдена</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 btn btn-primary"
                >
                  Сбросить поиск
                </button>
              </div>
            )}
          </>
        )}
        
        {/* Режим категорий (когда нет поиска) */}
        {!searchQuery && groupedTech && (
          <div className="space-y-12">
            {Object.entries(groupedTech).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">{category}</h2>
                <div className="tech-cards-grid">
                  {items.map((item) => (
                    <Link 
                      key={item.id} 
                      href={`/catalog/${item.slug}`} 
                      className="tech-card tech-card-image-type"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="tech-card-image"
                      />
                      <div className="tech-card-content">
                        <h3 className="tech-card-title">{item.title}</h3>
                        <p className="tech-card-category">{item.category}</p>
                        <div className="mt-4">
                          <span className="btn btn-secondary">Подробнее</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Кнопка прокрутки вверх */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Прокрутить наверх"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}