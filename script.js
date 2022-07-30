points = [];
let values = document.getElementById("values");

let temp1 = 0, temp2;
let count1 = 0;
let count2 = 0;
mouseMove = function (event) {
  count2++;
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


    
    if(points.length > 0) {
      temp2 = Date.now();
      let time = (temp2 - temp1);


      let distance = Math.sqrt(Math.abs(points[points.length - 1][0] - obj[0]) * Math.abs(points[points.length - 1][0] - obj[0])  +  Math.abs(points[points.length - 1][1] - obj[1]) * Math.abs(points[points.length - 1][1] - obj[1]));
      let speed = distance / time;
      // console.log("time", time);
      console.log("speed", speed);
      // console.log(Date.now());
      // console.log("temp1", temp1);
      // console.log("temp2", temp2);

    if(speed > 5 && distance > Math.sqrt(200)) {
      // let p = checkIsLine();

      // console.log("distance",distance, obj, points[points.length - 1]);
      var z = document.createElement("li"); // is a node
      z.innerHTML = "BOT";
      values.appendChild(z);
      count1++;
    }

  }
  temp1 = Date.now();

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
      let p = checkIsLine();
      var z = document.createElement("li"); // is a node
      if(p) {
        z.innerHTML = "BOT";
      }
      else 
      z.innerHTML = "HUMAN";
      values.appendChild(z);
      // console.log(checkIsLine());
    
};
document.onmousemove = mouseMove;
console.log(checkIsLine());
