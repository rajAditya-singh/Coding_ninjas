const divEle = document.querySelector('.card-container');
let usercount = 1
getUser(1)
function getUser(id) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://dummyjson.com/users/${id}`);

  request.responseType = "json";

  request.send();

  request.addEventListener("load", function () {

    const data = request.response;
    console.log(data)

    // const dpImage =  document.getElementById("dpImage")
    // dpImage.src=data.image

    // const firstName = document.getElementById("firstName")
    // firstName.textContent=data.firstName
    // const lastName = document.getElementById("lastName")
    // lastName.textContent=data.lastName

    // const emailElement = document.querySelector(".email")
    // emailElement.textContent=data.email

    const card = `<div class="user-card">
      <img src=${data.image} alt="Profile Image" id="dpImage" />
      <h3 id="firstName">${data.firstName}</h3>
      <h3 id="lastName">${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      <button class="btn next">Next User</button>
      </div>`

    // divEle.innerHTML = card
    divEle.insertAdjacentHTML("beforeend", card)

    const nextBtn = document.querySelector(".next")
    nextBtn.addEventListener("click", function () {
      usercount=usercount+1;
      getUser(usercount)
    })
  })
}