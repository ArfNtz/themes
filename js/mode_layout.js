var mode_layout_link = document.createElement('link');
mode_layout_link.setAttribute('rel', 'stylesheet');
mode_layout_link.setAttribute('type', 'text/css');
document.getElementsByTagName('head')[0].appendChild(mode_layout_link);

var mode_layout_icon = document.getElementById("mode_layout_icon");

function mode_layout_1() {
    mode_layout_link.setAttribute('href', './css/mode_layout_1.css');
    mode_layout_icon.innerHTML = "&#xf036";
}
function mode_layout_2() {
    mode_layout_link.setAttribute('href', './css/mode_layout_2.css');
    mode_layout_icon.innerHTML = "&#xf037";
}
function mode_layout_3() {
    mode_layout_link.setAttribute('href', './css/mode_layout_3.css');
    mode_layout_icon.innerHTML = "&#xf038";
}

var mode_layout = mode_layout_1;

function mode_layout_switch() {
    switch (mode_layout) {
        case mode_layout_1:
            mode_layout = mode_layout_2;
            break;
        case mode_layout_2:
            mode_layout = mode_layout_3;
            break;
        case mode_layout_3:
            mode_layout = mode_layout_1;
            break;
    }
    mode_layout();
}

mode_layout();