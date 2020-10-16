import React, { useState, useEffect, useRef } from "react";
import { Carousel, Card, Button } from 'react-bootstrap';
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'
import { Colors } from "./Colors";
import SourceBox from "./SourceBox";
import TargetBox from "./TargetBox";
const Sample = () => {

        return (
            <div className="sample-container">
                    {/* <DndProvider backend={HTML5Backend}>
                    <div className={`options`}>
                    <SourceBox color={Colors.HEADER}></SourceBox>
                    <SourceBox color={Colors.TEXT}></SourceBox>
                    </div>
                    <TargetBox />
    </DndProvider> */}


{/* <center className={`for_text heading`}>Head1</center>
<center className={`for_text heading2`}>Head2</center>
<center className={`for_text heading3`}>Head3</center> */}

            </div>
        );
    
}
export default Sample;