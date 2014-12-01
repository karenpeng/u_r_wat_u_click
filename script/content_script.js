//received message to record or not
var recording = false;
//var recording = true;
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log("from background " + request.recording);
    recording = request.recording;
    sendResponse(recording);
  });

$("document").ready(function () {

  $(document).click(function (e) {
    if (recording) {
      //if ($(e.target).is('a') || $(e.target).is('button')) {
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

          chrome.runtime.sendMessage({
            'dom': dom
          });
        }
      });
      //}
    }
  });

});