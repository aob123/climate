import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const FilterBar = ({ handleFilterClick }) => {
  //Get current Year
  let date = new Date();
  let year = date.getFullYear();

  //Set states for dates and sort
  const [dateTo, setDateTo] = useState(year);
  const [dateFrom, setDateFrom] = useState(0);
  const [sort, setSort] = useState('ASC');

  //Handlers
  const handleDateFrom = (e) => {
    setDateFrom(e.target.value);
  };

  const handleDateTo = (e) => {
    setDateTo(e.target.value);
  };

  const handleSort = (e) => {
    if (e.target.value === 'on') {
      setSort(e.target.id);
    }
  };

  //   console.log(sort);

  return (
    <article>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Year From" onChange={handleDateFrom} />
          </Col>
          <Col>
            <Form.Control placeholder="Year To" onChange={handleDateTo} />
          </Col>
          <Col>
            <Form.Check
              defaultChecked
              reverse
              id={'ASC'}
              type="radio"
              inline
              label="ASC"
              name="group1"
              onClick={handleSort}
            />
            <Form.Check
              reverse
              id={'DESC'}
              type="radio"
              inline
              label="DESC"
              name="group1"
              onClick={handleSort}
            />

            <Button
              onClick={() => handleFilterClick(dateFrom, dateTo, sort)}
              style={{ margin: '0 20px 0 0 ' }}>
              Filter
            </Button>
          </Col>
        </Row>
      </Form>
    </article>
  );
};

export default FilterBar;
