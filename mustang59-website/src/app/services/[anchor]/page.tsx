import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import servicesData from '@/data/services-data.json';
import equipmentDetails from '@/data/equipment-details.json';
import { PricingItem } from '../../types/equipment';
import UrgentOrder from '@/components/Home/UrgentOrder';

interface Props {
  params: Promise<{
    anchor: string;
  }>;
}

// Создаем тип для услуги из JSON
type ServiceFromJSON = {
  id: number;
  anchor: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  relatedEquipment: string[];
  features: string[];
  pricing?: PricingItem[];
  deliveryInfo?: string;
  customPricingNote?: string;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { anchor } = await params;
  
  // Явно указываем тип для service
  const service = (servicesData as unknown as { services: ServiceFromJSON[] })
    .services.find(item => item.anchor === anchor) as ServiceFromJSON | undefined;
  
  if (!service) {
    notFound();
  }

  // Функция для получения характеристик цены
  const getPriceDetails = (price: PricingItem) => {
    // Если есть специальные характеристики, используем их
    if (price.characteristics && price.characteristics.length > 0) {
      return (
        <div className="characteristics-block">
          {price.characteristics.map((char, index) => (
            <div key={index} className="characteristic-line">
              {char}
            </div>
          ))}
        </div>
      );
    }

    // Стандартная обработка для других моделей
    const details = [];
    if (price.height) details.push(`Высота: ${price.height}`);
    if (price.capacity) details.push(`Грузоподъемность: ${price.capacity}`);
    if (price.boomLength) details.push(`Длина стрелы: ${price.boomLength}`);
    
    if (details.length > 0) {
      return (
        <div className="characteristics-block">
          {details.map((detail, index) => (
            <div key={index} className="characteristic-line">
              {detail}
            </div>
          ))}
        </div>
      );
    }
    
    return "-";
  };

  const renderDescription = (text: string) => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let inNestedList = false;

    const pushCurrentList = () => {
      if (currentList.length > 0) {
        const mainItem = currentList[0];
        const nestedItems = currentList.slice(1);
        
        elements.push(
          <div key={elements.length} className="description-list-item">
            {mainItem}
            {nestedItems.length > 0 && (
              <div className="nested-list">
                {nestedItems.map((item, index) => (
                  <div key={index} className="nested-item">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        pushCurrentList();
        inNestedList = false;
        elements.push(<br key={elements.length} />);
        return;
      }
      
      // Обработка основных пунктов списка
      if (trimmedLine.startsWith('•')) {
        pushCurrentList();
        inNestedList = false;
        const content = trimmedLine.replace(/^•\s*/, '');
        currentList.push(content);
        return;
      }
      
      // Обработка подпунктов (начинаются с дефиса)
      if (trimmedLine.startsWith('-')) {
        inNestedList = true;
        const content = trimmedLine.replace(/^-\s*/, '');
        if (currentList.length > 0) {
          currentList.push(content);
        } else {
          // Если нет основного пункта, создаем его
          currentList.push(content);
        }
        return;
      }
      
      // Обычный параграф
      pushCurrentList();
      inNestedList = false;
      elements.push(<p key={elements.length}>{trimmedLine}</p>);
    });

    // Не забываем добавить последний список
    pushCurrentList();

    return elements;
  };

  // Получаем связанную технику
  const relatedEquipment = equipmentDetails.equipment.filter(item => 
    service.relatedEquipment.includes(item.anchor)
  );

  return (
    <main className="service-detail-page">
      <div className="container">
        {/* Хлебные крошки */}
        <nav className="breadcrumbs">
          <Link href="/" className="breadcrumb-link">Главная</Link>
          <span className="breadcrumb-separator">»</span>
          <Link href="/services" className="breadcrumb-link">Услуги</Link>
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-current">{service.name}</span>
        </nav>

        {/* Заголовок */}
        <h1 className="page-title">{service.name}</h1>

        {/* Краткое описание */}
        <div className="service-short-description">
          <p>{service.shortDescription}</p>
        </div>

        {/* Галерея изображений */}
        {service.images && service.images.length > 0 && (
          <section className="service-gallery">
            <div className="gallery-grid">
              {service.images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <Image
                    src={image}
                    alt={`${service.name} - фото ${index + 1}`}
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
        <section className="service-full-description">
          <h2>Об услуге</h2>
          <div className="description-content">
            {renderDescription(service.fullDescription)}
          </div>
        </section>

        {service.customPricingNote && (
          <section className="service-custom-pricing">
            <h2>Стоимость услуг</h2>
            <div className="custom-pricing-content">
              {renderDescription(service.customPricingNote)}
            </div>
          </section>
        )}

        {/* Таблица цен */}
        {service.pricing && service.pricing.length > 0 && (
          <section className="service-pricing">
            <h2>Стоимость услуг</h2>
            <div className="pricing-table-container">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Наименование услуг</th>
                    <th>Стоимость</th>
                    <th>Минимальный заказ</th>
                  </tr>
                </thead>
                <tbody>
                  {service.pricing.map((price, index) => (
                    <tr key={index}>
                      <td>{price.model}</td>
                      <td>{price.pricePerHour}</td>
                      <td>{price.minOrder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {service.deliveryInfo && (
          <section className="service-delivery">
            <h2>Доставка</h2>
            <div className="delivery-content">
              {renderDescription(service.deliveryInfo)}
            </div>
          </section>
        )}

        {/* Связанная техника */}
        {/* {relatedEquipment.length > 0 && (
          <section className="related-equipment">
            <h2>Техника для выполнения работ</h2>
            <div className="equipment-grid">
              {relatedEquipment.map((equipment) => (
                <Link 
                  key={equipment.id} 
                  href={`/catalog/${equipment.anchor}`}
                  className="equipment-card"
                >
                  <div className="equipment-image">
                    <Image
                      src={equipment.images[0]}
                      alt={equipment.name}
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="equipment-info">
                    <h3>{equipment.name}</h3>
                    <p>{equipment.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )} */}

        {/* Преимущества */}
        {service.features && service.features.length > 0 && (
          <section className="service-features">
            <h2>Преимущества</h2>
            <div className="features-list">
              {service.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-title">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <UrgentOrder />
      </div>
    </main>
  );
}