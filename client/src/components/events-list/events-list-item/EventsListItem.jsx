import { Link } from "react-router";
import { fromIsoDate } from "../../../utils/dateTime";
import { toShortDate } from "../../../utils/dateTime";
import styles from "./assets/EventsListItem.module.css";

export default function EventItem({
  _id,
  title,
  eventDate,
  category,
  address,
  time,
  price,
  imageUrl,
  view,
  showDeleteModal,
  showCreateUpdateModal,
}) {
  return (
    <div
      className={`${styles["event-item"]} ${
        styles[`${view}`]
      } col-lg-3 col-md-6 col-sm-6 col-xs-12`}
    >
      {/* TODO when logged in make Link to my-events/id/details */}
      <Link className="text-black" to={`/events/${_id}/details`}>
        <div className={styles["block"]}>
          <img src={imageUrl} className={styles["event-image"]} alt={title} />
          <div className={styles["event-info"]}>
            <div className={styles["event-meta"]}>
              <h3 className={`${styles["event-title"]}`}>{title}</h3>
              <div>
                <i className="fa-solid fa-calendar-days mr-3"></i>
                <span className={styles["event-time"]}>
                  {toShortDate(eventDate)}
                </span>{" "}
                <i className="fa-solid fa-clock"></i>
                <span className={styles["event-time"]}>{time} h.</span>
              </div>
              <p>
                <i className="fa-solid fa-location-dot"></i>{" "}
                <strong>{address?.city}</strong>,{address?.street},{" "}
                {address?.number}
              </p>
              <p className={`${styles["event-price"]} text-primary`}>
                <i className="fa-solid fa-money-bill-wave"></i>
                {price == "" ? "Free" : ` ${price}  $`}{" "}
              </p>
            </div>

            <div>
              {category?.map((item) => (
                <span key={item} className={`${styles["colored-box"]}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
      <button className="delete" onClick={() => showDeleteModal(_id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
      <Link to={`/my-events/${_id}/details`} className="delete">
        <i className="fa-solid fa-eye"></i>
      </Link>
      <button className="delete" onClick={() => showCreateUpdateModal(_id)}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
  );
}
