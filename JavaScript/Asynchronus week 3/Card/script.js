const divEle = document.querySelector('.card-container');

const request = new XMLHttpRequest();
request.open("Get", "https://dummyjson.com/users/1")
request.responseType='json'
request.send();

request.addEventListener("load", function(){
  console.log(request.response)
})