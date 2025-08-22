// src/app/catalog/page.tsx
import Link from 'next/link';
import { techData } from '@/data/catalog';

export default function CatalogPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/" className="btn-back">
          ← Назад на главную
        </Link>
        <h1 className="text-3xl font-bold mt-4">Вся наша техника</h1>
      </div>
      
      <div className="tech-cards-grid">
        {techData.map((item) => (
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
  );
}