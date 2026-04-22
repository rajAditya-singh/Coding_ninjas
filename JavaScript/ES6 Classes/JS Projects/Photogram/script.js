// Define the post1 object with the given details.
let post1 = {
  id: 1,
  author: "John",
  content: "My first Post!",
  likes: 10,
  comments: ["Great post!", "Nice photo!"],
  image: "https://files.codingninjas.in/image2-28694.jpg",
};

// const {author, content, likes, comments, image}= post1

function renderPosts() {
  const postContainer = document.getElementById("posts");
  //   console.log(postContainer)

  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

 

  //Author Name
  const authorName = document.createElement("h3");
  authorName.textContent = post1.author;
  //   postDiv.appendChild(authorName)

  //Post Image
  const PostImage = document.createElement("img");
  PostImage.src = post1.image;
  PostImage.alt = "Post image";
  //   postDiv.appendChild(PostImage)

  //Post Content
  const PostContent = document.createElement("p");
  PostContent.textContent = post1.content;

  //Like Button
  const LikeButton = document.createElement("button");
  LikeButton.textContent = "Like";

  //Comment Input
  const CommentInput = document.createElement("input");
  CommentInput.type = 'text';
  CommentInput.placeholder = "Write a comment...";

  //Comment Button
  const CommentButton = document.createElement("button");
  CommentButton.textContent = "Comment";

  // post-footer
  const postfooter = document.createElement("div");
  postfooter.classList.add("post-footer");
  postfooter.textContent = `Likes: ${post1.likes}  Comments: ${post1.comments.length}`;

  //Comments Container
  const CommentsContainer = document.createElement("div");
  CommentsContainer.classList.add("comments-container");
  CommentsContainer.style.display = "none";
  post1.comments.forEach((comment) => {
    const CommentDiv = document.createElement("p");
    CommentDiv.textContent = comment;
    CommentsContainer.append(CommentDiv);
  });

  postfooter.addEventListener(("click"), function () {
    if (CommentsContainer.style.display === "none") {
      CommentsContainer.style.display = "block";
    } else if (CommentsContainer.style.display === "block") {
      CommentsContainer.style.display = "none";
    }
  });

  postDiv.append(
    authorName,
    PostImage,
    PostContent,
    LikeButton,
    CommentInput,
    CommentButton,
    postfooter,
    CommentsContainer,
  );
   postContainer.appendChild(postDiv);
}
renderPosts();
