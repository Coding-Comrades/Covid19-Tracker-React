import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import axios from 'axios';

const DbForm = () => {

  let history = useHistory();
  const [addlead, setAddlead] = useState({
    storeName: "", district: "", address: "", contact: "", medicine: ""
  });

  let name, value;

  function handleInput(event)
  {
    
    name = event.target.name;
    value = event.target.value;
    // console.log(name);
    // console.log(value);
    setAddlead({...addlead, [name]:value});

  }

  function handleSubmit(event)
  {
    event.preventDefault();
        axios.post("/addlead", {storeName : addlead.storeName , 
          district : addlead.district,
          address : addlead.address,
          contact : addlead.contact,
          medicine : addlead.medicine
          })
          .then((response) => {
          console.log(response);

          // window.confirm("data saved");

          history.push("/medicines");
          // history.push("/medicines", {from: "DbForm"});

          });
  }





    return (
        /*
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Lead</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
        <div class="modal-body"> 
  
            <div class="form-group">
              <label for="exampleInputEmail1">Store Name</label>
              <input type="text" name="storeName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Store Name" value={addlead.storeName} onChange={handleInput} required />
            </div>
  
  
            <div class="form-group">
              <label for="exampleInputPassword1">District</label>
              <input type="text" name="district" class="form-control" id="exampleInputPassword1" placeholder="District" value={addlead.district} onChange={handleInput}  required />
            </div>
  
            <div class="form-group">
              <label for="exampleInputPassword1">Address</label>
              <input type="text" name="address" class="form-control" id="exampleInputPassword1" placeholder="Address" value={addlead.address} onChange={handleInput}  required />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contact</label>
              <input type="text" name="contact" class="form-control" id="exampleInputPassword1" placeholder="Contact" value={addlead.contact} onChange={handleInput}  required />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Medicines</label>
              <input type="text" name="medicine" class="form-control" id="exampleInputPassword1" placeholder="Medicines/Health Kit"   value={addlead.medicine} onChange={handleInput}  required />
            </div>
  
  
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" name="inserData" class="btn btn-primary" >Add</button>
        </div>
      </form>
      </div>
    </div>
    */



    <form method="POST" onSubmit={handleSubmit}>
    <div class="registration-form">
        <form>
            
            <div class="form-group">
              
              <input type="text" name="storeName" class="form-control item" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Store Name" value={addlead.storeName} onChange={handleInput} required />
            </div>

            
            <div class="form-group">
              <input type="text" name="district" class="form-control item" id="exampleInputPassword1" placeholder="District" value={addlead.district} onChange={handleInput}  required />
            </div>

            <div class="form-group">
              <input type="text" name="address" class="form-control item" id="exampleInputPassword1" placeholder="Address" value={addlead.address} onChange={handleInput}  required />
            </div>

            <div class="form-group">
              <input type="text" name="contact" class="form-control item" id="exampleInputPassword1" placeholder="Contact" value={addlead.contact} onChange={handleInput}  required />
            </div>

            <div class="form-group">
              <input type="text" name="medicine" class="form-control item" id="exampleInputPassword1" placeholder="Medicines/Health Kit"   value={addlead.medicine} onChange={handleInput}  required />
            </div>

            <div class="form-group">
                <button type="button" class="btn btn-block create-account">Notify Me</button>
            </div>
        </form>
        

        
    </div>
    </form>













    )
}

export default DbForm;
