//------------------DOC READY-------------------//
$("document").ready(function () {

  //change cursor
  //$("body").css("cursor", "url('" + chrome.extension.getURL('glitter_cursor.gif') + "'), default");
  var doms = [];
  var index = 0;
  // chrome.browserAction.onClicked.addListener(function (tabs) {
  //   console.log("ouch!");
  //   // chrome.tabs.executeScript(null, {
  //   //   file: "script/content_script.js"
  //   // });
  //   record();
  // });
  chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("content_scripts" + "ouch!");
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="red"'
    });
  });

  $(document).click(function (e) {
    if ($(e.target).is('a') || $(e.target).is('button')) {
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
            'height': parseInt(h) + parseInt(padding_top) + parseInt(padding_bottom)
          };
          console.log(dom);
          doms.push(dom);
          chrome.extension.sendRequest(dom);
        }
      });
    }
  });

});