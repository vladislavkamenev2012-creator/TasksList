type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const tasks: Task[] = [];
let nextId: number = 1;


function addTask(title: string, description: string): void {
  if (title.trim() === "") {
    console.log("Помилка: назва завдання не може бути порожньою.");
    return;
  }

  const newTask: Task = {
    id: nextId++,
    title: title,
    description: description,
    completed: false,
  };

  tasks.push(newTask);
  console.log(`Завдання "${title}" додано (id: ${newTask.id}).`);
}

function removeTask(id: number): void {
  let index: number = -1;

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
  } else {
    console.log(`Завдання з id ${id} не знайдено.`);
  }
}

function markTaskAsCompleted(id: number): void {
  const task = tasks.find((t) => t.id === id);

  if (task) {
    if (task.completed) {
      console.log(`Завдання з id ${id} уже виконано.`);
    } else {
      task.completed = true;
      console.log(`Завдання "${task.title}" (id: ${id}) позначено як виконане.`);
    }
  } else {
    console.log(`Завдання з id ${id} не знайдено.`);
  }
}
const printTask = (task: Task): void => {
  const status: string = task.completed ? "Виконано" : "Не виконано";
  console.log(
    `[${task.id}] ${task.title} — ${task.description} (${status})`
  );
};

const listTasks = (): void => {
  console.log("\n=== Усі завдання ===");
  if (tasks.length === 0) {
    console.log("Список порожній.");
    return;
  }
  tasks.forEach(printTask);
};

const listCompletedTasks = (): void => {
  console.log("\n=== Виконані завдання ===");
  const completed = tasks.filter((t) => t.completed);

  if (completed.length === 0) {
    console.log("Виконаних завдань немає.");
    return;
  }
  completed.forEach(printTask);
};

const listPendingTasks = (): void => {
  console.log("\n=== Невиконані завдання ===");
  let found: boolean = false;

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


addTask("Купити продукти", "Молоко, хліб, яйця");
addTask("Зробити лабораторну", "Лабораторна з TypeScript");
addTask("Прибрати в кімнаті", "Пилосос та вологе прибирання");
addTask("Подзвонити друзям", "Домовитися про зустріч");
addTask("Прочитати книгу", "Розділ 5");

removeTask(3);

markTaskAsCompleted(1);
markTaskAsCompleted(2);
markTaskAsCompleted(5);

removeTask(99);
markTaskAsCompleted(99);

listTasks();
listCompletedTasks();
listPendingTasks();