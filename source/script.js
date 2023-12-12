function generateStory(event) {
  event.preventDefault();

  let storyElement = document.querySelector("#story");
  new Typewriter("#story", {
    strings:
      "Little fox was very happy and loved by her friends from the cozy forest...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
