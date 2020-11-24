/* eslint-disable */
let debug = true;
let account = null;

function init(account_arg, userInfoCb) {
    account = account_arg;
    debug && console.log("gtag init", account);

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + account;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);}
    gtag('js', new Date());

    let accumulatedInfo = localStorage.getItem("tracker.userInfo");
    accumulatedInfo = accumulatedInfo ? JSON.parse(accumulatedInfo) : {};
    let initArgs = {};
    if(accumulatedInfo.qntId) {
        initArgs.user_id = accumulatedInfo.qntId;
    }
    account.forEach(a => {
        gtag('config', a, initArgs);
    });

    account.forEach(a => {
        let key = a.startsWith('UA') ? 'gaId' : 'gtagId';
        gtag('get', a, 'client_id', (cid) => {
          debug && console.log(key + " clientId", cid);
          let args = {};
          args[key] = cid;
          userInfoCb(args);
        });
    });
}

//TODO obsolete
var OBSOLETE_EVENTS = {
    "CLONE_SUBMISSION": {
        category: "Strategy create",
        action: "Successfully clone template",
    },
    "CLONE_STRATEGY": {
        category: "Strategy create",
        action: "Successfully clone strategy",
    },
    "CLONE_TEMPLATE": {
        category: "Strategy create",
        action: "Successfully clone template",
    },
    "CLONE_STRATEGY": {
        category: "Strategy create",
        action: "Successfully clone strategy",
    },
    "CREATE_EMPTY_STRATEGY": {
        category: "Strategy create",
        action: "Succesfull Create empty strategy",
    },
    "SUBMIT_STRATEGY": {
        category: 'Submit strategy',
        action: 'Successfully submit strategy',
    },
    "LOGIN": {
        category: "Login",
        action: "Successful login"
    },
    "REGISTRATION":{
        category: 'Registration',
        action: 'Successful registration',
    },
    "SEND_FEEDBACK":{
        category: "Send feedback",
        action: "Send feedback from contact page",
    },
    "GO_TO_ACCOUNT_STATISTICS":{
        category: "Press button",
        action: "Go to account statistics from the main page",
    },
    "MAIN_BUTTON_PRESSED": {
        category: "Press button",
        action: "Pressed button on the main banner",
    },
    "GO_TO_FULL_LEADERBOARD": {
        category: "Press button",
        action: "Go to leaderboard from the main page",
    },
    "BUTTON_LEADERBOARD_USERS": {
        category: "Press button",
        action: "Pressed button See full leaderboard Users",
    },
    "DOWNLOAD_HELP": {
        category: "Strategy create",
        action: "Successfully clone First Strategy",
    },
    "CLONE_FIRST_STRATEGY": {
        category: "Strategy create",
        action: "Successfully clone First Strategy",
    }
}

function event(name) {
    debug && console.log("gtag event", name);
    account.forEach(a => {
        gtag('event',  name, {'send_to': a});
        if(a.startsWith('UA')) {
            // TODO obsolete
            let obsoleteEvent = OBSOLETE_EVENTS[name];
            if(obsoleteEvent) {
                debug && console.log("ga event", name);
                gtag('event',  obsoleteEvent.action, {'send_to': a, "event_category": obsoleteEvent.category});
            }
        }
    });
}

function hit(url) {
    debug && console.log("gtag hit", url);
    gtag('event', 'page_view', { page_path: url });
}

function userInfo (info) {
    debug && console.log("gtag set", info);
    var extInfo = {};
    Object.assign(extInfo, info);
    if(extInfo.qntId) {
        extInfo.user_id = extInfo.qntId;
    }
    gtag('set', 'user_properties', extInfo);
    gtag('set', extInfo); // TODO obsolete

    if(extInfo.qntId) {
        let initArgs = {user_id: extInfo.qntId, send_page_view: false};
        account.forEach(a => {
            gtag('config', a, initArgs);
        });
    }
}

export { init, event, hit, userInfo }