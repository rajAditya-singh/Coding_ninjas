const divEle = document.querySelector(".card-container");


function getUser(id) {
  fetch(`https://dummyjson.com/users/${id}`)
    // console.log(request)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something Went Wrong")
      }
      // console.log(response.headers)
      return response.json();
    })
    .then((user) => {
      console.log(user)
    }).catch((err) => {
      console.error(err)
      console.log(err)
    })
}


getUser(0);

