$(document).ready(function() {
    const bar = `
      <div class="progress mb-3">
        <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    `
    var skills = [
      { name: "Bootstrap 5", expertise: 90 },
      { name: "Spring Boot", expertise: 80 },
      { name: "Laravel", expertise: 75 },
      { name: "Sass", expertise: 80 },
      { name: "PHP", expertise: 80 },
      { name: "Java", expertise: 85 },
      { name: "CSS", expertise: 85 },
      { name: "HTML", expertise: 90 },
      { name: "jQuery", expertise: 85 },
      { name: "React", expertise: 85 },
      { name: "MySQL", expertise: 90 },
      { name: "Javascript", expertise: 90 },
      { name: "Liferay", expertise: 80 }
    ];
  
    for (var i = 0; i < skills.length; i++) {
      var skill = skills[i];
      var progress = `
        <div class="progress bg-dark mb-3">
          <div class="progress-bar " role="progressbar" aria-label="${skill.name} skill level" style="width: ${skill.expertise}%" aria-valuenow="${skill.expertise}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      `;
      var column = i < 7 ? "#left" : "#right";
      $(column).append("<h5>" + skill.name + "</h5>");
      $(column).append(progress);
    }
  });
  