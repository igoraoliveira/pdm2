const tasks = [
    {
      id: 1,
      name: "Fazer compras",
      completed: false
    },
    {
      id: 2,
      name: "Estudar para a prova",
      completed: true
    },
    {
      id: 3,
      name: "Limpar o quarto",
      completed: false
    }
  ];
  
  function geTasks() {
    return tasks;
  }
  
  function addTask(taskName) {
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {
      id: newId,
      name: taskName,
      completed: false
    };
    tasks = [...tasks, newTask];
  }
  
  function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
  }
  
  function updateTask(taskId, updatedTask) {
    tasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
  }
  
  module.exports = {
    getTasks,
    addTask,
    removeTask,
    updateTask
  };