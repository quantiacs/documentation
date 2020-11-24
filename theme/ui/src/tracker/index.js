/*eslint-env browser*/
import * as tym from './ym'
import * as tgtag from './gtag'
import * as tfbp from './fbp'
import * as tli from './li'
import * as tvk from './vk'
import * as internal from './internal'

const fullConfig = require('./config.json');

const availableTrackers = {
    'gtag': tgtag,
    'fbp': tfbp,
    'li': tli,
    'ym': tym,
    'vk': tvk,
    'internal': internal
};

var activeTrackers = [];

function init() {
    let hostname = window.location.hostname;
    hostname = hostname.toLowerCase();
    if(hostname.startsWith('www.')) {
      hostname = hostname.substr(4);
    }
    const accounts = fullConfig.accounts[hostname] || {};
    for(let k in availableTrackers) {
        let a = accounts[k];
        if(a || k == 'internal') {
            let t = availableTrackers[k];
            t.init(a, userInfo);
            activeTrackers.push(availableTrackers[k]);
        }
    }
}

const userInfo = (info) => {
  let accumulatedInfo = localStorage.getItem("tracker.userInfo");
  accumulatedInfo = accumulatedInfo ? JSON.parse(accumulatedInfo) : {};
  for(let k in info) {
    if(info[k]) {
        accumulatedInfo[k] = info[k];
    }
  }
  localStorage.setItem("tracker.userInfo", JSON.stringify(accumulatedInfo));

  activeTrackers.forEach(t => t.userInfo(accumulatedInfo));
};

function hit(url) {
  activeTrackers.forEach(t => t.hit(url));
}

function event(name) {
  activeTrackers.forEach(t => t.event(name));
}

init();

export {
    userInfo,
    hit,
    event
}
