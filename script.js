points = []; //to store the coordinates of the mouse 
let values = document.getElementById("values"); //unordered list
let temp1 = 0; //to get the time interval bw two consecutive points
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
    //x-coordinate
    event.pageX =
      event.clientX +
      ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
      ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      //y-coordinate
    event.pageY =
      event.clientY +
      ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
      ((doc && doc.clientTop) || (body && body.clientTop) || 0);

    let obj = [event.pageX, event.pageY];


    
    if(points.length > 0) {

      //time bw the current position and most recent position of the cursor
      let time = (Date.now() - temp1);

      //distance bw the current position and most recent position of the cursor
      let distance = Math.sqrt(Math.abs(points[points.length - 1][0] - obj[0]) * Math.abs(points[points.length - 1][0] - obj[0])  +  Math.abs(points[points.length - 1][1] - obj[1]) * Math.abs(points[points.length - 1][1] - obj[1]));
      //speed of the cursor at an instant
      let speed = distance / time;
      

    if(speed > 5 || distance > Math.sqrt(600)) { //condition to be a bot 
      var z = document.createElement("li"); // is a node
      z.innerHTML = "BOT";  //print the BOT on the screen
      values.appendChild(z);
      count1++;
    }
    else
    {
      //if condition is not satisfied then we will say the user is human
      var z = document.createElement("li"); // is a node
      z.innerHTML = "HUMAN";
      values.appendChild(z);
    }

  }
  temp1 = Date.now(); // time when we have inserted our recent coordinates

    points.push(obj);

    if(points.length > 20) {
      points.splice(0,points.length - 20); // we are storing the most recent 20 points
    }
  }

  //to track the mpvement of cursor
  dot = document.createElement('div');
  dot.className = "dot";
  dot.style.left = event.pageX + "px";
  dot.style.top = event.pageY + "px";
  document.body.appendChild(dot);

  var z = document.createElement("li"); // is a node
    
};
document.onmousemove = mouseMove;

