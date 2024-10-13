console.log("Hello World");
const name = "Elizabeth Booth";
let hasDownloadedResume = false;

function resumeAlert() {
  if (hasDownloadedResume == false) {
    setTimeout(() => {
      alert("Your resume downloaded successfully!");
    }, 2000);
  }
  hasDownloadedResume = true;
}

function showGreeting(name) {
  let todaysDate = new Date();
  let theHour = todaysDate.getHours();
  if (theHour < 12) {
    return "Good morning my name is " + name + " welcome to my portfolio";
  } else if (theHour === 12) {
    return "Good afternoon, my name is " + name + ", welcome to my portfolio.";
  } else if (theHour > 12 && theHour < 18) {
    return "Good afternoon my name is " + name + " welcome to my portfolio";
  } else if (theHour === 18) {
    return "Good evening, my name is " + name + ", welcome to my portfolio.";
  } else if (theHour > 18) {
    return "Good evening my name is " + name + " welcome to my portfolio";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("greetingSec").innerHTML = showGreeting(name);
});

function daysUntilDeadline(projectdate) {
  let projectCast = new Date(projectdate);
  let currentDay = new Date();
  let difference = projectCast - currentDay;
  let numDays = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return "Days until complete: " + numDays;
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("daysTil").innerHTML = daysUntilDeadline("11/1/2024");
});
