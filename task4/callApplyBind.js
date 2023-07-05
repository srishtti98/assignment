

const backpack = {
    name: ' Everyday Backpack',
    volume : 30 ,
    color: "grey" ,
    pocketNum : 15 ,
    starpLength :{
       left: 26,
       right : 26,

    },
    bagOpenClose : false,

}

const laptop = {
    name : "Laptop Bag" ,
    volume : 25 ,
    color : "black" ,
    pocketNum : 5,
    starpLength : {
        left : 20,
        right : 20,
    },
    bagOpenClose : false,
}

function toggleLid(lidstatus){
    this.bagOpenClose = lidstatus;

}

function newStrapLength(lengthLeft , lengthRight){
    this.starpLength.left = lengthLeft;
    this.starpLength.right = lengthRight;
}

toggleLid.call(backpack, true);
toggleLid.call(laptop , false);

newStrapLength.apply(backpack , [ 23 , 23]);

var newLength = newStrapLength.bind(backpack);
var bagOpCL = toggleLid.bind(laptop);

newLength(25, 25);

console.log(laptop)

