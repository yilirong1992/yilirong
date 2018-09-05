let navlis = document.querySelectorAll(".nav li");
let ul = document.querySelectorAll(".ul");
for (let i = 0; i < navlis.length; i++) {
    navlis[i].onclick = () => {
        //alert(1)
        changeImg(i)
    }
}

let changeImg = (index) => {
    for (var j = 0; j < navlis.length; j++) {
        ul[j].style.display = "none";
        navlis[j].className = "";
    }
    ul[index].style.display = "block";
    navlis[index].className = "active"
}