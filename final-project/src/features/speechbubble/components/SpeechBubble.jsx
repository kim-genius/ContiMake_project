import React from "react";
import styles from '../styles/SpeechBubble.module.scss'
import {fabric} from 'fabric'


const SpeechBubble = () => {

//configuration
var boxPadding = 16;
var arrowWidth = 16;
var strokeWidth = 2; 
var handleSize = 24;
var msg = '프로젝트 말풍선 기능 구현 중.';

//fabric canvas
var canvas = new fabric.Canvas('c');

//text
var textbox = new fabric.Textbox(msg, {
  left: 200,
  top: 80,
  width: 180,
  fontSize: 16,
  originY: 'center',
  originX: 'center'
});

//call setCoords whenever the textbox moved
var setCoords = textbox.setCoords.bind(textbox);
textbox.on({
  moving: setCoords,
  scaling: setCoords,
  rotating: setCoords
});
console.log(textbox)
//to detect changes in the textbox position and update the handle when the textbox was moved, let's store the last known coords
textbox.lastLeft = textbox.left;
textbox.lastTop = textbox.top;

//speech bubble tail handle
var handle = new fabric.Rect({
  fill: 'transparent',
  left: 128,
  top: 160,
  width: handleSize,
  height: handleSize,
  hasRotatingPoint: false,
  hasControls: false,
  originY: 'center',
  originX: 'center'
});

//speech bubble background box
var rect = new fabric.Rect({
  fill: 'white',
  stroke: 'black',
  strokeWidth: strokeWidth,
  rx: 8,
  ry: 8,
  objectCaching: false
});

//speech bubble tail polygon
var poly = new fabric.Polygon(
  [{x:0,y:0},{x:1,y:1},{x:1,y:0}],
  {
    fill: 'white',
    stroke: 'black',
    strokeWidth: strokeWidth,
    objectCaching: false
  }
);

//2nd tail poly to overlay the bubble stroke
var poly2 = new fabric.Polygon(
  [{x:0,y:0},{x:1,y:1},{x:1,y:0}],
  {
    fill: 'white',
    objectCaching: false
  }
);

canvas.add(poly, rect, poly2, textbox);
canvas.add(handle).setActiveObject(handle);
canvas.on('after:render', updateBubble);
updateBubble();

function updateBubble() {
  
  //lets spare us some typing
  var x = textbox.left;
  var y = textbox.top;
  
  //update rect
  var bound = textbox.getBoundingRect();
  rect.left = bound.left - boxPadding;
  rect.top = bound.top - boxPadding;
  rect.width = bound.width + (boxPadding*2);
  rect.height = bound.height + (boxPadding*2);
  
  //if the textbox was moved, update the handle position too
  if(x !== textbox.lastLeft || 
     y !== textbox.lastTop) {
    handle.left += (x - textbox.lastLeft);
    handle.top += (y - textbox.lastTop);
    handle.setCoords();
  }
  
  //to support 360° thick tails we have to do some triangulation
  var halfPi = Math.PI/2;
  var angleRadians = Math.atan2(handle.top - y, handle.left - x);
  var offsetX = Math.cos(angleRadians + halfPi);
  var offsetY = Math.sin(angleRadians + halfPi);
  
  //update tail poly
  poly.points[0].x = handle.left;
  poly.points[0].y = handle.top;
  poly.points[1].x = x - (offsetX * arrowWidth);
  poly.points[1].y = y - (offsetY * arrowWidth); 
  poly.points[2].x = x + (offsetX * arrowWidth);
  poly.points[2].y = y + (offsetY * arrowWidth);
  
  //white overlay poly (prevent dividing line)
  var halfStroke = strokeWidth/2;
  poly2.points[0].x = handle.left;
  poly2.points[0].y = handle.top;
  poly2.points[1].x = x - offsetX * (arrowWidth - halfStroke);
  poly2.points[1].y = y - offsetY * (arrowWidth - halfStroke);
  poly2.points[2].x = x + offsetX * (arrowWidth - halfStroke);
  poly2.points[2].y = y + offsetY * (arrowWidth - halfStroke);
  
  //remember current position to detect further changes
  textbox.lastLeft = x;
  textbox.lastTop = y;
}

  return (
    <div className={styles.center}>
      <canvas id="c" width="400" height="240"></canvas>
    </div>
  )
};

export default SpeechBubble;
