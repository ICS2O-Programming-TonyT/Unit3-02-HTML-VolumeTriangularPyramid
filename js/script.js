// Get the form and result elements
const form = document.getElementById('triangular-form');
const resultDiv = document.getElementById('result');

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Get the base and height and units values from the form
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);
  const units = document.getElementById('units').value;
  // Calculate the Volume Triangular Pyramid 
  const area = 1/3*(base * height);
  // Display the result
  resultDiv.innerHTML = `The area of the triangle is ${area.toFixed(2)} ${units}<sup>2</sup>.`;
});
