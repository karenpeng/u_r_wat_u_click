$("document").ready(function () {

  //change cursor
  //$("body").css("cursor", "url('" + chrome.extension.getURL('glitter_cursor.gif') + "'), default");
  var record = false;
  chrome.browserAction.onClicked.addListener(function (tabs) {
    console.log("ouch!");
    record = !record;
    if (record) {
      //trigger the recording
      chrome.tabs.executeScript(null, {
        file: "script/record.js"
      });
    } else {
      //open up a tab showing the result
      chrome.tabs.create({
        url: chrome.extension.getURL('result.html')
      });
    }
    // chrome.tabs.executeScript(null, {
    //   file: "script/content_script.js"
    // });
    //record();
  });

});