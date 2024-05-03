import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from 'reactstrap';
  import { TbRouteSquare } from "react-icons/tb";

const BusRoutes = () => {
  return (
    <Form>
    <h2> <TbRouteSquare /> Routes </h2>
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
      Time
    </Label><br />
    <Input
      id="examplePassword"
      name="password"
      placeholder="Time"
      type="time"
    />
  </FormGroup><br/>
  {' '}

  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
     Price
    </Label><br />
    <Input
      id="examplePassword"
      name="password"
      placeholder="Price"
      type="Price"
    />
  </FormGroup><br/>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
     End Place
    </Label><br />
    <Input
      id="examplePassword"
      name="End Place"
      placeholder="End Place"
      type="text"
    />
  </FormGroup><br/>

  <Button>
    Submit
  </Button>
</Form>
    
  )
}

export default BusRoutes