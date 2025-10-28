'use client';

import { useState } from 'react';
import Image from 'next/image';
import equipmentData from '@/data/special-equipment.json';
import Link from 'next/link';

export default function SpecialEquipmentCatalog() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="equipment-catalog">
      <div className="equipment-container">
        {/* Заголовок и описание */}
        <div className="equipment-header">
          <h2 className="equipment-title">{equipmentData.title}</h2>
          <p className="equipment-description">{equipmentData.description}</p>
        </div>

        {/* Сетка карточек */}
        <div className="equipment-grid">
          {equipmentData.equipment.map((item) => (
            <Link
              key={item.id}
              href={`/catalog/${item.anchor}`}
              className="equipment-card"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ textDecoration: 'none' }}
            >
              {/* Картинка техники */}
              <div className="card-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={110}
                  height={70}
                  className="equipment-image"
                />
              </div>

              {/* Градиентный оверлей */}
              <div className="card-gradient" />

              {/* Название техники */}
              <h3 className="card-title">{item.name}</h3>

              {/* Желтая полоска */}
              <div 
                className={`card-strip ${hoveredCard === item.id ? 'card-strip-hover' : ''}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}