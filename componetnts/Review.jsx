import ReviewIcon from "../src/assets/download.svg";

function Review() {
  return (
    <>
      <section className="review-sec">
        <div className="container">
          <div className="no-wrap">
            <h2 className="review-title">
              Short Heading for Testimonials Section
            </h2>
          </div>
          <div className="wrap review-padd">
            <div className="review-box">
              <img src={ReviewIcon} alt="icon" />
              <p>
                "We will write a hypothetical testimonial from a satisfied
                customer. You can replace this with actual testimonials from
                your clients. Testimonials are a great way to inspire potential
                customers to trust you."
              </p>
              <h5>– Testimonial Author Name</h5>
            </div>
            <div className="review-box">
              <img src={ReviewIcon} alt="icon" />
              <p>
                "We will write a hypothetical testimonial from a satisfied
                customer. You can replace this with actual testimonials from
                your clients. Testimonials are a great way to inspire potential
                customers to trust you."
              </p>
              <h5>– Testimonial Author Name</h5>
            </div>
            <div className="review-box">
              <img src={ReviewIcon} alt="icon" />
              <p>
                "We will write a hypothetical testimonial from a satisfied
                customer. You can replace this with actual testimonials from
                your clients. Testimonials are a great way to inspire potential
                customers to trust you."
              </p>
              <h5>– Testimonial Author Name</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
