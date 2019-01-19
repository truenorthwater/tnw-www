import React from 'react';

import Layout from '../components/Layout';
import Hero from "../components/Layout/StandardHero";

const RefundPage = () => (
  <Layout
    title="Refunds - True North Water"
    description="Inforamation about True North Water's refund policy when pertaining to charitable donations."
  >
    <Hero title="Refunds" />


    <section className="">
        <div className="row row--padmedium">
            <article className="col medium-offset-3 medium-6">
                <h2 className="heading heading--medium">General Information</h2>
                <p className="bodytext">
                    Generally, a donation to True North Water is, like all charitable donations, not refundable. 
                    True North Water may consider (in its absolute discretion) a refund if the donation was 
                    made accidentally or in some other extremely unusual circumstance if True North Water 
                    receives a written request within 48 hours of the donation. 
                </p>

                <p className="bodytext">
                    True North Water will never issue a refund after the donated funds have been granted 
                    to a project. If a donation is refunded, the associated tax receipt is no longer 
                    truthful so you should shred it.
                </p>
            </article>
        </div>  
    </section>
  </Layout>
)

export default RefundPage;
