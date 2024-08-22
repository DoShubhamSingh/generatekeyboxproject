document.addEventListener('keydown', function(event) {
    const keyName = event.key;
    const keyCode = event.keyCode;

    document.getElementById('key').textContent = keyName;
    document.getElementById('key-box').textContent = keyCode;
});


// Create a new Audio object
const sound = new Audio('sound.mp3');

// Add an event listener to the document for keydown events
document.addEventListener('keydown', () => {
  // Play the sound when a key is pressed
  sound.play();
});
