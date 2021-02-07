const createItem = (todo, id) => {
    let item = `
    <li
        key="${id}"
        class=${todo.checked ? "taskItem-done" : 'taskItem'}>
            ${todo.title} ${todo.date ? todo.date :''}
            <img class="btn" src="done.png" onclick="completeToDo(event)"/>
            <img class="btn" src="delete.png" onclick="deleteToDo(event)"/>
    </li>
    `
        return item
}

const renderToDoItems = () => {
    list.innerHTML = ''
    let items = []

    todosArray.length
    ? todosArray.map((todo, id) => {
       items.unshift(createItem(todo, id))
       list.innerHTML = items.join('')
    })
    : list.prepend('No task')
}

renderToDoItems()