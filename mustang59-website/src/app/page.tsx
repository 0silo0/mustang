// src/app/page.tsx
import Link from 'next/link';
import { techData } from '@/data/catalog';

export default function HomePage() {
  const featuredTech = techData.slice(0, 6);

  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Аренда спецтехники в Перми</h1>
          <p className="hero-subtitle">Надежная техника для вашего строительства</p>
          <div className="text-center">
            <Link href="/catalog" className="btn btn-primary">
              Смотреть каталог
            </Link>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <div className="container">
          <h2 className="section-title">Наша техника</h2>
          <div className="tech-cards-grid"> {/* Заменили tech-grid-main на tech-cards-grid */}
            {featuredTech.map((item) => (
              <Link key={item.id} href={`/catalog/${item.slug}`} className="tech-card tech-card-image-type">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="tech-card-image"
                />
                <div className="tech-card-content">
                  <h3 className="tech-card-title">{item.title}</h3>
                  <p className="tech-card-category">{item.category}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/catalog" className="btn btn-primary">
              Вся техника
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2 className="about-title">ООО «ТК Мустанг59»</h2>
          <p className="about-description">
            Надежный партнер в области аренды специализированной техники. 
            Мы предлагаем современный и исправно работающий автопарк для решения ваших задач.
          </p>
        </div>
      </section>
    </main>
  );
}