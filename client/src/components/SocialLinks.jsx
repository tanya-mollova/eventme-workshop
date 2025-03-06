export default function SocialLinks() {
  return (
    <ul className="list-unstyled list-inline mb-0 social-icons text-center">
      <li className="list-inline-item me-3">
        <a
          title="Explorer Facebook Profile"
          className="text-black social-icons-item"
          href="https://facebook.com/"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="list-inline-item me-3">
        <a
          title="Explorer Twitter Profile"
          className="text-black  social-icons-item"
          href="https://twitter.com/"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="list-inline-item me-3">
        <a
          title="Explorer Instagram Profile"
          className="text-black  social-icons-item"
          href="https://instagram.com/"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  );
}
