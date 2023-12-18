let currentPage = 1;

function nextPage() {
  // Add logic to navigate to the next page
  console.log('Navigating to the next page');
  currentPage++;
}
function previousPage() {
  // Add logic to navigate to the previous page
  console.log('Navigating to the previous page');
  currentPage--;
}

function toggleLights() {
  // Toggle between dark blue and light blue backgrounds
  const body = document.body;
  const lightsButton = document.getElementById('lightsButton');

  if (body.style.backgroundColor === 'rgb(0, 31, 63)') {
    body.style.backgroundColor = '#87CEEB'; // Light Blue
    lightsButton.style.backgroundColor = '#001f3f'; // Dark Blue Button
  } else {
    body.style.backgroundColor = '#001f3f'; // Dark Blue
    lightsButton.style.backgroundColor = '#87CEEB'; // Light Blue Button
  }
}
function toggleLights() {
  const body = document.body;
  const routineTitle = document.getElementById('routineTitle');
  const routineSteps = document.getElementsByClassName('routineStep');

  if (body.style.backgroundColor === 'rgb(0, 31, 63)') {
    body.style.backgroundColor = '#87CEEB'; // Light Blue
    routineTitle.style.color = '#001f3f'; // Dark Blue Title
    for (let step of routineSteps) {
      step.style.backgroundColor = '#87CEEB'; // Light Blue Steps
    }
  } else {
    body.style.backgroundColor = '#001f3f'; // Dark Blue
    routineTitle.style.color = '#fff'; // White Title
    for (let step of routineSteps) {
      step.style.backgroundColor = '#0074cc'; // Blue Steps
    }
  }
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
