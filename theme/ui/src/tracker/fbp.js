/* eslint-disable */
let debug = true;

let lastId = null;
let account = null;

function init(account_arg, userInfoCb) {
    account = account_arg;
    debug && console.log("fbp init", account);

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    let accumulatedInfo = localStorage.getItem("tracker.userInfo");
    accumulatedInfo = accumulatedInfo ? JSON.parse(accumulatedInfo) : {};
    let initArgs = {};
    if(accumulatedInfo.qntId) {
        initArgs.external_id = accumulatedInfo.qntId;
    }
    if(accumulatedInfo.fbp) {
        initArgs.fbp = accumulatedInfo.fbp;
    }
    if(accumulatedInfo.fbc) {
        initArgs.fbc = accumulatedInfo.fbc;
    }
    fbq('init', account, initArgs);
    fbq('track', 'PageView');

    // grab cookies
    const grabCookiesHandler = setInterval(() => {
        const cookies = {};
        document.cookie.split(';').map(i=>i.split("=")).forEach(p => cookies[p[0].trim()] = p[1].trim());
        if(!cookies._fbp){
            return;
        } else {
            const params = {fbp:cookies._fbp};
            if(params._fbc) {
                params.fbc = cookies._fbc;
            }
            userInfoCb(params);
            clearInterval(grabCookiesHandler);
        }
    }, 1000);
}

function event(name) {
    debug && console.log("fbp event", name);
    fbq('trackCustom', name);
}

function hit(url) {
    debug && console.log("fbp hit", url);
    fbq('trackCustom', 'hit', {'url':url});
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
        debug && console.log("fbp info", lastInfo);

        let initArgs = {};
        if(lastInfo.qntId) {
            initArgs.external_id = lastInfo.qntId;
        }
        if(lastInfo.fbp) {
            initArgs.fbp = lastInfo.fbp;
        }
        if(lastInfo.fbc) {
            initArgs.fbc = lastInfo.fbc;
        }
        fbq('init', account, initArgs);

        var extInfo = {};
        Object.assign(extInfo, lastInfo);
        if(extInfo.qntId) {
            extInfo.external_id = extInfo.qntId;
        }

        fbq('trackCustom', 'info', extInfo)
        delayed = null;
    }, 5000);
}


export { init, event, hit, userInfo }

