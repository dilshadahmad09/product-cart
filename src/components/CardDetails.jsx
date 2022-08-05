import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DELETE, ADD, DELETE_ONE } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const CardDetails = () => {

    
   const [data, setData] = useState([]);
   // console.log(data);

   const { id } = useParams();
   // console.log(id);

   const navigate = useNavigate();

   const dispatch = useDispatch();

   const getdata = useSelector((state) => state.cartreducer.carts);
   // console.log(getdata);

   const compare = () => {
     let comparedata = getdata.filter((e) => {
       return e.id == id;
     });
     setData(comparedata);
   };

   // add data

   const send = (e) => {
     // console.log(e);
     dispatch(ADD(e));
   };

   const dlt = (id) => {
     dispatch(DELETE(id));
     navigate("/");
   };

   // remove one
   const remove = (item) => {
     dispatch(DELETE_ONE(item));
   };

   useEffect(() => {
     compare();
   }, [id]);

  return (
    <div className='container mt-2'>
      <h1>Items detail's page</h1>
      <section className='container mt-3'>
        <div className='iteamsdetails'>
          <div className='items_img'>
            <img
            
              src='https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg'
              alt=''
            />
          </div>
          <div className='details'>
            <Table>
              <tr>
                <td>
                  <p>
                    <strong>Restaurant</strong> : Masala Theory
                  </p>
                  <p>
                    <strong>Price</strong> : ₹ 300
                  </p>
                  <p>
                    <strong>Dishes</strong> : Masala Theory, Biryani, Samosa
                  </p>
                  <p>
                    <strong>Total</strong> : ₹ 300
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Rating : </strong>
                    <span
                      style={{
                        backgroundColor: "green",
                        color: "#fff",
                        padding: "2px 5px",
                        borderRadius: "5px",
                      }}
                    >
                      3.5 ☆
                    </span>
                  </p>
                  <p>
                    <strong>Order Review : </strong>
                    <span>This is very good item</span>
                  </p>
                  <p>
                    <strong>Remove : </strong>
                    <span>
                      <i
                        style={{
                          color: "red",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                        className='fas fa-trash'
                      ></i>
                    </span>
                  </p>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
