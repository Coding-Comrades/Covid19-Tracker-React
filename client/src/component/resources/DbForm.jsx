import React, { useState } from 'react';
import axios from 'axios';

const DbForm = () => {


  const [addlead, setAddlead] = useState({
    storeName: "", district: "", address: "", contact: "", medicine: ""
  });

  let name, value;

  function handleInput(event)
  {
    
    name = event.target.name;
    value = event.target.value;
    console.log(name);
    console.log(value);
    setAddlead({...addlead, [name]:value});

  }

  function handleSubmit(event)
  {
    event.preventDefault();
    window.location.reload(true);
        axios.post("/addlead", {storeName : addlead.storeName , 
          district : addlead.district,
          address : addlead.address,
          contact : addlead.contact,
          medicine : addlead.medicine
          })
          .then((response) => {
          console.log(response);

          });
  }





    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
  </div>
    )
}

export default DbForm;
