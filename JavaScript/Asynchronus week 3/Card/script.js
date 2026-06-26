const divEle = document.querySelector('.card-container');
// let usercount = 1

function getUser(id) {


  const request = new XMLHttpRequest();
  request.open("GET", `https://dummyjson.com/users/${id}`);
  request.send();

  request.addEventListener("load", function () {

    // const data = request.response;
    const data = JSON.parse(this.responseText)
    console.log(data)
    displayUser(data, "beforeend")

    if (id > 1 && id < 30) {
      const request2 = new XMLHttpRequest();
      request2.open("GET", `https://dummyjson.com/users/${id - 1}`);
      request2.send();
      request2.addEventListener("load", function () {
        // const data = request2.response;
        const data = JSON.parse(this.responseText)
        console.log(data)
        displayUser(data, "afterBegin")
      })

      const request3 = new XMLHttpRequest();
      request3.open("GET", `https://dummyjson.com/users/${id + 1}`);
      request3.send();
      request3.addEventListener("load", function () {
        const data = JSON.parse(this.responseText)
        console.log(data)
        displayUser(data, "beforeend")
      })
    } else if (id == 1) {
      const request3 = new XMLHttpRequest();
      request3.open("GET", `https://dummyjson.com/users/${id + 1}`);
      request3.send();
      request3.addEventListener("load", function () {
        const data = JSON.parse(this.responseText)
        console.log(data)
        displayUser(data, "beforeend")
      })
    } else {
      const request2 = new XMLHttpRequest();
      request2.open("GET", `https://dummyjson.com/users/${id - 1}`);
      request2.send();
      request2.addEventListener("load", function () {
        // const data = request2.response;
        const data = JSON.parse(this.responseText)
        console.log(data)
        displayUser(data, "afterBegin")
      })
    }



    // const dpImage =  document.getElementById("dpImage")
    // dpImage.src=data.image

    // const firstName = document.getElementById("firstName")
    // firstName.textContent=data.firstName
    // const lastName = document.getElementById("lastName")
    // lastName.textContent=data.lastName

    // const emailElement = document.querySelector(".email")
    // emailElement.textContent=data.email



    // const nextBtn = document.querySelector(".next")
    // nextBtn.addEventListener("click", function () {
    //   usercount=usercount+1;
    //   getUser(usercount)
    // })
  })
}


function displayUser(data, position) {
  const card = `<div class="user-card">
      <img src=${data.image} alt="Profile Image" id="dpImage" />
      <h3 id="firstName">${data.firstName}</h3>
      <h3 id="lastName">${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      </div>`

  // divEle.innerHTML = card
  divEle.insertAdjacentHTML(position, card)
}
getUser(1)
