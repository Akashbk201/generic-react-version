import Image from "../src/assets/about-us.jpg";

function AboutUs() {
  return (
    <>
      <section className="about-us">
        <div className="container">
          <div className="wrap trans-top">
            <div className="about-us-text">
              <div className="about-us-content">
                <p>About Us</p>
                <h2>Short Headline for Company About Section Will Be Here</h2>
                <h4>
                  This part will introduce you or your business to website
                  visitors. We'll write about you, your organization, the
                  products or services you offer, and why your company exists.
                </h4>
                <div className="btn-box left">
                  <a href="" className="cta-btn">
                    Call to Action
                  </a>
                </div>
              </div>
            </div>
            <div className="about-us-image">
              <img src={Image} alt="" />
            </div>
          </div>

          <div className="no-wrap">
            <div className="text-cont">
              <p>Prefix describing what your business does will be here</p>
              <h2>
                Headline Describing Your Company Core Values Will Come Here
              </h2>
            </div>
          </div>

          <div className="wrap m-dir">
            <div className="core-value-box">
              <div className="core-box-cont">
                <span>01</span>
                <h3>Core Value 1</h3>
                <p>
                  In this part, we will write about the core values and guiding
                  principles that influence your business choices and
                  operations.
                </p>
              </div>
            </div>
            <div className="core-value-box">
              <div className="core-box-cont">
                <span>02</span>
                <h3>Core Value 2</h3>
                <p>
                  In this part, we will write about the core values and guiding
                  principles that influence your business choices and
                  operations.
                </p>
              </div>
            </div>
            <div className="core-value-box">
              <div className="core-box-cont">
                <span>03</span>
                <h3>Core Value 3</h3>
                <p>
                  In this part, we will write about the core values and guiding
                  principles that influence your business choices and
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
