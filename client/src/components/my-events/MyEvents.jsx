import { useEffect, useState, useTransition } from "react";
import { useSearchParams, Link, useNavigate } from "react-router";
import "../../App";

import EventsListItem from "../events-list/events-list-item/EventsListItem";
import Pagination from "../pagination/Pagination";
import DeleteEvent from "../event-delete/EventDelete";
import eventService from "../../services/eventService";

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
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      eventService.getAll().then((result) => {
        setEventItems(result);
        setDisplayProducts(result);
      });
    });
  }, []);
  //   const sortedItems = () =>
  //   filteredItems.sort((a, b) => new Date(a.date) - new Date(b.date));
  // setEventItems(sortedItems);
  // });
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
    // setSearchParams(`?page=${page}`);
  };
  const deleteEventHandler = async () => {
    await eventService.delete(eventId);
    setDisplayProducts((oldstate) =>
      oldstate.filter((event) => event._id !== eventId)
    );
    setShowDeleteModal(false);
  };

  const showDeleteModalHandler = (id) => {
    setShowDeleteModal((showDeleteModal) => !showDeleteModal);
    setEventId(id);
  };

  const filterHandler = (e) => {
    const filterItemValue = e.target.value;
    const filterBy = e.target.id;
    if (filterBy == "category") {
      setSearchCategory(filterItemValue);
      navigate(`?category=${filterItemValue}&city=${searchCity}`);
      if (searchCity == null || searchCity == "All") {
        setDisplayProducts(
          [...eventitems].filter((item) =>
            item.category.includes(filterItemValue)
          )
        );
      } else if (filterItemValue === "All") {
        setDisplayProducts(...eventitems);
      } else {
        setDisplayProducts(
          [...eventitems].filter(
            (item) =>
              item.category.includes(filterItemValue) &&
              item.address.city.includes(searchCity)
          )
        );
      }
      if (filterItemValue === "All") {
        setDisplayProducts(
          [...eventitems].filter((item) =>
            item.address.city.includes(searchCity)
          )
        );
      }
      if (filterItemValue === "All" && searchCity == "All") {
        setDisplayProducts([...eventitems]);
      }
    } else if (filterBy == "city") {
      setSearchCity(filterItemValue);
      navigate(`?category=${searchCategory}&city=${filterItemValue}`);
      if (searchCategory == null || searchCategory == "All") {
        setDisplayProducts(
          [...eventitems].filter((item) =>
            item.address.city.includes(filterItemValue)
          )
        );
      } else {
        setDisplayProducts(
          [...eventitems].filter(
            (item) =>
              item.address.city.includes(filterItemValue) &&
              item.category.includes(searchCategory)
          )
        );
      }
      if (filterItemValue === "All") {
        setDisplayProducts(
          [...eventitems].filter((item) =>
            item.category.includes(searchCategory)
          )
        );
      }
      if (filterItemValue === "All" && searchCategory == "All") {
        setDisplayProducts([...eventitems]);
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
                <div className="d-inline-flex align-center justify-content-start">
                  <form
                    action={filterHandler}
                    className="d-inline-flex align-items-center justify-content-center"
                  >
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
                        <option defaultValue="Sofia">Sofia</option>
                        <option defaultValue=" Varna">Varna</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="d-inline-flex align-center justify-content-end">
                  <ul className="list-unstyled list-inline mb-0 social-icons p-3">
                    <li className="list-inline-item me-3 mt-2">
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
