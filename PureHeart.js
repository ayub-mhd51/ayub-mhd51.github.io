function NewPicture() {

    // Image when mouse hovers over //

    document.getElementById("logo").src = "heart logo.png";

}

function OldPicture() {

    // Image when mouse hovers out //

    document.getElementById("logo").src = "PureHearts_logo.png";

}

function newP() {

    // Image when mouse hovers over //

    document.getElementById("homepic").src = "happy kids.jpg";

}

function oldP() {

    // Image when mouse hovers out //

    document.getElementById("homepic").src = "humanaid.jpg";

}

function oldPic() {

    document.getElementById("about").src = "medical.jpg";
}

function newPic() {

    document.getElementById("about").src = "pantry.jpg"
}

function queries() {

    var name = document.getElementById("name").value;
    alert("Thank you " + name + " for submitting your query!")

}

function myFunc() {
    var x =
        document.getElementById("myCode");
    if (x.type === "password") {
        x.type === "text";
    } else {
        x.type = "password";
    }
}