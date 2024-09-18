document.addEventListener("DOMContentLoaded", () => {
    const addExperienceButton = document.getElementById("add-experience") as HTMLButtonElement;
    const addEducationButton = document.getElementById("add-education") as HTMLButtonElement;
    const addSkillButton = document.getElementById("add-skill") as HTMLButtonElement;
    const generateResumeButton = document.getElementById("generate-resume") as HTMLButtonElement;

    addExperienceButton.addEventListener("click", () => {
        const experienceList = document.getElementById("experience-list") as HTMLDivElement;
        const experienceItem = document.createElement("div");
        experienceItem.className = "experience-item";
        experienceItem.innerHTML = `
            <input type="text" placeholder="Job Title" class="job-title" required>
            <input type="text" placeholder="Company/Organization Name" class="company-name" required>
            <button type="button" class="remove-btn"><i class="fa-solid fa-minus"></i></button>
        `;
        experienceList.appendChild(experienceItem);
        attachRemoveButtonEvent(experienceItem);
    });

    addEducationButton.addEventListener("click", () => {
        const educationList = document.getElementById("education-list") as HTMLDivElement;
        const educationItem = document.createElement("div");
        educationItem.className = "education-item";
        educationItem.innerHTML = `
            <input type="text" placeholder="School/College Name" class="school-name" required>
            <input type="text" placeholder="Degree" class="degree" required>
            <button type="button" class="remove-btn"><i class="fa-solid fa-minus"></i></button>
        `;
        educationList.appendChild(educationItem);
        attachRemoveButtonEvent(educationItem);
    });

    addSkillButton.addEventListener("click", () => {
        const skillsList = document.getElementById("skills-list") as HTMLDivElement;
        const skillItem = document.createElement("div");
        skillItem.className = "skill-item";
        skillItem.innerHTML = `
            <input type="text" placeholder="Skill" class="skill" required>
            <button type="button" class="remove-btn"><i class="fa-solid fa-minus"></i></button>
        `;
        skillsList.appendChild(skillItem);
        attachRemoveButtonEvent(skillItem);
    });

    function attachRemoveButtonEvent(item: HTMLElement) {
        const removeButton = item.querySelector(".remove-btn") as HTMLButtonElement;
        removeButton.addEventListener("click", () => {
            item.remove();
        });
    }

    generateResumeButton.addEventListener("click", () => {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const designation = (document.getElementById("designation") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const social = (document.getElementById("social") as HTMLInputElement).value;
        const profilePic = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];


        let resumeOutput = `<div class="resume-header">`;

        if (profilePic) {
            resumeOutput += `<img src="${URL.createObjectURL(profilePic)}" alt="Profile Picture">`;
        }
        resumeOutput += `<div class="textAlign" ><h5>${name}</h5><h6>${designation}</h6><p class="phone">Phone: ${phone}</p><p class="email">Email: ${email}</p><p>Social: ${social}</p></div></div>`;

        // Experience Section
        resumeOutput += `<div class="resume-section"><h3>Experience</h3>`;
        const experienceItems = document.querySelectorAll(".experience-item");
        experienceItems.forEach(item => {
            const jobTitle = (item.querySelector(".job-title") as HTMLInputElement).value;
            const companyName = (item.querySelector(".company-name") as HTMLInputElement).value;
            resumeOutput += `<div class="resume-item"><p>${jobTitle}</p>at<p>${companyName}</p></div>`;
        });
        resumeOutput += `</div>`;

        // Education Section
        resumeOutput += `<div class="resume-section"><h3>Education</h3>`;
        const educationItems = document.querySelectorAll(".education-item");
        educationItems.forEach(item => {
            const schoolName = (item.querySelector(".school-name") as HTMLInputElement).value;
            const degree = (item.querySelector(".degree") as HTMLInputElement).value;
            resumeOutput += `<div class="resume-item"><p>${degree}</p>from<p>${schoolName}</p></div>`;
        });
        resumeOutput += `</div>`;

        // Skills Section
        resumeOutput += `<div class="resume-section"><h3>Skills</h3><div id="skills-list">`;
        const skillItems = document.querySelectorAll(".skill-item");
        skillItems.forEach(item => {
            const skill = (item.querySelector(".skill") as HTMLInputElement).value;
            resumeOutput += `<p>${skill}</p>`;
        });
        resumeOutput += `</div></div>`;

        const resumeOutputDiv = document.getElementById("resume-output") as HTMLDivElement;
        resumeOutputDiv.innerHTML = resumeOutput;
        resumeOutputDiv.style.display = "block";
    });


    generateResumeButton.addEventListener("click", () => {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const designation = (document.getElementById("designation") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const social = (document.getElementById("social") as HTMLInputElement).value;
        const profilePic = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];

        let resumeOutput = `<div class="resume-header">`;

        // Profile Picture
        if (profilePic) {
            resumeOutput += `<img src="${URL.createObjectURL(profilePic)}" alt="Profile Picture" contenteditable="false">`;
        }

        // Personal Info with contenteditable
        resumeOutput += `
            <div class="textAlign">
                <h5 contenteditable="true">${name}</h5>
                <h6 contenteditable="true">${designation}</h6>
                <p class="phone" contenteditable="true">Phone: ${phone}</p>
                <p class="email" contenteditable="true">Email: ${email}</p>
                <p contenteditable="true">Social: ${social}</p>
            </div>
        </div>`;

        // Experience Section with contenteditable
        resumeOutput += `<div class="resume-section"><h3>Experience</h3>`;
        const experienceItems = document.querySelectorAll(".experience-item");
        experienceItems.forEach(item => {
            const jobTitle = (item.querySelector(".job-title") as HTMLInputElement).value;
            const companyName = (item.querySelector(".company-name") as HTMLInputElement).value;
            resumeOutput += `
                <div class="resume-item">
                    <p contenteditable="true">${jobTitle}</p>
                    <p contenteditable="true">at ${companyName}</p>
                </div>`;
        });
        resumeOutput += `</div>`;

        // Education Section with contenteditable
        resumeOutput += `<div class="resume-section"><h3>Education</h3>`;
        const educationItems = document.querySelectorAll(".education-item");
        educationItems.forEach(item => {
            const schoolName = (item.querySelector(".school-name") as HTMLInputElement).value;
            const degree = (item.querySelector(".degree") as HTMLInputElement).value;
            resumeOutput += `
                <div class="resume-item">
                    <p contenteditable="true">${degree}</p>
                    <p contenteditable="true">from ${schoolName}</p>
                </div>`;
        });
        resumeOutput += `</div>`;

        // Skills Section with contenteditable
        resumeOutput += `<div class="resume-section"><h3>Skills</h3><div id="skills-list">`;
        const skillItems = document.querySelectorAll(".skill-item");
        skillItems.forEach(item => {
            const skill = (item.querySelector(".skill") as HTMLInputElement).value;
            resumeOutput += `<p contenteditable="true">${skill}</p>`;
        });
        resumeOutput += `</div></div>`;


        // Display the generated resume
        const resumeOutputDiv = document.getElementById("resume-output") as HTMLDivElement;
        resumeOutputDiv.innerHTML = resumeOutput;
        resumeOutputDiv.style.display = "block";
    });


})

// Link Generating and PDF Downolading
function createResume() {
    const username = (document.getElementById("username") as HTMLInputElement).value;
    if (username) {
        const uniqueUrl = generateUniqueUrl(username);
        console.log("Resume URL generated: ", uniqueUrl);
    } else {
        alert("Please enter your username.");
    }
}

function generateUniqueUrl(username: string): string {
    const baseUrl = "https://yourapp.vercel.app/resume";
    const uniqueUrl = `${baseUrl}?user=${username}`;
    document.getElementById("share-link")!.innerHTML = uniqueUrl;
    return uniqueUrl;
}

function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Link copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

function downloadAsPDF() {
    window.print();
}
