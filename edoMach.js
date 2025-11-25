
var state = "";
var arrayBtns;

function documentoCargado(){
    state = "A";
    console.log("***Empieza***");
    console.log("State: " + state);
    arrayBtns = document.getElementsByTagName("button");
    for(var i = 0; i < arrayBtns.length; i++){
        if(!(arrayBtns[i].id === "btnAToBId" || arrayBtns[i].id === "btnAToCId")){
            arrayBtns[i].disabled = true;
        }
    }
    document.getElementById("divEdoAId").style.backgroundColor = "black";
}

function moveToNextState(btnElement){

    var nextState = btnElement.id;
    
    if(state === "A"){
        if(nextState === "btnAToBId"){
            state = "B";
            document.getElementById("btnBToAId").disabled = false;
            document.getElementById("btnAToBId").disabled = true;
            document.getElementById("btnAToCId").disabled = true;
            document.getElementById("divEdoAId").style.backgroundColor = "white";
            document.getElementById("divEdoBId").style.backgroundColor = "black";
        }
        else if(nextState === "btnAToCId"){
            state = "C";
            document.getElementById("btnCToAId").disabled = false;
            document.getElementById("btnCToDId").disabled = false;
            document.getElementById("btnAToBId").disabled = true;
            document.getElementById("btnAToCId").disabled = true;
            document.getElementById("divEdoAId").style.backgroundColor = "white";
            document.getElementById("divEdoCId").style.backgroundColor = "black";
        }
    }
    else if (state === "B"){
        if(nextState === "btnBToAId"){
            state = "A";
            document.getElementById("btnBToAId").disabled = true;
            document.getElementById("btnAToBId").disabled = false;
            document.getElementById("btnAToCId").disabled = false;
            document.getElementById("divEdoAId").style.backgroundColor = "black";
            document.getElementById("divEdoBId").style.backgroundColor = "white";
        }
    }
    else if (state === "C"){
        if(nextState === "btnCToAId"){
            state = "A";
            document.getElementById("btnCToAId").disabled = true;
            document.getElementById("btnCToDId").disabled = true;
            document.getElementById("btnAToBId").disabled = false;
            document.getElementById("btnAToCId").disabled = false;
            document.getElementById("divEdoAId").style.backgroundColor = "black";
            document.getElementById("divEdoCId").style.backgroundColor = "white";
        }
        else if(nextState === "btnCToDId"){
            state = "D";
            document.getElementById("btnCToAId").disabled = true;
            document.getElementById("btnCToDId").disabled = true;
            document.getElementById("btnDToAId").disabled = false;
            document.getElementById("btnDToCId").disabled = false;
            document.getElementById("divEdoDId").style.backgroundColor = "black";
            document.getElementById("divEdoCId").style.backgroundColor = "white";
        }
    }
    else if(state === "D"){
        if(nextState === "btnDToAId"){
            state = "A";
            document.getElementById("btnAToBId").disabled = false;
            document.getElementById("btnAToCId").disabled = false;
            document.getElementById("btnDToAId").disabled = true;
            document.getElementById("btnDToCId").disabled = true;
            document.getElementById("divEdoDId").style.backgroundColor = "white";
            document.getElementById("divEdoAId").style.backgroundColor = "black";
        }
        else if(nextState === "btnDToCId"){
            state = "C";
            document.getElementById("btnCToAId").disabled = false;
            document.getElementById("btnCToDId").disabled = false;
            document.getElementById("btnDToAId").disabled = true;
            document.getElementById("btnDToCId").disabled = true;
            document.getElementById("divEdoDId").style.backgroundColor = "white";
            document.getElementById("divEdoCId").style.backgroundColor = "black";
        }
    }
    
}