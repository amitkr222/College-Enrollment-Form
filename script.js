var opacity = 0;
var intervalID = 0;



function addData() {
    var name = document.getElementById("studentName").value;
    var email = document.getElementById("studentEmail").value;
    var website = document.getElementById("studentWebsite").value.replace("http://", "").replace("https://", "");
    var imageLink = document.getElementById("studentImageLink").value;
    var genderMale = document.getElementById("genderMale").checked;
    var genderFemale = document.getElementById("genderFemale").checked;
    var java = document.getElementById("java").checked;
    var html = document.getElementById("html").checked;
    var css = document.getElementById("css").checked;

    var gender = genderMale ? "Male" : "Female";
    var skills = "";
    if (java)
        skills += "Java, "
    if (html)
        skills += "HTML, "
    if (css)
        skills += "CSS, "

    var studentDetailHTML = "<div><b>" + name + "</b><br>" + gender + "<br>" + email + "<br>" + "<a href=\"https://" + website + "\" target=\"_blank\">" + website + "</a>" + "<br>" + skills.slice(0, -2) + "<br><br></div>";
    var studentImageHTML = "<img src=\"" + imageLink + "\" alt=\"image unavailable\">";
    var table = document.getElementById("studentDetailTable");

    var newRow = table.insertRow(table.rows.length);


    var detailCell = newRow.insertCell(0);
    detailCell.innerHTML = studentDetailHTML;
    detailCell.classList.add("studentDetailCell");

    var imageCell = newRow.insertCell(1);
    imageCell.innerHTML = studentImageHTML;
    imageCell.classList.add("tableImage");



}

function clearData() {
    document.getElementById("studentName").value = "";
    document.getElementById("studentName").style.borderColor = "#767676";
    document.getElementById("nameError").style.visibility = "hidden";

    document.getElementById("studentEmail").value = "";
    document.getElementById("studentEmail").style.borderColor = "#767676";
    document.getElementById("emailError").style.visibility = "hidden";

    document.getElementById("studentWebsite").value = "";
    document.getElementById("studentWebsite").style.borderColor = "#767676";
    document.getElementById("websiteError").style.visibility = "hidden";

    document.getElementById("studentImageLink").value = "";
    document.getElementById("studentImageLink").style.borderColor = "#767676";
    document.getElementById("imageLinkError").style.visibility = "hidden";

    document.getElementById("genderMale").checked = true;
    document.getElementById("genderFemale").checked = false;
    document.getElementById("genderError").style.visibility = "hidden";

    document.getElementById("java").checked = true;
    document.getElementById("html").checked = false;
    document.getElementById("css").checked = false;
    document.getElementById("skillsError").style.visibility = "hidden";
}

function validateName() {
    var name = document.getElementById("studentName").value;
    var isValid = false;
    if (name.trim() == "") {
        return false;
    }
    var regx = /^[a-zA-Z ]*$/;
    if (regx.test(name)) {
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;
}

function validateEmail() {
    var email = document.getElementById("studentEmail").value;
    var regx = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;
    if (regx.test(email)) {
        return true;
    } else {
        return false;
    }
}

function validateWebsite() {
    var website = document.getElementById("studentWebsite").value;
    var regx = /^(http\:\/\/)?(https\:\/\/)?(www\.)([a-zA-Z0-9\._-]+)\.([a-zA-Z]{2,8})([a-zA-Z0-9\/\._-]+)$/;
    if (regx.test(website)) {
        return true;
    } else {
        return false;
    }
}

function validImageLink() {
    var imageLink = document.getElementById("studentImageLink").value;

    var regx = /.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)/;
    if (regx.test(imageLink)) {
        return true;
    } else {
        return false;
    }


}

function validateGender() {
    return document.getElementById("genderMale").checked || document.getElementById("genderFemale").checked;
}

function validateSkills() {
    return document.getElementById("java").checked || document.getElementById("html").checked || document.getElementById("css").checked;
}

function validate(form) {
    var isValid;
    var isValidEmail;
    var isValidWebsite;
    var isValidImageLink;
    var isValidGender;
    var isValidSkills;
    if (validateName() == true) {
        document.getElementById("nameError").style.visibility = "hidden";
        document.getElementById("studentName").style.border = "0.5px solid green";
        isValid = true;
    } else {
        document.getElementById("nameError").style.visibility = "visible";
        document.getElementById("studentName").style.border = "0.5px solid red";
        isValid = false;
    }




    if (validateEmail() == true) {
        document.getElementById("emailError").style.visibility = "hidden";
        document.getElementById("studentEmail").style.border = "0.5px solid green";
        isValidEmail = true;
    } else {
        document.getElementById("emailError").style.visibility = "visible";
        document.getElementById("studentEmail").style.border = "0.5px solid red";
        isValidEmail = false;
    }
    isValid = isValidEmail && isValid;

    if (validateWebsite() == true) {
        document.getElementById("websiteError").style.visibility = "hidden";
        document.getElementById("studentWebsite").style.border = "0.5px solid green";
        isValidWebsite = true;
    } else {
        document.getElementById("websiteError").style.visibility = "visible";
        document.getElementById("studentWebsite").style.border = "0.5px solid red";
        isValidWebsite = false;
    }
    isValid = isValidWebsite && isValid;

    if (validImageLink() == true) {
        document.getElementById("imageLinkError").style.visibility = "hidden";
        document.getElementById("studentImageLink").style.border = "0.5px solid green";
        isValidImageLink = true;
    } else {
        document.getElementById("imageLinkError").style.visibility = "visible";
        document.getElementById("studentImageLink").style.border = "0.5px solid red";
        isValidImageLink = false;
    }
    isValid = isValidImageLink && isValid;

    if (validateGender() == true) {
        document.getElementById("genderError").style.visibility = "hidden";
        isValidGender = true;
    } else {
        document.getElementById("genderError").style.visibility = "visible";
        isValidGender = false;
    }
    isValid = isValidGender && isValid;

    if (validateSkills() == true) {
        document.getElementById("skillsError").style.visibility = "hidden";
        isValidSkills = true;
    } else {
        document.getElementById("skillsError").style.visibility = "visible";
        isValidSkills = false;
    }

    isValid = isValid && isValidSkills;

    if (isValid) {
        form.action = "success.html";
        addData();

    }

    return false;
}




var temp = document.getElementById("clearButton").addEventListener("click", clearData());









