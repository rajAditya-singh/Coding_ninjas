// You are tasked with developing a social media platform where users can create accounts, make posts, and interact with those posts. Your goal is to implement the necessary classes and functionalities to fulfil the requirements of the platform.

//Do not alter the starter code.
function main() {
  //Create your class "User" here with all the properties and methods
  class User {
    #name;
    #email;
    #password;
    #posts;

    constructor(name, email, password) {
      this.#name = name;
      this.#email = email;
      this.#password = password;
      this.#posts = [];
    }

    get name() {
      return this.#name;
    }
    set name(newName) {
      return (this.#name = newName);
    }
    get email() {
      return this.#email;
    }
    set email(newEmail) {
      return (this.#email = newEmail);
    }
    get password() {
      return this.#password;
    }
    set password(newPass) {
      return (this.#password = newPass);
    }

    addPost(newPost) {
      this.#posts.push(newPost);
    }
    deletePost(dltPost) {
      this.#posts = this.#posts.filter((post) => post !== dltPost);
    }
    displayPosts() {
      console.log(`Posts by ${this.#name}:`);
      this.#posts.forEach((post) => {
        console.log(`- ${post.title}`);
      });
    }
  }
  //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
  class Post extends User {
    #title;
    #content;
    #date;
    #likeCount;

    constructor(name, email, password, title, content, date) {
      super(name, email, password);
      this.#title = title;
      this.#content = content;
      this.#date = date;
      this.#likeCount = 0;
    }

    get title() {
      return this.#title;
    }
    set title(newTitle) {
      return (this.#title = newTitle);
    }
    get content() {
      return this.#content;
    }
    set content(newContent) {
      return (this.#content = newContent);
    }
    get date() {
      return this.#date;
    }
    set date(newDate) {
      return (this.#date = newDate);
    }
    get likeCount() {
      return this.#likeCount;
    }

    addLike() {
      this.#likeCount += 1;
    }
    displayDetails() {
      console.log(`
        Name:${this.name}
        title:${this.#title}
        content:${this.#content}
        date:${this.#date}
        likeCount:${this.#likeCount}
        `);
    }
  }
  const user1 = new User("John", "john@example.com", "password123");
  const post1 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My first post",
    "Lorem ipsum dolor sit amet",
    "2021-01-01",
  );
  const post2 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My second post",
    "Consectetur adipiscing elit",
    "2021-01-02",
  );

  user1.addPost(post1);
  user1.addPost(post2);

  post1.addLike();
  post1.addLike();

  user1.displayPosts();
  // Output:
  // Posts by John:
  // - My first post
  // - My second post

  post1.displayDetails();
  // Output:
  // Owner: John
  // Title: My first post
  // Content: Loremipsum dolor sit amet
  // Date: 2021-01-01
  // Likes: 2
  return { User, Post };
}
main();
