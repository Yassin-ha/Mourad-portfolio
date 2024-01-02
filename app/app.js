const barsBtn = document.querySelector("#bars");
const listMenu = document.getElementById("list-menu")

barsBtn.addEventListener("click", () => {
    if(listMenu.classList.contains("close")) {
        listMenu.classList.remove("close")
        listMenu.classList.add("open")
        console.log("true");
    } else {
        listMenu.classList.remove("open")
        listMenu.classList.add("close")
        console.log("false");
    }
    console.log("ok");
})