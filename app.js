function appendToDiplay(value){
    let data = document.getElementById("display");
    data.value = data.value + value ;

    // document.getElementById('display').value += value; // Short hand code
};

function clearDisplay(){
    let data = document.getElementById("display");
    data.value = '';
};

function displayLast(){
    let data = document.getElementById("display");
    data.value = data.value.slice(0,-1);
};


function calculateResult(){
    try{
        let result = eval(document.getElementById("display").value);
        console.log(result);

        document.getElementById("display").value = result;
    }catch (error){
        console.log(error);
    }
};