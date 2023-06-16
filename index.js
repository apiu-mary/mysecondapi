// const fetchButton = document.getElementById('fetchButton');
// const todoList = document.getElementById('todoList');

// fetchButton.addEventListener('click', () => {
//     const userIdInput = document.getElementById('userIdInput');
//     const userId = userIdInput.value.trim();

//     if (userId === '') {
//         alert('Please enter a valid User ID');
//         return;
//     }

//     // Fetch todos based on user ID
//     fetchTodos(userId);
// });

// function fetchTodos(userId) {
//     fetch('https://dummyjson.com/api/todos/')
//         .then(response => response.json())
//         .then(todos => displayTodos(todos))
//         .catch(error => console.log(error));
// }

// function displayTodos(todos) {
//     todoList.innerHTML = '';

//     todos.forEach(todo => {
//         const listItem = document.createElement('li');
//         listItem.textContent = todo.title;
//         todoList.appendChild(listItem);
//     });
// }




// Function to fetch todos for a specific user ID
// // Function to fetch todos for a specific user ID
// function fetchTodos(userId) {
//     fetch("https://dummyjson.com/todos")
//       .then(response => response.json())
//       .then(data => {
//         const todoList = document.getElementById("todoList");
//         todoList.innerHTML = ""; // Clear existing todos
        
//         data.forEach(todo => {
//           if (todo.userId === userId) {
//             const listItem = document.createElement("li");
//             const checkbox = document.createElement("input");
//             const taskText = document.createTextNode(todo.title);
            
//             checkbox.type = "checkbox";
//             checkbox.addEventListener("click", function() {
//               completeTask(this);
//             });
            
//             listItem.appendChild(checkbox);
//             listItem.appendChild(taskText);
//             todoList.appendChild(listItem);
//           }
//         });
//       })
//       .catch(error => {
//         console.log("Error fetching todos:", error);
//       });
//   }
  
//   // Event listener for the fetch button
//   document.getElementById("fetchButton").addEventListener("click", function() {
//     const userIdInput = document.getElementById("userIdInput");
//     const userId = userIdInput.value.trim();
    
//     if (userId === "") {
//       alert("Please enter a user ID.");
//       return;
//     }
    
//     fetchTodos(userId);
//   });
  
//   // Function to add a new task
//   function addTask() {
//     const input = document.getElementById("taskInput");
//     const task = input.value.trim();
    
//     if (task === "") {
//       alert("Please enter a task.");
//       return;
//     }
    
//     const todoList = document.getElementById("todoList");
//     const listItem = document.createElement("li");
//     const checkbox = document.createElement("input");
//     const taskText = document.createTextNode(task);
    
//     checkbox.type = "checkbox";
//     checkbox.addEventListener("click", function() {
//       completeTask(this);
//     });
    
//     listItem.appendChild(checkbox);
//     listItem.appendChild(taskText);
//     todoList.appendChild(listItem);
    
//     input.value = ""; // Clear the input field
//   }
  
//   // Event listener for the add button
//   document.getElementById("addButton").addEventListener("click", addTask);
  
//   // Function to delete a task
//   function deleteTask() {
//     const todoList = document.getElementById("todoList");
//     const checkboxes = todoList.getElementsByTagName("input");
    
//     for (let i = checkboxes.length - 1; i >= 0; i--) {
//       if (checkboxes[i].checked) {
//         todoList.removeChild(checkboxes[i].parentNode);
//       }
//     }
//   }
  
//   // Event listener for the delete button
//   document.getElementById("deleteButton").addEventListener("click", deleteTask);
  // Function to fetch todos for a specific user ID
// function fetchTodos(userId) {
//     fetch("https://dummyjson.com/todos")
//       .then(response => response.json())
//       .then(data => {
//         const todoList = document.getElementById("todoList");
//         todoList.innerHTML = ""; // Clear existing todos
  
//         if (Array.isArray(data)) {
//           data.forEach(todo => {
//             if (todo.userId === userId) {
//               const listItem = document.createElement("li");
//               const checkbox = document.createElement("input");
//               const taskText = document.createTextNode(todo.title);
  
//               checkbox.type = "checkbox";
//               checkbox.addEventListener("click", function() {
//                 completeTask(this);
//               });
  
//               listItem.appendChild(checkbox);
//               listItem.appendChild(taskText);
//               todoList.appendChild(listItem);
//             }
//           });
//         } else {
//           console.log("Error fetching todos: Invalid data format");
//         }
//       })
//       .catch(error => {
//         console.log("Error fetching todos:", error);
//       });
//   }
  
