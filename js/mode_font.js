var mode_font_link = document.createElement('link');
mode_font_link.setAttribute('rel', 'stylesheet');
mode_font_link.setAttribute('type', 'text/css');
document.getElementsByTagName('head')[0].appendChild(mode_font_link);

var mode_font_icon = document.getElementById("mode_font_icon");

function mode_font_1() {
    mode_font_link.setAttribute('href', './css/mode_font_1.css');
    mode_font_icon.innerHTML = "f1";
}
function mode_font_2() {
    mode_font_link.setAttribute('href', './css/mode_font_2.css');
    mode_font_icon.innerHTML = "f2";
}
function mode_font_3() {
    mode_font_link.setAttribute('href', './css/mode_font_3.css');
    mode_font_icon.innerHTML = "f3";
}

var mode_font = mode_font_3;

function mode_font_switch() {
    switch (mode_font) {
        case mode_font_1:
            mode_font = mode_font_2;
            break;
        case mode_font_2:
            mode_font = mode_font_3;
            break;
        case mode_font_3:
            mode_font = mode_font_1;
            break;
    }
    mode_font()
}

mode_font_1()