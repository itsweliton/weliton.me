import React, {Component} from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo";
import styled from 'styled-components';
import wellSvg, { ReactComponent as WellSvg } from './../utils/wr_src.svg';

const MainPage = styled.div`
  @import url("https://use.typekit.net/nya0voz.css");
  font-family: 'DM Serif Text', serif;
  width: 100vw;
  height: 100vh;
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

const NameStyled = styled.div`
  font-family: droid-serif, serif;
  font-weight: 700;
  font-style: normal;
  font-size: 120px;
  color: #E5BEBE;
  position: absolute;
  width: 100vw;
  padding: 0 40px;
  line-height: 1;
  @media (max-width: 979px) {
    font-size: 60px;
  }
  @media (max-width: 540px) {
    font-size: 40px;
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
        <WellSvgStyled />
        <NameStyled>Weliton de Resende</NameStyled>
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
