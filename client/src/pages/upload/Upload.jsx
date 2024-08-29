import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Webcam from "react-webcam";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { IoCloseOutline } from "react-icons/io5";
import { MdCamera } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { IoCamera } from "react-icons/io5";
const Upload = () => {
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(false);
  const webcamRef = useRef(null);
  const [Location, setLocation] = useState(null);
  const [position, setPosition] = useState(null);
  const [formValues, setFormValues] = useState({
    applicantName: "",
    applicantID: "",
    street: "",
    streetType: "",
    streetLength: "",
    streetWidth: "",
    passageLength: "",
    passageWidth: "",
    boundaryNorth: "",
    boundarySouth: "",
    boundaryEast: "",
    boundaryWest: "",
    image: "",
  });
  const getVideoConstraints = () => {
    return {
      facingMode: "environment", // This is usually the rear camera
      width: 1080,
      height: 1920,
    };
  };
  const handleClose = () => {
    setIsWebcamOn(false);
    setPreview(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      setPosition(pos);

      console.log("Latitude " + lat + " " + "Longitude " + lon);

      try {
        const res = await axios.get(
          `https://us1.locationiq.com/v1/reverse?key=pk.cc76f2d934f7f1beed123a99f2242bfa&lat=${lat}&lon=${lon}&format=json`
        );
        console.log(res);
        setFormValues((prevValues) => ({
          ...prevValues,
          location: {
            name: res.data.display_name,
            latitude: lat,
            longitude: lon,
            date: new Date().toLocaleString(),
          },
        }));
        setLocation(res.data);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    });
  }, []);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setFormValues((prevValue) => ({
      ...prevValue,
      image: imageSrc,
    }));
  };
  const save = async () => {
    console.log(formValues);
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}upload/api/add`,
      formValues
    );
    console.log(res);
  };

  const isFormValid = () => {
    console.log(Object.values(formValues).every((value) => value !== ""));
    return Object.values(formValues).every((value) => value !== "");
  };
  return (
    <div className="m-4 flex flex-col gap-3">
      <p className="text-2xl">APPLICANT DETAILS</p>
      <TextField
        id="outlined-basic"
        label="Applicant Name"
        variant="outlined"
        name="applicantName"
        value={formValues.applicantName}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Applicant ID"
        variant="outlined"
        name="applicantID"
        value={formValues.applicantID}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Street"
        variant="outlined"
        name="street"
        value={formValues.street}
        onChange={handleChange}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-select-small-label">Street Type</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          name="streetType"
          label="Street Type"
          value={formValues.streetType}
          onChange={handleChange}
        >
          <MenuItem value="tar">Tar</MenuItem>
          <MenuItem value="cement">Cement</MenuItem>
          <MenuItem value="earth">Earth</MenuItem>
        </Select>
      </FormControl>
      <div className="flex gap-2">
        <TextField
          id="outlined-basic"
          type="number"
          label="Street Length"
          name="streetLength"
          variant="outlined"
          value={formValues.streetLength}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="streetWidth"
          type="number"
          label="Street Width"
          variant="outlined"
          value={formValues.streetWidth}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2">
        <TextField
          id="outlined-basic"
          name="passageLength"
          type="number"
          label="Passage Length"
          variant="outlined"
          value={formValues.passageLength}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="passageWidth"
          type="number"
          label="Passage Width"
          variant="outlined"
          value={formValues.passageWidth}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2">
        <TextField
          id="outlined-basic"
          label="Boundry North"
          variant="outlined"
          name="boundaryNorth"
          value={formValues.boundaryNorth}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="boundarySouth"
          label="Boundry South"
          variant="outlined"
          value={formValues.boundarySouth}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2">
        <TextField
          id="outlined-basic"
          name="boundaryEast"
          label="Boundry East"
          variant="outlined"
          value={formValues.boundaryEast}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="boundaryWest"
          label="Boundry West"
          variant="outlined"
          value={formValues.boundaryWest}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col mt-2">
        <p>Location</p>
        <div
          className="flex p-3 w-full rounded"
          style={{ border: "1px solid #bbbcbd" }}
        >
          {Location && position && (
            <div className="flex flex-col gap-1">
              <div>{Location.display_name}</div>
              <div className="flex w-full gap-2">
                <div>Lat: {position.coords.latitude}</div>
                <div>Long: {position.coords.longitude}</div>
              </div>
              <div>{new Date().toLocaleString()}</div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <p>Take photo</p>
        <div className="flex gap-7">
          <IoCamera onClick={() => setIsWebcamOn(true)} className="text-xl" />
          <GrGallery
            className="text-lg"
            onClick={() => (image ? setPreview(true) : setPreview(false))}
          />
        </div>
      </div>
      {isWebcamOn && (
        <div className="fixed inset-0 z-50">
          <IoCloseOutline
            className="absolute right-0 m-1 top-1 z-50 text-[30px] text-white"
            onClick={handleClose}
          />
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-full object-cover"
            videoConstraints={getVideoConstraints()}
          />
          <MdCamera
            onClick={capture}
            className="z-50 text-[40px] absolute bottom-0 mb-3 right-[45%] text-white"
          />
        </div>
      )}
      {preview && (
        <div className="fixed inset-0 z-50">
          <IoCloseOutline
            className="absolute right-0 m-1 top-1 z-50 text-[30px] text-white"
            onClick={handleClose}
          />
          <img className="w-full h-full object-cover" src={image} />
        </div>
      )}
      <div
        className="w-full mt-2 text-center p-1 rounded-md text-black border bg-[#FACC15] font-medium"
        onClick={isFormValid() ? () => save() : null}
      >
        SAVE
      </div>
    </div>
  );
};

export default Upload;
