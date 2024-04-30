const form = document.getElementById('formTask')
const task = document.getElementById('inputTask')
const list = document.getElementById('taskList')


form.addEventListener('submit', function(event){
    event.preventDefault();
    const taskText = task.value.trim()
    if(taskText != ""){
        const taskItem = document.createElement('li')
        const deleteTask = document.createElement('button')

        taskItem.textContent = taskText
        taskItem.className = "item"
        list.appendChild(taskItem)
        deleteTask.textContent = "🗑️"
        deleteTask.type = "button"
        deleteTask.className = "deleteBtn"
        deleteTask.addEventListener('click', function(){
            taskItem.remove()
        })
        taskItem.appendChild(deleteTask)
        task.value = ""
    }
})