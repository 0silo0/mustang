// src/app/page.tsx
import Link from 'next/link';
import { techData } from '@/data/catalog';
import Image from 'next/image';

export default function HomePage() {
  const featuredTech = techData.slice(0, 6);

  const techByCategory = techData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof techData>);

  // Получаем список категорий
  const categories = Object.keys(techByCategory);

  return (
    <main>
      <section className="about-section">
        <div className="about-container">
          <Link href="/">
            <Image 
              src="/images/logotip.png" 
              alt="Мустанг59" 
              width={160} 
              height={120} 
              priority
            />
          </Link>
          <h2 className="about-title">ООО «ТК Мустанг59»</h2>
          <p className="about-description">
            Надежный партнер в области аренды специализированной техники. 
            Мы предлагаем современный и исправно работающий автопарк для решения ваших задач.
          </p>
        </div>
      </section>

      <section className="seo-text-section">
        <div className="seo-text-container">
          <div className="seo-content">
            <h2>Аренда спецтехники в Перми и Пермском крае</h2>
            <p>
              <strong>ООО «ТК Мустанг59»</strong> предлагает полный спектр услуг по аренде специализированной техники в Перми и Пермском крае. 
              В нашем парке современная и надежная техника: экскаваторы, погрузчики, манипуляторы, самосвалы и другая строительная техника.
            </p>
            
            <h3>Почему выбирают нашу спецтехнику в Перми?</h3>
            <ul>
              <li>Большой выбор техники – от мини-экскаваторов до полноразмерных самосвалов</li>
              <li>Работаем с юридическими и физическими лицами</li>
              <li>Техника с опытными водителями и операторами</li>
              <li>Конкурентные цены на аренду спецтехники</li>
              <li>Работаем по всему Пермскому краю: Березники, Соликамск, Кунгур, Лысьва, Чусовой</li>
            </ul>
            
            <p>
              Нужна <strong>аренда спецтехники</strong> для строительства, грузоперевозок или других задач? 
              Звоните нам – поможем подобрать оптимальный вариант техники для ваших нужд!
            </p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="categories-container">
          <h2 className="section-title">Категории техники</h2>
          <div className="simple-categories-list">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/catalog/category/${category}`}
                className="category-link"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Аренда спецтехники в Перми и Пермском крае | ООО ТК Мустанг59</h1>
          <p className="hero-subtitle">Надежная техника для вашего строительства</p>
          <div className="text-center">
            <Link href="/catalog" className="btn btn-primary">
              Смотреть каталог
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}