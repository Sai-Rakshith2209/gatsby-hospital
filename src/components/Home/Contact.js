import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact Us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/f/xzbkgldq" method="post">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Joe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Joe@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Symtom's of patient</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="Patients symptoms"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
