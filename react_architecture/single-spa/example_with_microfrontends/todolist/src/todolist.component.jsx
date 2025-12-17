import React, { useState, useEffect } from "react";

export default function Todolist() {
  const [todolist, setTodolist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTodolist();
  }, []);

  const loadTodolist = async () => {
    try {
      setLoading(true);
      if (window.apiService) {
        const response = await window.apiService.getTodos();
        setTodolist(response.data);
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
      <div className="todolist-container">
        <h2>Список дел</h2>
        <div className="loading">Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="todolist-container">
        <h2>Список дел</h2>
        <div className="error">Ошибка: {error}</div>
      </div>
    );
  }

  return (
    <div className="todolist-container">
        <h2>Список дел</h2>
      <div className="todolist">
        {todolist.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h3>{todo.name}</h3>
            <p>Выполнено: {todo.done ? 'Да': 'Нет'}</p>
            <p>Время выполнения: {todo.datetime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
