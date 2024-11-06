//Toggles
let isTimerDone = false; //istimerdone

let isBreadInToaster = false; //isBreadinToaster

let isToast = false;

//bread variable
const bread = {
    size : [60, 40, 5],
    burnPoint : 600 ,
    toastPoint : 300 ,
    currentTemp : 20 ,
};

//toaster variable
const toaster = {
    slots: 4,
    button: (e) => {
        if (e) {
        return true;
    }
    return false;
},
};

//Functions

//cagedown
function cageDown(e) {
    if (e) {
        //turn on heat
        //start timer
    }
}
//cageup TODO:
function cageUP(e) {}

//timer
function setTimer(e, time = 120) {
    if (e) {
        //run activate heat
        //Start Timer at length of time argument
    }
    //when timer done signal cageup // toggle cage && disable heat element
}

//activateHeat
function activateHeat() {
    //turn on heat element
    //increase bread temp
}


