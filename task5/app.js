var images = ["https://images.pexels.com/photos/10259522/pexels-photo-10259522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/6435219/pexels-photo-6435219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/16894413/pexels-photo-16894413/free-photo-of-aerial-view-of-algae-growing-on-water-surface-by-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/366107/pexels-photo-366107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/2410300/pexels-photo-2410300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/3142002/pexels-photo-3142002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];

var count = 0;

function increaseCount(){
    
    if(count <= images.length-1){
        document.getElementById('slide1').src = `${images[count]}`;
        console.log(count); 
       if(count == images.length-1){
        return count = 0;
       }
    }
    count++;   
}


var newCount = images.length-1;
function decreseCount(){
    
    if(newCount >= 0){
        document.getElementById('slide1').src = `${images[newCount]}`; 
       console.log(newCount);
       if(newCount == 0){
        return newCount = images.length-1;
       }
    }
    newCount--;
    
}

increaseCount();