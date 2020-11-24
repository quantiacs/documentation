/* eslint-disable */
let account = null;
let debug = true;

function init(account_arg, userInfoCb) {
    account = account_arg;
    debug && console.log("ym init", account);

    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(account, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        trackHash: true,
    });

    ym(account, "getClientID", (cid) => {
        debug && console.log("ym clientId", cid);
        userInfoCb({'ymId': cid + ''});
    });
}

function event(name) {
    debug && console.log("ym event", name);
    ym(account, 'reachGoal', name);
}

function hit(url) {
    debug && console.log("ym hit", url);
    ym(account, 'hit', url);
}

function userInfo (info) {
    debug && console.log("ym userInfo", info);
    var extInfo = {};
    Object.assign(extInfo, info);
    if(extInfo.qntId) {
        extInfo.UserID = extInfo.qntId;
    }
    ym(account, 'userParams', extInfo);
    ym(account, 'params', extInfo);
}

export { init, event, hit, userInfo }