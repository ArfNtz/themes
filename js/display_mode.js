
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
document.getElementsByTagName('head')[0].appendChild(link);

var display_mode = calm

function light() {
    link.setAttribute('href', './css/mode_light.css');
}
function dark() {
    link.setAttribute('href', './css/mode_dark.css');
}
function calm() {
    link.setAttribute('href', './css/mode_calm.css');
}

function display_mode_switch() {
    switch (display_mode) {
        case calm:
            display_mode = dark;
            break;
        case dark:
            display_mode = light;
            break;
        case light:
            display_mode = calm;
            break;
    }
    display_mode()
}

calm()