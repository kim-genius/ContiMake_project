import { useState } from "react";
import Canvas from "./components/Canvas";
// 일정 시간동안 대기하는 함수 (ms: 밀리초)..
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const Inpainting = () => {
  const [predictions, setPredictions] = useState([]); 
  const [error, setError] = useState(null); 
  const [maskImage, setMaskImage] = useState(null); 
  const [userUploadedImage, setUserUploadedImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const prevPrediction = predictions[predictions.length - 1];
    const prevPredictionOutput = prevPrediction?.output
      ? prevPrediction.output[prevPrediction.output.length - 1]
      : null;

    // HTTP 요청 본문 데이터 생성
    const body = {
      prompt: e.target.prompt.value, // 사용자 입력
      init_image: userUploadedImage
        // ? await readAsDataURL(userUploadedImage) // 사용자가 업로드한 이미지를 Data URL로 변환
        // : maskImage
        ? prevPredictionOutput // 마스크 이미지가 있는 경우, 이전 예측 결과를 초기 이미지로 사용
        : null,
      mask: maskImage, // 마스크 이미지
    };

    // 서버로 POST 요청을 보내고 예측 결과를 가져옴
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const prediction = await response.json();

    // 서버에서 오류 응답을 반환한 경우, 오류 메시지를 표시하고 함수 종료
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }

    // 예측 결과를 상태에 추가
    setPredictions(predictions.concat([prediction]));

    // 예측이 완료될 때까지 대기
    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000); // 1초 동안 대기
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();

      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }

      // 예측 결과를 상태에 추가
      setPredictions(predictions.concat([prediction]));

      // 예측이 완료되면 사용자가 업로드한 이미지 초기화
      if (prediction.status === "succeeded") {
        setUserUploadedImage(null);
      }
    }
  };

  // "Start Over" 버튼을 눌렀을 때 실행되는 함수

  return (
    <div>
        {/* {error && <div>{error}</div>} */}

        {/* <div className="border-hairline max-w-[512px] mx-auto relative"> */}
         
          {/* <div> */}
            <Canvas
              predictions={predictions}
              onDraw={setMaskImage}
            />
          {/* </div> */}
        {/* </div> */}
    </div>
  );
}

export default Inpainting