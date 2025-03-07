import { Link } from "react-router";
import { fromIsoDate } from "../utils/dateTime";
import styles from "./EventItem.module.css";

export default function EventItem({
  title,
  eventDate,
  category,
  address,
  time,
  price,
  imageUrl,
  status,
  _id,
  changeStatus,
  view,
}) {
  return (
    <div
      className={`${styles["event-item"]} ${
        styles[`${view}`]
      } col-lg-3 col-md-6 col-sm-6 col-xs-12`}
    >
      <Link className="text-black" key={_id} to={`/event/${_id}`}>
        <div className={styles["block"]}>
          <img src={imageUrl} className={styles["event-image"]} alt={title} />
          <div className={styles["event-info"]}>
            <div className={styles["event-meta"]}>
              <h3 className={`${styles["event-title"]}`}>{title}</h3>
              <div>
                <i class="fa-solid fa-calendar-days mr-3"></i>
                <span className={styles["event-time"]}>
                  {fromIsoDate(eventDate)}
                </span>{" "}
                <i class="fa-solid fa-clock"></i>
                <span className={styles["event-time"]}>{time} h.</span>
              </div>
              <p>
                <i className="fa-solid fa-location-dot"></i>{" "}
                <strong>{address?.city}</strong>,{address?.street},{" "}
                {address?.number}
              </p>
              <p className={`${styles["event-price"]} text-primary`}>
                <i className="fa-solid fa-money-bill-wave"></i>
                {price == "" ? " Free" : ` ${price}  $`}{" "}
              </p>
            </div>

            <div>
              {category.map((item, index) => (
                <span key={index} className={`${styles["colored-box"]}`}>
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
      </Link>
      {/* <p>{status == true ? "Published" : "Pending"}</p>
      <button onClick={() => changeStatus(_id)}>Change</button> */}
    </div>
  );
}
