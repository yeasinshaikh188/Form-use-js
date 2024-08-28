const inputField = document.getElementById("inputField");
const addBtn = document.getElementById("addBtn");
const selectField = document.getElementById("selectField");
const removeBtn = document.getElementById("removeBtn");



function formHandle() {
    const inputText = inputField.value;
    console.log(inputText)
    if(inputText === ""){
        alert("input field is empty");
        return; 
    }
    

    // option 
    const option = new Option(inputText, inputText);
    selectField.add(option, undefined)

    inputField.value = "";
}



function removeBtnHandle() {
    let selected = [];
    for(let i = 0; i <selectField.options.length; i++){

    selected[i] = selectField.options[i].selected;


    let index = selectField.options.length;

    while(index--){
        if(selected[index]){
            selectField.remove(index)
        }
    }
};
}

// addBtn.addEventListener('click', (event) =>{
//     event.preventDefault();
//     const inputText = inputField.value; 
//     console.log(inputText)
// })