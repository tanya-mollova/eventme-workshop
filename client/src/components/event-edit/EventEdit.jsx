import { useActionState, useEffect, useState } from "react";
import eventService from "../../services/eventService";

export default function CreateUpdateEvent({
  showModal,
  createEvent,
  eventId,
  updateEvent,
}) {
  const [eventDetail, setEventDetail] = useState({});
  useEffect(() => {
    if (!eventId) {
      return;
    }
    eventService.getOne(eventId).then((result) => {
      setEventDetail(result);
    });
  }, [eventId]);
  return (
    <div className="modal applyLoanModal fade" id="create-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h4 className="modal-title" id="exampleModalLabel">
              {eventId ? "Update" : "Create"} Event
            </h4>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => showModal(null)}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-lg-6 mb-12 pb-2">
                  {" "}
                  <div className="col-lg-12 mb-12 pb-2">
                    <div className="form-group">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        defaultValue={eventDetail.title}
                        type="text"
                        className="form-control shadow-none"
                        id="title"
                        name="title"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-12 pb-2">
                    <div className="form-group">
                      <label htmlFor="imageUrl" className="form-label">
                        Image
                      </label>
                      <input
                        defaultValue={eventDetail.imageUrl}
                        type="url"
                        className="form-control shadow-none"
                        id="imageUrl"
                        name="imageUrl"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-12 pb-2">
                    <div className="form-group">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        defaultValue={eventDetail.description}
                        className="form-control shadow-none"
                        id="description"
                        name="description"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row"></div>
                </div>
                <div className="col-lg-6 mb-12 pb-2">
                  {" "}
                  <div class="row">
                    <div className="col-lg-4 mb-12 pb-2">
                      <div className="form-group">
                        <label htmlFor="time" className="form-label">
                          Time
                        </label>
                        <input
                          defaultValue={eventDetail.time}
                          type="time"
                          className="form-control shadow-none"
                          id="time"
                          name="time"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 mb-12 pb-2">
                      <div className="form-group">
                        <label htmlFor="eventDate" className="form-label">
                          Date
                        </label>
                        <input
                          defaultValue={eventDetail.date}
                          type="date"
                          className="form-control shadow-none"
                          id="eventDate"
                          name="eventDate"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 mb-12 pb-2">
                      <div className="form-group">
                        <label htmlFor="price" className="form-label">
                          Price
                        </label>
                        <input
                          defaultValue={eventDetail.price}
                          type="number"
                          className="form-control shadow-none"
                          id="price"
                          name="price"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mb-12 pb-2">
                      <div className="form-group">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <input
                          defaultValue={eventDetail.address?.city}
                          type="text"
                          className="form-control shadow-none"
                          id="city"
                          name="city"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 mb-12 pb-2">
                      <div className="form-group">
                        <label htmlFor="street" className="form-label">
                          Street
                        </label>
                        <input
                          defaultValue={eventDetail.address?.street}
                          type="text"
                          className="form-control shadow-none"
                          id="street"
                          name="street"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4  mb-12 pb-2">
                      <div className="form-group">
                        <label htmlFor="streetNumber" className="form-label">
                          Street Number
                        </label>
                        <input
                          defaultValue={eventDetail.address?.streetNumber}
                          type="number"
                          className="form-control shadow-none"
                          id="streetNumber"
                          name="streetNumber"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-12 pb-2">
                      <div className="form-group">
                        <label htmlFor="category" className="form-label">
                          Category
                        </label>
                        <select
                          multiple
                          className="form-control shadow-none"
                          id="category"
                          name="category"
                        >
                          <option
                            selected={
                              eventDetail.category?.includes("online")
                                ? "selected"
                                : ""
                            }
                            defaultValue="online"
                          >
                            Online
                          </option>
                          <option
                            selected={
                              eventDetail.category?.includes("music")
                                ? "selected"
                                : ""
                            }
                            defaultValue="music"
                          >
                            Music
                          </option>
                          <option
                            selected={
                              eventDetail.category?.includes("webinar")
                                ? "selected"
                                : ""
                            }
                            defaultValue="webinar"
                          >
                            Webinar
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-12 pb-2">
                      <div className="form-group">
                        <label htmlFor="status" className="form-label">
                          Status
                        </label>
                        <select
                          className="form-control shadow-none"
                          id="status"
                          name="status"
                        >
                          <option defaultValue={eventDetail.status}>
                            Published
                          </option>
                          <option defaultValue={eventDetail.status}>
                            Pending
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-12 pb-2">
                      {eventId && (
                        <button
                          onClick={() => updateEvent(eventId)}
                          className="btn btn-primary w-100"
                        >
                          Update
                        </button>
                      )}
                      {!eventId && (
                        <button
                          onClick={createEvent}
                          className="btn btn-primary w-100"
                        >
                          Add
                        </button>
                      )}
                    </div>
                    <div className="col-lg-6 mb-12 pb-2">
                      <button
                        type="submit"
                        onClick={() => showModal(null)}
                        className="btn btn-primary w-100"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
