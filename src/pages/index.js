import React, {Component} from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo";
import styled from 'styled-components';
import wellSvg, { ReactComponent as WellSvg } from './../utils/wr_src.svg';
import anime from '../utils/anime.css';

const MainPage = styled.div`
  @import url("https://use.typekit.net/nya0voz.css");
  overflow: hidden;
  font-family: 'DM Serif Text', serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #04003B;
`;

const MainContent = styled.div`
  width: 100vw;
  height: calc(100vh - 35px);
  background-color: #04003B;
  display: flex;
  align-items: center;
  text-align: center;
`;

const WellSvgStyled = styled(WellSvg)`
  width: 50vw;
  max-width: 990px;
  margin: 0 auto;
  @media (max-width: 1366px) {
    width: 60vw;
  }
  @media (max-width: 1024px) {
    width: 70vw;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const ContainerNameStyled = styled.div`
  position: absolute;
  width: 100vw;
  align-self: center;
  padding: 0 40px;
  line-height: 1;
`;

const NameStyled = styled.h1`
  font-family: droid-serif, serif;
  font-weight: 700;
  font-style: normal;
  font-size: 120px;
  color: #E5BEBE;
  @media (max-width: 979px) {
    font-size: 60px;
  }
  @media (max-width: 540px) {
    font-size: 40px;
  }
`;

const RoleStyled = styled.h2`
  font-family: droid-serif, serif;
  font-weight: 500;
  font-style: normal;
  font-size: 60px;
  color: rgba(229, 190, 190, .6);
  @media (max-width: 979px) {
    font-size: 40px;
  }
  @media (max-width: 540px) {
    font-size: 20px;
  }
`;

const MenuStyled = styled.div`
  margin: 20px 0;
  display: flex;
  max-width: 500px;
  justify-content: space-between;
`;

const LinkStyled = styled.a`
  animation: scale-down-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 1px;
  font-size: 16px;
  text-decoration: none;
  box-shadow: none;
  margin: 0 10px;
  color: rgba(229, 190, 190, .6);
  @media (min-width: 540px) {
    font-size: 20px;
  }
  @media (min-width: 979px) {
    font-size: 24px;
  }
  &:hover {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	          animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
`;

const LinkCustom = styled(Link)`
  animation: scale-down-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 1px;
  font-size: 16px;
  text-decoration: none;
  box-shadow: none;
  margin: 0 10px;
  color: rgba(229, 190, 190, .6);
  @media (min-width: 540px) {
    font-size: 20px;
  }
  @media (min-width: 979px) {
    font-size: 24px;
  }
  &:hover {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	          animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
`;

class BaseContent extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <MainPage>
        <SEO
          title="Welcome"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <MenuStyled>
          <LinkCustom to="/blog/">Blog</LinkCustom>
          <LinkStyled href="http://twitter.com/welitondresende" target="_blank" rel="noopener noreferrer">Twitter</LinkStyled>
          <LinkStyled href="http://linkedin.com/in/welitonderesende" target="_blank" rel="noopener noreferrer">Linkedin</LinkStyled>
          <LinkStyled href="http://github.com/welitonderesende" target="_blank" rel="noopener noreferrer">Github</LinkStyled>
        </MenuStyled>
        <MainContent>
          <WellSvgStyled />
          <ContainerNameStyled>
            <NameStyled>Weliton de Resende</NameStyled>
            <RoleStyled>Front end Developer</RoleStyled>  
          </ContainerNameStyled>
        </MainContent>
      </MainPage>
    )
  }
}

export default BaseContent;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
