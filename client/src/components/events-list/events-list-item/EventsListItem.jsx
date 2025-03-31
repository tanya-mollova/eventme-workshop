import { Link } from "react-router";

import useAuth from "./../../../hooks/useAuth";
import { toShortDate, fromIsoTime } from "../../../utils/dateTime";
import styles from "./assets/EventsListItem.module.css";

export default function EventsListItem({
  _id,
  title,
  date,
  category,
  address,
  time,
  price,
  imageUrl,
  view,
  status,
  _ownerId,
  showDeleteModal,
}) {
  const { isAuthenticated, email, userId } = useAuth();

  const isOwner = userId === _ownerId;
  return (
    <div
      className={`${styles["event-item"]} ${
        styles[`${view}`]
      } col-lg-3 col-md-6 col-sm-6 col-xs-12`}
    >
      <div className="text-black">
        <div className={styles["block"]}>
          <Link className="text-black" to={`/all-events/${_id}/details`}>
            {" "}
            <img src={imageUrl} className={styles["event-image"]} alt={title} />
          </Link>
          <div className={styles["event-info"]}>
            <div className={styles["event-meta"]}>
              <Link className="text-black" to={`/all-events/${_id}/details`}>
                <h3 className={`${styles["event-title"]}`}>{title}</h3>
              </Link>
              <div className={styles["event-date-time"]}>
                <i className="fa-solid fa-calendar-days mr-3"></i>
                <span className={styles["event-time"]}>
                  {toShortDate(date)}
                </span>{" "}
                -
                <span className={styles["event-time"]}>
                  {fromIsoTime(time)} h.
                </span>
              </div>
              <p className={styles["event-location"]}>
                <i className="fa-solid fa-location-dot"></i>{" "}
                <strong>{address?.city}</strong>
                {address?.street && ", "}
                {address?.street}
                {address?.streetNumber && ", "}
                {address?.streetNumber}
              </p>
              <p className={`${styles["event-price"]} text-primary`}>
                <i className="fa-solid fa-money-bill-wave"></i>
                {price == "" ? " Free" : ` ${price}  $`}{" "}
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
          {isAuthenticated && isOwner && (
            <div className={styles["action-buttons"]}>
              <Link to={`/my-events/${_id}/details`}>
                <i className="fa-solid fa-eye"></i>
              </Link>
              <Link to={`/my-events/${_id}/edit`}>
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
              <Link onClick={() => showDeleteModal(_id)}>
                <i className="fa-solid fa-trash"></i>
              </Link>
              {status == true && <span className={styles["published"]}></span>}
              {status == false && <span className={styles["pending"]}></span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
