import React from "react";


export const Form = () => (

<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">addres</label>
    <input type="string" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Cel</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>







);
