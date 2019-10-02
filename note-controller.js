var element = document.getElementById("app");
console.log(element);

function changeGreeting(){
  return element.innerHTML = "howdy";
}

changeGreeting();
