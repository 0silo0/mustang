'use client';

import { useState } from 'react';
import Image from 'next/image';
import workProcessData from '@/data/work-process.json';

export default function WorkProcess() {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  return (
    <section className="work-process-section">
      {/* Фон с эффектом параллакса */}
      <div className="work-process-bg"></div>
      
      <div className="work-process-container">
        {/* Заголовок и описание */}
        <div className="work-process-header">
          <h2 className="work-process-title">{workProcessData.title}</h2>
          <p className="work-process-description">{workProcessData.description}</p>
        </div>

        {/* Галерея фотографий */}
        <div className="work-process-grid">
          {workProcessData.photos.map((photo) => (
            <div
              key={photo.id}
              className={`work-process-photo work-process-${photo.size} ${
                hoveredPhoto === photo.id ? 'photo-hover' : ''
              }`}
              onMouseEnter={() => setHoveredPhoto(photo.id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <Image
                src={photo.image}
                alt={`Рабочий процесс ${photo.id}`}
                fill
                className="photo-image"
                style={{ objectFit: 'cover' }}
              />
              <div className="photo-overlay">
                <span className="photo-title">Рабочий процесс</span>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "Смотреть все фото" */}
        <div className="work-process-footer">
          <button className="view-all-button">
            Смотреть все фото
          </button>
        </div>
      </div>
    </section>
  );
}