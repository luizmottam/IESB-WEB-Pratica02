import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import './New.css'

function New() {


  return (
    <>
      <h1>New Item</h1>
      <p>Welcome to New</p>
    </>
  );
}

export default New;