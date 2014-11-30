//window.onload = function () {

var doms = [];
var record = false;

//tell every new tab the stats of recording
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      'recording': record
    }, function (response) {
      console.log(response);
    });
  });
});

chrome.tabs.onCreated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      'recording': record
    }, function (response) {
      console.log(response);
    });
  });
});

chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      'recording': record
    }, function (response) {
      console.log(response);
    });
  });
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request.dom);
    doms.push(request.dom);
  });

chrome.browserAction.onClicked.addListener(function (tabs) {
  record = !record;
  console.log(record);
  if (record) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        'recording': record
      }, function (response) {
        console.log(response);
      });
    });
  } else {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        'recording': record
      }, function (response) {
        console.log(response);
      });
    });

    chrome.tabs.create({
      'url': chrome.extension.getURL('result.html')
    }, function (tabs) {
      console.log(tabs);
      chrome.tabs.sendMessage(tabs[0].id, {
        'doms': doms
      }, function (response) {
        console.log(response);
      });
    });

    doms = [];
  }

});

//};