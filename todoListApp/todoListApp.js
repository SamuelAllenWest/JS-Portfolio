//Selectors
const todoInput = document.querySelector(`.todoInput`);
const todoButton = document.querySelector(`.todoButton`);
const todoList = document.querySelector(`.todoList`);
const todoSelect = document.querySelector(`.filterTodo`);

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
todoSelect.addEventListener('click',filterTodo);
//Run if all content loaded correctly
document.addEventListener('DOMContentLoaded', getTodos);

//Functions 

//Add Button Functionality 
//This adds a div that contains buttons and assocaited list items that will go in the list to add to the list
function addTodo(event){
    //Prevents refresh
    event.preventDefault();

    //Construct Todo Div
        //1. Create Element
        //2. Assign Class
        //3. Fill Values 
    const todoDiv= document.createElement('div');
    todoDiv.classList.add('todo');

    //Construct Todo List Items 
    const todoItem= document.createElement('li');
    todoItem.classList.add('todoItem');
    todoItem.innerText= todoInput.value;
   
    //Append Child in the created div
    todoDiv.appendChild(todoItem);
  
    //Add to Local Storage
    saveLocalTodos(todoInput.value);
    todoInput.value='';

    //Completed Button
    const completedButton = document.createElement('button');
        // innerHTML allows us to add HTML elements to elements 
    completedButton.innerHTML = '<i class="fas fa-check"></i>';   
    completedButton.classList.add ('completedButton'); 
    todoDiv.appendChild(completedButton);  

    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';   
    trashButton.classList.add('trashButton'); 
    todoDiv.appendChild(trashButton);  

    //Add div to list
    todoList.appendChild(todoDiv);
}


// This is our function for checking/deleting buttons 
function deleteCheck(event){
    //Create a variable on what we're clikcing on
    const item= event.target;
    if (item.classList[0] === 'trashButton'){
        const todo = item.parentElement;

        //Animation
        todo.classList.add('fall');
        // Will execute function after the transition has finished 
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });

    }
    if (item.classList[0] === 'completedButton'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }


}

//Filter Function
function filterTodo(event){
    const todos= todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case 'all':
                todo.style.display='flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                }else{
                 todo.style.display='none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display='flex';
                }else{
                 todo.style.display='none';
                }
                break;
            }
        });
    

}

//Save Local Todos

function saveLocalTodos(todo){
    //First, check to see if we have something in local storage 
    let todos; 

    // If it doesn't exist, we make it 
    if(localStorage.getItem('todos')=== null){
        todos = [];
    }
    else{
        //JSON.parse will transform the saved string into an array and assign it to todos 
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    // Then if we have an array, we push the passed todo to the end of the array 
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Get Local Todos 

function getTodos(){
    let todos; 
    // If it doesn't exist, we make it 
    if(localStorage.getItem('todos')=== null){
        todos = [];
    }
    //JSON.parse will transform the saved string into an array and assign it to todos 
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        //Todo Div
        const todoDiv= document.createElement('div');
        todoDiv.classList.add('todo');
    
        //Construct Todo List Items 
        const todoItem= document.createElement('li');
        todoItem.classList.add('todoItem');
        todoItem.innerText= todo;
       
        //Append Child in the created div
        todoDiv.appendChild(todoItem);
    
        //Completed Button
        const completedButton = document.createElement('button');
            // innerHTML allows us to add HTML elements to elements 
        completedButton.innerHTML = '<i class="fas fa-check"></i>';   
        completedButton.classList.add ('completedButton'); 
        todoDiv.appendChild(completedButton);  
    
        //Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';   
        trashButton.classList.add('trashButton'); 
        todoDiv.appendChild(trashButton);  
        
        //Add div to list
        todoList.appendChild(todoDiv);
    });

}

//Removal Todos from Local Storage on Delete
function removeLocalTodos(todo){
    let todos; 
    if(localStorage.getItem('todos')=== null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    // Index of your passed todo (clicked) 
    const todoIndex = todo.children[0].innerText;
    // Splice takes in from what position, and how much you want to remove
    todos.splice(todos.indexOf(todoIndex),1);

    // Resets the local storage to update with removed element 
    localStorage.setItem('todos', JSON.stringify(todos));


}