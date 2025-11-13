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
// Example #2
// Bad:
// const even = [2, 4, 6];
// const nums = [10, 12, 16].concat(even); // 10,12,16,2,4,5

// Good:
const even = [2, 4, 6];
const nums = [10, 12, 16, ...even];

// Example #3
// Bad:
function checkName(name) {
  if (name === null || name === undefined || name === "") {
    console.log("name not defined!");
  } else {
    console.log(name);
  }
}
checkName();

// Good:
function checkName(name) {
  console.log(name || "name not defined!");
}
checkName();

// Example #3
// Bad:
// const getData = (url) => {
//   return $.getJSON(url)
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);

//     });
// };

// getData("https://jsonplaceholder.typicode.com/todos/1");

// Good:
const getData = async (url) => {
  try {
    const data = await $.getJSON(url);
    console.log(data);
  } catch (error) {
    console.log(err);
  }
};

getData("https://jsonplaceholder.typicode.com/todos/1");
