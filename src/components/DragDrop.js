import React, {useState} from "react";
import VocabWord from "./VocabWord";
import {useDrop} from "react-dnd";
import "../App.css"

const VocabWordsList = [
    {
        id: 1,
        src: "melting",
        used: false
    },
    {
        id: 2,
        src: "cooling",
        used: false,
    },
    {
        id: 3,
        src: "melting2",
        used: false,
    },
    {
        id: 4,
        src: "heatandpressure",
        used: false,
    },
    {
        id: 5,
        src: "weathering",
        used: false,
    },
    {
        id: 6,
        src: "weathering2",
        used: false,
    },
    {
        id: 7,
        src: "heatandpressure2",
        used: false,
    },
    {
        id: 8,
        src: "compaction",
        used: false,
    },
    {
        id: 9,
        src: "weathering3",
        used: false,
    }
]
function DragDrop() {
    const[dropArea, setDropArea] = useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "word",
        drop: (item) => addWordToDropArea(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const addWordToDropArea = (id) => {
        const vocabWordsList = VocabWordsList.filter((word) => id === word.id);
        setDropArea([vocabWordsList[0]]);
        console.log(dropArea);
    };

    return(
    <div>
        <div id="diagram">
            <div className=" drop-area drop-area-1" ref={drop}>
                {dropArea.map((word) =>{
                    return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
                })}
            </div>
            <div className=" drop-area drop-area-2" ref={drop}>
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
            </div>
        </div>
        <div className="vocab-words-container">
            {VocabWordsList.map((word) => {
                return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
            })}
        </div>
    </div>
    );
}

export default DragDrop;