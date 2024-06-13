document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            themeToggle.textContent = 'Modo Claro';
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            themeToggle.textContent = 'Modo Escuro';
        }
    });
    
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        if (task.trim() === '') {
            alert('Task cannot be empty');
            return;
        }

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="btn btn-success btn-sm mr-2 complete-btn">Complete</button>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);

        li.querySelector('.complete-btn').addEventListener('click', function () {
            li.querySelector('span').classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', function () {
            taskList.removeChild(li);
        });
    }
});


