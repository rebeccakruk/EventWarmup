function addH3(){
    let header = document.getElementById(`header`);
    header.insertAdjacentHTML(`afterend` , `<h3>Secret hover!</h3>`)
}

function removeH3(){
    let h3 = document.querySelector(`#header + h3`)
    h3.remove();
}

// function makeBlue(event){
// // need the event because there was a condition there
// if(event.code == `KeyB'){
// document.body.style.backgroundColor = `dodgerblue`;
// } else {
//     console.log(event.key);
// }
// }

function makeBlue(event){
    if(event.code == `KeyP`){
        document.body.style.backgroundColor = `dodgerblue`;
    } else {
        // console.log(event.key);
    }
}

function makeBisque(event){
    if(event.code == `KeyP`){
        document.body.style.backgroundColor = `bisque`;
    } else {
        // console.log(event.key);
    }
}

function changePicture(event){
    console.log(`Cupcake is #{isCupcake}`);
if(isCupcake){
    isCupcake = false;
  event.target.setAttribute(`src`, `https://theviewfromgreatisland.com/wp-content/uploads/2021/01/chocolate-muffins-17-600x400.jpg`);
} else {
    isCupcake = true;
    event.target.setAttribute(`src`, `https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg`);
}
}

let heading = document.getElementById(`header`);
heading.addEventListener(`mouseover` , addH3);
heading.addEventListener(`mouseleave`, removeH3);
document.body.addEventListener(`keydown`, makeBlue);
document.body.addEventListener(`keyUp`, makeBisque);

let isCupcake = true;
document.getElementById(`pastry`).addEventListener(`click`, changePicture)
