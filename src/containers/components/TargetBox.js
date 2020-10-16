// import React, { useState, useCallback,useEffect } from 'react'
// // import { DropTarget } from 'react-dnd'
// import { Colors } from './Colors'
// let backgroundColor = [];
// const TargetBoxRaw = ({
//   canDrop,
//   isOver,
//   draggingColor,
//   lastDroppedColor,
//   connectDropTarget,
// }) => {
//   const [elements,setelements] = useState([]);
//   const opacity = isOver ? 1 : 0.7

//   useEffect(() => {
//     if (document.getElementsByClassName("movable_elemlent").length > 0) {
//       for(let i = 0;i<document.getElementsByClassName("movable_elemlent").length;i++){
//         dragElement(document.getElementsByClassName("movable_elemlent")[i]);
//       }  
//       if (document.getElementsByClassName("mydiv").length > 0) {
//         makeResizableDiv('.mydiv')
//     }  
//   }
//   });

//   function makeResizableDiv(div) {
//     const element = document.querySelector(div);
//     const resizers = document.querySelectorAll(div + ' .resizer')
//     for (let i = 0; i < resizers.length; i++) {
//         const currentResizer = resizers[i];
//         currentResizer.addEventListener('mousedown', function (e) {
//             e.stopPropagation();
//             // alert(17);
//             window.addEventListener('mousemove', resize)
//             window.addEventListener('mouseup', stopResize)
//         })

//         function resize(e) {
//             if (currentResizer.classList.contains('bottom-right')) {
//                 element.style.width = e.pageX - element.getBoundingClientRect().left + 'px'
//                 element.style.height = e.pageY - element.getBoundingClientRect().top + 'px'
//                 //   console.log(element.style.height);
//             }
//         }

//         function stopResize() {
//             // setmove(1)
//             window.removeEventListener('mousemove', resize)
//         }
//     }
// }



//   function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

//     elmnt.onmousedown = dragMouseDown;
//     function dragMouseDown(e) {
//         // e.stopPropagation();

//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {

//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         if (elmnt.offsetTop - pos2 < 0) {

//         }
//         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//         console.log(elmnt.offsetTop - pos2);
//     }

//     function closeDragElement() {
//         /* stop moving when mouse button is released:*/
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }

//   return connectDropTarget(
//     <div className={`target_box`}>
//       {/* <p>Drop here.</p> */}

//       {/* {!canDrop && lastDroppedColor && <p>Last dropped: {lastDroppedColor}</p>} */}
//       {backgroundColor.map(function(item, i){
//   console.log(i);
//   // alert(i)
//   return item
// })}
//     </div>,
//   )
// }
// // const TargetBox = DropTarget(
// //   [Colors.HEADER, Colors.TEXT],
// //   {
// //     drop(props, monitor) {
// //       props.onDrop(monitor.getItemType())
// //     },
// //   },
// //   (connect, monitor) => ({
// //     connectDropTarget: connect.dropTarget(),
// //     isOver: monitor.isOver(),
// //     canDrop: monitor.canDrop(),
// //     draggingColor: monitor.getItemType(),
// //   }),
// // )(TargetBoxRaw)
// const StatefulTargetBox = (props) => {
//   const [lastDroppedColor, setLastDroppedColor] = useState(null)
//   const handleDrop = useCallback((color) => setLastDroppedColor(color), [])
//   switch (lastDroppedColor) {
//     case Colors.HEADER:
      
//       // for_elements.push(<center className={`heading2`}>Head1</center>)
//       // setelements(for_elements)
      
//       backgroundColor.push(
      
//         <div className={`mydiv movable_elemlent`} >
//                                 <button className={`option_edit`}>Edit</button>
//                                 <div id={`haveText`}>Head1</div>
//                                 <div className={`resizer bottom-right`} ></div>
//                             </div>
      
//       )
//       break
//     case Colors.TEXT:
//       // for_elements.push(<center className={`smallfont`}>Text</center>)
//       // setelements(for_elements)
//       backgroundColor.push(
//         <div className={`mydiv movable_elemlent`} >
//         <button className={`option_edit`}>Edit</button>
//         <div id={`haveText`}>Text</div>
//         <div className={`resizer bottom-right`} ></div>
//     </div>
      
//       )
//       break
//     default:
//       break
//   }
//   return (<></>
//     // <TargetBox
//     //   {...props}
//     //   lastDroppedColor={lastDroppedColor}
//     //   onDrop={handleDrop}
//     // />
//   )
// }
// export default StatefulTargetBox
