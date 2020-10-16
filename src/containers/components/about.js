import React, { Component } from "react";
import { connect } from "react-redux";
// import { addArticle } from "../actions/index";
import { Card } from 'react-bootstrap';
// function mapDispatchToProps(dispatch) {
//     return {
//         addArticle: article => dispatch(addArticle(article))
//     };
// }

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //   title: ""
        };

    }



    //   handleSubmit(event) {
    //     event.preventDefault();
    //     const { title } = this.state;
    //     this.props.addArticle({ title });
    //     this.setState({ title: "" });
    //   }
    render() {
        const { title } = this.state;
        return (
            <div className={`inner_pages about_inner_pages`}>
                <div className={`header about_header`}>
                    <div className={`header_inner_content about_header_inner_content `}>
                        About the Med-Vet-Net Association
                    </div>
                </div>
                <div className={`body_content about_body_content`}>
                    <div className={`body_left_content about_body_left_content`}>
                        <p className={`section_name`}>Origins of the MVNA</p>
                        <p className={`sub_section`}>Med-Vet-Net European Network of Excellence for Zoonoses research</p>
                        <p className={`content`}>Established in response to the recognition of the enormity of the economic impact of
                        zoonotic diseases and the requirement for better international and national, level
cooperation on animal and health issues, the <b>Med-Vet-Net European Network of
Excellence (NoE) for Zoonoses</b> research was initiated in <b>September 2004.</b> The Network
was funded for 5 years by the European Union (EU) 6th Framework Programme, within
the ‘Quality and Safety of Food’ Priority Area, ending on 31 October 2009.</p>
                        <p className={`section_name`}>Quotes:</p>
                        <div className={'quote_box'}>
                        <i className="fa fa-quote-left qutes"></i>
<p className={`quote_heading`}>Scientific Scope:</p>
<p className={`quote_content`}>Zoonotic agents and antimicrobial resistance with impact on public health and
animal health including transmission via food, direct contact and environmental
pathways (i.e. so-called Med-Vet or One Health context)
</p>
                        </div>
                    </div>
                    <div className={`body_right_content about_body_right_content`}>
                        <img className={`body_right_content_image about_body_right_content_image`} src="https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-1.2.1&w=1000&q=80"></img>
                        <hr className={`horizontal_line about_horizontal_line`}></hr>
                        <div className={`quick_links about_quick_links`}>
                            <div className="quick_links_inner about_quick_links_inner">
                                Quick Links
                            </div>
                            <Card className={`quick_links_card about_quick_links`}>
                                <div className={`quick_links_inner_content about_quick_links_inner_content`}>
                                    <div className={`quick_links_inner_content_left about_quick_links_inner_content_left`}>
                                        <img
                                            className={`quick_links_inner_content_image about_quick_links_inner_content_image`}
                                            src="/images/MVNA_Logo_Color.png"
                                            alt="Third slide"
                                        />
                                    </div>
                                    <div className={`quick_links_inner_contents about_quick_links_inner_contents`}>
                                        <p className={`quick_links_inner_content_title about_quick_links_inner_content_title`}>One Health EJP Annual Scientific Meeting 2020</p>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
                                    </div>
                                </div>
                            </Card>
                            <Card className={`quick_links_card about_quick_links`}>
                                <div className={`quick_links_inner_content about_quick_links_inner_content`}>
                                    <div className={`quick_links_inner_content_left about_quick_links_inner_content_left`}>
                                        <img
                                            className={`quick_links_inner_content_image about_quick_links_inner_content_image`}
                                            src="/images/MVNA_Logo_Color.png"
                                            alt="Third slide"
                                        />
                                    </div>
                                    <div className={`quick_links_inner_contents about_quick_links_inner_contents`}>
                                        <p className={`quick_links_inner_content_title about_quick_links_inner_content_title`}>One Health EJP Annual Scientific Meeting 2020</p>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



export default About;