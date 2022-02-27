temp = 0;
menu = document.getElementById("menu");
menu.style.height = "0";
document.getElementById("menuButton").onclick = function () {
    if (menu.style.height == "0px") {
        menu.style.height = menu.scrollHeight + "px";
        temp = menu.scrollHeight;
    } else menu.style.height = "0";
};
var collapsible = document.getElementById("collapsible");
var right = document.getElementById("right");
var bottom = document.getElementById("bottom");
var subMenuItems = document.getElementsByClassName("subMenuItem");
collapsible.onclick = function () {
    if (window.getComputedStyle(bottom).display == "none") {
        right.style.display = "none";
        bottom.style.display = "inline-block";
        for (i = 0; i < subMenuItems.length; i++) {
            subMenuItems[i].style.display = "block";
            subMenuItems[i].style.visibility = "visible";
            subMenuItems[i].style.opacity = "1";
            subMenuItems[i].style.animation = "fade 1s";
        }
        if (window.matchMedia("(max-width: 800px)").matches) menu.style.height = menu.scrollHeight + "px";
    } else {
        right.style.display = "inline-block";
        bottom.style.display = "none";
        for (j = 0; j < subMenuItems.length; j++) {
            subMenuItems[j].style.display = "none";
            subMenuItems[j].style.visibility = "hidden";
            subMenuItems[j].style.opacity = "0";
        }
        if (window.matchMedia("(max-width: 800px)").matches) menu.style.height = temp + "px";
    }
};