//   // Event listener for the fetch button
//   document.getElementById("fetchButton").addEventListener("click", async function() {
//     const userIdInput = document.getElementById("userIdInput");
//     const userId = userIdInput.value.trim();
    
//     if (userId === "") {
//       alert("Please enter a user ID.");
//       return;
//     }
    
//     fetchTodos(userId);
//   });
  
//   // Event listener for the add button
//   document.getElementById("addButton").addEventListener("click", addTask);
  
//   // Event listener for the delete button
//   document.getElementById("deleteButton").addEventListener("click", deleteTask);
  
//   // Helper function to complete a task
//   function completeTask(checkbox) {
//     // Add your logic to handle task completion here
//   }
  
//   // Helper function to add a task
//   function addTask() {
//     // Add your logic to add a task here
//   }
  
//   // Helper function to delete a task
//   function deleteTask() {
//     // Add your logic to delete a task here
//   }
  // Function to fetch todos for a specific user ID
// function fetchTodos(userId) {
//     fetch("https://dummyjson.com/todos")
//       .then(response => response.json())
//       .then(data => {
//         const todoList = document.getElementById("todoList");
//         todoList.innerHTML = ""; // Clear existing todos
  
//         if (Array.isArray(data)) {
//           data.forEach(todo => {
//             if (todo.userId === userId) {
//               const listItem = document.createElement("li");
//               const checkbox = document.createElement("input");
//               const taskText = document.createTextNode(todo.title);
  
//               checkbox.type = "checkbox";
//               checkbox.addEventListener("click", function() {
//                 completeTask(todo.id);
//               });
  
//               listItem.appendChild(checkbox);
//               listItem.appendChild(taskText);
//               todoList.prepend(listItem); // Display new todo at the top
//             }
//           });
//         } else {
//           console.log("Error fetching todos: Invalid data format");
//         }
//       })
//       .catch(error => {
//         console.log("Error fetching todos:", error);
//       });
//   }
  
//   // Event listener for the fetch button
//   document.getElementById("fetchButton").addEventListener("click", function() {
//     const userIdInput = document.getElementById("userIdInput");
//     const userId = userIdInput.value.trim();
    
//     if (userId === "") {
//       alert("Please enter a user ID.");
//       return;
//     }
    
//     fetchTodos(userId);
//   });
  
//   // Event listener for the add button
//   document.getElementById("addButton").addEventListener("click", function() {
//     const userIdInput = document.getElementById("userIdInput");
//     const userId = userIdInput.value.trim();
//     const taskInput = document.getElementById("taskInput");
//     const task = taskInput.value.trim();
  
//     if (userId === "") {
//       alert("Please enter a user ID.");
//       return;
//     }
  
//     if (task === "") {
//       alert("Please enter a task.");
//       return;
//     }
  
//     const listItem = document.createElement("li");
//     const checkbox = document.createElement("input");
//     const taskText = document.createTextNode(task);
  
//     checkbox.type = "checkbox";
//     checkbox.addEventListener("click", function() {
//       completeTask(this.dataset.todoId);
//     });
  
//     listItem.appendChild(checkbox);
//     listItem.appendChild(taskText);
//     document.getElementById("todoList").prepend(listItem); // Display new todo at the top
  
//     taskInput.value = ""; // Clear the input field
//   });
  
//   // Event listener for the delete button
//   document.getElementById("deleteButton").addEventListener("click", function() {
//     const checkedCheckboxes = document.querySelectorAll("#todoList input[type='checkbox']:checked");
    
//     checkedCheckboxes.forEach(checkbox => {
//       const listItem = checkbox.parentNode;
//       listItem.parentNode.removeChild(listItem);
//     });
//   });
  
//   // Helper function to complete a task
//   function completeTask(todoId) {
//     // Add your logic to handle task completion here
//     console.log("Completed task:", todoId);
//   }
  
// function fetchTodos(userId) {
//     fetch("https://dummyjson.com/todos")
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         const todoList = document.getElementById("todoList");
//         todoList.innerHTML = ""; // Clear existing todos
  
//         const todo = data.find(function(todo) {
//           return todo.userId === userId;
//         });
  
//         if (todo) {
//           const listItem = document.createElement("li");
//           const checkbox = document.createElement("input");
//           const taskText = document.createTextNode(todo.title);
  
//           checkbox.type = "checkbox";
//           checkbox.addEventListener("click", function() {
//             completeTask(todo.id);
//           });
  
