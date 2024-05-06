import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorites } from './action';


const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch(); // Ottieni la funzione dispatch

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetch(baseEndpoint + params.company);
        if (response.ok) {
          const { data } = await response.json();
          setJobs(data);
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.company]);

  const handleAddToFavorites = (jobData) => {
    dispatch(addToFavorites(jobData)); // Invia l'azione per aggiungere l'azienda ai preferiti
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <div key={jobData._id}>
              <Job data={jobData} />
              <Button onClick={() => handleAddToFavorites(jobData.company_name)} variant="primary">
  Add to Favorites
</Button>


            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
