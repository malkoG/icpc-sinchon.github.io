import React from "react"
import { Link } from "gatsby"
import {jsx, css} from '@emotion/core'

// FIXME : gatsby로 빌드 돌릴때는 문제가 없지만 VSCode에서는 빨간줄떠서 해결하긴 해야함.
import Layout from "@components/layout"
import SEO from "@components/seo"
import Club from "@components/molecules/club.tsx"
import ActivitiesSlider from "@components/organisms/slider.tsx"
import StyledTitle from "@components/molecules/title.tsx"
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
// import Image from "@components/image"
import sogang from '../images/sogang.jpg'
import sookmyung from '../images/sookmyung.gif' 
import hongik from '../images/hongik.jpg'
import ewha from '../images/ewha.gif'
import yonsei from '../images/yonsei.jpg'
import mainImage from '../images/main-background.png'


const IndexPage = () => (
  <Layout>
    <SEO title="ICPC Sinchon" />
    <div style={{ 
      padding: `11rem 1rem`,
      margin: `1rem 0 3rem 0`,
      backgroundImage: `url(${mainImage})`,
      backgroundSize: `100% 100%`,
      color: `white`,
      }}>
      <h1 className="main--title">
        ICPC Sinchon
      </h1>
      <p style={{
        fontSize: `1.15em`,
        fontWeight: `500`
      }}>
        ICPC Sinchon은 신촌 지역 대학교 프로그래밍 대회 동아리 연합입니다.<br/>
        아무말 아무말 주저리 주저리 어쩌구 저쩌구
      </p>
    </div>
    <StyledTitle title="Groups"/>
    <div className="clubs--wrapper">
      <div className="clubs--row">
        <Club image={hongik} name="HI-ARC" content="홍익대 HI-ARC" />
        <Club image={yonsei} name="Morgorithm" content="연세대 Morgorithm" />
        <Club image={ewha} name="EDOC" content="이화여대 EDOC" />
      </div>
      <div className="clubs--row">
        <Club image={sogang} name="Sogang ICPC Team" content="서강대 Sogang ICPC Team" />
        <Club image={sookmyung} name="Algos" content="숙명여대 Algos" />
      </div>
    </div>
    <StyledTitle title="Activities" />
    <ActivitiesSlider/>
    <Link to="/page-2/">Go to page 2</Link><br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link><br />
    <Link to="/hall-of-fame/">Go to "Hall Of Fame"</Link><br/>
    <Link to ="/members/">Go to "Members"</Link>
  </Layout>
)

export default IndexPage
