$(document).ready(function() {
  // click event listeners on navbar links
  const fileLocation = "src/components/content/"
  $("#content").load(fileLocation+"profile.html");
  $("#profile-link").click(function() {
      $("#content").load(fileLocation+"profile.html");
  });

  $("#skill-link").click(function() {
    $("#content").load(fileLocation+"skill.html");
  });

  $("#contact-link").click(function() {
    $("#content").load(fileLocation+"contact.html");
  });

  $("#projects-link").click(function() {
      $("#content").load(fileLocation+"projects.html");
  });
});