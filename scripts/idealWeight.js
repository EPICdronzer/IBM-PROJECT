function calculateIdealWeight() {
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (isNaN(age) || isNaN(height) || height <= 0 || age <= 0) {
        document.getElementById('idealWeight-result').innerText = 'Please enter valid age and height.';
        return;
    }

    let idealWeight;
    if (gender === 'male') {
        idealWeight = (height - 100) - ((height - 150) / 4);
    } else {
        idealWeight = (height - 100) - ((height - 150) / 2.5);
    }

    document.getElementById('idealWeight-result').innerText = `Your ideal weight is approximately ${idealWeight.toFixed(2)} kg.`;
}

function clearForm() {
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.querySelector('input[name="gender"][value="male"]').checked = true;
    document.getElementById('idealWeight-result').innerText = '';
}

document.querySelector('.calculate-button').addEventListener('click', calculateIdealWeight);
document.querySelector('.clear-button').addEventListener('click', clearForm);
