points = [];
var count = 0;
let values = document.getElementById("values");
mouseMove = function (event) {
  var dot, eventDoc, doc, body;
  event = event || window.event; // IE-ism
  if (event.pageX != null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;

    event.pageX =
      event.clientX +
      ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
      ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
    event.pageY =
      event.clientY +
      ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
      ((doc && doc.clientTop) || (body && body.clientTop) || 0);

    let obj = [event.pageX, event.pageY];
    points.push(obj);

    if(points.length > 20) {
      points.splice(0,points.length - 20);
    }
  }
  dot = document.createElement('div');
      dot.className = "dot";
      dot.style.left = event.pageX + "px";
      dot.style.top = event.pageY + "px";
      document.body.appendChild(dot);
  // console.log(points)
    if(count == 0) {
      let p = checkIsLine();
      var z = document.createElement("li"); // is a node
      z.innerHTML = `${p}`;
      values.appendChild(z);
      console.log(checkIsLine());
    }
    count++;
    count %= 10;
};
document.onmousemove = mouseMove;
console.log(checkIsLine());
