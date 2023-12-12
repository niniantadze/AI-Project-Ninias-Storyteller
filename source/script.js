function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fcec8ad3dft937afe4da000c469b9obf";
  let prompt = `user instructions are to generate short story  about ${instructionsInput.value}`;
  let context =
    "You are sweet storyteller, with magical imagination and love to write short stories, your mission is to generate short story, stories' number of characters shoud not be more than 50 characters and no more than 7 lines.write story in basic HTML, make sure to use user instructions, sign the story with `Ninia's AI🧚‍♀️` in <strong></stong> element at the end of story, thanks.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Short Story");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  let storyElement = document.querySelector(".story");
  storyElement.classList.remove("hidden");

  storyElement.innerHTML = `<span class="blink">⏳ Generating magical story about ${instructionsInput.value} for you...✨"</span>`;

  axios.get(apiUrl).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
