import React, { useState, useEffect } from 'react';
import './Watchpage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const Watchpage = ({ formData }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (formData && (formData.text || formData.image)) {
      const newApplication = {
        id: applications.length + 1,
        text: formData.text,
        image: formData.image, // Объект File
        senderName: formData.senderName,
      };
      setApplications([...applications, newApplication]);
    }
  }, [formData]);

  return (
    <div>
      <Siteheader />
      <Spacecomponent />
      <div className="wconteiner">
        <span>Просмотр активных заявок</span>
        <div className="applications-list">
          {applications.map((app) => (
            <div key={app.id} className="application">
              <p>Заявка №{app.id}</p>
              <p>Отправитель: {app.senderName}</p>
              {/* Отображаем изображение, если оно есть */}
              {app.image && typeof app.image === 'object' ? (
                <img
                  src={URL.createObjectURL(app.image)} // Создаем временный URL
                  alt="Загруженное фото"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              ) : null}
              <p>{app.text}</p>
              <button onClick={() => console.log(`Обработать заявку №${app.id}`)}>
                Обработать
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchpage;