const addToDo = () => {
    let newTask = textIn.value
    let date = setDate.value
    if (newTask != '') {
        todosArray.push({
            title: newTask,
            checked: false,
            date,
        })

        localStorage.setItem('todos', JSON.stringify(todosArray))
        renderToDoItems()
 
        textIn.value = ''
        setDate.value = ''
    }
}

const deleteToDo = (e) => {
    let index = parseInt(e.target.parentNode.getAttribute('key'))
    todosArray.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todosArray))
    renderToDoItems()
}

const completeToDo = (e) => {
    // checking for 'done' className
    // contains('done') true/false - teksheret barby je jokbu?
    let todosTemporary = [...todosArray]
    
    let index = parseInt(e.target.parentNode.getAttribute('key'))
    // console.log(index) 2
    let objElement = todosTemporary[index].checked // znacheniyany chygarabyz
    todosTemporary[index].checked = !objElement // perezapis znacheniya

    localStorage.setItem('todos', JSON.stringify(todosTemporary))
    
    let isDone = e.currentTarget.parentNode.classList.contains('taskItem-done')

    if(isDone) {
        e.currentTarget.parentNode.classList.remove('taskItem-done')
        e.currentTarget.parentNode.classList.add('taskItem')
    } else {
        e.currentTarget.parentNode.classList.add('taskItem-done')
        e.currentTarget.parentNode.classList.remove('taskItem')
    }

  
}

const getTodos =() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_page=1')
    .then(response => response.json())
    .then(array => {
        localStorage.setItem('todos', JSON.stringify(array))
    })
}

getTodos()