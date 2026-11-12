
function calculateGrade() {

    let name = document.getElementById("studentName").value;

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);

    let result = document.getElementById("result");

    if (name.trim() === "" ||
        document.getElementById("mark1").value === "" ||
        document.getElementById("mark2").value === "" ||
        document.getElementById("mark3").value === "") {

        result.innerHTML = "Please fill in all fields!";
        return;
    }

    if ([mark1, mark2, mark3].some(mark => mark < 0 || mark > 100)) {
        result.innerHTML = "Marks must be between 0 and 100!";
        return;
    }

    let total = mark1 + mark2 + mark3;
    let average = total / 3;

    let grade;
    let status;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    status = [mark1, mark2, mark3].every(mark => mark >= 35)
        ? "Pass" : "Fail";

    result.innerHTML = `
        <h3>Result for ${name}</h3>
        Total Marks: ${total}/300 <br>
        Average: ${average.toFixed(2)}% <br>
        Grade: ${grade} <br>
        Status: ${status}
    `;
}
