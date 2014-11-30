window.onload = function () {

  //change cursor
  //$("body").css("cursor", "url('" + chrome.extension.getURL('glitter_cursor.gif') + "'), default");

  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      console.log(request.dom);
      // if (request.greeting == "goodbye") {
      //   recording = false;
      // }
      sendResponse({
        'ok': 'ok'
      });
    });

  var record = false;
  var doms = [];
  chrome.browserAction.onClicked.addListener(function (tabs) {
    record = !record;
    console.log(record);
    if (record) {
      //trigger the recording
      // chrome.tabs.executeScript(null, {
      //   file: "script/record.js"
      // });
      // chrome.extension.sendRequest(true);
      // chrome.runtime.sendMessage({
      //     greeting: "hello"
      //   },
      //   function (response) {
      //     //document.getElementById("div").textContent = response.msg;
      //     console.log(response);
      //   });
      // chrome.tabs.sendMessage(tab.id, {
      //   load: true
      // }, function (response) { // We don't do anything if we don't have a response
      //   if (response) {
      //     console.log("Inside Background Response script, we had a response:");
      //     //After successfully getting the response, we show a Page Action Icon.
      //     chrome.pageAction.show(tab.id);
      //   }
      // });
      //console.log("i should start recording");

      // document.onclick = function (e) {
      //   console.log('click');
      //   if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      //     console.log('yep');
      //   }
      // }
    } else {
      //open up a tab showing the result
      // chrome.tabs.create({
      //   url: chrome.extension.getURL('result.html')
      // });
      //chrome.extension.sendRequest(false);
      //console.log("i should show you the result");
      // chrome.runtime.sendMessage({
      //     greeting: "goodbye"
      //   },
      //   function (response) {
      //     //document.getElementById("div").textContent = response.msg;
      //     console.log(response);
      //   });
    }
    // chrome.tabs.executeScript(null, {
    //   file: "script/content_script.js"
    // });
    //record();
  });

};