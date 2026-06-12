// HTTP Request.
// 1. XML HTTP Request - It uses Callback Functions(older ways) meaning that it will execute the code in a non-blocking way and it will not wait for the response to come back before moving on to the next line of code.
// 2. Fetch API - It uses Promises(Modern way) meaning that it will return a Promise that will be resolved with the response of the request. It is more powerful and easier to use than the XML HTTP Request. 
//In simple language Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.

//JavaScript is a single-threaded language, which means that it can only execute one task at a time. However, it can handle asynchronous operations using web APIs(Like setTimeout, setInterval), callbacks, promises, and async/await. Asynchronous operations allow JavaScript to perform tasks without blocking the main thread, which is essential for tasks like making HTTP requests, reading files, or handling user input.

// In the context of HTTP requests, JavaScript can make asynchronous requests to a server using the Fetch API or XMLHttpRequest. When a request is made, JavaScript can continue executing other code while waiting for the response from the server. Once the response is received, JavaScript can handle it using callbacks, promises, or async/await to update the UI or perform other actions based on the response. This allows for a smoother user experience and prevents the application from freezing while waiting for data from the server.

// 3. Async/Await - It is a syntactic sugar over Promises and it makes the code look more synchronous. It allows us to write asynchronous code in a more readable and maintainable way. It is built on top of Promises and it uses the async keyword to define an asynchronous function and the await keyword to wait for a Promise to be resolved before moving on to the next line of code.

//Example of callback function:
function greet(callback){
    setTimeout(()=>{
        console.log("Hello")
        callback()
    },1000)
}

function message(){
    console.log("Welcome to JavaScript")
}

greet(message)