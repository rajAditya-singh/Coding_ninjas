const divEle = document.querySelector(".card-container");


function getUser(id) {
  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something Went Wrong")
      }
      return response.json();
    })
    .then((user) => {
      displayUser(user, "beforeend")
      return fetch(`https://dummyjson.com/users/${id-1}`)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Cannot load previous Element")
      }
      return response.json();
    })
    .then((user) => {
      displayUser(user, 'afterbegin', 'other')
      return fetch(`https://dummyjson.com/users/${id+1}`)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Cannot load previous Element")
      }
      return response.json();
    })
    .then((user) => {
      displayUser(user, 'beforeend', 'other')
    }).catch((err) => {
      console.log(err)
    })
}

function displayUser(data, position, className='') {
  const card = `<div class="user-card ${className}">
      <img src=${data.image} alt="Profile Image" id="dpImage" />
      <h3 id="firstName">${data.firstName}</h3>
      <h3 id="lastName">${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      </div>`;

  // divEle.innerHTML = card
  divEle.insertAdjacentHTML(position, card);
}

getUser(2);