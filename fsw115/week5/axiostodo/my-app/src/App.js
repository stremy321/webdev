import React from 'react';

const todoForm = document.todoform

todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        name: todoForm.name.value,
        object: todoForm.object.value,
        
    }

    axios.post("https://api.vschool.io/jessicastremy/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}
)

axios.get("https://api.vschool.io/jessicastremy/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
            if (response.data[i].completed == true){
                h1.classList.add('completed')
            }
            document.body.appendChild(h1)
        }
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i]
            document.body.appendChild(h1)
            if (response.data[i].completed == true){
                h1.classList.add('completed')
            }
            document.body.appendChild(h1)
        }
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
            if (response.data[i].completed == true){
                h1.classList.add('completed')
            }
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))


export default App;
