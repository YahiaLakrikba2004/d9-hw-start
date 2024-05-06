import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {} from 'bootstrap/dist/css/bootstrap.min.css'

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const isFavorite = Object.keys(favorites).includes(data.company_name);

  const handleAddToFavorites = async (company) => {
    try {
      await dispatch({ type: 'ADD_TO_FAVORITES', payload: company });
      console.log(`Added ${company} to favorites`);
    } catch (error) {
      console.error(`Failed to add ${company} to favorites: ${error}`);
    }
  };

  return (
    <Row
      className="mx-5 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        {!isFavorite ? (
          <Button onClick={() => handleAddToFavorites(data.company_name)} variant="primary">
            Add to Favorites
          </Button>
        ) : (
          <span>Added to Favorites</span>
        )}
      </Col>
    </Row>
  );
};

export default Job;
