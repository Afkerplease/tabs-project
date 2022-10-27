import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    setJobs(newjobs);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>is Loading...</h1>
      </section>
    );
  }
  const { company, title, duties, dates } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  setValue(index);
                }}
                className={`job-btn ${index === value && "active-btn"} `}
              >
                {" "}
                {item.company}{" "}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3> {title} </h3>
          <h4>{company} </h4>
          <p className="job-date"> {dates} </p>

          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon" />
                <p> {duty} </p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
