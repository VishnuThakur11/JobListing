
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards"
import './Jobs.css'

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getJobs() {
      try {
        // setLoading(true);
        const result = await axios.get("http://localhost:3000/api/v1/job/get");

        // Fix the typo "legth" -> "length"
        if (!result.data || result.data.length <= 0) {
          console.log("No results found");
          return;
        }

        setJobs(result.data.jobs);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
      // finally {
      //   setLoading(false);
      // }
    }

    getJobs();
  }, []);

  return (
    <>
      <div>
        <center>
          <h1>Latest Jobs</h1>
        </center>
        <div className="cards-list">


          {jobs.length > 0 ? (
            
            jobs.map((job) => (
              
              <div key={job.id}>
                <Cards name={job.title} content={job.description} url={job.url}/>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;