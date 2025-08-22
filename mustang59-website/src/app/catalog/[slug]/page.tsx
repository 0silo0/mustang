import { notFound } from 'next/navigation';
import { techData } from '@/data/catalog';
import Link from 'next/link';

export async function generateStaticParams() {
  return techData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const techItem = techData.find((item) => item.slug === slug);
  
  if (!techItem) notFound();
  
  return {
    title: `${techItem.title} | Мустанг59`,
    description: techItem.description,
  };
}

export default async function TechItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const techItem = techData.find((item) => item.slug === slug);

  if (!techItem) {
    notFound();
  }

  return (
    <div className="tech-page container">
      <Link href="/catalog" className="btn-back">
        ← Назад к каталогу
      </Link>
      
      <div className="tech-grid">
        <div>
          <img 
            src={techItem.image} 
            alt={techItem.title} 
            className="tech-image"
          />
        </div>
        
        <div className="tech-details">
          <h1>{techItem.title}</h1>
          <p className="tech-category">Категория: {techItem.category}</p>
          <p className="tech-description">{techItem.description}</p>
          
          <div className="tech-cards-grid">
            <div className="tech-card">
              <div className="tech-card-header">
                <div className="tech-card-icon">⚙️</div>
                <h3 className="tech-card-title">Характеристики</h3>
              </div>
              <ul className="tech-card-list">
                {techItem.characteristics.map((char, index) => (
                  <li key={index} className="tech-card-item">{char}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="contact-buttons">
            <a 
              href={`https://wa.me/79048474909?text=Интересует ${encodeURIComponent(techItem.title)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-btn"
            >
              Написать в WhatsApp
            </a>
            <a 
              href={`https://t.me/79048474909`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="telegram-btn"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}