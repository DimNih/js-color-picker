const colorInput = document.getElementById('colorInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');
    const colorOverlay = document.getElementById('colorOverlay');
    const currentColor = document.getElementById('currentColor');

    // Color Picker
    colorInput.addEventListener('input', (event) => {
      const selectedColor = event.target.value;
      colorDisplay.style.backgroundColor = selectedColor;
      colorOverlay.textContent = selectedColor;
      currentColor.textContent = selectedColor;

      // Glow container efek
      colorDisplay.classList.add("glow");
      setTimeout(() => {
        colorDisplay.classList.remove("glow");
      }, 500); 
      colorDisplay.style.transform = "scale(1.05)";
      setTimeout(() => {
        colorDisplay.style.transform = "scale(1)";
      }, 300); 


    });


/*const colorInput = document.getElementById('colorInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');
    const colorOverlay = document.getElementById('colorOverlay');
    const currentColor = document.getElementById('currentColor');

    // Color Picker
    colorInput.addEventListener('input', (event) => {
      const selectedColor = event.target.value;
      colorDisplay.style.backgroundColor = selectedColor;
      colorOverlay.textContent = selectedColor;
      currentColor.textContent = selectedColor;

      // Glow container efek
      colorDisplay.classList.add("glow");
      setTimeout(() => {
        colorDisplay.classList.remove("glow");
      }, 500); 
      colorDisplay.style.transform = "scale(1.05)";
      setTimeout(() => {
        colorDisplay.style.transform = "scale(1)";
      }, 300); 


    });const colorInput = document.getElementById('colorInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');
    const colorOverlay = document.getElementById('colorOverlay');
    const currentColor = document.getElementById('currentColor');

    // Color Picker
    colorInput.addEventListener('input', (event) => {
      const selectedColor = event.target.value;
      colorDisplay.style.backgroundColor = selectedColor;
      colorOverlay.textContent = selectedColor;
      currentColor.textContent = selectedColor;

      // Glow container efek
      colorDisplay.classList.add("glow");
      setTimeout(() => {
        colorDisplay.classList.remove("glow");
      }, 500); 
      colorDisplay.style.transform = "scale(1.05)";
      setTimeout(() => {
        colorDisplay.style.transform = "scale(1)";
      }, 300); 


    });const colorInput = document.getElementById('colorInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');
    const colorOverlay = document.getElementById('colorOverlay');
    const currentColor = document.getElementById('currentColor');

    // Color Picker
    colorInput.addEventListener('input', (event) => {
      const selectedColor = event.target.value;
      colorDisplay.style.backgroundColor = selectedColor;
      colorOverlay.textContent = selectedColor;
      currentColor.textContent = selectedColor;

      // Glow container efek
      colorDisplay.classList.add("glow");
      setTimeout(() => {
        colorDisplay.classList.remove("glow");
      }, 500); 
      colorDisplay.style.transform = "scale(1.05)";
      setTimeout(() => {
        colorDisplay.style.transform = "scale(1)";
      }, 300); 


    });
