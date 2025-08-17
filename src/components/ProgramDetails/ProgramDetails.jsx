// src/pages/ProgramDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const ProgramDetails = () => {
  const { id } = useParams();

  const schools = {
    1: {
      title: "School of Engineering & Technology",
      programs: [
        { name: "B.Tech", duration: "4 Years", fees: "₹80,000 / year" },
        { name: "M.Tech", duration: "2 Years", fees: "₹1,00,000 / year" },
      ],
    },
    2: {
      title: "School of Business & Management",
      programs: [
        { name: "BBA", duration: "3 Years", fees: "₹60,000 / year" },
        { name: "MBA", duration: "2 Years", fees: "₹1,20,000 / year" },
      ],
    },
    3: {
      title: "School of Hospitality & Tourism",
      programs: [
        { name: "BHM", duration: "4 Years", fees: "₹70,000 / year" },
        { name: "MHM", duration: "2 Years", fees: "₹90,000 / year" },
      ],
    },
  };

  const school = schools[id];

  if (!school) {
    return <h2>School not found</h2>;
  }

  return (
    <div className="program-details">
      <h1>{school.title}</h1>
      <ul>
        {school.programs.map((p, index) => (
          <li key={index}>
            <b>{p.name}</b> – {p.duration}, Fees: {p.fees}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramDetails;

