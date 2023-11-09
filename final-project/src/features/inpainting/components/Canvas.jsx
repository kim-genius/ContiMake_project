// import React from "react";
// import { ReactSketchCanvas } from "react-sketch-canvas";
// import Spinner from "./spinner";

// export default class Canvas extends React.Component {
//   constructor(props) {
//     super(props);

//     this.canvas = React.createRef();
//   }

//   onChange = async () => {
//     const paths = await this.canvas.current.exportPaths();

//     // only respond if there are paths to draw (don't want to send a blank canvas)
//     if (paths.length) {
//       const data = await this.canvas.current.exportImage("svg");
//       this.props.onDraw(data);
//     }
//     console.log(paths)
//   };

//   render() {
//     const predictions = this.props.predictions.map((prediction) => {
//       prediction.lastImage = prediction.output
//         ? prediction.output[prediction.output.length - 1]
//         : null;
//       return prediction;
//     });

//     const predicting = predictions.some((prediction) => !prediction.output);
//     const lastPrediction = predictions[predictions.length - 1];

//     return (
//       <div className="relative w-full aspect-square">
//         {/* PREDICTION IMAGES */}

//         {!this.props.userUploadedImage &&
//           predictions
//             .filter((prediction) => prediction.output)
//             .map((prediction, index) => (
//               <img
//                 alt={"prediction" + index}
//                 key={"prediction" + index}
//                 layout="fill"
//                 className="absolute animate-in fade-in"
//                 style={{ zIndex: index }}
//                 src={prediction.lastImage}
//               />
//             ))}

//         {/* SPINNER */}
//         {predicting && (
//           <div
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//             style={{ zIndex: predictions.length + 100 }}
//           >
//             <div className="p-4 w-40 bg-white text-center rounded-lg animate-in zoom-in">
//               <Spinner />
//               <p className="pt-3 opacity-30 text-center text-sm">
//                 {lastPrediction.status}
//               </p>
//             </div>
//           </div>
//         )}

//         {(predictions.length > 0 || this.props.userUploadedImage) &&
//           !predicting && (
//             <div
//               className="absolute top-0 left-0 w-full h-full"
//               style={{ zIndex: predictions.length + 100 }}
//             >
//               <ReactSketchCanvas
//                 ref={this.canvas}
//                 strokeWidth={80}
//                 strokeColor="black"
//                 canvasColor="transparent"
//                 onChange={this.onChange}
//               />
//             </div>
//           )}
//       </div>
//     );
//   }
// }


import React, { useRef, useEffect, useState } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas'
import styles from '../styles/Canvas.module.scss'
const style = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
};


const Canvas = (props) => {
    const canvasRef = useRef();

    const onChange = async () => {
        const paths = await canvasRef.current.exportPaths();
        if (paths.length) {
            const data = await canvasRef.current.exportImage("svg");
            props.onDraw(data);
        }
        console.log(paths)
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
                onChange={onChange}
                ref={canvasRef}
                style={style}
                width="500px"
                height="500px"
                strokeWidth={15}
                strokeColor="red"
            />
        </div>
    )
}


export default Canvas   