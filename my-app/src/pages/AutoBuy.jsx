import React, { useState, useEffect } from "react";
import { DEFAULT_GLOVES_ARR, DEFAULT_ITEMS_FE } from "../constants/marketData";
import { loadMarketData, saveMarketData } from "../utils/storage";
import GloveConfigCard from "../components/GloveConfigCard";
import SkinConfigCard from "../components/SkinConfigCard";
import "../AutoBuy.css";

export default function AutoBuy() {
  // Загружаем данные (из localStorage или дефолтные)
  const [glovesData, setGlovesData] = useState(() =>
    loadMarketData({ gloves: DEFAULT_GLOVES_ARR, itemsFE: DEFAULT_ITEMS_FE }).gloves
  );
  const [itemsFEData, setItemsFEData] = useState(() =>
    loadMarketData({ gloves: DEFAULT_GLOVES_ARR, itemsFE: DEFAULT_ITEMS_FE }).itemsFE
  );

  // Сохраняем изменения в localStorage
  useEffect(() => {
    saveMarketData({ gloves: glovesData, itemsFE: itemsFEData });
  }, [glovesData, itemsFEData]);

  const updateGlove = (gloveKey, field, newValue) => {
    setGlovesData(prev => ({
      ...prev,
      [gloveKey]: {
        ...prev[gloveKey],
        [field]: Number(newValue)
      }
    }));
  };

  const updateSkin = (skinName, index, field, value) => {
    setItemsFEData(prev => ({
      ...prev,
      [skinName]: prev[skinName].map((entry, i) =>
        i === index ? { ...entry, [field]: Number(value) } : entry
      )
    }));
  };

  const addPattern = (skinName) => {
    setItemsFEData(prev => ({
      ...prev,
      [skinName]: [
        ...prev[skinName],
        { priceNotif: 0, priceBuy: 0, pattern1: 0, pattern2: 0, type: "pattern" }
      ]
    }));
  };

  const removePattern = (skinName, index) => {
    setItemsFEData(prev => ({
      ...prev,
      [skinName]: prev[skinName].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="autobuy-container">
      {/* Левый бокс */}
      <div className="left-box">
        <h2>Перчатки</h2>
        {Object.entries(glovesData).map(([key, glove]) => (
          <GloveConfigCard
            key={key}
            gloveKey={key}
            glove={glove}
            onChange={updateGlove}
          />
        ))}
      </div>

      {/* Правый бокс */}
      <div className="right-box">
        <h2>Другие скины</h2>
        {Object.entries(itemsFEData).map(([skinName, patterns]) => (
          <SkinConfigCard
            key={skinName}
            skinName={skinName}
            patterns={patterns}
            onChange={updateSkin}
            onAdd={addPattern}
            onRemove={removePattern}
          />
        ))}
      </div>
    </div>
  );
}

