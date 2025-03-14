import { useNavigate } from "react-router";
import * as React from "react";
import { useState, useEffect, useTransition } from "react";
import eventService from "../../services/eventService";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { fromIsoDate, fromIsoTime } from "./../../utils/dateTime";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Switch from "@mui/material/Switch";
// import { DataGrid } from "@mui/x-data-grid";
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
function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function EventCreate() {
  const theme = useTheme();
  const [categoriesList, setCategoriesList] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(null);
  const [pending, startTransition] = useTransition();
  // const [status, setStatus] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    category: categoriesList,
  });

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
    const time = e.format();
    setFormData({
      ...formData,
      time: fromIsoTime(time),
    });
  };
  const handleStatus = (event) => {
    if (event.target.checked) {
      setFormData({
        ...formData,
        status: "event.target.checked",
      });
    }
    setFormData({
      ...formData,
      status: event.target.checked,
    });
  };

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setCategoriesList(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const submitAction = async (e) => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      startTransition(async () => {
        await eventService.create(formData);
        startTransition(() => {
          // <DataGrid {...data} loading />;
          navigate("/my-events");
        });
      });
    } else {
      alert("Form submission failed due to validation errors.");
    }
  };
  const validateForm = (data) => {
    const errors = {};
    if (!data.title.trim()) {
      errors.title = "Title is required";
    }
    return errors;
  };

  useEffect(() => {
    formData.category = categoriesList;
  }, [handleSelect]);

  // if (!data.email.trim()) {
  //   errors.email = "Email is required";
  // } else if (!/\S+@\S+\.\S+/.test(data.email)) {
  //   errors.email = "Email is invalid";
  // }

  // if (!data.password) {
  //   errors.password = "Password is required";
  // } else if (data.password.length < 8) {
  //   errors.password = "Password must be at least 8 characters long";
  // }

  // if (data.confirmPassword !== data.password) {
  //   errors.confirmPassword = "Passwords do not match";
  // }

  return (
    <section className="section">
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
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="title"
                    name="title"
                    value={formData.title}
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
                    value={formData.imageUrl}
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
                    value={formData.description}
                    onChange={handleChange}
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack spacing={2}>
                        <TimePicker value={time} onChange={handleTime} />
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
                          value={formData.data}
                          onChange={handleDate}
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
                      City
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
                        Category
                      </label>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={categoriesList}
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
                          <MenuItem
                            key={category}
                            value={category}
                            style={getStyles(
                              categoriesList,
                              formData.category,
                              theme
                            )}
                          >
                            {category}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="col-lg-4 mb-12 pb-2">
                  <div className="form-group">
                    {/* <label htmlFor="status" className="form-label">
                      Status
                    </label> */}
                    <span> Publish</span>
                    <Switch
                      checked={formData.status}
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
                defaultValue="Add event"
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
