const todos = [
  { id: 1, task: "Learn JavaScript", completed: true },
  { id: 2, task: "Learn React", completed: false },
  { id: 2, task: "Learn Angular", completed: false },
  { id: 3, task: "Build a project", completed: false },
];
// function goTodoList(todos,newTodo){
//     const res = [...todos,newTodo]
//     return res
// }
// const newTodo = {id: 4, task: "Learn Node.js", completed: false }
// console.log("Todo List.",goTodoList(todos,newTodo));

// function updateTodo(todoList,updatedTodo){
//     return todoList.map((todo) => 
//        todo.id === updatedTodo.id ? {...todo, ...updatedTodo} : todo
//     );
// }

// console.log("Updated To do List:-",updateTodo(todos,{id:2,task: "Learn Angular", completed: true}));


// function deleteTodoList(todos, todoId){
//     return todos.filter((todo) => todo.id !== todoId)
// }

// console.log("After delete To Do List>>>",deleteTodoList(todos,1));


function findTodo(todos,id){
    return todos.find((todo) => todo.id === id)
}
console.log("Find To do Id..",findTodo(todos,2));