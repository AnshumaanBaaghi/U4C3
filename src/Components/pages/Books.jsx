import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { SingleBook } from "./SingleBook";
import { useLocation, useNavigate } from "react-router-dom";
export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
gap: 20px;
padding: 0px 20px;
box-sizing: border-box;
`;

const Books = () => {
  const {setClickedBook,Auth,setAuth} = useContext(AuthContext)
  const [data, setData] = useState([]);
  const callData=async()=>{
    let promise = await fetch('http://localhost:8080/books');
    let da =await promise.json()
    setData(da)
  }
  useEffect(() => {
    callData()
    // make a GET request to http://localhost:8080/books to get all the books data
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/login";
  useEffect(() => {
    if (!Auth) {
      navigate(from, { replace: true });
    }
  }, [Auth]);
const BookDiv = styled.div`
background-color: white;
border-radius: 10px;
overflow: hidden;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const BookImg = styled.img`
width:100%;
`
const BookDes=  styled.div`
font-size: 14px;
  font-weight: 500;
`

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        <>
        {data.map((el)=>{
          return(
            <>
            <Link  onClick={()=>setClickedBook(el.id)} to={`${el.id}`}>
            <BookDiv >
              <BookImg src={el.thumbnailUrl} alt="" />
              <h2>{el.title}</h2>
              <BookDes>{el.shortDescription}</BookDes>
              {/* <div>{el.publishedDate.$date}</div> */}
            </BookDiv>
            </Link>
            <Outlet/>
            </>
          )
        })}
        </>
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
      </Grid>
    </>
  );
};
export default Books;
