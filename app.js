function appendToDiplay(value) {
    let data = document.getElementById("display");
    data.value += value;
}

function clearDisplay() {
    let data = document.getElementById("display");
    data.value = '';
}

function displayLast() {
    let data = document.getElementById("display");
    data.value = data.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid Expression");
    }
}

// Modal Functions
function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};
