import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import equipmentDetails from '@/data/equipment-details.json';
import basicEquipment from '@/data/special-equipment.json';
import { PricingItem } from '../../types/equipment';
import UrgentOrder from '@/components/Home/UrgentOrder';

interface Props {
  params: Promise<{
    anchor: string;
  }>;
}

export default async function EquipmentDetailPage({ params }: Props) {
  const { anchor } = await params;
  const equipment = equipmentDetails.equipment.find(item => item.anchor === anchor);
  
  if (!equipment) {
    notFound();
  }

  // Функция для получения характеристик цены
  const getPriceDetails = (price: PricingItem) => {
    const details = [];
    if (price.height) details.push(`Высота: ${price.height}`);
    if (price.capacity) details.push(`Грузоподъемность: ${price.capacity}`);
    if (price.boomLength) details.push(`Длина стрелы: ${price.boomLength}`);
    return details.join(', ');
  };

  return (
    <main className="equipment-detail-page">
      <div className="container">
        {/* Хлебные крошки */}
        <nav className="breadcrumbs">
          <Link href="/" className="breadcrumb-link">Главная</Link>
          <span className="breadcrumb-separator">»</span>
          <Link href="/catalog" className="breadcrumb-link">Каталог спецтехники</Link>
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-current">{equipment.name}</span>
        </nav>

        {/* Заголовок */}
        <h1 className="page-title">{equipment.name}</h1>

        {/* Краткое описание */}
        <div className="equipment-short-description">
          <p>{equipment.shortDescription}</p>
        </div>

        {/* Галерея изображений */}
        {equipment.images && equipment.images.length > 0 && (
          <section className="equipment-gallery">
            <div className="gallery-grid">
              {equipment.images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <Image
                    src={image}
                    alt={`${equipment.name} - фото ${index + 1}`}
                    width={400}
                    height={500}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Полное описание */}
        <section className="equipment-full-description">
          <h2>Услуги {equipment.name.toLowerCase()}</h2>
          <div className="description-content">
            {equipment.fullDescription.split('\n').map((paragraph, index) => (
              paragraph.trim() ? (
                paragraph.startsWith('•') ? (
                  <div key={index} className="description-list-item">
                    {paragraph}
                  </div>
                ) : (
                  <p key={index}>{paragraph}</p>
                )
              ) : (
                <br key={index} />
              )
            ))}
          </div>
        </section>

        {/* Характеристики */}
        {equipment.specifications && Object.keys(equipment.specifications).length > 0 && (
          <section className="equipment-specifications">
            <h2>Технические характеристики</h2>
            <div className="specs-grid">
              {Object.entries(equipment.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-name">{formatSpecName(key)}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Таблица цен */}
        {equipment.pricing && equipment.pricing.length > 0 && (
          <section className="equipment-pricing">
            <h2>Стоимость аренды</h2>
            <div className="pricing-table-container">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Модель</th>
                    <th>Характеристики</th>
                    <th>Стоимость, руб./час</th>
                    <th>Минимальный заказ</th>
                  </tr>
                </thead>
                <tbody>
                  {equipment.pricing.map((price, index) => (
                    <tr key={index}>
                      <td>{price.model}</td>
                      <td>{getPriceDetails(price)}</td>
                      <td>{price.pricePerHour}</td>
                      <td>{price.minOrder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Преимущества */}
        {equipment.features && equipment.features.length > 0 && (
          <section className="equipment-features">
            <h2>Преимущества аренды</h2>
            <div className="features-list">
              {equipment.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-title">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Кнопка заказа */}
        {/* <section className="equipment-order">
          <div className="order-cta">
            <h3>Заказать {equipment.name.toLowerCase()}</h3>
            <p>Свяжитесь с нами для уточнения деталей и оформления заказа</p>
            <Link href="/contacts" className="order-button">
              Заказать сейчас
            </Link>
          </div>
        </section> */}

        <UrgentOrder />
      </div>
    </main>
  );
}

// Вспомогательная функция для форматирования названий характеристик
function formatSpecName(key: string): string {
  const specNames: { [key: string]: string } = {
    workingHeight: "Рабочая высота",
    loadCapacity: "Грузоподъемность", 
    boomType: "Тип стрелы",
    control: "Управление",
    liftingCapacity: "Грузоподъемность",
    boomLength: "Длина стрелы",
    type: "Тип",
    enginePower: "Мощность двигателя",
    weight: "Вес",
    dimensions: "Габариты"
  };
  
  return specNames[key] || key;
}