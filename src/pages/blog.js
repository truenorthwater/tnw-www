import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Layout/StandardHero'
export const query = graphql`
  {
    prismic {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            date
          }
        }
      }
    }
  }
`

const RefundPage = () => (
  <Layout
    title="Blog - True North Water"
    description="Updates from True North Water around our projects, our mission, and noteworthy events."
  >
    <Hero title="Blog" />

    <section className="">
      <div className="row row--padmedium">
        <article className="col medium-offset-1 medium-9">
          <h2 className="heading heading--medium">General Information</h2>
          <p className="bodytext">
            Generally, a donation to True North Water is, like all charitable
            donations, not refundable. True North Water may consider (in its
            absolute discretion) a refund if the donation was made accidentally
            or in some other extremely unusual circumstance if True North Water
            receives a written request within 48 hours of the donation.
          </p>

          <p className="bodytext">
            True North Water will never issue a refund after the donated funds
            have been granted to a project. If a donation is refunded, the
            associated tax receipt is no longer truthful so you should shred it.
          </p>
        </article>
      </div>
    </section>
  </Layout>
)

export default RefundPage
