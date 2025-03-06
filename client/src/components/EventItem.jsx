import styles from "./EventItem.module.css";

export default function EventItem({
  title,
  date,
  category,
  view,
  location,
  time,
  price,
  status,
  _id,
  changeStatus,
}) {
  return (
    <div
      className={`${styles["event-item"]} ${
        styles[`${view}`]
      } col-lg-3 col-md-6 col-sm-6 col-xs-12`}
    >
      <a className="text-black" href="">
        <div className={styles["block"]}>
          <img
            src="../../public/images/header-img.jpg"
            className={styles["event-image"]}
            alt="Event image"
          />
          <div className={styles["event-info"]}>
            <div className={styles["event-meta"]}>
              <h3 className={`${styles["event-title"]}`}>{title}</h3>
              <div>
                <span className={styles["event-time"]}>{date}</span> -
                <span className={styles["event-time"]}>{time}</span>h.
              </div>
              <p>
                <i className="fa-solid fa-location-dot"></i> {location}
              </p>
              <p className={`${styles["event-price"]} text-primary`}>
                <i className="fa-solid fa-money-bill-wave"></i>
                {price == "" ? " free" : ` ${price}  $`}{" "}
              </p>
            </div>

            <div>
              {category.map((item) => (
                <span key={item._id} className={`${styles["colored-box"]}`}>
                  {item}
                </span>
              ))}
            </div>
            {/* <a
              type="button"
              className="btn btn-primary  mt-4"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#applyLoan"
            >
              Read more{" "}
              <span
                style={{ fontSize: 14 }}
                className="ms-2 fas fa-arrow-right"
              />
            </a> */}
          </div>
        </div>
      </a>
      {/* <p>{status == true ? "Published" : "Pending"}</p>
      <button onClick={() => changeStatus(_id)}>Change</button> */}
    </div>
  );
}
