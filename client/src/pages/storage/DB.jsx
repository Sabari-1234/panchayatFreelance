import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import "./DB.css";

const DB = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}upload/api/data`
        );
        setData(res.data); // Assuming res.data is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      {data.length > 0 &&
        data.map((obj, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              {obj.applicantID}
            </AccordionSummary>
            <AccordionDetails>
              <table>
                <tbody>
                  <tr>
                    <td>Applicant Name</td>
                    <td>{obj.applicantName}</td>
                  </tr>
                  <tr>
                    <td>Applicant ID</td>
                    <td>{obj.applicantID}</td>
                  </tr>
                  <tr>
                    <td>Street</td>
                    <td>{obj.street}</td>
                  </tr>
                  <tr>
                    <td>Street Type</td>
                    <td>{obj.streetType}</td>
                  </tr>
                  <tr>
                    <td>Street Length</td>
                    <td>{obj.streetLength}</td>
                  </tr>
                  <tr>
                    <td>Street Width</td>
                    <td>{obj.streetWidth}</td>
                  </tr>
                  <tr>
                    <td>Passage Length</td>
                    <td>{obj.passageLength}</td>
                  </tr>
                  <tr>
                    <td>Passage Width</td>
                    <td>{obj.passageWidth}</td>
                  </tr>
                  <tr>
                    <td>Boundary North</td>
                    <td>{obj.boundaryNorth}</td>
                  </tr>
                  <tr>
                    <td>Boundary South</td>
                    <td>{obj.boundarySouth}</td>
                  </tr>
                  <tr>
                    <td>Boundary East</td>
                    <td>{obj.boundaryEast}</td>
                  </tr>
                  <tr>
                    <td>Boundary West</td>
                    <td>{obj.boundaryWest}</td>
                  </tr>
                  <tr>
                    <td>Image</td>
                    <td>
                      <button>Download</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Location Name</td>
                    <td>{obj.location.name}</td>
                  </tr>
                  <tr>
                    <td>Location Latitude</td>
                    <td>{obj.location.latitude}</td>
                  </tr>
                  <tr>
                    <td>Location Longitude</td>
                    <td>{obj.location.longitude}</td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>{obj.location.date}</td>
                  </tr>
                </tbody>
              </table>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export default DB;
