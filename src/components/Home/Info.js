import React from "react"

import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="History" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              At RSSR Hospitals, we are devoted towards clinical excellence,
              patient-centricity, and ethical practices. Our commitment to
              clinical excellence is palpable in the high calibre of our team of
              medical practitioners. Our nursing staff and paramedical
              professionals are highly competent and provide great support to
              our clinical team Our healthcare services are aligned towards our
              patients’ needs.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
