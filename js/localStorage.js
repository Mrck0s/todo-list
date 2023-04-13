const taskList = document.querySelector('.tasks-container');

// función para guardar las tareas en el localStorage
function saveTasks() {
  const tasks = document.querySelectorAll('.task');
  const tasksArray = [];

  for (let i = 0; i < tasks.length; i++) {
    const taskText = tasks[i].querySelector('.task-text').textContent;
    const isCompleted = tasks[i].querySelector('.task-text').classList.contains('task-completed');
    tasksArray.push({ text: taskText, completed: isCompleted });
  }

  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

// función para cargar las tareas guardadas en el localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  if (tasks !== null) {
    tasks.forEach((task) => {
      const li = document.createElement('li');
      const p = document.createElement('p');
      li.classList.add('task', 'border', 'input-btn-background');
      p.classList.add('task-text');
      p.textContent = task.text;
      if (task.completed) {
        p.classList.add('task-completed');
      }
      li.appendChild(addBtnCheck());
      li.appendChild(p);
      li.appendChild(addBtnDel());
      taskList.appendChild(li);
      empty.style.display = 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', loadTasks);

// función para guardar las tareas en el localStorage
function saveTasks() {
  const tasks = document.querySelectorAll('.task');
  const tasksArray = [];

  for (let i = 0; i < tasks.length; i++) {
    const taskText = tasks[i].querySelector('.task-text').textContent;
    const isCompleted = tasks[i].querySelector('.task-text').classList.contains('task-completed');
    tasksArray.push({ text: taskText, completed: isCompleted });
  }

  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

// evento para guardar las tareas en el localStorage cuando se cierre la página o se actualice
window.addEventListener('beforeunload', saveTasks);


