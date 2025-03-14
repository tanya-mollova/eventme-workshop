import SocialLinks from "../components/social-links/SocialLinks/";

export default function () {
  return (
    <>
      <section className="section">
        <div className="container pt-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <p className="text-primary text-uppercase fw-bold mb-3">
                  Contact With us
                </p>
                <h1>Let’s get connected</h1>
                <p>
                  Lorem ipsum dolor sit, consectetur adipiscing . egestas cursus
                  pellentesque dignissim dui, congue etiam
                </p>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="shadow rounded p-5 bg-white">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img src="/images/contacts.png" alt="Contacts image"></img>
                  </div>
                  <div className="col-lg-6 mt-5 mt-lg-0">
                    <div className="contact-info">
                      <div className="block mt-0">
                        <h4 className="h5">Still Have Questions?</h4>
                        <div className="content">
                          Call Us We Will Be Happy To Help
                          <br /> <a href="tel:+3301563965">+3301563965</a>
                          <br />
                          <a href="mailto:info@eventme.com">
                            info@eventme.com
                          </a>{" "}
                          <br />
                          Monday - Friday
                          <br />
                          9AM TO 8PM Eastern Time
                        </div>
                      </div>
                      <div className="block mt-4">
                        <h4 className="h5">Canada Office</h4>
                        <div className="content">
                          231 Ross Street.
                          <br />
                          K7A 1C2.
                          <br />
                          Smiths Falls
                        </div>
                      </div>
                      <div className="block mt-4">
                        <h4 className="h5">UK Office</h4>
                        <div className="content">
                          57 Folkestone Road.
                          <br />
                          AB54 5XQ,
                          <br />
                          Winston
                        </div>
                      </div>
                      <div className="block">
                        <br />
                        <SocialLinks></SocialLinks>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
