//ex 1 | Highest value in an array

let numbers = [1, 7, -3, 9];

let maxNumber = Math.max(...numbers);

console.log(maxNumber);

//ex 2 | Temperature v2.0
function displayWeather() {
  let temperature = document.getElementById('temperature-input').value;
  let message = '';
  let imageUrl = '';

  if (temperature > 32) {
      message = 'The weather is hot.';
      imageUrl = 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg';
  } else if (temperature > 20) {
      message = 'The weather is nice.';
      imageUrl = 'https://static.toiimg.com/thumb/msid-99620278,width-1280,height-720,resizemode-4/.jpg';
  } else if (temperature > 0) {
      message = 'The weather is cold.';
      imageUrl = 'https://cdn.mos.cms.futurecdn.net/dBFuYGruGdT95wFwHEu5VM.jpg';
  } else {
      message = 'The weather is freezing.';
      imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/The_Sun_in_white_light.jpg/640px-The_Sun_in_white_light.jpg';
  }

  document.getElementById('temperature-message').innerText = message;
  document.getElementById('weather-image').src = imageUrl;
}
