const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");
const calculateMarks = (event) => {
    const maxMarks = 400;
    event.preventDefault();

    const formData = new FormData(calculateFormEl);
    const data = {};

    formData.forEach((value,key) => {
        data[key] =  +value;
    });
    const totalMarks = data.math + data.science + data.hindi + data.english;
    const pecentage = ((totalMarks / maxMarks) * 100);
    const fixedPercentage = pecentage.toFixed(2);
    resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${fixedPercentage}%`;
};