"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Масив завдань та лічильник id
const tasks = [];
let nextId = 1;
// 3. Функції управління
// Додавання завдання
function addTask(title, description) {
    if (title.trim() === "") {
        console.log("Помилка: назва завдання не може бути порожньою.");
        return;
    }
    const newTask = {
        id: nextId++,
        title: title,
        description: description,
        completed: false,
    };
    tasks.push(newTask);
    console.log(`Завдання "${title}" додано (id: ${newTask.id}).`);
}
// Видалення завдання за id
function removeTask(id) {
    let index = -1;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]?.id === id) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        const removed = tasks.splice(index, 1)[0];
        if (removed) {
            console.log(`Завдання "${removed.title}" (id: ${id}) видалено.`);
        }
    }
    else {
        console.log(`Завдання з id ${id} не знайдено.`);
    }
}
// Позначення завдання як виконаного
function markTaskAsCompleted(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        if (task.completed) {
            console.log(`Завдання з id ${id} уже виконано.`);
        }
        else {
            task.completed = true;
            console.log(`Завдання "${task.title}" (id: ${id}) позначено як виконане.`);
        }
    }
    else {
        console.log(`Завдання з id ${id} не знайдено.`);
    }
}
// Допоміжна стрілкова функція для виведення одного завдання
const printTask = (task) => {
    const status = task.completed ? "Виконано" : "Не виконано";
    console.log(`[${task.id}] ${task.title} — ${task.description} (${status})`);
};
// Виведення всіх завдань
const listTasks = () => {
    console.log("\n=== Усі завдання ===");
    if (tasks.length === 0) {
        console.log("Список порожній.");
        return;
    }
    tasks.forEach(printTask);
};
// Виведення виконаних завдань
const listCompletedTasks = () => {
    console.log("\n=== Виконані завдання ===");
    const completed = tasks.filter((t) => t.completed);
    if (completed.length === 0) {
        console.log("Виконаних завдань немає.");
        return;
    }
    completed.forEach(printTask);
};
// Виведення невиконаних завдань
const listPendingTasks = () => {
    console.log("\n=== Невиконані завдання ===");
    let found = false;
    for (const task of tasks) {
        if (!task.completed) {
            printTask(task);
            found = true;
        }
    }
    if (!found) {
        console.log("Невиконаних завдань немає.");
    }
};
// 5. Тестування застосунку
// Додаємо кілька завдань
addTask("Купити продукти", "Молоко, хліб, яйця");
addTask("Зробити лабораторну", "Лабораторна з TypeScript");
addTask("Прибрати в кімнаті", "Пилосос та вологе прибирання");
addTask("Подзвонити друзям", "Домовитися про зустріч");
addTask("Прочитати книгу", "Розділ 5");
// Видаляємо одне завдання
removeTask(3);
// Позначаємо кілька завдань виконаними
markTaskAsCompleted(1);
markTaskAsCompleted(2);
markTaskAsCompleted(5);
// Перевірка граничних випадків
removeTask(99);
markTaskAsCompleted(99);
// Виводимо списки
listTasks();
listCompletedTasks();
listPendingTasks();
//# sourceMappingURL=index.js.map