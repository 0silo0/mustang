'use client';

import Image from 'next/image';
import advantagesData from '@/data/advantages.json';

export default function Advantages() {
  return (
    <section className="advantages-section">
      <div className="advantages-container">
        {/* Заголовок */}
        <div className="advantages-header">
          <h2 className="advantages-title">{advantagesData.title}</h2>
        </div>

        {/* Сетка преимуществ */}
        <div className="advantages-grid">
          {advantagesData.advantages.map((advantage) => (
            <div key={advantage.id} className="advantage-card">
              {/* Выезжающая иконка */}
              <div className="advantage-icon">
                <Image
                  src={advantage.icon}
                  alt={advantage.title}
                  width={80}
                  height={80}
                  className="icon-image"
                />
              </div>

              {/* Контент карточки */}
              <div className="advantage-content">
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}