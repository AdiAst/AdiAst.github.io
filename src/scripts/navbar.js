$(document).ready(function() {
  // click event listeners on navbar links
  const fileLocation = "src/components/content/"
  $("#content").load(fileLocation+"profile.html");
$("#profile-link").click(function() {
    $("#content").load(fileLocation+"profile.html");
});
$("#about-link").click(function() {
  $("#content").load(fileLocation+"profile.html");
  history.pushState(null, null, '#about');
});

$("#skill-link").click(function() {
  $("#content").load(fileLocation+"profile.html");
  history.pushState(null, null, '#skill');
});

$("#contact-link").click(function() {
  $("#content").load(fileLocation+"profile.html");
  history.pushState(null, null, '#contact');
});

$("#projects-link").click(function() {
    $("#content").load(fileLocation+"projects.html");
});
});