import React from "react";
import {useDrag} from "react-dnd";
import "../App.css";

const style= {
    border:"1px dashed black",
    backgroundColor: "white",
    cursor:"move"
};

function VocabWord ({id, src}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type:"word",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }))

    const opacity = isDragging ? 0 : 1;

    return(
        <div>
            <img 
            src={src} 
            style={{ ...style, opacity}}
            ref={drag} />
        </div>
    );
}

export default VocabWord;