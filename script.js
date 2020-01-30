console.log("mellelow like lellelo");

$(document).ready(onReady);

function onReady(){
        $('#callBack').text('mix of them all!!!!!!!!!');
        $('#favoritesList').append("<li>gazunethiet</li>");
        $('.listItem').append(", oh no he didn't");
    
    $("#submit").on('click', onSubmit);
    //on submit button
    $("#newList").on('click', hatred);
    //evil button
    $("#SuckaLikeISaid").on('click', '.clickMe', clickMe);
}

function onSubmit(){
    console.log("cool like lemonade");
    $('#favoritesList').toggle();
    $("body").toggleClass("salmon");
}

const iHateWhenThatHappens = [
    "toilet paper hung improperly",
    "lists",
    "jQuery",
    "repeats",
    "toilet paper hung improperly"
]

function hatred(){
    console.log(iHateWhenThatHappens);
    for(let i=0; i<iHateWhenThatHappens.length; i++){
        //$('#SuckaLikeISaid').append("<li>" + iHateWhenThatHappens[i] + "</li>"); // same as below
        $('#SuckaLikeISaid').append(`<li> ${iHateWhenThatHappens[i]}<button class="clickMe">clickity</button>  </li>`);
    }
    
}

function clickMe(){
    console.log("high planes drifter");
}

