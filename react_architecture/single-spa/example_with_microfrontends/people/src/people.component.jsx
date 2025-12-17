import React, { useState, useEffect } from "react";

export default function People() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = async () => {
    try {
      setLoading(true);
      if (window.apiService) {
        const response = await window.apiService.getPeople();
        setPeople(response.data);
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
      <div className="people-container">
        <h2>Список людей</h2>
        <div className="loading">Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="people-container">
        <h2>Список людей</h2>
        <div className="error">Ошибка: {error}</div>
      </div>
    );
  }

  return (
    <div className="people-container">
      <h2>Список людей</h2>
      <div className="people-list">
        {people.map((person) => (
          <div key={person.id} className="person-card">
            <h3>{person.name}</h3>
            <p>Возраст: {person.age}</p>
            <p>Профессия: {person.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
