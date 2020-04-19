$(function() {

var date = moment().format("dddd, MMMM Do");

$("#currentDay").append(date);
});



var hour = moment().format('HH');
console.log(typeof hour);


//9
$("#save-tasks9").click(function() {
    var text9 = $("#9").val();
    localStorage.setItem('text9', text9);

})

function timeChange09() {
    if (hour < '09') {
        $("#taskblock09").addClass("future");
    } else if (hour == '09') {
        $("#taskblock09").addClass("present");
    } else if (hour > '09') {
        $("#taskblock09").addClass("past");
    }
    }
timeChange09();

function loadTasks9() {
    text9 = localStorage.getItem("text9");
    $("#9").append(text9);
}
loadTasks9();

//10
    $("#save-tasks10").click(function() {
    var text10 = $("#10").val();
    localStorage.setItem('text10', text10);
})

function timeChange10() {
    if (hour < '10') {
        $("#taskblock10").addClass("future");
    } else if (hour == '10') {
        $("#taskblock10").addClass("present");
    } else if (hour > '10') {
        $("#taskblock10").addClass("past");
    }
    }
timeChange10();

function loadTasks10() {
    text10 = localStorage.getItem("text10");
    $("#10").append(text10);
}
loadTasks10();

//11
    $("#save-tasks11").click(function() {
    var text11 = $("#11").val();
    localStorage.setItem('text11', text11);
})

function timeChange11() {
    if (hour < '11') {
        $("#taskblock11").addClass("future");
    } else if (hour == '11') {
        $("#taskblock11").addClass("present");
    } else if (hour > '11') {
        $("#taskblock11").addClass("past");
    }
    }
timeChange11();

function loadTasks11() {
    text11 = localStorage.getItem("text11");
    $("#11").append(text11);
}
loadTasks11();

//12
    $("#save-tasks12").click(function() {
    var text12 = $("#12").val();
    localStorage.setItem('text12', text12);
})

function timeChange12() {
    if (hour < '12') {
        $("#taskblock12").addClass("future");
    } else if (hour == '12') {
        $("#taskblock12").addClass("present");
    } else if (hour > '12') {
        $("#taskblock12").addClass("past");
    }
    }
timeChange12();

function loadTasks12() {
    text12 = localStorage.getItem("text12");
    $("#12").append(text12);
}
loadTasks12();

//13(1)
    $("#save-tasks13").click(function() {
    var text13 = $("#13").val();
    localStorage.setItem('text13', text13);
})

function timeChange13() {
    if (hour < '13') {
        $("#taskblock13").addClass("future");
    } else if (hour == '13') {
        $("#taskblock13").addClass("present");
    } else if (hour > '13') {
        $("#taskblock13").addClass("past");
    }
    }
timeChange13();


function loadTasks13() {
    text13 = localStorage.getItem("text13");
    $("#13").append(text13);
}
loadTasks13();

//14(2)
    $("#save-tasks14").click(function() {
    var text14 = $("#14").val();
    localStorage.setItem('text14', text14);
})

function timeChange14() {
    if (hour < '14') {
        $("#taskblock14").addClass("future");
    } else if (hour == '14') {
        $("#taskblock14").addClass("present");
    } else if (hour > '14') {
        $("#taskblock14").addClass("past");
    }
    }
timeChange14();


function loadTasks14() {
    text14 = localStorage.getItem("text14");
    $("#14").append(text14);
}
loadTasks14();

//15(3)
    $("#save-tasks15").click(function() {
    var text15 = $("#15").val();
    localStorage.setItem('text15', text15);
})

function timeChange15() {
    if (hour < '15') {
        $("#taskblock15").addClass("future");
    } else if (hour == '15') {
        $("#taskblock15").addClass("present");
    } else if (hour > '15') {
        $("#taskblock15").addClass("past");
    }
    }
timeChange15();

function loadTasks15() {
    text15 = localStorage.getItem("text15");
    $("#15").append(text15);
}
loadTasks15();

//16(4)
    $("#save-tasks16").click(function() {
    var text16 = $("#16").val();
    localStorage.setItem('text16', text16);
})

function timeChange16() {
    if (hour < '16') {
        $("#taskblock16").addClass("future");
    } else if (hour == '16') {
        $("#taskblock16").addClass("present");
    } else if (hour > '16') {
        $("#taskblock16").addClass("past");
    }
    }
timeChange16();

function loadTasks16() {
    text16 = localStorage.getItem("text16");
    $("#16").append(text16);
}
loadTasks16();

//17(5)
    $("#save-tasks17").click(function() {
    var text17 = $("#17").val();
    localStorage.setItem('text17', text17);
})

function timeChange17() {
    if (hour < '17') {
        $("#taskblock17").addClass("future");
    } else if (hour == '17') {
        $("#taskblock17").addClass("present");
    } else if (hour > '17') {
        $("#taskblock17").addClass("past");
    }
    }
timeChange17();

function loadTasks17() {
    text17 = localStorage.getItem("text17");
    $("#17").append(text17);
}
loadTasks17();

//18(6)
    $("#save-tasks18").click(function() {
    var text18 = $("#18").val();
    localStorage.setItem('text18', text18);
})

function timeChange18() {
    if (hour < '18') {
        $("#taskblock18").addClass("future");
    } else if (hour == '18') {
        $("#taskblock18").addClass("present");
    } else if (hour > '18') {
        $("#taskblock18").addClass("past");
    }
    }
timeChange18();

function loadTasks18() {
    text18 = localStorage.getItem("text18");
    $("#18").append(text18);
}
loadTasks18();




    
   
    
    
    
   
    
    
    


