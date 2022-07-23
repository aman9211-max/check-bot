points = [];
mouseMove = function (event) {
    var eventDoc, doc, body;
        event = event || window.event; // IE-ism
        if (event.pageX != null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );

              let obj = [event.pageX, event.pageY];
              points.push(obj);
        }
        // console.log(points)
        console.log(checkIsLine());
}
  document.onmousemove = mouseMove;
  console.log(checkIsLine());

