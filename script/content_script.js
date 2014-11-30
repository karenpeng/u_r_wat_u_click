//------------------DOC READY-------------------//
$("document").ready(function () {

  //change cursor
  //$("body").css("cursor", "url('" + chrome.extension.getURL('glitter_cursor.gif') + "'), default");
  var doms = [];
  var index = 0;
  //var recording = false;
  var recording = true;
  // chrome.browserAction.onClicked.addListener(function (tabs) {
  //   console.log("ouch!");
  //   // chrome.tabs.executeScript(null, {
  //   //   file: "script/content_script.js"
  //   // });
  //   record();
  // });
  //chrome.extension.onRequest.addListener(function(booleann, sender, senResponse){
  // chrome.runtime.onMessage.addListener(
  //   function (request, sender, sendResponse) {
  //     console.log(request);
  //     if (request.greeting == "hello") {
  //       sendResponse({
  //         msg: "goodbye!"
  //       });
  //       recording = true;
  //     }
  //   });

  //   chrome.runtime.onMessage.addListener(
  //   function (request, sender, sendResponse) {
  //     console.log(request);
  //     if (request.greeting == "goodbye") {
  //       recording = false;
  //     }
  //   });
  // chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  //   if (request.load) {
  //     var data = ... //Something from the page user browses.
  //     sendResponse({
  //         webpageContent: "data"
  //       })
  //       //return true;
  //   }

  $(document).click(function (e) {
    //received message
    if (recording) {
      if ($(e.target).is('a') || $(e.target).is('button')) {
        console.log("ouch!");
        var link = $(e.target).context.href;
        var padding_top = $(e.target).css('padding-top');
        var padding_bottom = $(e.target).css('padding-bottom');
        var padding_left = $(e.target).css('padding-left');
        var padding_right = $(e.target).css('padding-right');
        var w = $(e.target).width();
        var h = $(e.target).height();
        html2canvas($(e.target), {
          onrendered: function (canvas) {
            //document.body.appendChild(canvas);
            var dataURL = canvas.toDataURL();
            //console.log(dataURL);
            var dom = {
              'link': link,
              'dataURL': dataURL,
              'width': parseInt(w) + parseInt(padding_left) + parseInt(padding_right),
              'height': parseInt(h) + parseInt(padding_top) + parseInt(padding_bottom),
              'x': e.pageX,
              'y': e.pageY
            };
            console.log(dom);
            doms.push(dom);
            //chrome.extension.sendRequest(dom);

            chrome.runtime.sendMessage({
                'dom': dom
              },
              function (response) {
                //document.getElementById("div").textContent = response.msg;
                console.log(response.ok);
              });
          }
        });
      }
    }
  });
});