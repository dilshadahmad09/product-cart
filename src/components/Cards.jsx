import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from './CardsData';
import './style.css';
import { ADD } from '../redux/actions/action';
import { useDispatch } from 'react-redux';
import Dropdown from "react-bootstrap/Dropdown";
const Cards = () => {
    const [data, setData] = useState(Cardsdata);
    const dispatch = useDispatch();
    const sendData = (e)=>{
        dispatch(ADD(e))
    }
     console.log(data);
    const sortByRating = ()=>{
        let sorted = data.sort((a,b)=>{
            return Number(b.rating) - Number(a.rating);
        })
        setData(sorted)
    }
  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Add to Carts Project</h1>
      <div className='search-filter-dropdown'>
        <div className='dropdown'>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>Dinner</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Lunch</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Break Fast</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='search'>
          <input type='text' placeholder='search by name or category ...' />
          <i className='fas fa-search'></i>
        </div>
        <div className='filter'>
          <button onClick={() => sortByRating()}>Sort By Rating</button>
        </div>
      </div>
      <div className='row d-flex justify-content-center align-items-center'>
        {data.map((element) => {
          return (
            <>
              <Card
                key={element.id}
                style={{ width: "18rem", border: "none", textAlign: "left" }}
                className='mx-2 mt-4 card_style'
              >
                <Card.Img
                  variant='top'
                  src={element.imgdata}
                  className='mt-3'
                  style={{ height: "16rem" }}
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text>Rating : ₹ {element.rating}</Card.Text>
                  <Card.Text>Price : ₹ {element.price}</Card.Text>
                  <div className='button_div d-flex justify-content-center align-items-center'>
                    <Button
                      onClick={() => sendData(element)}
                      variant='primary'
                      className='col-lg-12'
                    >
                      Add to Carts
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cards