window.addEventListener("DOMContentLoaded", function(){
  
  // Piano Rotation Images:
  const pianoArray = [
      { page: 42, url: "images/theory1.jpg" },
      { page: 32, url: "images/theory2.jpg" },
      { page: 46, url: "images/theory3.jpg" },
      { page: 61, url: "images/theory4.jpg" }
  ];

  let currPianoImage = 0;
  const rotatingPiano = document.querySelector("#rotating-pages");

  // Set initial image source
  rotatingPiano.src = pianoArray[currPianoImage].url;

  // Use setInterval to change to the next image in the array every 4 seconds
  setInterval(changePianoImg, 4000);

  function changePianoImg() {
      currPianoImage++;
      console.log(currPianoImage); 
      if (currPianoImage === pianoArray.length) {
          currPianoImage = 0;
      }
      rotatingPiano.src = pianoArray[currPianoImage].url; 
      console.log(rotatingPiano.src); 
  }
});
