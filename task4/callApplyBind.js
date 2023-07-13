

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
    if(lidstatus){
        console.log("Bag is open");
    }else {
        console.log("Bag is closed");
    }

}

function newStrapLength(lengthLeft , lengthRight){
    this.starpLength.left = lengthLeft;
    this.starpLength.right = lengthRight;

    if(lengthLeft === lengthRight){
        console.log("The bag is in normal condition");
    }else if (lengthRight >lengthLeft){
        console.log("The bag length is under abnormal condition. The right strap length is increased, please adjust it. ")
    } else {
        console.log("The bag length is under abnormal condition. The left strap length is increased, please adjust it. ")
    }
}

toggleLid.call(backpack, true);
toggleLid.call(laptop , false);

newStrapLength.apply(backpack , [ 23 , 24]); 

var newLength = newStrapLength.bind(backpack);
var bagOpCL = toggleLid.bind(laptop);

newLength(25, 25); 

console.log(laptop)


