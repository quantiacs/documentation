/* eslint-disable */
let debug = true;
let quoraAccount = null;
let email = null;

function init(account) {
    console.log("Quora init.", account);
    !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');

    let accumulatedInfo = localStorage.getItem("tracker.userInfo");
    accumulatedInfo = accumulatedInfo ? JSON.parse(accumulatedInfo) : {};
    email = accumulatedInfo.email;
    if(email) {
        qp('init', account, email);
    } else {
        qp('init', account);
    }
    qp('track', 'ViewContent');
}

function event(name) {
    qp('track', name);
}

function userInfo(info){
    // Email will be hashed by the pixel using SHA-256
    if(info.email && info.email != email) {
        email = info.email;
        qp('init', quoraAccount, {'email': info.email});
    }
}

function hit(url) {
    qp('track', "hit:" + url);
}

export { init, event, hit, userInfo }

