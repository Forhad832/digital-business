

const toTop = document.querySelector(".to-top");

window.addEventListener('scroll', () => {
    if(window.pageYOffset >100){
        toTop.classList.add ('active')
    }
    else{
        toTop.classList.remove ('active')
    }
})

// var MenuItems = document.getElementById("MenuItems");

//     MenuItems.style.maxHeight = "0px";

//     function menutoggle(){
//         if(MenuItems.style.maxHeight == "0px"){
//             MenuItems.style.maxHeight ="200px";
//         }
//         else{
//             MenuItems.style.maxHeight ="0px"
//         }
//     }

    var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight = "200px";
        }
        else{
            MenuItems.style.maxHeight = "0px"
        }
    }
