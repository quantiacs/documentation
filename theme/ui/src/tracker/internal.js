/* eslint-disable */
let debug = true;

function init(account) {
}

function event(name) {
}

let lastInfo = null;

function userInfo (info) {
    lastInfo = info;
    sendInfo();
}

let delayed = null;
function sendInfo() {
    if(delayed) {
        clearTimeout(delayed);
    }
    delayed = setTimeout(() => {
       var xhr = new XMLHttpRequest();
       xhr.open('POST', '/auth/account/track/info');
       xhr.setRequestHeader('Content-Type', 'application/json');
       xhr.send(JSON.stringify(lastInfo));
       delayed = null;
    }, 5000);
}

function hit(url) {
}

export { init, event, hit, userInfo }

