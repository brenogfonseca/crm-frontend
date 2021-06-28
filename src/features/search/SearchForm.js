import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectSearch, setSearchTerm } from './searchSlice'

export default function SearchForm() {
  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearch)

  const onChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }


  return (
    <Form>
      <Form.Group as={Row} >
        <Form.Label column sm={3} >
          Search
        </Form.Label>
        <Col sm={9} >
          <Form.Control
            id="search"
            value={searchTerm}
            onChange={onChangeHandler}
            placeholder="Search..."
            autoFocus
          />
        </Col>
      </Form.Group>
    </Form>
  )
}
