import React, { useRef, useEffect, useState } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas'
import styles from '../styles/Canvas.module.scss'
import { useSelector } from 'react-redux';
const style = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
};

const Canvas = (props) => {
    const brushState = useSelector((state) => state.canvas_slice)

    // console.log(brushState)
    const canvasRef = useRef();
    const onChange = async () => {
        const paths = await canvasRef.current.exportPaths();
        if (paths.length) {
            const data = await canvasRef.current.exportImage("png");
            props.onDraw(data);
            console.log(data)
        }
        // console.log(paths)
    };
    const predictions = props.predictions.map((prediction) => {
        prediction.lastImage = prediction.output
        ? prediction.output[prediction.output.length - 1]
        : null;
        return prediction;
    });
    
    const predicting = predictions.some((prediction) => !prediction.output);
    const lastPrediction = predictions[predictions.length - 1];
    


    return (
        <div className={styles.canvasWrapper}>
            {/* PREDICTION IMAGES */}

        { predictions
            .filter((prediction) => prediction.output)
            .map((prediction, index) => (
              <img
                alt={"prediction" + index}
                key={"prediction" + index}
                layout="fill"
                // className="absolute animate-in fade-in"
                style={{ zIndex: index }}
                src={prediction.lastImage}
              />
            ))}
            <ReactSketchCanvas
                className={styles.sketchCanvas}
                onChange={onChange}
                ref={canvasRef}
                style={style}
                width="500px"
                height="500px"
                strokeWidth={15}
                strokeColor="black"
                exportWithBackgroundImage="true"
                allowOnlyPointerType={brushState.allowType}
                // backgroundImage='/testimage.png'
            />
        </div>
    )
}


export default Canvas   