import React, {useState} from "react";
import VocabWord from "./VocabWord";
import DropArea1 from "./DropArea1";
import DropArea2 from "./DropArea2";
import DropArea3 from "./DropArea3";
import DropArea4 from "./DropArea4";
import DropArea5 from "./DropArea5";
import DropArea6 from "./DropArea6";
import DropArea7 from "./DropArea7";
import DropArea8 from "./DropArea8";
import DropArea9 from "./DropArea9";
import {useDrop} from "react-dnd";
import "../App.css"


function DragDrop() {
    const [vocabWordsList, setVocabWordsList] = useState( [
        {
            id: 1,
            src: "melting",
            isUsed: false
        },
        {
            id: 2,
            src: "cooling",
            isUsed: false,
        },
        {
            id: 3,
            src: "melting2",
            isUsed: false,
        },
        {
            id: 4,
            src: "heatandpressure",
            isUsed: false,
        },
        {
            id: 5,
            src: "weathering",
            isUsed: false,
        },
        {
            id: 6,
            src: "weathering2",
            isUsed: false,
        },
        {
            id: 7,
            src: "heatandpressure2",
            isUsed: false,
        },
        {
            id: 8,
            src: "compaction",
            isUsed: false,
        },
        {
            id: 9,
            src: "weathering3",
            isUsed: false,
        }
    ]);

    return(
    <div>
        <div id="diagram">
        <DropArea1 />
        <DropArea2 />
        <DropArea3 />
        <DropArea4 />
        <DropArea5 />
        <DropArea6 />
        <DropArea7 />
        <DropArea8 />
        <DropArea9 />
            {/* <div className="drop-area drop-area-2" ref={drop}>
                {dropArea.map((word) =>{
                    return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
                })}
            </div>
            <div className="drop-area drop-area-3" ref={drop}>
                {dropArea.map((word) =>{
                    return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
                })}
            </div>
            <div className="drop-area drop-area-4" ref={drop}>
                {dropArea.map((word) =>{
                    return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
                })}
            </div>
            <div className="drop-area drop-area-5" ref={drop}>
                {dropArea.map((word) =>{
                    return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
                })}
            </div>
            <div className="drop-area drop-area-6" ref={drop}>
                {dropArea.map((word) =>{
                    return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
                })}
            </div>
            <div className="drop-area drop-area-7" ref={drop}>
                {dropArea.map((word) =>{
                    return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
                })}
            </div>
            <div className="drop-area drop-area-8" ref={drop}>
                {dropArea.map((word) =>{
                    return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
                })}
            </div>
            <div className="drop-area drop-area-9" ref={drop}>
                {dropArea.map((word) =>{
                    return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
                })}
            </div> */}
        </div>
        <div className="vocab-words-container">
            {vocabWordsList.map((word) => {
                if(word.isUsed === false){ 
                    return (<VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />)
                }
                })}
        </div>
    </div>
    );
}

export default DragDrop;