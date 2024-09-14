// const field_ = document.getElementById("fset") as HTMLFieldSetElement;
// const hides = document.getElementById("hide") as HTMLElement
// hides.addEventListener("click", function () {
//     field_.style.display = field_.style.display === "none" ? "block" : "none";
// })
var btnDis = document.getElementById("btns");
var container = document.getElementById("contMain");
var form_rs = document.getElementById("form_resume");
var formOutPut_rs = document.getElementById("my_resume");
var edit_btn = document.getElementById("edit");
var share_btn = document.getElementById("share");
// const uniqlink = document.getElementById("sharelink") as HTMLAnchorElement;
var down_btn = document.getElementById("download");
var btn_div = document.getElementById("btn_div");
form_rs.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var user = document.getElementById("name").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var image = document.getElementById("img");
    var secndry = document.getElementById("Secondry").value;
    var betchler = document.getElementById("Betchler").value;
    var master = document.getElementById("Master").value;
    var skill1 = document.getElementById("skill_1").value;
    var skill2 = document.getElementById("skill_2").value;
    var skill3 = document.getElementById("skill_3").value;
    var experience = document.getElementById("experience").value;
    var company = document.getElementById("c_name").value;
    var position = document.getElementById("position").value;
    var profile = (_a = image.files) === null || _a === void 0 ? void 0 : _a[0];
    var imageUrl = profile ? URL.createObjectURL(profile) : "";
    var formdata = { name: name, email: email, number: number, Image: Image, secndry: secndry, betchler: betchler, master: master, skill1: skill1, skill2: skill2, skill3: skill3, experience: experience, company: company, position: position };
    localStorage.setItem(user, JSON.stringify(formdata));
    // Generating resume section //    
    var finaleREsume = "\n    <h3 style = \"text-align: center; background-color: rgb(6, 138, 6); display: block; width: 220px; color:white; margin:0px auto 0px auto;\">My Simple Cutee Resume</h3>\n    <div style = \"margin: 0px auto 20px auto; width: 250px;\">\n    <img style = \"margin: 0px auto 0px auto; display: block;\" src = \"".concat(imageUrl, "\" alt =\"profile\" width=\"70%\" height=\"180px\"></div>\n\n\n    <div style = \"margin: 0px auto  10px auto; width: 300px; border: 1px solid green;\">\n    <h4 style = \"margin: 0px auto -10px 10px;\">Personal Information</h4> \n    <ul style=\"list-style-type: none;\">\n    <li style = \"margin-bottom: 3px;\">Name: <span contenteditable=\"true\">").concat(name, "</span>.</li>\n    <li style = \"margin-bottom: 3px;\">Email: <span contenteditable=\"true\">").concat(email, "</span>.</li>\n    <li style = \"margin-bottom: 3px;\">Number: <span contenteditable=\"true\">").concat(number, "</span>.</li>\n    </ul>\n    </div>\n\n\n        <div style = \"margin: 0px auto  10px auto; width: 300px; border: 1px solid green;\">\n    <h4 style = \"margin: 0px auto -10px 10px;\">Education</h4> \n    <ul style=\"list-style-type: none;\">\n    <li style = \"margin-bottom: 3px;\">Secondry: <span contenteditable=\"true\">").concat(secndry, "</span>.</li>\n    <li style = \"margin-bottom: 3px;\">Master: <span contenteditable=\"true\">").concat(betchler, "</span>.</li>\n    <li style = \"margin-bottom: 3px;\">Number: <span contenteditable=\"true\">").concat(master, "</span>.</li>\n    </ul>\n    </div>\n\n    <div style = \"margin: 0px auto  10px auto; width: 300px; border: 1px solid green;\">\n    <h4 style = \"margin: 0px auto -10px 10px;\">Skills</h4> \n    <ul style=\"list-style-type: none;\">\n    <li style = \"margin-bottom: 3px;\">Skill.01: <span contenteditable=\"true\">").concat(skill1, "</span>.</li>\n    <li style = \"margin-bottom: 3px;\">Skill.02: <span contenteditable=\"true\">").concat(skill2, "</span>.</li>\n    <li style = \"margin-bottom: 3px;\">Skill.03: <span contenteditable=\"true\">").concat(skill3, "</span>.</li>\n    </ul>\n    </div>\n\n    <div style = \"margin: 0px auto  10px auto; width: 300px; border: 1px solid green;\">\n    <h4 style = \"margin: 0px auto -10px 10px;\">Experience</h4> \n    <ul style=\"list-style-type: none;\">\n    <li style = \"margin-bottom: 3px;\">Experience: <span contenteditable=\"true\">").concat(experience, "</span>.</li>\n    <li style = \"margin-bottom: 3px;\">Com-Name: <span contenteditable=\"true\">").concat(company, "</span>.</li>\n    <li style = \"margin-bottom: 3px;\">Position: <span contenteditable=\"true\">").concat(position, "</span>.</li>\n    </ul>\n    </div>\n\n    ");
    // Display resume in page
    formOutPut_rs.innerHTML = finaleREsume;
});
// Handle PDF download
down_btn.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save
    btn_div.style.display = "none";
    // btn_div.remove();
});
btnDis.addEventListener("click", function () {
    container.style.display = "none";
    formOutPut_rs.style.display = "block";
    btn_div.style.display = "block";
});
edit_btn.addEventListener("click", function () {
    container.style.display = "block";
    formOutPut_rs.style.display = "none";
    btn_div.style.display = "none";
});
