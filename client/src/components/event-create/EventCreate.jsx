import { useNavigate } from "react-router";
import eventService from "../../services/eventService";
import transformEventData from "../../services/eventService";

export default function EventCreate() {
  const navigate = useNavigate();

  const submitAction = async (formData) => {
    const eventData = Object.fromEntries(formData);
    const category = formData.getAll("category");
    const postData = { ...eventData, category: category };
    await eventService.create(postData);
    navigate("/my-events");
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="h1 mb-4 mt-4">Create Event</h2>
        </div>
        <form action={submitAction} id="create">
          <div className="row mb-4 mt-4">
            <div className="col-lg-6 mb-12 pb-2">
              <div className="col-lg-12 mb-12 pb-2">
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
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
                      size="4"
                    >
                      <option defaultValue="online">Online</option>
                      <option defaultValue="music">Music</option>
                      <option defaultValue="webinar">Webinar</option>
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
                      <option>Published</option>
                      <option>Pending</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 mb-12 pb-2">
                <input
                  type="submit"
                  value="Add event"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
