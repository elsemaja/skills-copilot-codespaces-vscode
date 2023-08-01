function skillsMember() {
    var x = document.getElementById("skillsMember");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("skillsMember").style.display = "block";
        document.getElementById("skillsMember").style.display = "flex";
        document.getElementById("skillsMember").style.flexDirection = "column";
        document.getElementById("skillsMember").style.alignItems = "center";
        document.getElementById("skillsMember").style.justifyContent = "center";
        document.getElementById("skillsMember").style.marginTop = "20px";
        document.getElementById("skillsMember").style.marginBottom = "20px";
        document.getElementById("skillsMember").style.marginLeft = "20px";
        document.getElementById("skillsMember").style.marginRight = "20px";
        document.getElementById("skillsMember").style.padding = "20px";
        document.getElementById("skillsMember").style.borderRadius = "20px";
        document.getElementById("skillsMember").style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";
        document.getElementById("skillsMember").style.backgroundColor = "#ffffff";
    } else {
        x.style.display = "none";
    }
}
