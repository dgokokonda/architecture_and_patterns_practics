import React, { useState, useEffect } from "react";

export default function Animals() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAnimals();
  }, []);

  const loadAnimals = async () => {
    try {
      setLoading(true);
      if (window.apiService) {
        const response = await window.apiService.getAnimals();
        setAnimals(response.data);
        setError(null);
      } else {
        setError("API service не доступен");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="animals-container">
        <h2>Список животных</h2>
        <div className="loading">Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="animals-container">
        <h2>Список животных</h2>
        <div className="error">Ошибка: {error}</div>
      </div>
    );
  }

  return (
    <div className="animals-container">
      <h2>Список животных</h2>
      <div className="animals-list">
        {animals.map((animal) => (
          <div key={animal.id} className="animal-card">
            <h3>{animal.name}</h3>
            <p>Тип: {animal.type}</p>
            <p>Среда обитания: {animal.habitat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
