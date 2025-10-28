'use client';

import { useState } from 'react';
import Image from 'next/image';
import servicesData from '@/data/services.json';
import Link from 'next/link';

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Заголовок и описание */}
        <div className="services-header">
          <h2 className="services-title">{servicesData.title}</h2>
          <p className="services-description">{servicesData.description}</p>
        </div>

        {/* Сетка услуг */}
        <div className="services-grid">
          {servicesData.services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.anchor}`}
              className={`service-card service-${service.size} ${
                activeService === service.id ? 'service-active' : ''
              }`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              style={{ textDecoration: 'none' }}
            >
              <div className="service-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="image"
                  style={{ objectFit: 'cover' }}
                />
                <div className="service-overlay" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}