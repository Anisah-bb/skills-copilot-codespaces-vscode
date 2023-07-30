function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    var projectsBtn = document.getElementById("projectsBtn");
    var contactBtn = document.getElementById("contactBtn");
    var aboutBtn = document.getElementById("aboutBtn");
    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";
    memberBtn.style.backgroundColor = "#f5f5f5";
    skillsBtn.style.backgroundColor = "#fff";
    projectsBtn.style.backgroundColor = "#fff";
    contactBtn.style.backgroundColor = "#fff";
    aboutBtn.style.backgroundColor = "#fff";
}