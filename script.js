

document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    if (todoInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = todoInput.value.trim();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';

    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = '';
});

document.getElementById('todoList').addEventListener('click', function(e) {
    if (e.target.className === 'deleteButton') {
        const li = e.target.parentElement;
        const ul = li.parentElement;
        ul.removeChild(li);
    }
});

editTodo(index) 
 const newText = prompt('Enter new todo text:');
 if (newText) {
    this.setState(prevState => {
      const updatedTodos = [...prevState.todos];
      updatedTodos[index] = {
        text: newText,
        id: updatedTodos[index].id,
      };
      return { todos: updatedTodos };
    });
 }

 javascript
 class App extends Component {
 
  // Edit todo by index
  editTodo(index) {
     // Prompt user for new todo text
     const newText = prompt('Enter new todo text:');
 
     // If new text provided, update state
     if (newText) {
       this.setState(prevState => {
         // Copy existing todos array
         const updatedTodos = [...prevState.todos];
 
         // Update todo at specified index
         updatedTodos[index] = {
           text: newText,
           id: updatedTodos[index].id,
         };
 
         // Return updated state
         return { todos: updatedTodos };
       });
     }
  }
 
  // ... rest of the component
 }