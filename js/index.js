const videoId = document.getElementById('background-video');

const videoUrl = "https://photos.google.com/share/AF1QipOMksnRrteer2XSySVRpyAiCPmIJwWeC2lXej7vkojdg0uy8NGWwHZq4b-OD22fZg/photo/AF1QipNCZ1hWDmiCSZ0xQgkMtFrhZ3QUfRT7GMUGpMj8";

//"https://photos.google.com/share/AF1QipOMksnRrteer2XSySVRpyAiCPmIJwWeC2lXej7vkojdg0uy8NGWwHZq4b-OD22fZg/photo/AF1QipNCZ1hWDmiCSZ0xQgkMtFrhZ3QUfRT7GMUGpMj8?key=X0Q2QTNnajcyZkxkTHNLZXE4LWJUUzBUd2EwcEFR"
//?key=X0Q2QTNnajcyZkxkTHNLZXE4LWJUUzBUd2EwcEFR?X0Q2QTNnajcyZkxkTHNLZXE4LWJUUzBUd2EwcEFR
const options = { 

  method: 'GET', 

  headers: { 

            'X-RapidAPI-Host': ' tasty.p.rapidapi.com', 

            'X-RapidAPI-Key': '12345abcdef' 

   } 

};
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + videoUrl;
videoId.innerHTML = `<source src="${corsEnabledUrl}" type="video/mp4">`;