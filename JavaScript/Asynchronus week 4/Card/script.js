const divEle = document.querySelector(".card-container");


function getUser(id) {
  const request = fetch(`https://dummyjson.com/users/${id}`)
console.log(request)
  const responce =  request.then((responce)=>{
    console.log(responce.headers)
    return responce.json();
  })
  responce.then((user)=>{
    console.log(user.body)
  })
}
getUser(1);

