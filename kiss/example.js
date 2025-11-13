// KISS (Keep It Simple, Stupid) - Делай проще
// Плохой код: слишком сложное решение простой задачи

// Пример #1
// Bad: избыточная сложность фильтрации
function getActiveUsers(users) {
  return users.filter((user) => {
    const status = user.status;
    const isActive =
      status === "active" || status === "activated" || status === "enabled";
    const isNotSuspended = status !== "suspended" && status !== "disabled";
    return isActive && isNotSuspended;
  });
}

// Too bad: ненужные тернарные операторы
const result = users
  .map((user) =>
    user.status === "active"
      ? user.age > 18
        ? { ...user, category: "adult" }
        : { ...user, category: "minor" }
      : null
  )
  .filter(Boolean);

// Good: просто и понятно
function getActiveUsers(users) {
  const activeStatuses = ["active", "enabled", "activated"];
  return users.filter((user) => activeStatuses.includes(user.status));
}

// -------------------------
