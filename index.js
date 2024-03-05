$(document).ready(function () {
  $("#addTaskBtn").click(createTask);
  $("#clearTasksBtn").click(clearTasks);
  $("#sortTasksBtn").click(sortTasks);

  function createTask() {
    var taskText = $("#taskInput").val().trim();
    if (taskText !== "") {
      var taskItem = $(
        "<li class='list-group-item d-flex justify-content-between align-items-center'></li>"
      ).text(taskText);
      var deleteTaskBtn = $(
        "<button class='btn btn-danger btn-sm ml-2'>Delete</button>"
      ).click(function () {
        taskItem.remove();
      });
      taskItem.append(deleteTaskBtn);
      $("#taskList").append(taskItem);
      $("#taskInput").val("");
    }
  }

  function clearTasks() {
    $("#taskList").empty();
  }

  function sortTasks() {
    var tasks = $("#taskList li").get();

    tasks.sort(function (a, b) {
      var textA = $(a).text().toUpperCase();
      var textB = $(b).text().toUpperCase();
      return textA.localeCompare(textB);
    });

    $("#taskList").empty().append(tasks);
  }
});
