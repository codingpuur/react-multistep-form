import React from "react";
import { useState } from "react";
import "./form.css";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFive from "./FormFive";
import FormFour from "./FormFour";
import axios from "axios";

const Form = (props) => {
  const [page, setPage] = useState(0);
  props.pagess(page)

  const [formData, setFormData] = useState({
    no:"",
    typeegg:"",
    typecheese:"",
    spice:"",
    cooked:"",
    meat:""
  }
  
  );
  const [name, setName] = useState("shubham");
  const handelsubmit=()=>{
    axios.post('http://localhost:4000/register',name)

    

  }
  const [submit, setSubmit] = useState(true);

  const FormTitles = ["Choose no of egg type of egg", "What type of cheese would you like in your omelet?", "Would you like any spices in your omelet","Do you prefer your vegetables cooked or raw in your omelet?","Would you like any meat in your omelet, such as ham, bacon, or sausage?","Do you want any herbs or spices added to your omelet, such as parsley, thyme, or paprika?"];
  console.log(formData)
  
  
  
  
  
  function prev() {
    setSubmit(true);
    page == 0 ? setPage(page + 0) : setPage(page - 1);
  }
  function next() {
    if (page >=4) {
      setSubmit(false);
    } else {
      setPage(page + 1);
      setSubmit(true);
    }
  }

  const FormDisplay=()=>{
    if(page===0){
      return <FormOne  form={formData} setForm={setFormData}/>
    }else if(page===1){
      return <FormTwo form={formData} setForm={setFormData}/>
    }else if(page===2){
      return <FormThree form={formData} setForm={setFormData}/>
    }
    else if(page===3){
      return <FormFour form={formData} setForm={setFormData}/>
    
    }else if(page===4){
      return <FormFive form={formData} setForm={setFormData}/>
    }
  
  }

  return (
    <div className=" font-mono flex  flex-col justify-between h-full  ">
      <div className="head">
        <h1 className=" text-md md:text-lg lg:text-xl ">{FormTitles[page]}</h1>
        
      </div>
      
      
      <div className="body  flex flex-col justify-center items-center">


<div className=" w-9/12">

      
  {FormDisplay()}
</div>




      </div>
     
     
     
      <div className="button flex w-full justify-between px-10 md:px-28  ">
        <button
          onClick={() => prev()}
          className="prev  z-[1] before:z-[-1] before:absolute before:bottom-2 before:hover:bottom-0  before:h-10 before:w-10 before:bg-[#E5EC17] before:rounded-full  relative bg-black/80 h-10 w-10 rounded-full   flex justify-center  items-baseline hover:items-center  text-xl "
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        {submit}
        {submit ? (
          <button
            onClick={() => next()}
            className="prev  z-[1] before:z-[-1] before:absolute before:bottom-2 before:hover:bottom-0  before:h-10 before:w-10 before:bg-[#E5EC17] before:rounded-full  relative bg-black/80 h-10 w-10 rounded-full  text-center flex justify-center hover:items-center  text-xl "
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        ) : (
          <h1  className=" cursor-pointer  animate-pulse" onClick={()=>handelsubmit()}>submit</h1>
        )}
      </div>
    </div>
  );
};

export default Form;
