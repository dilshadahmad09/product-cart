import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from './CardsData';
import './style.css';
import { ADD } from '../redux/actions/action';
import { useDispatch } from 'react-redux';

const Cards = () => {
    const [data, setData] = useState(Cardsdata);
    const [searchItem, setSearchItem] = useState('');
    const [filterData, setFilterData] = useState([]);
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('')

    const dispatch = useDispatch();
    const sendData = (e)=>{
        dispatch(ADD(e))
    }
    const sortByRating = ()=>{
        let sorted = data.sort((a,b)=>{
            return Number(b.rating) - Number(a.rating);
        })
       return setData([...sorted])
    }

    const filterByName = ()=>{
        if(searchItem !== ""){
           let filterD = data.filter((val)=>{
                return val.rname.toLowerCase().includes(searchItem.toLowerCase());
           })
           
          return setFilterData(filterD);
        }else{
          return  setFilterData(data);
        }
    }
    // console.log(filterData)
   
    const enterHandle = (event)=>{
        if (event.key === "Enter") {
          return filterByName();
        }
    }
    const handleChange = (e)=>{
        setCategory(e.target.value);
    }


    useEffect(() => {
      console.log("data", data)
      if (price === "asc") {
        const lth = data.sort((a, b) => a.price - b.price);
        console.log("asc", lth)
        setData([...lth]);
      }
      if (price === "desc") {
        const htl = data.sort((a, b) => b.price - a.price);
        console.log("desc", htl)
        setData([...htl]);
      }
    }, [price]);
  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Add to Carts Project</h1>
      <div className='search-filter-dropdown'>
        <div className='dropdown'>
          <select className='dropdown' value={category} onChange={handleChange}>
            <option value='' active='true'>
              Category
            </option>
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
            <option value='breakFast'>Break Fast</option>
          </select>
        </div>
        <div className='search'>
          <input
            type='text'
            placeholder='search...'
            onKeyPress={enterHandle}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <i className='fas fa-search' onClick={() => {}}></i>
        </div>
        <div className='filter'>
          <button onClick={() => sortByRating()}>Sort By Rating</button>
        </div>

        <div className='dropdown'>
          <select
            className='dropdown'
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
          >
            <option value='' active='true'>
              Filter By Price
            </option>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
          </select>
        </div>
      </div>
      <div className='row d-flex justify-content-center align-items-center'>
        {data
          .filter((val) => {
            if (category != "") {
              // console.log("di", category, val.category, val)
              return val.category.toLowerCase() === category.toLowerCase();
            } else {
              // console.log("ah", val)
              return val;
            }
          })
          .map((element) => {
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
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Text>Rating : {element.rating}</Card.Text>
                    <Card.Text>Category : {element.category}</Card.Text>
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