document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    
    function createTaskItem(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                <button class="complete-btn">Complete</button>
            </div>
        `;

        
        li.querySelector('.edit-btn').addEventListener('click', () => {
            const newText = prompt('Edit your task:', taskText);
            if (newText !== null && newText.trim() !== '') {
                li.querySelector('.task-text').textContent = newText.trim();
            }
        });

      
        li.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(li);
        });

       
        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        return li;
    }

   
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const newTaskItem = createTaskItem(taskText);
        taskList.appendChild(newTaskItem);
        taskInput.value = '';
    });

    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
