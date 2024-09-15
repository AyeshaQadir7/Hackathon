// Get the buttons and sections by their IDs
var personalInfoBtn = document.getElementById('personal-info-btn');
var educationBtn = document.getElementById('education-btn');
var skillsBtn = document.getElementById('skills-btn');
var experienceBtn = document.getElementById('experience-btn');
var personalInfoSection = document.getElementById('personal-info');
var educationSection = document.getElementById('education');
var skillsSection = document.getElementById('skills');
var experienceSection = document.getElementById('experience');
// Function to hide all sections
function hideAllSections() {
    personalInfoSection.style.display = 'none';
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
}
// Show only the selected section
personalInfoBtn.addEventListener('click', function () {
    hideAllSections();
    personalInfoSection.style.display = 'block';
});
educationBtn.addEventListener('click', function () {
    hideAllSections();
    educationSection.style.display = 'block';
});
skillsBtn.addEventListener('click', function () {
    hideAllSections();
    skillsSection.style.display = 'block';
});
experienceBtn.addEventListener('click', function () {
    hideAllSections();
    experienceSection.style.display = 'block';
});
