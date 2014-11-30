window.onload = function () {
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      console.log(request.doms);

    // request.doms.forEach(function (dom) {
    //   var newA = document.createElement('a');
    //   newA.setAttribute('id', ('dom' + index + ''));
    //   newA.setAttribute('href', dom.link);
    //   document.body.appendChild(newA);

    //   var newImg = document.createElement('img');
    //   newImg.setAttribute('width', dom.width + 'px');
    //   newImg.setAttribute('height', dom.height + 'px');
    //   newImg.style.background = 'url(' + dom.dataURL + ')';

    //   // var h = window.innerHeight;
    //   // var w = window.innerWidth;
    //   newImg.style.position = "absolute";
    //   newImg.style.left = dom.x;
    //   newImg.style.top = dom.y;

    //   newA.appendChild(newImg);
    // });


    });
};