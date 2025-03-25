import { useEffect, useState, useTransition } from "react";
import { useSearchParams, Link, useNavigate } from "react-router";

import { useMyEvents, useDeleteEvent } from "../../api/eventApi";

import EventsListItem from "../events-list/events-list-item/EventsListItem";
import Pagination from "../pagination/Pagination";
import DeleteEvent from "../event-delete/EventDelete";
import "../../App";

export default function EventList() {
  const [isGrid, setIsGrid] = useState(true);
  const [view, setView] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(8);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventId, setEventId] = useState(null);
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchCity, setSearchCity] = useState("All");
  const lastPostIndex = currentPage * eventsPerPage;
  const firstPostIndex = lastPostIndex - eventsPerPage;
  const [eventitems, setEventItems] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const navigate = useNavigate();
  const { myEvents, pending } = useMyEvents();
  const { deleteEvent } = useDeleteEvent();

  useEffect(() => {
    setDisplayProducts(myEvents);
  }, [myEvents]);

  useEffect(() => {
    if (!isGrid) {
      setView("list-view");
    } else {
      setView("grid-view");
    }
  }, [isGrid]);

  const currentEvents = displayProducts.slice(firstPostIndex, lastPostIndex);
  const changeViewHandler = (event) => {
    event.preventDefault();
    setIsGrid((isGrid) => !isGrid);
  };

  const currentPageClickHandler = (page) => {
    setCurrentPage(page);
  };
  const showDeleteModalHandler = (id) => {
    setShowDeleteModal((showDeleteModal) => !showDeleteModal);
    setEventId(id);
  };

  const deleteEventHandler = async () => {
    await deleteEvent(eventId);
    setDisplayProducts((oldstate) =>
      oldstate.filter((event) => event._id !== eventId)
    );
    setShowDeleteModal(false);
  };

  const filterHandler = (e) => {
    const filterItemValue = e.target.value;
    const filterBy = e.target.id;
    if (filterBy == "category") {
      setSearchCategory(filterItemValue);
      navigate(`?category=${filterItemValue}&city=${searchCity}`);
      if (searchCity == null || searchCity == "All") {
        setDisplayProducts(
          [...myEvents].filter((item) =>
            item.category.includes(filterItemValue)
          )
        );
      } else if (filterItemValue === "All") {
        setDisplayProducts(...myEvents);
      } else {
        setDisplayProducts(
          [...myEvents].filter(
            (item) =>
              item.category.includes(filterItemValue) &&
              item.address.city.includes(searchCity)
          )
        );
      }
      if (filterItemValue === "All") {
        setDisplayProducts(
          [...myEvents].filter((item) => item.address.city.includes(searchCity))
        );
      }
      if (filterItemValue === "All" && searchCity == "All") {
        setDisplayProducts([...myEvents]);
      }
    } else if (filterBy == "city") {
      setSearchCity(filterItemValue);
      navigate(`?category=${searchCategory}&city=${filterItemValue}`);
      if (searchCategory == null || searchCategory == "All") {
        setDisplayProducts(
          [...myEvents].filter((item) =>
            item.address.city.includes(filterItemValue)
          )
        );
      } else {
        setDisplayProducts(
          [...myEvents].filter(
            (item) =>
              item.address.city.includes(filterItemValue) &&
              item.category.includes(searchCategory)
          )
        );
      }
      if (filterItemValue === "All") {
        setDisplayProducts(
          [...myEvents].filter((item) => item.category.includes(searchCategory))
        );
      }
      if (filterItemValue === "All" && searchCategory == "All") {
        setDisplayProducts([...myEvents]);
      }
    } else if (filterBy == "date") {
      if (filterItemValue.includes("asc")) {
        const sortedItems = () =>
          [...displayProducts].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );
        setDisplayProducts(sortedItems);
      } else if (filterItemValue.includes("desc")) {
        const sortedItems = () =>
          [...displayProducts].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
        setDisplayProducts(sortedItems);
      } else {
        const sortedItems = () =>
          [...displayProducts].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        setDisplayProducts(sortedItems);
      }
    }
  };

  return (
    <>
      <section className="section section-events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 mb-4">
              <div className="section-title pt-4">
                <p className="text-primary text-uppercase fw-bold mb-3">
                  events
                </p>
                <h1>My Events</h1>
                <br />
                <Link
                  to="/event/create"
                  type="button"
                  className="btn btn-primary"
                >
                  Add
                  <span className="ms-2">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="row mb-4 ">
              <div className="col-md-12 d-inline-flex align-center justify-content-center">
                <div>
                  <form id="filter-form" action={filterHandler}>
                    {" "}
                    <span> Category: </span>
                    <div className="form-group p-3">
                      <select
                        className="form-control form-select shadow-none"
                        id="category"
                        name="category"
                        onChange={filterHandler}
                      >
                        <option defaultValue="All">All</option>
                        <option defaultValue="Online">Online</option>
                        <option defaultValue="Music">Music</option>
                        <option defaultValue=" Business">Business</option>
                        <option defaultValue=" Culture">Culture</option>
                        <option defaultValue=" Sport">Sport</option>
                        <option defaultValue="Lifestyle">Lifestyle</option>
                      </select>
                    </div>
                    <span> City: </span>
                    <div className="form-group p-3">
                      <select
                        className="form-control form-select  shadow-none"
                        id="city"
                        name="city"
                        onChange={filterHandler}
                      >
                        <option defaultValue="All">All</option>
                        <option defaultValue="Burgas">Burgas</option>
                        <option defaultValue=" Varna">Varna</option>
                        <option defaultValue="Veliko Tarnovo">
                          Veliko Tarnovo
                        </option>
                        <option defaultValue="Pleven">Pleven</option>
                        <option defaultValue="Plovdiv">Plovdiv</option>
                        <option defaultValue="Sofia">Sofia</option>
                        <option defaultValue="Ruse">Ruse</option>
                        <option defaultValue="Stara Zagora">
                          Stara Zagora
                        </option>
                      </select>
                    </div>
                    <span> Date: </span>
                    <div className="form-group p-3">
                      <select
                        className="form-control form-select  shadow-none"
                        id="date"
                        name="date"
                        onChange={filterHandler}
                      >
                        <option defaultValue="All">Newest</option>
                        <option defaultValue="asc">Date asc &uarr; </option>
                        <option defaultValue="desc">Date desc &darr;</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="d-inline-flex align-center justify-content-end">
                  <ul className="list-unstyled list-inline mb-0 social-icons p-3">
                    <li className="list-inline-item">
                      <a
                        onClick={changeViewHandler}
                        className={`view-button text-black ${
                          isGrid ? "grid" : ""
                        }`}
                        href=""
                      >
                        {isGrid ? (
                          <i className="fa-solid fa-list-ul "></i>
                        ) : (
                          <i className="fa-solid fa-grip"></i>
                        )}
                      </a>
                    </li>
                  </ul>
                </div>
                <div></div>
              </div>
              <br />
              {pending && (
                <div id="loader">
                  <img src="/images/loader.svg" />
                </div>
              )}
            </div>
            <>
              {currentEvents.map((eventitem) => (
                <EventsListItem
                  view={view}
                  key={eventitem._id}
                  {...eventitem}
                  // changeStatus={changeStatus}
                  deleteEvent={deleteEventHandler}
                  showDeleteModal={showDeleteModalHandler}
                />
              ))}
            </>
            {!currentEvents.length && (
              <div>
                <h3 className="text-primary">
                  <i class="fa-solid fa-circle-info"></i> No data found!
                </h3>
              </div>
            )}
            <Pagination
              totalEvents={displayProducts.length}
              eventsPerPage={eventsPerPage}
              showCurrentPage={currentPageClickHandler}
              currentPage={currentPage}
            />
          </div>
          {showDeleteModal && (
            <DeleteEvent
              onDelete={deleteEventHandler}
              showDeleteModal={showDeleteModalHandler}
            ></DeleteEvent>
          )}
        </div>
      </section>
    </>
  );
}
