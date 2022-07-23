let conflictingPointIndex;

function setUp() {
  let canvas = createCanvas(500, 100);
  points.sort((p1, p2) => {
    return p1[0] - p2[0];

  });
}
function checkIsLine() {
    if(points.length == 0) {
        return false;
    }
  let initialGradient = getGradient(0); 
  console.log("Starting Gradient: " + initialGradient);
  for (let i = 0; i < points.length - 1; i++) { 
    if (Math.abs(initialGradient - getGradient(i)) > 1.6) { 
      console.log("Conflicting Point: " + points[i] + " " + getGradient(i) + " " + Math.abs(initialGradient - getGradient(i)));
      conflictingPointIndex = i;
      return false;
    }
  }
  return true;
}
function getGradient(offset) {
    return (points[offset + 1][1] - points[offset][1]) / (points[offset + 1][0] - points[offset][0]); 
}
