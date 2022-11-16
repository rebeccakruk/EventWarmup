function handleButtonClick(event){
    Cookies.set(`cupcakeConsumed` , `true`);
}

function login(){
    Cookies.set(`username`, `bestUser`);
}

function logout(){
    Cookies.remove(`username`);
}
let username = Cookies.get(`username`);
document.getElementById(`loginButton`).addEventListener(`click`, login);
document.getElementById(`logoutButton`).addEventListener(`click`, logout);
if(username !=undefined){
    document.getElementById(`userGreeting`).innerText = `Hello ${username}`;
}

document.getElementById(`cupcakeButton`).addEventListener(`click`, handleButtonClick);


function addH3() {
    let header = document.getElementById(`header`);
    header.insertAdjacentHTML(`afterend`, `<h3>Secret hover!</h3>`);
}

function removeH3() {
    let h3 = document.querySelector(`#header + h3`);
    h3.remove();
}

function makeBlue(event) {
    if (event.code == `KeyP`) {
        document.body.style.backgroundColor = `dodgerblue`;
    } else {
        // console.log(event.key);
    }
}

function makeBisque(event) {
    if (event.code == `KeyP`) {
        document.body.style.backgroundColor = `bisque`;
    } else {
        // console.log(event.key);
    }
}

function changePicture(event) {
    console.log(`Cupcake is #{isCupcake}`);
    isCupcake = !isCupcake;
    if (isCupcake) {
        isCupcake = false;
        event.target.setAttribute(`src`, muffinLink);
    } else {
        isCupcake = true;
        event.target.setAttribute(`src`, cupcakeLink);
    }
}

const cupcakeLink = `https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg`;
const muffinLink = `https://theviewfromgreatisland.com/wp-content/uploads/2021/01/chocolate-muffins-17-600x400.jpg`;

let heading = document.getElementById(`header`);
heading.addEventListener(`mouseover`, addH3);
// heading.addEventListener(`mouseleave`, removeH3);
document.body.addEventListener(`keydown`, makeBlue);
document.body.addEventListener(`keyUp`, makeBisque);

let isCupcake = true;
document.getElementById(`pastry`).addEventListener(`click`, changePicture);
