function calculateHydration() {
    const weight = parseFloat(document.getElementById('weight').value);
    const exercise = parseFloat(document.getElementById('exercise').value);
    const climate = document.querySelector('input[name="climate"]:checked').value;

    if (isNaN(weight) || isNaN(exercise) || weight <= 0 || exercise < 0) {
        document.getElementById('hydration-result').innerText = 'Please enter valid weight and exercise values.';
        return;
    }

    let dailyWaterIntake = weight * 0.033;

    if (exercise > 30) {
        dailyWaterIntake += (exercise - 30) * 0.012;
    }

    if (climate === 'yes') {
        dailyWaterIntake += 0.5;
    }

    document.getElementById('hydration-result').innerText = `You should drink approximately ${dailyWaterIntake.toFixed(2)} liters of water daily.`;
}

function clearForm() {
    document.getElementById('weight').value = '';
    document.getElementById('exercise').value = '';
    document.querySelector('input[name="climate"][value="yes"]').checked = true;
    document.getElementById('hydration-result').innerText = '';
}

document.querySelector('.calculate-button').addEventListener('click', calculateHydration);
document.querySelector('.clear-button').addEventListener('click', clearForm);
