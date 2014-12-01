var doms = [];
//var recording = true;

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.doms !== undefined) {
      console.log("from background " + request.doms);
      doms = request.doms;
      doms.forEach(function (dom, index) {
        var newTag = document.createElement('a');
        newTag.setAttribute('id', ('dom' + index + ''));
        // if (dom.tag === 'IMG') {
        //   newTag.setAttribute('src', dom.src);
        //   newTag.setAttribute('width', dom.width + 'px');
        //   newTag.setAttribute('height', dom.height + 'px');
        //   //newTag.style.background = 'url(' + dom.dataURL + ')';

        //   // var h = window.innerHeight;
        //   // var w = window.innerWidth;
        //   newTag.style.position = "absolute";
        //   newTag.style.left = dom.x;
        //   newTag.style.top = dom.y;

        // } else {
        if (dom.link !== undefined) {
          newTag.setAttribute('href', dom.link);
        }
        document.body.appendChild(newTag);
        var newImg = document.createElement('img');
        newImg.setAttribute('width', dom.width + 'px');
        newImg.setAttribute('height', dom.height + 'px');
        if (dom.src !== undefined) {
          newImg.setAttribute('src', dom.src);
        } else {
          newImg.style.background = 'url(' + dom.dataURL + ')';
        }

        // var h = window.innerHeight;
        // var w = window.innerWidth;
        newImg.style.position = "absolute";
        newImg.style.left = dom.x;
        newImg.style.top = dom.y;

        newTag.appendChild(newImg);
        // }
      });
    }
  });

window.onload = function () {
  // chrome.runtime.sendMessage({
  //   'result': "this is a result"
  // });
  // doms.forEach(function (dom) {
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

};