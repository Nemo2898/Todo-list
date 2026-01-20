const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text === '') {
        return;
    }

    addTodoItem(text);
    input.value = '';
});

function addTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'X';

    checkbox.addEventListener('change', function () {
        li.classList.toggle('completed', checkbox.checked);
    });

    deleteBtn.addEventListener('click', function () {
        list.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);
}
