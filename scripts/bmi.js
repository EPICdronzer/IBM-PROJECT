
function calculateCalories() {

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  

  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    alert('Please enter valid height and weight values.');
    return;
  }


  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  

  let bmiCategory = '';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight';
  } else if (bmi >= 30) {
    bmiCategory = 'Obesity';
  }


  const bmiResultDiv = document.getElementById('bmi-result');
  bmiResultDiv.innerHTML = `
    <p>Your BMI is: <strong>${bmi.toFixed(2)}</strong></p>
    <p>Category: <strong>${bmiCategory}</strong></p>
  `;
}


function clearForm() {
  document.getElementById('age').value = '';
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('bmi-result').innerHTML = '';
}
