function convertToFeet() {
    var cmInput = document.getElementById("cmInput").value;
    var feetOutput = document.getElementById("feetOutput");
    
    // Perform the conversion
    var feet = cmInput / 30.48; // 1 foot = 30.48 centimeters
    
    // Display the result
    feetOutput.innerHTML = feet.toFixed(2) + " ft";
  }
  