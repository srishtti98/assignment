

// click event 

document.querySelector('#myButton').addEventListener('click', function() {
    console.log('Button clicked!');
  });

  
  document.querySelector('#myLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Link clicked!');
  });

  
  document.querySelector('#myImage').addEventListener('click', function() {
    this.src = 'newImage.jpg';
  });

  var listItems = document.querySelectorAll('.myListItem');
listItems.forEach(function(item) {
  item.addEventListener('click', function() {
    console.log('List item clicked: ' + this.textContent);
  });
});


document.addEventListener('click', function(event) {
    console.log('Document clicked at coordinates: ' + event.clientX + ', ' + event.clientY);
  });

  
  // Keydown Event 

  document.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
  });

  //Keypress Event:

  document.addEventListener('keypress', function(event) {
    console.log('Character entered: ' + String.fromCharCode(event));
  });

  
  //Keyup Event:

  document.addEventListener('keyup', function(event) {
    console.log('Key released: ' + event.key);
  });


  // mouseover :

var myElement = document.querySelector('#myElement');

myElement.addEventListener('mouseover', function(event) {
  this.style.backgroundColor = 'red';
});

myElement.addEventListener('mouseout', function(event) {
  this.style.backgroundColor = 'white';
});



var tooltip = document.querySelector('#tooltip');

myElement.addEventListener('mouseover', function(event) {
  tooltip.style.display = 'block';
});

myElement.addEventListener('mouseout', function(event) {
  tooltip.style.display = 'none';
});


var imageElement = document.querySelector('#image');

imageElement.addEventListener('mouseover', function(event) {
  this.src = 'image-hover.jpg';
});

imageElement.addEventListener('mouseout', function(event) {
  this.src = 'image-normal.jpg';
});


var tableRows = document.querySelectorAll('.table-row');

tableRows.forEach(function(row) {
  row.addEventListener('mouseover', function(event) {
    this.classList.add('highlighted');
  });

  row.addEventListener('mouseout', function(event) {
    this.classList.remove('highlighted');
  });
});


var infoElement = document.querySelector('#info');

myElement.addEventListener('mouseover', function(event) {
  infoElement.style.display = 'block';
});

myElement.addEventListener('mouseout', function(event) {
  infoElement.style.display = 'none';
});




  
  
  