/*
   This is a scaffold JavaScript file for the image carousel project.
   You'll need to implement the functionality of the carousel here.
   Consider the following steps:

   1. Define an array of image URLs for your carousel
   2. Keep track of the current image index
   3. Select and store references to your HTML elements (image container, prev/next buttons)
   4. Implement a function to update the displayed image
   5. Add event listeners to the prev/next buttons to change the current image
   6. Initialize the carousel with the first image

   Remember to use appropriate variable names and comments to make your code readable.
   Feel free to add any additional features or improvements to enhance the user experience!
*/

let imagesUrls = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZmllfGVufDB8fDB8fHww&w=1000&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW58ZW58MHx8MHx8fHww&w=1000&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fHww&w=1000&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5fGVufDB8fDB8fHww&w=1000&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhfGVufDB8fDB8fHww&w=1000&q=80",
];
let currentImageIndex = 0;

const imageElement = document.getElementById("carouselImage");
const previousButton = document.getElementById("prevButton");
const nextbutton = document.getElementById("nextButton");

function updateImage() {
  imageElement.src = imagesUrls[currentImageIndex];
}

previousButton.addEventListener("click", function () {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateImage();
  } else if (currentImageIndex === 0) {
    currentImageIndex = imagesUrls.length - 1;
    updateImage();
  }
});

nextbutton.addEventListener("click", function () {
  if (currentImageIndex < imagesUrls.length - 1) {
    currentImageIndex++;
    updateImage();
  } else if (currentImageIndex === imagesUrls.length - 1) {
    currentImageIndex = 0;
    updateImage();
  }
});
