var bgm0 = document.getElementById("audio");
var home_boice = document.getElementById("choice_sound");
function init(){
    bgm0.muted = false;
    bgm0.volume = 0.15;
    result_sound();
}
init();

function result_sound(){
    if(home_boice){
        home_boice.muted = false;
        home_boice.volume = 1;
    }
}
