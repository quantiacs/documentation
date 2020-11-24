/* eslint-disable */
let debug = true;

function init(account) {
    debug && console.log("li init", account);

    let _linkedin_partner_id = account;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);

    (function(){var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);})();
}

function event(name) {
}

function userInfo(info){
}

function hit(url) {
}

export { init, event, hit, userInfo }

