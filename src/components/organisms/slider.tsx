/** @jsx jsx */
import React,{Component} from "react";
import Slider from "react-slick";
import {jsx,css} from '@emotion/core';
import Activity from "../molecules/activity";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import contest from '../../images/contest__edit.jpg'
import aanetworking from '../../images/aanetworking__edit.jpg'
import networking from '../../images/networking__edit.jpg'
import codeforce from '../../images/codeforce_filtered__edit.jpg'
import study from '../../images/study-board_filtered__edit.jpg'

const wrapperStyle=css`
overflow:hidden;
padding: 1.5rem 2rem;
width: 100%;
position:relative;
margin: 0 0 8rem 0;
.slick-prev:before,
.slick-next:before{
    color:black;
    margin: 0 0.5rem;
}
.slick-prev{
    position:absolute;
    left:-2.5rem;
}
.slick-next{
    position:absolute;
    right:-1.5rem;
}
.slick-dots{
    display:flex;
    justify-content:center;
    width:100%;
}
.slick-dots li{
    margin: 0.01rem;
    display:flex;
    align-items:center;
    justify-content:center;
}
.slick-dots li div{
    background-color:#a0a0a0;
}
.slick-dots .slick-active div{
    background-color:#000;
}
`
const sliderStyle=css`
.slick-slide div{
    outline:none;
}
`
export default class ActivitiesSlider extends Component{
    render(){
        const settings={
            dots: true,
            arrows:true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            autoplaySpeed: 5000,
            initialSlide:0,
            slidesToShow:3,
            slidesToScroll:1,
            centerMode:false,
            focusOnSelect:true,
            appendDots: (dots:any) => (<div style={{
            }}>{dots}</div>),
            customPaging: ()=>(
                <div style={{
                    width: "8px",
                    height:"8px",
                    borderRadius:50,
                    margin: "0rem 0rem"
                }}></div>
            ),
            responsive:[
                {
                    breakpoint:1000,
                    settings:{
                        slidesToShow:2
                    }
                },
                {
                    breakpoint: 650,
                    settings:{
                        slidesToShow:1,
                        arrows:false
                    }
                }
            ]
        };
        return (
            <div css={wrapperStyle}>
                <Slider {...settings} css={sliderStyle}>
                    <Activity image={contest} name="Contest" content="다함께 대회에 참여합니다. 다함께 대회에 참여합니다."/>
                    <Activity image={networking} name="Networking" content="활발하게 네트워킹에 참여합니다. 활발하게 네트워킹에 참여합니다."/>
                    <Activity image={codeforce} name="Codeforces" content="다함께 코드포스 참여합니다. 다함께 코드포스 참여합니다."/>
                    <Activity image={study} name="Study" content="다함께 스터디 합니다. 다함께 스터디 합니다."/>
                    <Activity image={aanetworking} name="Alumni Association" content="동문 네트워크를 구축합니다. 동문 네트워크를 구축합니다."/>
                </Slider>
            </div>
        );
    }
}