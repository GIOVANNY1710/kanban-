document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if(form){
    form.addEventListener("submit", e => {
      e.preventDefault();
      const user = document.getElementById("user").value;
      const pass = document.getElementById("pass").value;
      if(user === "estudiante" && pass === "1234"){
        window.location.href = "kanban.html";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  }

  const tasks = document.querySelectorAll(".task");
  const columns = document.querySelectorAll(".column");

  tasks.forEach(task => {
    task.addEventListener("dragstart", () => {
      task.classList.add("dragging");
    });
    task.addEventListener("dragend", () => {
      task.classList.remove("dragging");
    });
  });

  columns.forEach(column => {
    column.addEventListener("dragover", e => {
      e.preventDefault();
      const dragging = document.querySelector(".dragging");
      if(dragging) column.appendChild(dragging);
    });
  });
});