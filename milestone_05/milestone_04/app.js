document.addEventListener("DOMContentLoaded", function () {
    var addExperienceButton = document.getElementById("add-experience");
    var addEducationButton = document.getElementById("add-education");
    var addSkillButton = document.getElementById("add-skill");
    var generateResumeButton = document.getElementById("generate-resume");
    addExperienceButton.addEventListener("click", function () {
        var experienceList = document.getElementById("experience-list");
        var experienceItem = document.createElement("div");
        experienceItem.className = "experience-item";
        experienceItem.innerHTML = "\n            <input type=\"text\" placeholder=\"Job Title\" class=\"job-title\" required>\n            <input type=\"text\" placeholder=\"Company/Organization Name\" class=\"company-name\" required>\n            <button type=\"button\" class=\"remove-btn\"><i class=\"fa-solid fa-minus\"></i></button>\n        ";
        experienceList.appendChild(experienceItem);
        attachRemoveButtonEvent(experienceItem);
    });
    addEducationButton.addEventListener("click", function () {
        var educationList = document.getElementById("education-list");
        var educationItem = document.createElement("div");
        educationItem.className = "education-item";
        educationItem.innerHTML = "\n            <input type=\"text\" placeholder=\"School/College Name\" class=\"school-name\" required>\n            <input type=\"text\" placeholder=\"Degree\" class=\"degree\" required>\n            <button type=\"button\" class=\"remove-btn\"><i class=\"fa-solid fa-minus\"></i></button>\n        ";
        educationList.appendChild(educationItem);
        attachRemoveButtonEvent(educationItem);
    });
    addSkillButton.addEventListener("click", function () {
        var skillsList = document.getElementById("skills-list");
        var skillItem = document.createElement("div");
        skillItem.className = "skill-item";
        skillItem.innerHTML = "\n            <input type=\"text\" placeholder=\"Skill\" class=\"skill\" required>\n            <button type=\"button\" class=\"remove-btn\"><i class=\"fa-solid fa-minus\"></i></button>\n        ";
        skillsList.appendChild(skillItem);
        attachRemoveButtonEvent(skillItem);
    });
    function attachRemoveButtonEvent(item) {
        var removeButton = item.querySelector(".remove-btn");
        removeButton.addEventListener("click", function () {
            item.remove();
        });
    }
    //     generateResumeButton.addEventListener("click", () => {
    //         const name = (document.getElementById("name") as HTMLInputElement).value;
    //         const designation = (document.getElementById("designation") as HTMLInputElement).value;
    //         const phone = (document.getElementById("phone") as HTMLInputElement).value;
    //         const email = (document.getElementById("email") as HTMLInputElement).value;
    //         const social = (document.getElementById("social") as HTMLInputElement).value;
    //         const profilePic = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];
    //         let resumeOutput = `<h2>Resume</h2>`;
    //         if (profilePic) {
    //             resumeOutput += `<img src="${URL.createObjectURL(profilePic)}" alt="Profile Picture">`;
    //         }
    //         resumeOutput += `<h5>${name}</h5><h4>${designation}</h4><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Social: ${social}</p>`;
    //         const experienceItems = document.querySelectorAll(".experience-item");
    //         resumeOutput += `<h3>Experience</h3>`;
    //         experienceItems.forEach(item => {
    //             const jobTitle = (item.querySelector(".job-title") as HTMLInputElement).value;
    //             const companyName = (item.querySelector(".company-name") as HTMLInputElement).value;
    //             resumeOutput += `<p>${jobTitle} at ${companyName}</p>`;
    //         });
    //         const educationItems = document.querySelectorAll(".education-item");
    //         resumeOutput += `<h3>Education</h3>`;
    //         educationItems.forEach(item => {
    //             const schoolName = (item.querySelector(".school-name") as HTMLInputElement).value;
    //             const degree = (item.querySelector(".degree") as HTMLInputElement).value;
    //             resumeOutput += `<p>${degree} from ${schoolName}</p>`;
    //         });
    //         const skillItems = document.querySelectorAll(".skill-item");
    //         resumeOutput += `<h3>Skills</h3>`;
    //         skillItems.forEach(item => {
    //             const skill = (item.querySelector(".skill") as HTMLInputElement).value;
    //             resumeOutput += `<p>${skill}</p>`;
    //         });
    //         const resumeOutputDiv = document.getElementById("resume-output") as HTMLDivElement;
    //         resumeOutputDiv.innerHTML = resumeOutput;
    //         resumeOutputDiv.style.display = "block";
    //     });
    // });
    generateResumeButton.addEventListener("click", function () {
        var _a;
        var name = document.getElementById("name").value;
        var designation = document.getElementById("designation").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var social = document.getElementById("social").value;
        var profilePic = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
        var resumeOutput = "<div class=\"resume-header\">";
        if (profilePic) {
            resumeOutput += "<img src=\"".concat(URL.createObjectURL(profilePic), "\" alt=\"Profile Picture\">");
        }
        resumeOutput += "<div class=\"textAlign\" ><h5>".concat(name, "</h5><h6>").concat(designation, "</h6><p class=\"phone\">Phone: ").concat(phone, "</p><p class=\"email\">Email: ").concat(email, "</p><p>Social: ").concat(social, "</p></div></div>");
        // Experience Section
        resumeOutput += "<div class=\"resume-section\"><h3>Experience</h3>";
        var experienceItems = document.querySelectorAll(".experience-item");
        experienceItems.forEach(function (item) {
            var jobTitle = item.querySelector(".job-title").value;
            var companyName = item.querySelector(".company-name").value;
            resumeOutput += "<div class=\"resume-item\"><p>".concat(jobTitle, "</p>at<p>").concat(companyName, "</p></div>");
        });
        resumeOutput += "</div>";
        // Education Section
        resumeOutput += "<div class=\"resume-section\"><h3>Education</h3>";
        var educationItems = document.querySelectorAll(".education-item");
        educationItems.forEach(function (item) {
            var schoolName = item.querySelector(".school-name").value;
            var degree = item.querySelector(".degree").value;
            resumeOutput += "<div class=\"resume-item\"><p>".concat(degree, "</p>from<p>").concat(schoolName, "</p></div>");
        });
        resumeOutput += "</div>";
        // Skills Section
        resumeOutput += "<div class=\"resume-section\"><h3>Skills</h3><div id=\"skills-list\">";
        var skillItems = document.querySelectorAll(".skill-item");
        skillItems.forEach(function (item) {
            var skill = item.querySelector(".skill").value;
            resumeOutput += "<p>".concat(skill, "</p>");
        });
        resumeOutput += "</div></div>";
        var resumeOutputDiv = document.getElementById("resume-output");
        resumeOutputDiv.innerHTML = resumeOutput;
        resumeOutputDiv.style.display = "block";
    });
    generateResumeButton.addEventListener("click", function () {
        var _a;
        var name = document.getElementById("name").value;
        var designation = document.getElementById("designation").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var social = document.getElementById("social").value;
        var profilePic = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
        var resumeOutput = "<div class=\"resume-header\">";
        // Profile Picture
        if (profilePic) {
            resumeOutput += "<img src=\"".concat(URL.createObjectURL(profilePic), "\" alt=\"Profile Picture\" contenteditable=\"false\">");
        }
        // Personal Info with contenteditable
        resumeOutput += "\n            <div class=\"textAlign\">\n                <h5 contenteditable=\"true\">".concat(name, "</h5>\n                <h6 contenteditable=\"true\">").concat(designation, "</h6>\n                <p class=\"phone\" contenteditable=\"true\">Phone: ").concat(phone, "</p>\n                <p class=\"email\" contenteditable=\"true\">Email: ").concat(email, "</p>\n                <p contenteditable=\"true\">Social: ").concat(social, "</p>\n            </div>\n        </div>");
        // Experience Section with contenteditable
        resumeOutput += "<div class=\"resume-section\"><h3>Experience</h3>";
        var experienceItems = document.querySelectorAll(".experience-item");
        experienceItems.forEach(function (item) {
            var jobTitle = item.querySelector(".job-title").value;
            var companyName = item.querySelector(".company-name").value;
            resumeOutput += "\n                <div class=\"resume-item\">\n                    <p contenteditable=\"true\">".concat(jobTitle, "</p>\n                    <p contenteditable=\"true\">at ").concat(companyName, "</p>\n                </div>");
        });
        resumeOutput += "</div>";
        // Education Section with contenteditable
        resumeOutput += "<div class=\"resume-section\"><h3>Education</h3>";
        var educationItems = document.querySelectorAll(".education-item");
        educationItems.forEach(function (item) {
            var schoolName = item.querySelector(".school-name").value;
            var degree = item.querySelector(".degree").value;
            resumeOutput += "\n                <div class=\"resume-item\">\n                    <p contenteditable=\"true\">".concat(degree, "</p>\n                    <p contenteditable=\"true\">from ").concat(schoolName, "</p>\n                </div>");
        });
        resumeOutput += "</div>";
        // Skills Section with contenteditable
        resumeOutput += "<div class=\"resume-section\"><h3>Skills</h3><div id=\"skills-list\">";
        var skillItems = document.querySelectorAll(".skill-item");
        skillItems.forEach(function (item) {
            var skill = item.querySelector(".skill").value;
            resumeOutput += "<p contenteditable=\"true\">".concat(skill, "</p>");
        });
        resumeOutput += "</div></div>";
        // Display the generated resume
        var resumeOutputDiv = document.getElementById("resume-output");
        resumeOutputDiv.innerHTML = resumeOutput;
        resumeOutputDiv.style.display = "block";
    });
});
