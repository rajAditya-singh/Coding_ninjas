//complete the addBlog function to add moveup, movedown and delete button.
function addBlog(blog) {
  const blogList = document.querySelector(".blog-list");

  const newBox = document.createElement("div");
  newBox.classList.add("blog-box");

  const newBlogPost = document.createElement("div");
  newBlogPost.classList.add("blog-post");
  newBox.appendChild(newBlogPost);

  const newBlogHeader = document.createElement("div");
  newBlogHeader.classList.add("blog-header");
  newBlogPost.appendChild(newBlogHeader);

  const newBlogTitle = document.createElement("h2");
  newBlogTitle.classList.add("blog-title");
  newBlogTitle.textContent = blog.title;
  newBlogHeader.appendChild(newBlogTitle);

  const newBlogDate = document.createElement("p");
  newBlogDate.classList.add("blog-date");
  newBlogDate.textContent = blog.date;
  newBlogHeader.appendChild(newBlogDate);

  const newBlogContent = document.createElement("p");
  newBlogContent.classList.add("blog-content");
  newBlogContent.textContent = blog.content;
  newBlogPost.appendChild(newBlogContent);

  // create a new div with className blog-buttons and append it to newBox
  const newBlogButton = document.createElement("div");
  newBlogButton.classList.add("blog-buttons");
  newBox.appendChild(newBlogButton);

  //Create moveup button with class blog-button and move-up
  //Add event listerner to moveup button
  const moveupButton = document.createElement("button");
  moveupButton.classList.add("blog-button", "move-Up");
  moveupButton.textContent = "Move Up";
  newBlogButton.appendChild(moveupButton);
  //Create movedown button with class blog-button and move-down
  //Add event listerner to movedown button
  const moveDownButton = document.createElement("button");
  moveDownButton.classList.add("blog-button", "move-down");
  moveDownButton.textContent = "Move Down";
  newBlogButton.appendChild(moveDownButton);

  //Create delete button with class blog-button and delete
  //Add event listerner to delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("blog-button", "delete");
  deleteButton.textContent = "Delete";
  newBlogButton.appendChild(deleteButton);

  blogList.appendChild(newBox);

  // Add event listeners to the buttons

  moveupButton.addEventListener("click", function () {
    const currentBox = newBox;
    const previouBox = currentBox.previousElementSibling;
    if (previouBox) {
      blogList.insertBefore(currentBox, previouBox);
    }
  });

  moveDownButton.addEventListener("click", function () {
    const currentBox = newBox;
    const nexTbox = currentBox.nextElementSibling;
    if (nexTbox) {
      blogList.insertBefore(nexTbox, currentBox);
    }
  });
  deleteButton.addEventListener("click", function () {
    const currentBox = newBox;
    blogList.removeChild(currentBox);
  });
}

const blogData = [
  {
    title: "First Blog Post",
    date: "January 1, 2022",
    content: "This is the content of the first blog post.",
  },
  {
    title: "Second Blog Post",
    date: "February 1, 2022",
    content: "This is the content of the second blog post.",
  },
  {
    title: "Third Blog Post",
    date: "March 1, 2022",
    content: "This is the content of the third blog post.",
  },
];

blogData.forEach((blog) => addBlog(blog)); // Automatically call the function for each blog in the array
