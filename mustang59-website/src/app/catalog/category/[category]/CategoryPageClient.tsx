"use client";

import { techData } from '@/data/catalog';
import Link from 'next/link';
import { useState, useMemo } from 'react';

interface CategoryPageClientProps {
  categoryName: string;
}

export default function CategoryPageClient({ categoryName }: CategoryPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categoryTech = useMemo(() => {
    return techData.filter((item) => item.category === categoryName);
  }, [categoryName]);

  const filteredTech = useMemo(() => {
    if (!searchQuery) return categoryTech;
    
    return categoryTech.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [categoryTech, searchQuery]);

  return (
    <div className="catalog-page">
      <div className="container py-8">
        <div className="mb-8">
          <Link href="/catalog" className="btn-back">
            ← Назад в каталог
          </Link>
          <h1 className="page-title mt-4">{categoryName}</h1>
          
          {/* Поле поиска */}
          <div className="search-container mt-6 relative max-w-md">
            <input
              type="text"
              placeholder="Поиск в категории..."
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
              Найдено {filteredTech.length} из {categoryTech.length} единиц техники
            </p>
          )}
        </div>

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
                  <div className="mt-4">
                    <span className="btn btn-secondary">Подробнее</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              {searchQuery 
                ? "Техника по вашему запросу не найдена" 
                : "В этой категории пока нет техники"
              }
            </p>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 btn btn-primary"
              >
                Сбросить поиск
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}