//window.onload = function () {

var doms = [];
var record = false;
var change = false;

//tell every new tab the stats of recording
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (change) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        'recording': record
      }, function (response) {
        console.log("from tab: " + response);
      });
    });
  }
});

chrome.tabs.onCreated.addListener(function (tabId, changeInfo, tab) {
  if (change) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      if (tabs[0].result === undefined) {
        chrome.tabs.sendMessage(tabs[0].id, {
          'recording': record
        }, function (response) {
          console.log("from tab: " + response);
        });
      }
    });
  }
});

chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab) {
  if (change) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      if (tabs[0].result === undefined) {
        chrome.tabs.sendMessage(tabs[0].id, {
          'recording': record
        }, function (response) {
          console.log("from tab: " + response);
        });
      }
    });
  }
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.dom !== undefined) {
      console.log(request.dom);
      doms.push(request.dom);
    }
  });

chrome.browserAction.onClicked.addListener(function (tabs) {
  record = !record;
  change = true;
  console.log(record);
  if (record) {
    chrome.browserAction.setIcon({
      path: 'img/stop.png'
    });

    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        'recording': record
      }, function (response) {
        console.log("from tab: " + response);
      });
    });
  } else {
    chrome.browserAction.setIcon({
      path: 'img/record.png'
    });

    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        'recording': record
      }, function (response) {
        console.log("from tab: " + response);
      });
    });

    chrome.tabs.create({
      'url': chrome.extension.getURL('result.html')
    }, function () {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        tabs[0].result = true;
        chrome.tabs.sendMessage(tabs[0].id, {
          'doms': doms
        }, function (response) {
          console.log("from result tab: " + response);
        });
      });
    });
  }

});

//};