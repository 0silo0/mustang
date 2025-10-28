'use client';

import Image from 'next/image';

export default function WhyProfitable() {
  const benefits = [
    {
      id: 1,
      text: "Личный автопарк спецтехники и грузового транспорта",
      icon: "/images/profitable/1.jpg"
    },
    {
      id: 2,
      text: "Оперативная подача техники в день обращения",
      icon: "/images/profitable/2.jpg"
    },
    {
      id: 3,
      text: "Доступные цены, гибкая система скидок",
      icon: "/images/profitable/3.jpg"
    },
    {
      id: 4,
      text: "Квалифицированные специалисты с большим стажем",
      icon: "/images/profitable/4.jpg"
    },
    {
      id: 5,
      text: "Оплата за наличный и безналичный расчет с НДС/без НДС",
      icon: "/images/profitable/5.jpg"
    }
  ];

  return (
    <section className="why-profitable">
      <div className="why-profitable-container">
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-item">
              <div className="benefit-icon">
                {/* Можно добавить иконки позже */}
                <div className="icon-placeholder">
                  <Image
                      src={benefit.icon}
                      width={80}
                      height={80}
                      className="icon-image"
                      alt={''}
                  />
                </div>
              </div>
              <p className="benefit-text">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}