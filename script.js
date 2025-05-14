// Grade to point mapping
const gradeMap = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'W': 0,    
    '-': 0,    
    'AB': 0,   
    'I': 0,   
    'F': 0     
};

// Add more rows
function addRow() {
    const table = document.querySelector('#course table tbody');
    const rowCount = table.rows.length + 1;

    const row = document.createElement('tr');
    row.classList.add('course-row');

    row.innerHTML = `
        <td class="course-num">${rowCount}</td>
        <td>
            <select class="Grade">
                <option value="O">O</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="W">W</option>
                <option value="-">-</option>
                <option value="AB">AB</option>
                <option value="I">I</option>
                <option value="F">F</option>
            </select>
        </td>
        <td>
            <input type="number" min="0" max="100" class="credits">
        </td>
    `;

    table.appendChild(row);
}

document.getElementById('add').addEventListener('click', addRow);

// Calculate GPA
function calculategpa() {
    const gradeint = document.querySelectorAll('.Grade');
    const creditsint = document.querySelectorAll('.credits');
    let totcredit = 0;
    let totpoint = 0;

    for (let i = 0; i < gradeint.length; i++) {
        const grade = gradeint[i].value;
        const credits = parseInt(creditsint[i].value);
        if (!grade || isNaN(credits)) continue;
        const point = gradeMap[grade.toUpperCase()];
        totcredit += credits;
        totpoint += point * credits;
    }

    let gpa = totcredit === 0 ? 0 : (totpoint / totcredit).toFixed(3);

    const popup = document.getElementById('popup');
    const popupResult = document.getElementById('popup-result');
    popupResult.textContent = `Your GPA is: ${gpa}`;
    popup.classList.remove('hidden');  // ✅ FIXED!
}
document.getElementById('calcu').addEventListener('click', calculategpa);
document.querySelector('.close-btn').addEventListener('click', () => {
document.getElementById('popup').classList.add('hidden');
});


// Refresh function
function refresh() {
    const gradeint = document.querySelectorAll('.Grade');
    const creditsint = document.querySelectorAll('.credits');
    const result = document.getElementById('result');
    for (let i = 0; i < gradeint.length; i++) {
        gradeint[i].value = '';
        creditsint[i].value = '';
    }
    result.textContent = '';
}
document.getElementById('refresh').addEventListener('click', refresh);
