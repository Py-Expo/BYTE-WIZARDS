function submitForm() {
    const domain = document.getElementById('domain').value;
    const college = document.getElementById('college').value;

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `You chose ${domain} in 10th grade and ${college} for your college.`;
}
