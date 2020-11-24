/* eslint-disable */
let debug = true;

let loaded = false;
let loadResolve;
let loadPromise = new Promise((resolve) => loadResolve = resolve)

function init(account) {
    debug && console.log("vk init", account);

    let t = document.createElement("script");
    t.type = "text/javascript";
    t.async = true;
    t.src = "https://vk.com/js/api/openapi.js?168";
    t.onload = () => {
        VK.Retargeting.Init(account);
        VK.Retargeting.Hit();
        loadResolve();
        loaded = true;
    }
    document.head.appendChild(t);
}

function event(name) {
    if(loaded) {
        debug && console.log("vk event", name);
        VK.Retargeting.Event(name);
    } else {
        loadPromise.then(()=>event(name));
    }
}

function hit(url) {
    event("hit:" + url);
}

let lastInfo = null;

const userInfo = function (info) {
    lastInfo = info;
    sendInfo();
}

let delayed = null;
function sendInfo() {
    if(delayed) {
        clearTimeout(delayed);
    }
    delayed = setTimeout(() => {
        for(let k in lastInfo) {
             event("info:" + k + "=" + lastInfo[k]);
        }
        delayed = null;
    }, 5000);
}

export { init, event, hit, userInfo }

