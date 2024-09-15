
const personalInfoBtn = document.getElementById('personal-info-btn')!;
const educationBtn = document.getElementById('education-btn')!;
const skillsBtn = document.getElementById('skills-btn')!;
const experienceBtn = document.getElementById('experience-btn')!;

const personalInfoSection = document.getElementById('personal-info')!;
const educationSection = document.getElementById('education')!;
const skillsSection = document.getElementById('skills')!;
const experienceSection = document.getElementById('experience')!;

// Function to hide all sections
function hideAllSections() {
    personalInfoSection.style.display = 'none';
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
}

// Show only the selected section
personalInfoBtn.addEventListener('click', () => {
    hideAllSections();
    personalInfoSection.style.display = 'block';
});

educationBtn.addEventListener('click', () => {
    hideAllSections();
    educationSection.style.display = 'block';
});

skillsBtn.addEventListener('click', () => {
    hideAllSections();
    skillsSection.style.display = 'block';
});

experienceBtn.addEventListener('click', () => {
    hideAllSections();
    experienceSection.style.display = 'block';
});
