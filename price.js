let hh =
document.getElementsByTagName("h4");

for(let i = 0; i < hh.length; i++){
    hh[i].style.background="white";
hh[i].style.margin="15px";
hh[i].style.padding="10px";
hh[i].style.textTransform="uppercase";
hh[i].style.borderRadius="10px";
}


/*let buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.width = "auto";
}*/

let lil =
document.getElementsByTagName("ul");

for(let i = 0; i < lil.length; i++){
    lil[i].style.color="white";
lil[i].style.textTransform="uppercase";
lil[i].style.border="1px solid white";
lil[i].style.listStyle="none";
}

// 1. Grab the buttons (You already did this!)
let buttons = document.getElementsByClassName("btn");

// 2. Loop through every single button found on the page
for (let i = 0; i < buttons.length; i++) {
    
    // 3. Attach a click event listener to the current button
    buttons[i].addEventListener("click", function(event) {
        
        // Prevents the page from reloading if the button is a link <a> tag
        event.preventDefault(); 
        
        // This popup will appear and show exactly which plan number was clicked!
        alert("Thank you for choosing Plan " + (i + 1) + "!");
        
    });
}
