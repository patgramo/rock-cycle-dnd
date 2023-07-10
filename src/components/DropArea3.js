import React, {useState} from "react";
import VocabWord from "./VocabWord";
import {useDrop} from "react-dnd";
import "../App.css"

function DropArea3() {
    const[dropArea, setDropArea] = useState([]);
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

    const [{isOver}, drop] = useDrop(() => ({
        accept: "word",
        drop: (item) => addWordToDropArea(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const addWordToDropArea = (id) => {
        const wordsList = vocabWordsList.filter((word) => id === word.id);
        wordsList[0].isUsed = true;
        setDropArea([wordsList[0]]);
        setVocabWordsList(vocabWordsList.filter((word) => word.id !== id).concat(wordsList[0]));
    };
    
    return(
        <div className="drop-area drop-area-3" ref={drop}>
            {dropArea.map((word) =>{
                return <VocabWord src={require("../images/" + word.src + ".png")} id={word.id} />
            })}
        </div>
    );
};

export default DropArea3;