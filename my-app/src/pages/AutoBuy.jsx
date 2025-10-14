import React, { useState, useEffect } from "react";
import { DEFAULT_GLOVES_ARR, DEFAULT_ITEMS_FE } from "../constants/marketData";
import { loadMarketData, saveMarketData } from "../utils/storage";
import GloveConfigCard from "../components/GloveConfigCard";
import SkinConfigCard from "../components/SkinConfigCard";
import "../AutoBuy.css";

export default function AutoBuy() {
  // Загружаем данные (из localStorage или дефолтные)
  const [marketData, setMarketData] = useState(() =>
    loadMarketData({ gloves: DEFAULT_GLOVES_ARR, itemsFE: DEFAULT_ITEMS_FE })
  );
  
  const [glovesData, setGlovesData] = useState(marketData.gloves);
  const [itemsFEData, setItemsFEData] = useState(marketData.itemsFE);
  const [glovesOrder, setGlovesOrder] = useState(marketData.glovesOrder || Object.keys(marketData.gloves));
  const [skinsOrder, setSkinsOrder] = useState(marketData.skinsOrder || Object.keys(marketData.itemsFE));
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

    // 🔹 Состояние для добавления нового скина
  const [newSkinName, setNewSkinName] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // Сохраняем изменения в localStorage
  useEffect(() => {
    saveMarketData({ 
      gloves: glovesData, 
      itemsFE: itemsFEData,
      glovesOrder: glovesOrder,
      skinsOrder: skinsOrder
    });
  }, [glovesData, itemsFEData, glovesOrder, skinsOrder]);

  const updateGlove = (gloveKey, field, newValue) => {
    setGlovesData(prev => ({
      ...prev,
      [gloveKey]: {
        ...prev[gloveKey],
        [field]: field.startsWith('enabled') ? newValue : Number(newValue)
      }
    }));
  };

  const updateSkin = (skinName, index, field, value) => {
    setItemsFEData(prev => ({
      ...prev,
      [skinName]: prev[skinName].map((entry, i) =>
        i === index ? { ...entry, [field]: field === 'enabled' ? value : Number(value) } : entry
      )
    }));
  };

  const addPattern = (skinName) => {
    setItemsFEData(prev => ({
      ...prev,
      [skinName]: [
        ...prev[skinName],
        { priceNotif: 0, priceBuy: 0, pattern1: 0, pattern2: 0, type: "pattern", enabled: true }
      ]
    }));
  };

  const removePattern = (skinName, index) => {
    setItemsFEData(prev => ({
      ...prev,
      [skinName]: prev[skinName].filter((_, i) => i !== index)
    }));
  };

  const handleAddNewSkin = () => {
    const name = newSkinName.trim();
    if (!name) return alert("Введите название скина!");
    if (itemsFEData[name]) return alert("Такой скин уже есть!");

    const newSkin = {
      [name]: [
        { pattern1: 0, pattern2: 10000, priceNotif: 0, priceBuy: 0, type: "pattern", enabled: true },
      ],
    };

    setItemsFEData(prev => ({ ...prev, ...newSkin }));
    setSkinsOrder(prev => [name, ...prev]); // Добавляем в начало списка
    setNewSkinName("");
    setShowAddForm(false);
  };

  const handleRemoveSkin = (skinName) => {
    if (!window.confirm(`Удалить ${skinName}?`)) return;
    setItemsFEData(prev => {
      const updated = { ...prev };
      delete updated[skinName];
      return updated;
    });
    setSkinsOrder(prev => prev.filter(name => name !== skinName));
  };

  // Функции для обработки drag and drop
  const handleDragStart = (e, type, itemKey) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ type, itemKey }));
    e.dataTransfer.effectAllowed = 'move';
    setDraggedItem({ type, itemKey });
    
    // Создаем кастомное изображение для перетаскивания
    const dragImage = e.target.cloneNode(true);
    dragImage.style.opacity = '0.8';
    dragImage.style.transform = 'rotate(5deg)';
    dragImage.style.backgroundColor = '#333';
    dragImage.style.padding = '8px';
    dragImage.style.borderRadius = '8px';
    dragImage.style.border = '2px solid #555';
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 50, 20);
    
    // Удаляем временный элемент после небольшой задержки
    setTimeout(() => {
      if (document.body.contains(dragImage)) {
        document.body.removeChild(dragImage);
      }
    }, 0);
  };

  const handleDragOver = (e, type, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex({ type, index });
  };

  const handleDragLeave = (e) => {
    // Проверяем, что мы действительно покинули элемент
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDragOverIndex(null);
    }
  };

  const handleDrop = (e, type, targetIndex) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    
    setDraggedItem(null);
    setDragOverIndex(null);
    
    if (data.type === type) {
      if (type === 'gloves') {
        const newOrder = Array.from(glovesOrder);
        const sourceIndex = newOrder.indexOf(data.itemKey);
        if (sourceIndex !== -1 && sourceIndex !== targetIndex) {
          const [reorderedItem] = newOrder.splice(sourceIndex, 1);
          newOrder.splice(targetIndex, 0, reorderedItem);
          setGlovesOrder(newOrder);
        }
      } else if (type === 'skins') {
        const newOrder = Array.from(skinsOrder);
        const sourceIndex = newOrder.indexOf(data.itemKey);
        if (sourceIndex !== -1 && sourceIndex !== targetIndex) {
          const [reorderedItem] = newOrder.splice(sourceIndex, 1);
          newOrder.splice(targetIndex, 0, reorderedItem);
          setSkinsOrder(newOrder);
        }
      }
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  return (
    <div className="autobuy-container">
      {/* Левый бокс */}
      <div className="left-box">
        <h2>Перчатки</h2>
        <div className="drag-container">
          {glovesOrder && glovesOrder.length > 0 && glovesOrder.map((key, index) => 
            glovesData[key] ? (
              <div
                key={key}
                onDragOver={(e) => handleDragOver(e, 'gloves', index)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'gloves', index)}
                onDragEnd={handleDragEnd}
                className={`draggable-item ${
                  draggedItem?.type === 'gloves' && draggedItem?.itemKey === key ? 'dragging' : ''
                } ${
                  dragOverIndex?.type === 'gloves' && dragOverIndex?.index === index ? 'drag-over' : ''
                }`}
              >
                <GloveConfigCard
                  gloveKey={key}
                  glove={glovesData[key]}
                  onChange={updateGlove}
                  onDragStart={(e) => handleDragStart(e, 'gloves', key)}
                />
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* Правый бокс */}
      <div className="right-box">
        <h2>Другие скины</h2>
        {/* 🔹 Кнопка добавления */}
        {!showAddForm ? (
          <button className="add-btn" onClick={() => setShowAddForm(true)}>➕ Добавить скин</button>
        ) : (
          <div className="add-skin-form">
            <input
              type="text"
              placeholder="Введите название скина..."
              value={newSkinName}
              onChange={(e) => setNewSkinName(e.target.value)}
            />
            <button onClick={handleAddNewSkin}>💾 Сохранить</button>
            <button onClick={() => setShowAddForm(false)}>❌ Отмена</button>
          </div>
        )}
        <div className="drag-container">
          {skinsOrder && skinsOrder.length > 0 && skinsOrder.map((skinName, index) => 
            itemsFEData[skinName] ? (
              <div
                key={skinName}
                onDragOver={(e) => handleDragOver(e, 'skins', index)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'skins', index)}
                onDragEnd={handleDragEnd}
                className={`draggable-item ${
                  draggedItem?.type === 'skins' && draggedItem?.itemKey === skinName ? 'dragging' : ''
                } ${
                  dragOverIndex?.type === 'skins' && dragOverIndex?.index === index ? 'drag-over' : ''
                }`}
              >
                <SkinConfigCard
                  skinName={skinName}
                  patterns={itemsFEData[skinName]}
                  onChange={updateSkin}
                  onAdd={addPattern}
                  onRemove={removePattern}
                  onDelete={() => handleRemoveSkin(skinName)}
                  onDragStart={(e) => handleDragStart(e, 'skins', skinName)}
                />
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

