import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from 'reactstrap';
  import { TbBusStop } from "react-icons/tb";


const BusStop = () => {
  return (
    <Form>
      
    <h2> <TbBusStop /> Create Stops </h2>
  <FormGroup>
    <Label
      for="exampleEmail"
      hidden
    >
      Stop name
    </Label> <br /> 
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Stop name"
      type="text"
    />
  </FormGroup><br/>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
      Geolocation
    </Label><br />
    <Input
      id="examplePassword"
      name="password"
      placeholder="Geolocation"
      type="text"
    />
  </FormGroup><br/>
  {' '}

  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
     Distance from School
    </Label><br />
    <Input
      id="examplePassword"
      name="password"
      placeholder="Distance From School"
      type="text"
    />
  </FormGroup><br/>
  
  <Button>
    Submit
  </Button>
</Form>


  )
}

export default BusStop