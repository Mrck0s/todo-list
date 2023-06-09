//constantes de los elementos de la lista
const taskEntry = document.querySelector('.task-entry');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.tasks-container');
const empty = document.querySelector('.empty');
const orderBtn = document.querySelector('.order-btn');

//funcion para agregar la tarea a la lista
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const taskContent = taskEntry.value;
  const li = document.createElement('li');
  const p = document.createElement('p');
  if (taskContent.trim() !== '') {
    li.classList.add('task', 'border', 'input-btn-background', 'list-element-shadow');
    p.classList.add('task-text');
    p.textContent = taskContent;
    li.appendChild(addBtnCheck());
    li.appendChild(p);
    li.appendChild(addBtnDel());
    list.appendChild(li);
    empty.style.display = 'none';
  }  else {
      alert("Primero debe escribir una tarea para agregar");
  }
  taskEntry.value = "";
  taskEntry.focus();
});

//funcion que agrega el boton de borrado a la tarea
function addBtnDel() {
  const btnDel = document.createElement('button');
  btnDel.classList.add('del-btn', 'border', 'task-btn', 'input-btn-background');
  btnDel.innerText = '🗑';

  btnDel.addEventListener('click', (e) => {
    e.preventDefault();
    const li = e.target.parentElement;
    list.removeChild(li);

    const items = document.querySelectorAll('li');
    if (items.length < 1) {
      empty.style.display = 'inline-block';
    }
  });
  return btnDel;
}

//funcion que agrega el boton de check a la tarea
function addBtnCheck() {
  const btnCheck = document.createElement('button');
  btnCheck.classList.add('check-btn', 'border', 'task-btn', 'input-btn-background');
  btnCheck.innerText = '✓';

  btnCheck.addEventListener('click', (e) => {
    e.preventDefault();
    const taskItem = e.target.closest('.task');
    const taskText = taskItem.querySelector('.task-text');
    if (taskText.classList.contains('task-completed')) {
      taskText.classList.remove('task-completed');
      btnCheck.style.color = '#333';
    } else {
      taskText.classList.add('task-completed');
      btnCheck.style.color = 'lightgreen';
    }
  });
  return btnCheck;
}

//este codigo le da la fuuncionalidad al boton "Ordenar" como su nombre indica, de ordenar alfabeticamente las tareas que se encuentren en la lista
orderBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const items = list.querySelectorAll('li');
  if (items.length > 1) {
    const sortedItems = [...items].sort((a, b) => {
      const textA = a.querySelector('.task-text').textContent.toLowerCase();
      const textB = b.querySelector('.task-text').textContent.toLowerCase();
      return textA.localeCompare(textB);
    });
    list.innerHTML = '';
    sortedItems.forEach(item => list.appendChild(item));
  }
});
