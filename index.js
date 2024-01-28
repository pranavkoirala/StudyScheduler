document.getElementById("beginBtn").addEventListener("click", function () {
  document.body.classList.add("wash-animation");

  setTimeout(function () {
    document.getElementById("introScreen").classList.add("hidden");
    document.getElementById("inputScreen").style.display = "flex";
    document.getElementById("inputScreen").classList.remove("hidden");
  }, 250);
});

document.getElementById("submitBtn").addEventListener("click", function () {
  const subject = document.getElementById("subject").value;
  const assignment = document.getElementById("assignment").value;
  const dueDate = document.getElementById("dueDate").value;
  const studyDuration = document.getElementById("studyDuration").value;
  const priorKnowledge = document.getElementById("priorKnowledge").value;
  const studyMaterials = document.getElementById("studyMaterials").value;
  const preferredEnvironment = document.getElementById(
    "preferredEnvironment"
  ).value;
  const timeOfDay = document.getElementById("timeOfDay").value;

  if (priorKnowledge < 1 || priorKnowledge > 10) {
    alert("Please enter a number between 1 and 10 for Prior Knowledge.");
    return;
  }
  const additionalStudyTime = 15 * (10 - priorKnowledge);

  const message = `You should study for ${assignment} about ${subject}, which is due on ${dueDate} every ${timeOfDay} in ${preferredEnvironment} for ${studyDuration} minutes. Try to use your listed Study Materials, \`${studyMaterials}\`!`;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.textContent = message;

  // Hide elements
  const elementsToHide = document.querySelectorAll(".study-element");
  elementsToHide.forEach((element) => {
    element.style.display = "none";
  });

  document.body.appendChild(messageDiv);

  if (additionalStudyTime > 0) {
    const additionalStudyMessage = `If you would like to study for ${additionalStudyTime} more minutes, your results would likely be better.\n\nWould you like me to add this to your Google Calendar?`;

    const additionalStudyMessageDiv = document.createElement("div");
    additionalStudyMessageDiv.classList.add("message");
    additionalStudyMessageDiv.textContent = additionalStudyMessage;

    document.body.appendChild(additionalStudyMessageDiv);
  }

  const addToCalendarBtn = document.createElement("button");
  addToCalendarBtn.classList.add("message");
  addToCalendarBtn.classList.add("add-to-calendar-btn");
  addToCalendarBtn.textContent = "Add to Google Calendar";

  addToCalendarBtn.addEventListener("click", function () {
    const subject = document.getElementById("subject").value;
    const assignment = document.getElementById("assignment").value;
    const dueDate = document.getElementById("dueDate").value;
    const timeOfDay = document.getElementById("timeOfDay").value;

    let title = `${assignment} - ${subject}`;
    let description = `Study for ${assignment} about ${subject}. Use your listed Study Materials, ${studyMaterials}!`;
    let time = "";

    if (timeOfDay === "morning") {
      time = "09:00";
    } else if (timeOfDay === "afternoon") {
      time = "14:00";
    } else if (timeOfDay === "evening") {
      time = "19:00";
    }

    const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&details=${encodeURIComponent(description)}&dates=${encodeURIComponent(
      dueDate + "T" + time + ":00Z"
    )}`;

    window.open(calendarLink);
  });

  document.body.appendChild(addToCalendarBtn);
});
