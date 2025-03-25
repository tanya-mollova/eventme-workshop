import { useState, useEffect, useTransition } from "react";
import { useNavigate, useParams } from "react-router";

import request from "../../utils/request";
import { useEditEvent } from "../../api/eventApi";
import { fromIsoDate } from "../../utils/dateTime";

import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Stack from "@mui/material/Stack";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Switch from "@mui/material/Switch";

dayjs.extend(utc);
dayjs.extend(timezone);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = [
  "Online",
  "Music",
  "Business",
  "Lifestyle",
  "Culture",
  "Sport",
];

export default function EventCreate() {
  const baseUrl = "http://localhost:3030/data/events";
  const [pending, startTransition] = useTransition();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { eventId } = useParams();
  const { edit } = useEditEvent();

  const [eventData, setEventData] = useState({
    title: "",
    imageUrl: "",
    description: "",
    time: "",
    date: "",
    price: "",
    status: true,
    city: "",
    street: "",
    streetNumber: "",
    category: [],
  });

  useEffect(() => {
    request.get(`${baseUrl}/${eventId}`).then((result) => {
      const city = result.address.city;
      const street = result.address.street;
      const streetNumber = result.address.streetNumber;
      const time = result.time;
      setEventData({
        ...result,
        city: city,
        street: street,
        streetNumber: streetNumber,
      });
    });
  }, []);

  const handleDate = (e) => {
    setEventData({
      ...eventData,
      date: fromIsoDate(e),
    });
  };

  const handleTime = (e) => {
    setEventData({
      ...eventData,
      time: e.format(),
    });
  };

  const handleStatus = (event) => {
    if (event.target.checked) {
      setEventData({
        ...eventData,
        status: "event.target.checked",
      });
    }

    setEventData({
      ...eventData,
      status: event.target.checked,
    });
  };

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setEventData({
      ...eventData,
      category: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city" || name === "street" || name === "streetNumber") {
      setEventData({
        ...eventData,
        [name]: value,
      });
    } else {
      setEventData({
        ...eventData,
        [name]: value,
      });
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.title.trim()) {
      errors.title = "Title is required";
    }
    if (!data.imageUrl.trim()) {
      errors.imageUrl = "Image url is required";
    } else if (
      !data.imageUrl.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      )
    ) {
      errors.imageUrl = "Image url must be real url";
    }
    if (!data.time == {}) {
      errors.time = "Time is required";
    }
    if (!data.date.trim()) {
      errors.date = "Date is required";
    }
    if (!data.city.trim()) {
      errors.city = "City is required";
    }
    if (!data.category.length) {
      errors.category = "Category is required";
    }
    return errors;
  };

  const submitAction = async (e) => {
    const newErrors = validateForm(eventData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      startTransition(async () => {
        await edit(eventId, eventData);
        startTransition(() => {
          navigate(-1);
        });
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length == 0) {
      setErrors({});
    } else {
      const newErrors = validateForm(eventData);
      setErrors(newErrors);
    }
  }, [eventData]);

  return (
    <section className="section" id="section-edit">
      <div className="section-title">
        <h2 className="h1 mb-4 mt-4">Edit Event</h2>
      </div>
      <div className="container shadow rounded p-5 bg-white">
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
                    defaultValue={eventData.title}
                    onChange={handleChange}
                  />
                  {errors.title && (
                    <span className="error-message">{errors.title}</span>
                  )}
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
                    defaultValue={eventData.imageUrl}
                    onChange={handleChange}
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
                    defaultValue={eventData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="row"></div>
            </div>
            <div className="col-lg-6 mb-12 pb-2">
              {" "}
              <div className="row">
                <div className="col-lg-4 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="time" className="form-label">
                      Time
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack spacing={2}>
                        <TimePicker
                          value={dayjs.utc(`${eventData.time}`)}
                          onChange={handleTime}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="col-lg-4 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                          value={dayjs(`${eventData.date}`)}
                          onChange={handleDate}
                          disablePast={true}
                          referenceDate={dayjs("2022-04-17T15:30")}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
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
                      defaultValue={eventData.price}
                      onChange={handleChange}
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
                      defaultValue={eventData.address?.city}
                      onChange={handleChange}
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
                      defaultValue={eventData.address?.street}
                      onChange={handleChange}
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
                      defaultValue={eventData.address?.streetNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mb-12 pb-2">
                  <div className="form-group">
                    <FormControl sx={{ m: 1, width: 200 }}>
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={eventData.category}
                        onChange={handleSelect}
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Chip"
                          />
                        }
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {categories.map((category) => (
                          <MenuItem key={category} value={category}>
                            {category}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="col-lg-4 mb-12 pb-2">
                  <div className="form-group">
                    <span> Publish</span>
                    <Switch
                      checked={!!eventData.status}
                      className={
                        eventData.status === true
                          ? "Mui-checked"
                          : "Mui-disabled"
                      }
                      value={eventData.status}
                      onChange={handleStatus}
                      inputProps={{ "aria-label": "controlled" }}
                      name="status"
                      id="status"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="row mt-4">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 mb-12 pb-2">
              <input
                disabled={pending}
                type="submit"
                value="Edit event"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-lg-4"></div>
          </div>
        </form>
      </div>
    </section>
  );
}
