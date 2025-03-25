import { useState, useEffect, useTransition } from "react";
import { useNavigate } from "react-router";

import { fromIsoDate } from "../../utils/dateTime";
import { useCreateEvent } from "../../api/eventApi";

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
import Stack from "@mui/material/Stack";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Switch from "@mui/material/Switch";

dayjs.extend(utc);

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
  const [pending, startTransition] = useTransition();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    description: "",
    time: dayjs(),
    date: "",
    price: "",
    status: true,
    city: "",
    street: "",
    streetNumber: "",
    category: [],
  });
  const { create } = useCreateEvent();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDate = (e) => {
    setFormData({
      ...formData,
      date: fromIsoDate(e),
    });
  };
  const handleTime = (e) => {
    setFormData({
      ...formData,
      time: e.format(),
    });
  };
  const handleStatus = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        status: "e.target.checked",
      });
    } else {
      setFormData({
        ...formData,
        status: e.target.checked,
      });
    }
  };

  const handleSelect = (e) => {
    const {
      target: { value },
    } = e;
    setFormData({
      ...formData,
      category: typeof value === "string" ? value.split(",") : value,
    });
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
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      startTransition(async () => {
        await create(formData);

        // <DataGrid {...data} loading />;
        navigate("/my-events");
      });
    } else {
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length == 0) {
      setErrors({});
    } else {
      const newErrors = validateForm(formData);
      setErrors(newErrors);
    }
  }, [formData]);

  return (
    <section className="section" id="section-create">
      <div className="section-title">
        <h2 className="h1 mb-4 mt-4">Create Event</h2>
      </div>
      <div className="container shadow rounded p-5 bg-white">
        <form action={submitAction} id="create">
          <div className="row mb-4 mt-4">
            <div className="col-lg-6 mb-12 pb-2">
              <div className="col-lg-12 mb-12 pb-2">
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Title *
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                {errors.title && (
                  <span className="error-message">{errors.title}</span>
                )}
              </div>
              <div className="col-lg-12 mb-12 pb-2">
                <div className="form-group">
                  <label htmlFor="imageUrl" className="form-label">
                    Image *
                  </label>
                  <input
                    type="url"
                    className="form-control shadow-none"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                  />
                  {errors.imageUrl && (
                    <span className="error-message">{errors.imageUrl}</span>
                  )}
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
                    value={formData.description}
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
                      Time *
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack spacing={2}>
                        <TimePicker
                          value={dayjs.utc(`${formData.time}`)}
                          onChange={handleTime}
                          views={["hours", "minutes"]}
                        />
                      </Stack>
                    </LocalizationProvider>
                    {errors.time && (
                      <span className="error-message">{errors.time}</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      Date *
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                          value={formData.data}
                          onChange={handleDate}
                          disablePast={true}
                          views={["year", "month", "day"]}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    {errors.date && (
                      <span className="error-message">{errors.date}</span>
                    )}
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
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="city" className="form-label">
                      City *
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.city && (
                    <span className="error-message">{errors.city}</span>
                  )}
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
                      value={formData.street}
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
                      value={formData.streetNumber}
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
                        Category *
                      </label>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={formData.category}
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
                      {errors.category && (
                        <span className="error-message">{errors.category}</span>
                      )}
                    </FormControl>
                  </div>
                </div>
                <div className="col-lg-4 mb-12 pb-2">
                  <div className="form-group">
                    <span> Publish</span>
                    <Switch
                      checked={!!formData.status}
                      value={formData.status}
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
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 mb-12 pb-2">
              <input
                disabled={pending}
                type="submit"
                value="Add event"
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
