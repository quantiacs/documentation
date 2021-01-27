/* eslint-disable */
let debug = true;

function init(account) {
    console.log("twitter init", account);
    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
    },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
    // Insert Twitter Pixel ID and Standard Event data below
    twq('init', account);
    twq('track','PageView');
}

function event(name) {
    twq('trackCustom', name, {});
}

function userInfo(info){
    twq('trackCustom', 'info', info);
}

function hit(url) {
     twq('trackCustom', 'hit', {url:url});
}

export { init, event, hit, userInfo }
