// components/OrderModal.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';

interface Equipment {
  id: number;
  name: string;
  image: string;
  anchor: string;
  shortName: string;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  equipment: Equipment[];
}

export default function OrderModal({ isOpen, onClose, equipment }: OrderModalProps) {
  const [selectedEquipment, setSelectedEquipment] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Инициализация EmailJS
  useEffect(() => {
    emailjs.init("G_6JYlw5eNyH6wVeV"); // Замените на ваш Public Key из EmailJS
  }, []);

  // Блокировка скролла body при открытии модалки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleEquipmentToggle = (id: number) => {
    setSelectedEquipment(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!formData.agreed || selectedEquipment.length === 0) return;

  setIsSubmitting(true);

  const selectedEquipmentData = selectedEquipment.map(id => 
    equipment.find(item => item.id === id)
  ).filter(Boolean) as Equipment[];

  try {
    // Создаем HTML для списка техники
    const equipmentItemsHTML = selectedEquipmentData.map(item => `
      <div class="equipment-item">
        <strong>${item.shortName}</strong><br>
        <a href="https://mustang-ivory.vercel.app/catalog/${item.anchor}" class="link">
          📋 ${item.name}
        </a>
      </div>
    `).join('');

    // Полный HTML шаблон письма
    const emailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <style>
              body { 
                  font-family: Arial, sans-serif; 
                  line-height: 1.6; 
                  color: #333; 
                  max-width: 600px; 
                  margin: 0 auto; 
                  padding: 20px;
              }
              .header { 
                  color: #d4af37; 
                  border-bottom: 2px solid #d4af37; 
                  padding-bottom: 15px; 
                  margin-bottom: 25px;
              }
              .section { 
                  background: #f8f9fa; 
                  padding: 20px; 
                  border-radius: 8px; 
                  margin: 20px 0; 
                  border-left: 4px solid #d4af37;
              }
              .equipment-section { 
                  background: #fff3cd; 
                  border-left: 4px solid #ffc107;
              }
              .equipment-item { 
                  background: white; 
                  padding: 10px; 
                  margin: 8px 0; 
                  border-radius: 6px; 
                  border: 1px solid #e9ecef;
              }
              .link { 
                  color: #d4af37; 
                  text-decoration: none; 
                  font-weight: bold;
              }
              .footer { 
                  margin-top: 30px; 
                  padding-top: 20px; 
                  border-top: 1px solid #ddd; 
                  color: #666; 
                  font-size: 14px;
              }
              h2, h3 { 
                  margin-top: 0; 
              }
              strong { 
                  color: #2c3e50;
              }
          </style>
      </head>
      <body>
          <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🚜 Новая заявка на спецтехнику</h1>
          </div>

          <div class="section">
              <h3>👤 Контактная информация</h3>
              <p><strong>ФИО:</strong> ${formData.fullName}</p>
              <p><strong>Телефон:</strong> ${formData.phone}</p>
              <p><strong>Дата заявки:</strong> ${new Date().toLocaleString('ru-RU')}</p>
          </div>

          <div class="section equipment-section">
              <h3>🏗️ Выбранная техника (${selectedEquipmentData.length} единиц)</h3>
              ${equipmentItemsHTML}
          </div>

          <div class="footer">
              <p><strong>Для быстрого доступа:</strong></p>
              <ul>
                  <li>Все ссылки ведут на детальные страницы техники</li>
                  <li>Клиент ожидает обратной связи по телефону: ${formData.phone}</li>
                  <li>Количество выбранной техники: ${selectedEquipmentData.length} единиц</li>
              </ul>
          </div>
      </body>
      </html>
    `;

    const templateParams = {
      to_email: 'nikita2003v33@gmail.com',
      client_name: formData.fullName,
      client_phone: formData.phone,
      equipment_count: selectedEquipmentData.length,
      equipment_list: selectedEquipmentData.map(item => item.shortName).join(', '),
      time: new Date().toLocaleString('ru-RU'),
      message: emailHTML, // Отправляем готовый HTML
      name: formData.fullName
    };

    console.log('📤 Отправка данных:', templateParams);

    await emailjs.send(
      'service_0vsnehi',
      'template_8gosimv',  
      templateParams
    );
    
    alert('✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
    handleClose();
  } catch (error) {
    console.error('❌ Ошибка отправки:', error);
    alert('❌ Произошла ошибка. Пожалуйста, попробуйте еще раз или свяжитесь по телефону.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleClose = () => {
    setSelectedEquipment([]);
    setFormData({ fullName: '', phone: '', agreed: false });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="order-modal-overlay">
      <div className="order-modal-content">
        {/* Шапка */}
        <div className="order-modal-header">
          <h2 className="order-modal-title">Заказ спецтехники</h2>
          <button 
            className="order-modal-close" 
            onClick={handleClose}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="order-modal-form">
          {/* Секция 1: Выбор техники */}
          <div className="order-form-section">
            <h3 className="order-section-title">1. Выберите технику</h3>
            <p className="order-section-subtitle">Отметьте нужную технику (можно выбрать несколько)</p>
            <div className="order-equipment-grid">
              {equipment.map(item => (
                <div 
                  key={item.id}
                  className={`order-equipment-card ${selectedEquipment.includes(item.id) ? 'order-equipment-selected' : ''}`}
                  onClick={() => handleEquipmentToggle(item.id)}
                >
                  <div className="order-equipment-checkbox">
                    <input
                      type="checkbox"
                      style={{ display: 'none' }}
                      checked={selectedEquipment.includes(item.id)}
                      onChange={() => {}}
                    />
                  </div>
                  <div className="order-equipment-image">
                    <img src={item.image} alt={item.shortName} />
                  </div>
                  <div className="order-equipment-name">{item.shortName}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Секция 2: Контактная информация */}
          <div className="order-form-section">
            <h3 className="order-section-title">2. Контактная информация</h3>
            <div className="order-form-fields">
              <div className="order-form-field">
                <label htmlFor="fullName" className="order-form-label">ФИО *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="order-form-input"
                  placeholder="Иванов Иван Иванович"
                />
              </div>
              <div className="order-form-field">
                <label htmlFor="phone" className="order-form-label">Телефон *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="order-form-input"
                  placeholder="+7 (999) 999-99-99"
                />
              </div>
            </div>
          </div>

          {/* Секция 3: Согласие */}
          <div className="order-form-section">
            <h3 className="order-section-title">3. Подтверждение</h3>
            <div className="order-agreement-section">
              <label className="order-checkbox-label">
                <input
                  name="agreed"
                  type="checkbox"
                  checked={formData.agreed}
                  onChange={handleInputChange}
                  className="order-checkbox-input"
                />
                <span className="order-checkbox-custom"></span>
                <span className="order-agreement-text">
                  Я ознакомлен с <Link href="/privacy" className="order-link">пользовательским соглашением</Link> *
                </span>
              </label>
            </div>
          </div>

          {/* Секция 4: Выбранная техника */}
          {selectedEquipment.length > 0 && (
            <div className="order-form-section">
              <h3 className="order-section-title">Выбранная техника</h3>
              <div className="order-selected-equipment">
                <div className="order-selected-list">
                  {selectedEquipment.map(id => {
                    const item = equipment.find(eq => eq.id === id);
                    return item ? (
                      <div key={item.id} className="order-selected-item">
                        <span className="order-selected-name">{item.shortName}</span>
                        <Link 
                          href={`/catalog/${item.anchor}`}
                          target="_blank"
                          className="order-equipment-link"
                          title="Посмотреть подробнее"
                        >
                          ↗
                        </Link>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Кнопки */}
          <div className="order-form-section">
            <div className="order-modal-actions">
              <button 
                type="button" 
                className="order-btn order-btn-secondary"
                onClick={handleClose}
              >
                Отмена
              </button>
              <button 
                type="submit" 
                className="order-btn order-btn-primary"
                disabled={!formData.agreed || selectedEquipment.length === 0 || isSubmitting}
              >
                {isSubmitting ? '📨 Отправка...' : '📨 Отправить заявку'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}