//           listItem.appendChild(checkbox);
//           listItem.appendChild(taskText);
//           todoList.prepend(listItem); // Display new todo at the top
//         } else {
//           console.log("No matching todo found for the given user ID");
//         }
//       })
//       .catch(function(error) {
//         console.log("Error fetching todos:", error);
//       });
//   }
  
//   // Event listener for the fetch button
//   document.getElementById("fetchButton").addEventListener("click", function() {
//     const userIdInput = document.getElementById("userIdInput");
//     const userId = userIdInput.value.trim();
  
//     if (userId === "") {
//       alert("Please enter a user ID.");
//       return;
//     }
  
//     fetchTodos(userId);
//   });
  
//   // Event listener for the add button
//   document.getElementById("addButton").addEventListener("click", function() {
//     const userIdInput = document.getElementById("userIdInput");
//     const userId = userIdInput.value.trim();
//     const taskInput = document.getElementById("taskInput");
//     const task = taskInput.value.trim();
  
//     if (userId === "") {
//       alert("Please enter a user ID.");
//       return;
//     }
  
//     if (task === "") {
//       alert("Please enter a task.");
//       return;
//     }
  
//     const listItem = document.createElement("li");
//     const checkbox = document.createElement("input");
//     const taskText = document.createTextNode(task);
  
//     checkbox.type = "checkbox";
//     checkbox.addEventListener("click", function() {
//       completeTask(this.dataset.todoId);
//     });
  
//     listItem.appendChild(checkbox);
//     listItem.appendChild(taskText);
//     document.getElementById("todoList").prepend(listItem); // Display new todo at the top
  
//     taskInput.value = ""; // Clear the input field
//   });
  
//   // Event listener for the delete button
//   document.getElementById("deleteButton").addEventListener("click", function() {
//     const checkedCheckboxes = document.querySelectorAll("#todoList input[type='checkbox']:checked");
  
//     for (let i = 0; i < checkedCheckboxes.length; i++) {
//       const checkbox = checkedCheckboxes[i];
//       const listItem = checkbox.parentNode;
//       listItem.parentNode.removeChild(listItem);
//     }
//   });
  
//   // Helper function to complete a task
//   function completeTask(todoId) {
//     // Add your logic to handle task completion here
//     console.log("Completed task:", todoId);
//   }

const userContainer = document.getElementById('container');
const getUsers = () => {
  return fetch('https://dummyjson.com/todos?limit=12')
    .then(response => response.json())
    .then(response => response.todos)
    .catch(error => error);
};
const displayUsers = async () => {
  const users = await getUsers();
  console.log(users);
  if (Array.isArray(users)) {
    users.forEach(item => {
      let div = document.createElement('div');
      let userName = document.createElement('input');
      let ids = document.createElement('span');
      let checkbox = document.createElement('input');
      let icon = document.createElement('i');
      checkbox.type = 'checkbox';
      checkbox.checked = item.completed;
      icon.classList.add('fa', 'fa-trash');
      ids.appendChild(icon);
      userName.value = item.todo;
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          userName.style.textDecoration = 'line-through';
        } else {
          userName.style.textDecoration = 'none';
        }
      });
      icon.addEventListener('click', () => {
        deleteUser(item.id);
        div.remove();
      });
      div.appendChild(checkbox);
      div.appendChild(userName);
      div.appendChild(ids);
      div.setAttribute('key', item.id);
      div.setAttribute('class', 'people');
      userContainer.appendChild(div);
    });
  }
};
const deleteUser = async (userId) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${userId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  } catch (error) {
    console.log(error);
  }
};
displayUsers();
const form= document.getElementById('form');
addForm.addEventListener('submit', event => {
  event.preventDefault();
  const taskInput = document.getElementById('taskInput');
  const newTask = taskInput.value;
  taskInput.value = '';
  if (newTask) {
    const div = document.createElement('div');
    const userName = document.createElement('input');
    const ids = document.createElement('span');
    const checkbox = document.createElement('input');
    const icon = document.createElement('i');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    icon.classList.add('fa', 'fa-trash');
    ids.appendChild(icon);
    userName.value = newTask;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        userName.style.textDecoration = 'line-through';
      } else {
        userName.style.textDecoration = 'none';
      }
    });
    div.appendChild(checkbox);
    div.appendChild(userName);
    div.appendChild(ids);
    div.setAttribute('key', Date.now());
    div.setAttribute('class', 'people');
    userContainer.prepend(div);
  }
});
  