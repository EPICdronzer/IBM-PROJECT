function calculateCalories() {
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const activity = document.getElementById('activity').value;

  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  let calories;
  switch (activity) {
    case 'sedentary':
      calories = bmr * 1.2;
      break;
    case 'light':
      calories = bmr * 1.375;
      break;
    case 'moderate':
      calories = bmr * 1.55;
      break;
    case 'active':
      calories = bmr * 1.725;
      break;
    default:
      calories = bmr * 1.2;
  }

  const resultElement = document.getElementById('calories-result');
  resultElement.innerHTML = `<p>Your daily calorie requirement is: ${calories.toFixed(2)} calories.</p>`;
}

function clearForm() {
  document.getElementById('age').value = '';
  document.querySelector('input[name="gender"][value="male"]').checked = true;
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('activity').value = 'sedentary';
  document.getElementById('calories-result').innerText = '';
}

function calculateEnergy() {
  const kcal = document.getElementById('kcal').value;
  const kj = kcal * 4.184;
  document.getElementById('kj').value = kj.toFixed(2);

  const energyResultElement = document.getElementById('energy-result');
  energyResultElement.innerHTML = `<p>${kcal} KCAL is equivalent to ${kj.toFixed(2)} KJ.</p>`;
}

function clearEnergyForm() {
  document.getElementById('kcal').value = '';
  document.getElementById('kj').value = '';
  document.getElementById('energy-result').innerText = '';
}
