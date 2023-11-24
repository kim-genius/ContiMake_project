import React,{useEffect, useState} from "react";
import styles from '../styles/SpeechBubble.module.scss'
import { fabric } from 'fabric'

const SpeechBubble = () => {
  const [content,setContent] = useState('입하세요')
  // 설정값
  var boxPadding = 16; // 말풍선과 텍스트 상자 간 여백
  var arrowWidth = 16; // 말풍선 꼬리 폭
  var strokeWidth = 2; // 말풍선 테두리 두께
  var handleSize = 24; // 말풍선 꼬리 조절 핸들 크기
  var msg = '입력하세요'; // 표시할 메시지
  
  // fabric 캔버스 생성
  var canvas = new fabric.Canvas('c');

  // 텍스트 상자 생성
  var textbox = new fabric.Textbox(msg, {
    left: 200,
    top: 80,
    width: 180,
    fontSize: 16,
    originY: 'center',
    originX: 'center'
  });
  
  //textbox의 값을 가져오는 방법 및 저장하는 방법
  //버튼을 클릭하면 입력했던 택스트가 set으로 textbox에 들어간다.
  useEffect(()=>{  
    
    const test = canvas.getObjects('textbox')[0];
     setContent(textbox.get('text'),test)
    
},[])

const textChange=(e)=>{
  
  textbox.set('text','hihi')
  const test = canvas.getObjects('textbox');
  setContent(textbox.get('text',test))
  console.log(test)
  e.preventDefault()

}

  // 텍스트 상자가 이동할 때마다 setCoords 호출
  var setCoords = textbox.setCoords.bind(textbox);
  textbox.on({
    moving: setCoords,
    scaling: setCoords,
    rotating: setCoords
  });

  // 텍스트 상자의 위치 변화 감지 및 핸들 업데이트를 위한 이전 좌표 저장
  textbox.lastLeft = textbox.left;
  textbox.lastTop = textbox.top;

  // 말풍선 꼬리 조절 핸들 생성
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

  // 말풍선 배경 상자 생성
  var rect = new fabric.Rect({
    fill: 'white',
    stroke: 'black',
    strokeWidth: strokeWidth,
    rx: 8,
    ry: 8,
    objectCaching: false
  });

  // 말풍선 꼬리 다각형 생성
  var poly = new fabric.Polygon(
    [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 0 }],
    {
      fill: 'white',
      stroke: 'black',
      strokeWidth: strokeWidth,
      objectCaching: false
    }
  );

  // 말풍선 테두리를 가리기 위한 두 번째 꼬리 다각형 생성
  var poly2 = new fabric.Polygon(
    [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 0 }],
    {
      fill: 'white',
      objectCaching: false
    }
  );

  // 캔버스에 요소 추가


  // 렌더링 후 말풍선 업데이트
  canvas.on('after:render', updateBubble);
  updateBubble();

  function updateBubble() {
    var x = textbox.left;
    var y = textbox.top;

    // 상자 업데이트
    var bound = textbox.getBoundingRect();
    rect.left = bound.left - boxPadding;
    rect.top = bound.top - boxPadding;
    rect.width = bound.width + (boxPadding * 2);
    rect.height = bound.height + (boxPadding * 2);

    // 텍스트 상자 이동 시, 핸들 위치 업데이트
    if (x !== textbox.lastLeft ||
      y !== textbox.lastTop) {
      handle.left += (x - textbox.lastLeft);
      handle.top += (y - textbox.lastTop);
      handle.setCoords();
    }

    var halfPi = Math.PI / 2;
    var angleRadians = Math.atan2(handle.top - y, handle.left - x);
    var offsetX = Math.cos(angleRadians + halfPi);
    var offsetY = Math.sin(angleRadians + halfPi);

    // 꼬리 다각형 업데이트
    poly.points[0].x = handle.left;
    poly.points[0].y = handle.top;
    poly.points[1].x = x - (offsetX * arrowWidth);
    poly.points[1].y = y - (offsetY * arrowWidth);
    poly.points[2].x = x + (offsetX * arrowWidth);
    poly.points[2].y = y + (offsetY * arrowWidth);

    var halfStroke = strokeWidth / 2;

    // 테두리 가릴 두 번째 다각형 업데이트
    poly2.points[0].x = handle.left;
    poly2.points[0].y = handle.top;
    poly2.points[1].x = x - offsetX * (arrowWidth - halfStroke);
    poly2.points[1].y = y - offsetY * (arrowWidth - halfStroke);
    poly2.points[2].x = x + offsetX * (arrowWidth - halfStroke);
    poly2.points[2].y = y + offsetY * (arrowWidth - halfStroke);

    textbox.lastLeft = x;
    textbox.lastTop = y;
  }

  return (
    <>
    <div className={styles.center}>
      <canvas id="c" width="400" height="240"></canvas>
    </div>
    <button onClick={()=>{ 
       canvas.add(poly, rect, poly2, textbox);
       canvas.add(handle).setActiveObject(handle);}}> 클릭클릭</button>
    <button style={{margin:'200px'}} onClick={textChange}>입력</button>
    {content}
    </>
  )
};

export default SpeechBubble;