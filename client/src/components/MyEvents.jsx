import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import "../App";
// import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
// import { MultiSelect } from "primereact/multiselect";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
import EventItem from "./EventItem";
import Pagination from "./Pagination";
import CreateUpdateEvent from "./CreateUpdateEvent";
import eventService from "../services/eventService";

export default function EventList() {
  const [isGrid, setIsGrid] = useState(true);
  const [view, setView] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(4);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showCreateUpdateModal, setShowCreateUpdateModal] = useState(false);
  const lastPostIndex = currentPage * eventsPerPage;
  const firstPostIndex = lastPostIndex - eventsPerPage;

  const [eventitems, setEventItems] = useState([]);

  useEffect(() => {
    eventService.getAll().then((result) => {
      setEventItems(result);
    });
  }, []);
  // const [filteredItems, setFilteredItems] = useState(eventitems);
  // const [filterItems, setFilterItems] = useState(false);
  // const [selectedCategories, setSelectedCategories] = useState();
  // const categories = [
  //   { name: "Webinar", code: "webinar" },
  //   { name: "Online", code: "online" },
  //   { name: "Music", code: "music" },
  //   { name: "Conference", code: "conference" },
  //   { name: "Paris", code: "PRS" },
  // ];
  const currentEvents = eventitems.slice(firstPostIndex, lastPostIndex);
  const changeViewHandler = (event) => {
    event.preventDefault();
    setIsGrid((isGrid) => !isGrid);
  };
  // const categoryFilterHandler = () => {
  //   let itemCategories = [];
  //   let categoriesItems = [];
  //   if (selectedCategories.length > 0) {
  //     selectedCategories.forEach((element) => {
  //       categoriesItems.push(element.code);
  //     });
  //   } else {
  //     categoriesItems = [];
  //   }
  //   eventitems.forEach((element) => {
  //     if (element.category.some((r) => categoriesItems.includes(r))) {
  //       itemCategories.push(element);
  //     }
  //   });
  //   setFilteredItems(itemCategories);
  // };
  // const clearFiltersHandler = (e) => {
  //   e.preventDefault;
  //   setFilterItems(false);
  //   setFilteredItems(eventitems);
  //   setSelectedCategories();
  // };
  const currentPageClickHandler = (page) => {
    setCurrentPage(page);
    setSearchParams(`?page=${page}`);
  };
  const deleteEventHandler = async (eventId) => {
    await eventService.deleteEvent(eventId);
    setEventItems((oldEvents) =>
      oldEvents.filter((event) => event._id !== eventId)
    );
  };
  useEffect(() => {
    if (!isGrid) {
      setView("list-view");
    } else {
      setView("grid-view");
    }
    // function isArrayEmptyOrUndefined(arr) {
    //   return !Array.isArray(arr) || arr.length === 0;
    // }
    // if (isArrayEmptyOrUndefined(selectedCategories)) {
    //   setFilterItems(false);
    // } else {
    //   setFilterItems(true);
    //   categoryFilterHandler();
    // }
    // console.log(isEmptyObject(selectedCategories));
  }, [isGrid]);

  const showCreateUpdateModalHandler = () => {
    setShowCreateUpdateModal((showCreateUpdateModal) => !showCreateUpdateModal);
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
                <a
                  type="button"
                  class="btn btn-primary"
                  onClick={showCreateUpdateModalHandler}
                  data-discover="true"
                >
                  Add
                  <span className="ms-2">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="row mb-4 ">
              <div class="col-md-12 d-inline-flex align-center justify-content-center">
                <ul class="list-unstyled list-inline mb-0 social-icons">
                  <li class="list-inline-item me-3">
                    <a
                      onClick={changeViewHandler}
                      className={`view-button text-black ${
                        isGrid ? "grid" : ""
                      }`}
                      href=""
                    >
                      {isGrid ? (
                        <i class="fa-solid fa-list-ul "></i>
                      ) : (
                        <i class="fa-solid fa-grip"></i>
                      )}
                    </a>
                  </li>
                </ul>
                <div>
                  {/* <select
                    onClick={() => categoryFilterHandler(e)}
                    id="multiple-checkboxes"
                    multiple="multiple"
                  >
                    <option selected disabled>
                      Category
                    </option>
                    <option value="online">Online</option>
                    <option value="music">Music</option>
                    <option value="seminar">Seminar</option>
                    <option value="festiva">Festival</option>
                    <option value="charity">Charity</option>
                    <option value="sport">Sport</option>
                  </select> */}
                  {/* <PrimeReactProvider value={{ unstyled: false }}>
                    <MultiSelect
                      value={selectedCategories}
                      onChange={(e) => {
                        setSelectedCategories(e.value);
                      }}
                      options={categories}
                      optionLabel="name"
                      placeholder="Select Categories"
                      maxSelectedLabels={5}
                      className="w-full md:w-20rem me-3"
                    />
                  </PrimeReactProvider> */}
                  {/* <a className="text-primary" onClick={clearFiltersHandler}>
                    Clear
                  </a> */}
                </div>
              </div>
            </div>
            <>
              {currentEvents.map((eventitem) => (
                <EventItem
                  view={view}
                  key={eventitem._id}
                  {...eventitem}
                  // changeStatus={changeStatus}
                  deleteEvent={deleteEventHandler}
                />
              ))}
            </>
            <Pagination
              totalEvents={eventitems.length}
              eventsPerPage={eventsPerPage}
              showCurrentPage={currentPageClickHandler}
              currentPage={currentPage}
            />
          </div>
          {showCreateUpdateModal && (
            <CreateUpdateEvent
              showModal={showCreateUpdateModalHandler}
            ></CreateUpdateEvent>
          )}
          {/* <a
            type="button"
            className="btn btn-primary  mt-4"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#applyLoan"
          >
            See all Events{" "}
            <span
              style={{ fontSize: 14 }}
              className="ms-2 fas fa-arrow-right"
            />
          </a> */}
        </div>
      </section>
    </>
  );
}
