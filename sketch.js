var button;
function setup(){
    createCanvas(1000, 580)
    background(30, 70, 120)
}

function draw(){

    var num = basicattack();
    var n = num.toString();
    
    button = createButton("ATTACK")
    button.position(8, 566.5);
    button.mouseClicked(basicattackDamage);
    button.onClick = (attack)();

    textSize(25), text("Health: ", 80, 570)
    textSize(25), text(n, 165, 570);
    noLoop()
    
    basicattack()

}
let health = (100)

var previoushealth = basicattackDamage();


function attack(){
    var newhealth = (previoushealth - basicattackDamage())
    //console.log(newhealth)
    return(newhealth)

}



function basicattackDamage(){
const decimal = Math.random();
const multiplier = 25;
const times25 = decimal * multiplier;
const final = Math.floor(times25)
let newhealth = health - final
console.log(newhealth)
return(newhealth)
}

function basicattack(){
    const decimal = Math.random();
    const multiplier = 25;
    const times25 = decimal * multiplier;
    const final = Math.floor(times25)
    let newhealth = previoushealth - final
    return(newhealth)
    }