$("#clicker").click(() => {
  var userInput = $("#userText").val();
  $("#paragraph").text(userInput);
  console.log(userInput);
});
