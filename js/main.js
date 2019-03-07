window.onload = function() {

  var deleteIcon = '<i class="fas fa-trash"></i>';
  var doneIcon = '<i class="fas fa-check"></i>'

  //to have something on load
  addToTodo("Try me Sebbe");
  
  // Click add button and make a todo if text exists in input field
  document.getElementById('addTodo').addEventListener('click', function() {
    var todo = document.getElementById('inputTodo').value;
    if (todo) {
      addToTodo(todo);
      //resets the input to blank
      document.getElementById('inputTodo').value = '';
    }
  });

  function removeTodo() {
    var todo = this.parentNode.parentNode;
    var parent = todo.parentNode;

    parent.removeChild(todo);
    document.getElementById('');
  }

  function completeTodo() {
    var todo = this.parentNode.parentNode;
    var parent = todo.parentNode;
    var id = parent.id;

    var changeList;
    if (id === 'todo') {
      //to be completed
      changeList = document.getElementById('completedTodo');
      parent.removeChild(todo);
      changeList.insertBefore(todo, changeList.childNodes[0]);
    } else {
      //to be re-done
      changeList = document.getElementById('todo');
      parent.removeChild(todo);
      changeList.insertBefore(todo, changeList.childNodes[0]);
    }
  }

  function addToTodo(textInput) {
    var list = document.getElementById('todo');

    var newTodo = document.createElement('li');
    newTodo.innerText = textInput;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var deleteTodo = document.createElement('button');
    deleteTodo.classList.add('deleteTodo');
    deleteTodo.innerHTML = deleteIcon;

    //removes thetodo, uses function removeTodo
    deleteTodo.addEventListener('click', removeTodo)

    var doneTodo = document.createElement('button');
    doneTodo.classList.add('doneTodo');
    doneTodo.innerHTML = doneIcon;

    // completes the todo, uses function completeTodo
    doneTodo.addEventListener('click', completeTodo)

    buttons.appendChild(deleteTodo);
    buttons.appendChild(doneTodo);
    newTodo.appendChild(buttons);

    //puts it on top of the list
    list.insertBefore(newTodo, list.childNodes[0]);
  }




}
