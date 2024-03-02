var currentLessonIndex = 0;
var tabcontent = document.getElementsByClassName("tabcontent");

function openCity(evt, cityName) {
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function nextLesson(evt) {
  currentLessonIndex++;
  if (currentLessonIndex >= tabcontent.length) {
    currentLessonIndex = 0; // Loop back to the first lesson
  }
  openCity({ currentTarget: document.getElementsByClassName("tablinks")[currentLessonIndex] }, tabcontent[currentLessonIndex].id);
}

document.getElementById("defaultOpen").click();