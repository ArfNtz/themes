var mode_color_link = document.createElement('link');
mode_color_link.setAttribute('rel', 'stylesheet');
mode_color_link.setAttribute('type', 'text/css');
document.getElementsByTagName('head')[0].appendChild(mode_color_link);

var mode_color_icon = document.getElementById("mode_color_icon");

function mode_color_light() {
    mode_color_link.setAttribute('href', './css/mode_color_light.css');
    mode_color_icon.innerHTML = '&#xf185;';
}
function mode_color_dark() {
    mode_color_link.setAttribute('href', './css/mode_color_dark.css');
    mode_color_icon.innerHTML = '&#xf186;';
}
function mode_color_calm() {
    mode_color_link.setAttribute('href', './css/mode_color_calm.css');
    mode_color_icon.innerHTML = '&#xf6c4;';
}

var mode_color = mode_color_light;

function mode_color_switch() {
    switch (mode_color) {
        case mode_color_calm:
            mode_color = mode_color_dark;
            break;
        case mode_color_dark:
            mode_color = mode_color_light;
            break;
        case mode_color_light:
            mode_color = mode_color_calm;
            break;
    }
    mode_color();
}

mode_color();