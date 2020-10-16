// import React, { useState, useCallback } from 'react'
// // import { DragSource,DragPreviewImage } from 'react-dnd'
// import { Colors } from './Colors'
// const style = {
//   border: '1px dashed gray',
//   padding: '0.5rem',
//   margin: '0.5rem',
// }
// const SourceBoxRaw = ({
//   color,
//   children,
//   isDragging,
//   connectDragSource,
//   connectDragPreview,
//   forbidDrag,
//   onToggleForbidDrag,
//   preview
// }) => {
//   const opacity = isDragging ? 0.4 : 1
//   let backgroundColor
//   let src;
//   switch (color) {
//     case Colors.TEXT:
//       src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEX///8AAAClpaWtra2Wlpb7+/tKSkrz8/Pv7+99fX3Nzc3k5OTQ0NCoqKhHR0eGhoa3t7cRERFVVVVQUFC0tLRzc3MICAgXFxcWBUYCAAACuklEQVR4nO3d61LiQBRFYYKCAlFB1Hn/Nx3LmmEwpG+nuznscX1/qaTPqlBALlUsFgAAAAAAAAAA4H/0sFwP3tbLh36BS++6P5a9At+9y07e+wS+eHedeekROHpXfTN2KPT/jDm3bh/46N008di8cO+dNLFvXvjknTTx1Lzw9F1413zXJe7+jtH+O3HZb9c3MgaFV0Lhbe76Rsag8EoobLzr8Tj9pRFxvzrb2+q+YMvjGB+jX2HhT9Xnf4mr57JN97Ex+hWuyqb8PIqnnZUcwS+r8BgdC99KxxxOOyve8s2lsPy6lL3wclEKKaTwhxWmzvojhYktL8/ofQpTi9kLKxYtR2EEhV0WLUdhBIVdFi13+e2Xffm5QWH5ouUi9y1StxDshRWLlouc0KduA9kLKxYtF7l/mLqVZy+sWNQgeA84eTvWXlixqEHwPn7ylnpFoX1Ri8CzGOnHIioK7YuazD5Pk/FoS02heVGbmQ/vnA/tqkLrokaT59oyHzGrKzQuelWVhQIo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1AfhfoolLTdHIZLp5dnXjtsto7zltq9ziQkCj8dd44zF9l+zBekCodB5DDuQoHpwg+Noxh4i+YUDq+Oc2fbBsfPKJR4n26C0+f8h+XGcfJcc18TX7L+h/TgOHmu4BHM+y9Zt7nz2Wal8JZQ2HIrHxS23MoHhS238vGDCm28x88Q/F2a5Zf3+BnC5xY5FM4tIueHGRTODyPn+GkS5/iR6zRJItdpFqP5w6bLvxr2ELpemqBzvXQRuuYdo3XNGwAAAAAAAAAAdPAbs0sgVDTjN64AAAAASUVORK5CYII=';
//       backgroundColor = <center className={`for_text smallfont`}>Header</center>
//       break
//     case Colors.HEADER:
//       src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAACVlZUvLy8SEhLKysra2tr6+vo7OztKSkqFhYXPz8/o6Ojl5eUeHh53d3c2NjZsbGysrKzz8/OPj4+np6dSUlLu7u7W1taCgoLCwsK3t7dDQ0NgYGAQEBBWVlaenp5ubm4mJiYTj/u2AAACkklEQVR4nO3dCW7aYBRF4WA8AI4xHpg8MO1/kU1VKUVtCNeP15i252zg6uM3sgQyvLwQERERET1VWR04t9aGvWeDuvp4KJ1412lC993J61cJ5wgRWkPoFkKE5hC6hRChOYRuIURoDqFbCBGaQ+jWvy98ts/a4mPou9PVmjBf+e4u++2tqWTbLgqPufCYn3ZJogHfdqs0yDcHh+FZUTfbe7vbOKqPM/PGZX4u40zGXTGz+FR0S+tu2PVBmt08vN/ndk2wGXzRrvImzYbbrsvS9jwdurvcrKPYNtesj+pIXaaP2a5KonKvvrx92egH91GROCTeGPTE90loO7urxhImCBHKIURoDSFCPYQIrSFEqIcQoTWECPUQIrSGEKEeQoTWECLUQ4jQGkKEeggRWkOIUA8hQmsIEeohRGgNIUI9hAitIUSoh/BPCZ/vaYRZGvkmPjjzdcKxQogQ4fghRIhw/BAiRDh+CBEiHD+ECBGOH0KECMcPIUKE44fQT3ipF67txR/f4xvS+/EtN0JrCBHqIURoDSFCPYQIrSFEqIcQoTWECPUQIrSGEKEeQoTWECLUQ4jQGkKEeggRWkOIUA8hQmsIEeohRGgNIUI9hH+7MKlaUdhVlQ/tR1W2EoXRA7vZetGr/+H+1iwPmsRF1wS56PvesqjLbOhGkpZ78Sr5pbA4tYPnfha3p960O5nX5U7byNLyfLGNvHfYBE088OLZ7pp6/uDuZJW36esnI8luXXTioyp3O6yOi0Y8zazdb8QfoLvfZX4u4xvvltRr5L1OE7rvTm4cpL9QvIW47yL0CyFCcwjdQojQHEK3ECI0h9AthAjNIXQLIUJz/68wnPp26TWh8+x0evjsY2EiIiIiIiJL3wCDwIQO4FNEVwAAAABJRU5ErkJggg==';
//       backgroundColor = <center className={`for_text smallfont`}>Header</center>
//       break
//     default:
//       break
//   }
//   // let preveiw = <DragPreviewImage connect={connectDragPreview}  src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEX///8AAAClpaWtra2Wlpb7+/tKSkrz8/Pv7+99fX3Nzc3k5OTQ0NCoqKhHR0eGhoa3t7cRERFVVVVQUFC0tLRzc3MICAgXFxcWBUYCAAACuklEQVR4nO3d61LiQBRFYYKCAlFB1Hn/Nx3LmmEwpG+nuznscX1/qaTPqlBALlUsFgAAAAAAAAAA4H/0sFwP3tbLh36BS++6P5a9At+9y07e+wS+eHedeekROHpXfTN2KPT/jDm3bh/46N008di8cO+dNLFvXvjknTTx1Lzw9F1413zXJe7+jtH+O3HZb9c3MgaFV0Lhbe76Rsag8EoobLzr8Tj9pRFxvzrb2+q+YMvjGB+jX2HhT9Xnf4mr57JN97Ex+hWuyqb8PIqnnZUcwS+r8BgdC99KxxxOOyve8s2lsPy6lL3wclEKKaTwhxWmzvojhYktL8/ofQpTi9kLKxYtR2EEhV0WLUdhBIVdFi13+e2Xffm5QWH5ouUi9y1StxDshRWLlouc0KduA9kLKxYtF7l/mLqVZy+sWNQgeA84eTvWXlixqEHwPn7ylnpFoX1Ri8CzGOnHIioK7YuazD5Pk/FoS02heVGbmQ/vnA/tqkLrokaT59oyHzGrKzQuelWVhQIo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1AfhfoolLTdHIZLp5dnXjtsto7zltq9ziQkCj8dd44zF9l+zBekCodB5DDuQoHpwg+Noxh4i+YUDq+Oc2fbBsfPKJR4n26C0+f8h+XGcfJcc18TX7L+h/TgOHmu4BHM+y9Zt7nz2Wal8JZQ2HIrHxS23MoHhS238vGDCm28x88Q/F2a5Zf3+BnC5xY5FM4tIueHGRTODyPn+GkS5/iR6zRJItdpFqP5w6bLvxr2ELpemqBzvXQRuuYdo3XNGwAAAAAAAAAAdPAbs0sgVDTjN64AAAAASUVORK5CYII=`}/>; 
// //   
//   return (connectDragSource(

//     <div>        
// {/* <DragPreviewImage connect={connectDragPreview}  src={src}/>    
// {backgroundColor} */}
//       {/* {children} */}
//     </div>
//   ))
// }
// const SourceBox = DragSource(
//   (props) => props.color + '',
//   {
//     canDrag: (props) => !props.forbidDrag,
//     beginDrag: () => ({}),
//   },
//   (connect, monitor) => ({
//     connectDragSource: connect.dragSource(),
//     connectDragPreview: connect.dragPreview(),
//     isDragging: monitor.isDragging(),
//   }),

// )(SourceBoxRaw)
// const StatefulSourceBox = (props) => {
//   const [forbidDrag, setForbidDrag] = useState(false)
//   const handleToggleForbidDrag = useCallback(() => {
//     setForbidDrag(!forbidDrag)
//   }, [forbidDrag])
//   return (
//       <>

//     {/* <SourceBox
//       {...props}
//       forbidDrag={forbidDrag}
//       onToggleForbidDrag={() => handleToggleForbidDrag()}
//     /> */}
//     </>
//   )
// }
// export default StatefulSourceBox
