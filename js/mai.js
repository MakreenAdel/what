var getUsername = prompt("Whats ur name");

console.log(getUsername);

document.getElementById("username").innerText = getUsername;

// tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })