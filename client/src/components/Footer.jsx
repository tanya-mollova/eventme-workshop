import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-4 col-6 mb-4">
            <a href="index.html">
              <img
                loading="prelaod"
                decoding="async"
                className="img-fluid"
                width={250}
                src="images/eventme-logo-light.png"
                alt="Wallet"
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-6 mb-4">
            <div className="footer-widget">
              <h4 className="mb-4">Links</h4>
              <ul className="list-unstyled  font-secondary">
                <li className="mb-2">
                  <a href="service-details.html">Home</a>
                </li>
                <li className="mb-2">
                  <a href="service-details.html">About</a>
                </li>

                <li className="mb-2">
                  <a href="service-details.html">Contact</a>
                </li>
                <li className="mb-2">
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="terms.html">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-md-end mt-4 mt-md-0">
            <h4 className="mb-4 text-center">Follow us</h4>
            <SocialLinks></SocialLinks>
          </div>
        </div>
        <div className="row align-items-center mt-1 footer-bottom">
          <div className="col-lg-12 text-center">
            <p>EventMe © 2025. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
