import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import eventService from "../../services/eventService";

export default function CreateUpdateEvent() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({});
  useEffect(() => {
    eventService.getOne(eventId).then(setEvent);
  }, [eventId]);

  const submitAction = async (formData) => {
    const eventData = Object.fromEntries(formData);
    const category = formData.getAll("category");
    const postData = { ...eventData, category: category };
    await eventService.edit(eventId, postData);
    navigate(`/my-events/`);
  };
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="h1 mb-4 mt-4">Edit Event</h2>
        </div>
        <form action={submitAction} id="update">
          <div className="row">
            <div className="col-lg-6 mb-12 pb-2">
              {" "}
              <div className="col-lg-12 mb-12 pb-2">
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    defaultValue={event.title}
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
                    defaultValue={event.imageUrl}
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
                    defaultValue={event.description}
                    className="form-control shadow-none"
                    id="description"
                    name="description"
                  ></textarea>
                </div>
              </div>
              <div className="row"></div>
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
                      defaultValue={event.time}
                      type="time"
                      className="form-control shadow-none"
                      id="time"
                      name="time"
                    />
                  </div>
                </div>
                <div className="col-lg-4 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input
                      defaultValue={event.date}
                      type="date"
                      className="form-control shadow-none"
                      id="date"
                      name="date"
                    />
                  </div>
                </div>
                <div className="col-lg-4 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      defaultValue={event.price}
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
                      defaultValue={event.address?.city}
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
                      defaultValue={event.address?.street}
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
                      defaultValue={event.address?.streetNumber}
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
                      size="6"
                    >
                      <option
                        selected={
                          event.category?.includes("Online") ? "selected" : ""
                        }
                        defaultValue="Online"
                      >
                        Online
                      </option>
                      <option
                        selected={
                          event.category?.includes("Music") ? "selected" : ""
                        }
                        defaultValue="Music"
                      >
                        Music
                      </option>
                      <option
                        selected={
                          event.category?.includes("Business") ? "selected" : ""
                        }
                        defaultValue="Business"
                      >
                        Business
                      </option>
                      <option
                        selected={
                          event.category?.includes("Culture") ? "selected" : ""
                        }
                        defaultValue="Culture"
                      >
                        Culture
                      </option>
                      <option
                        selected={
                          event.category?.includes("Sport") ? "selected" : ""
                        }
                        defaultValue="Sport"
                      >
                        Sport
                      </option>
                      <option
                        selected={
                          event.category?.includes("Lifestyle")
                            ? "selected"
                            : ""
                        }
                        defaultValue="Lifestyle"
                      >
                        Lifestyle
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 mb-12 pb-2">
                  {/* <div className="form-group">
                    <label htmlFor="status" className="form-label">
                      Status
                    </label>
                    <select
                      className="form-control shadow-none"
                      id="status"
                      name="status"
                    >
                      <option
                        defaultValue={event.status}
                        selected={
                          event.status?.includes("Published") ? "selected" : ""
                        }
                      >
                        Published
                      </option>
                      <option
                        defaultValue={event.status}
                        selected={
                          event.status?.includes("Pending") ? "selected" : ""
                        }
                      >
                        Pending
                      </option>
                    </select>
                  </div> */}
                </div>
              </div>
            </div>
            <br /> <br />
            <div className="row mt-4">
              <div className="col-lg-4"></div>
              <div className="col-lg-4 mb-12 pb-2">
                <input
                  type="submit"
                  defaultValue="Update Event"
                  className="btn btn-primary w-100"
                />
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
