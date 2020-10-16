import React, { useState, useEffect, useRef } from "react";
import { Carousel, Card, Button } from 'react-bootstrap';
const Home = () => {
    const [f_height, setf_height] = useState(0);
    const [move, setmove] = useState(1);

    function dragElement(elmnt, ss) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        elmnt.onmousedown = dragMouseDown;




        function dragMouseDown(e) {
            // e.stopPropagation();

            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {

            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            if (elmnt.offsetTop - pos2 < 0) {

            }
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            console.log(elmnt.offsetTop - pos2);
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    useEffect(() => {
        setf_height(document.getElementsByClassName('carousel-container-blog')[0].offsetHeight)
    });

    useEffect(() => {

        if (document.getElementsByClassName("movable_elemlent").length > 0) {
            dragElement(document.getElementsByClassName("movable_elemlent")[0], move);
        }

        if (document.getElementsByClassName("mydiv").length > 0) {
            makeResizableDiv('.mydiv')
        }



    }, [move]);
    if (document.getElementsByClassName('editableText').length > 0) {
        document.getElementsByClassName('editableText')[0].addEventListener('mousedown', function (e) {
            e.stopPropagation();
        })
    }
    // useEffect(() => {        



    // });
    // if(document.getElementById('haveText').length > 0){
    //     document.getElementById('haveText').addEventListener('blur', function(e) {
    //         alert(15)
    //       })
    // }
    const editableblur = (e) => {
        if (e.target.classList.contains('editableText')) {
            e.target.classList.remove('editableText');
            e.target.contentEditable = 'false';
        }
    }
    if (document.getElementsByClassName('option_edit').length > 0) {
        document.getElementsByClassName('option_edit')[0].addEventListener('click', function (e) {
            e.stopPropagation();
            if (document.getElementById('haveText')) {
                document.getElementById('haveText').contentEditable = 'true'
                document.getElementById('haveText').focus();
                document.getElementById('haveText').classList.add('editableText');
            }
        })
    }
    function makeResizableDiv(div) {
        const element = document.querySelector(div);
        const resizers = document.querySelectorAll(div + ' .resizer')
        for (let i = 0; i < resizers.length; i++) {
            const currentResizer = resizers[i];
            currentResizer.addEventListener('mousedown', function (e) {
                e.stopPropagation();
                // alert(17);
                window.addEventListener('mousemove', resize)
                window.addEventListener('mouseup', stopResize)
            })

            function resize(e) {
                if (currentResizer.classList.contains('bottom-right')) {
                    element.style.width = e.pageX - element.getBoundingClientRect().left + 'px'
                    element.style.height = e.pageY - element.getBoundingClientRect().top + 'px'
                    //   console.log(element.style.height);
                }
            }

            function stopResize() {
                // setmove(1)
                window.removeEventListener('mousemove', resize)
            }
        }
    }


    let for_height = f_height - (4 * f_height) / 100;
    let height_l = {
        height: `${for_height}px`
    }
    let inner_height = for_height / 2.2;
    let grade_height = {
        height: `${inner_height}px`,
        marginTop: `-${inner_height}px`
    }
    let a = [
        (<Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-1.2.1&w=1000&q=80"
                alt="Third slide"
                style={height_l}
            />
        </Carousel.Item>),
        (<Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-1.2.1&w=1000&q=80"
                alt="Third slide"
                style={height_l}
            />
        </Carousel.Item>),
        (<Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-1.2.1&w=1000&q=80"
                alt="Third slide"
                style={height_l}
            />
        </Carousel.Item>)
    ];
    return (
        <div className="home-container">
            <div className="carousel-container-blog">
                <Carousel>
                    {a}
                </Carousel>
                <div className="extra-component" style={grade_height}>
                    <div className="extra-component-sub comp-1">
                        <div className="tweet_logo">
                            <div className="tweet_logo-1">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div className="tweet_logo-2">
                                Conference
                                </div>
                        </div>
                        <div className="tweet-content">
                            <img className="card-body-image" src="/images/MVNA_Logo_Color.png"></img><p >One Health EJP Annual Scientific Meeting 2020</p>
                        </div>
                        <div className="tweet_next">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="extra-component-sub comp-2">
                        <div className="tweet_logo">
                            <div className="tweet_logo-1">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div className="tweet_logo-2">
                                Workshops
                                </div>
                        </div>
                        <div className="tweet-content">
                            <img className="card-body-image" src="/images/MVNA_Logo_Color.png"></img>
                            <div className={`mydiv movable_elemlent`} >
                                <button className={`option_edit`}>Edit</button>
                                <div id={`haveText`} onBlur={editableblur}  >If you have sequence data on Hepatitis E virus</div>
                                <div className={`resizer bottom-right`} onMouseDown={(e) => {

                                    if (e.target.parentElement.classList.contains('movable_elemlent')) {
                                        e.target.parentElement.classList.remove('movable_elemlent')
                                    }
                                    setmove(0)
                                }} onMouseUp={(e) => {

                                }}
                                ></div>
                            </div>
                        </div>
                        <div className="tweet_next">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="extra-component-sub comp-3">
                        <div className="tweet_logo">
                            <div className="tweet_logo-1">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div className="tweet_logo-2">
                                Grants
                                </div>
                        </div>
                        <div className="tweet-content">
                            <img className="card-body-image" src="/images/MVNA_Logo_Color.png"></img> <p >The Med-Vet-Net Association is offering travel grants to early career </p>
                        </div>
                        <div className="tweet_next">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-side-blog">
                <Card style={{ width: '18rem' }}>
                    <div className="card-header-own">
                        <img className="card-icon" src="/icons/News.png" />
                        <p className="card-header-title">News</p>
                    </div>
                    <Card.Body>
                        <Card.Text>
                            <p className="inner_title">Latest News- 15th July 2020</p>
                                Some quick example text to build on the card title
                                <p className="read-more">READ MORE</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <div className="card-header-own">
                        <img className="card-icon" src="/icons-2/News.png" />
                        <p className="card-header-title">Reports</p>
                    </div>
                    <Card.Body>
                        <Card.Text>
                            <p className="inner_title">MVNA-STM - Reports 2018</p>
                                Some quick example text to build on the card title
                                <p className="read-more">READ MORE</p>
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <div className="card-header-own">
                        <p className="card-header-title">Recent Tweets</p>
                    </div>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title
                                <p className="read-more">READ MORE</p>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>

        </div>


    );

}
export default Home;