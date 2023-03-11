var nav1inks = document.getElementById("nav1inks");
console.log("nav1inks : ", nav1inks);
function showmenu() {
    console.log("something : ");
    nav1inks.style.right = "0";
}
function hidemenu() {
    console.log("hidemenu called: ");
    nav1inks.style.right = "-270";
}