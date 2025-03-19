import { useEffect, useState } from "react";
import eventService from "../../../services/eventService";
import { Link } from "react-router";
import { toShortDate, fromIsoTime } from "../../../utils/dateTime";
import styles from "./assets/EventsListItem.module.css";

export default function EventItem({
  _id,
  title,
  description,
  date,
  category,
  address,
  time,
  price,
  imageUrl,
  view,
  status,
  likes,
  showDeleteModal,
}) {
  // const [likeStatus, setLikeStatus] = useState(true);
  // const [likesValue, setLikesValue] = useState(0);

  // useEffect(() => {
  //   setLikesValue(likes);
  // }, []);
  // useEffect(() => {
  //   setLikesValue(likes);
  // }, [likesValue]);
  const onLike = async () => {
    // const itemData = eventitems.filter((item) => item._id === id);
    // const likes = itemData.likes;
    setLikeStatus((oldstate) => (oldstate = !oldstate));
    const eventData = {
      title: title,
      imageUrl: imageUrl,
      description: description,
      time: time,
      date: date,
      price: price,
      status: status,
      city: address.city,
      street: address.street,
      streetNumber: address.streetNumber,
      likes: likesValue,
      category: category,
    };
    if (likeStatus == true) {
      const postData = { ...eventData, likes: likesValue + 1 };
      const result = await eventService.edit(_id, postData);
      setLikesValue(result.likes);
      setLikeStatus(false);
    } else {
      const postData = { ...eventData, likes: likesValue - 1 };
      const result = await eventService.edit(_id, postData);
      setLikesValue(result.likes);
      setLikeStatus(false);
    }
  };
  return (
    <div
      className={`${styles["event-item"]} ${
        styles[`${view}`]
      } col-lg-3 col-md-6 col-sm-6 col-xs-12`}
    >
      {/* TODO when logged in make Link to my-events/id/details */}
      <div className="text-black">
        <div className={styles["block"]}>
          <Link className="text-black" to={`/events/${_id}/details`}>
            {" "}
            <img src={imageUrl} className={styles["event-image"]} alt={title} />
          </Link>
          <div className={styles["event-info"]}>
            <div className={styles["event-meta"]}>
              <Link className="text-black" to={`/events/${_id}/details`}>
                <h3 className={`${styles["event-title"]}`}>{title}</h3>
              </Link>
              <div className={styles["event-date-time"]}>
                <i className="fa-solid fa-calendar-days mr-3"></i>
                <span className={styles["event-time"]}>
                  {toShortDate(date)}
                </span>{" "}
                <i className="fa-solid fa-clock"></i>
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
          {/* <div className={styles["likes"]}>
            <span className="primary-text likes">
              {likeStatus && (
                <button type="submit" value={likesValue} onClick={onLike}>
                  <i class="fa-solid fa-thumbs-up"></i>
                </button>
              )}
              {!likeStatus && (
                <button type="submit" value={likesValue} onClick={onLike}>
                  <i class="fa-solid fa-thumbs-down"></i>
                </button>
              )}
            </span>
            {likesValue} Likes
          </div> */}
          {/* <br /> */}
          {/* TO DO hide when */}
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
        </div>
      </div>
    </div>
  );
}
