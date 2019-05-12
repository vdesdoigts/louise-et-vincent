import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "samedi-22-juin.png" }) {
          childImageSharp {
            fluid(maxWidth: 320) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        fadeIn={true}
        critical={true}
        backgroundColor="transparent"
        alt="21/06 - Rendez-vous plage de Gâvres"
        title="21/06 - Rendez-vous plage de Gâvres"
      />
    )}
  />
)

export default Image
