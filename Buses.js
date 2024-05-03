import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from 'reactstrap';

  import { FaBus } from "react-icons/fa6";

const Buses = () => {
  return (
    <Form>

    <h2> <FaBus /> Buses </h2>
  <FormGroup>
    <Label
      for="exampleEmail"
      hidden
    >
      Bus Name
    </Label> <br /> 
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Bus Name"
      type="text"
    />
  </FormGroup><br/>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
      Driver Name
    </Label><br />
    <Input
      id="examplePassword"
      name="Driver Name"
      placeholder="Driver Name"
      type="text"
    />
  </FormGroup><br/>
  {' '}

  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
     Capacity
    </Label><br />
    <Input
      id="examplePassword"
      name="password"
      placeholder="Capacity"
      type="text"
    />

  </FormGroup><br/>

  <FormGroup>
    <Label for="exampleText">
      Description
    </Label> <br />
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>

  <FormGroup>
    <Label for="exampleSelectMulti">
      Type of Buses
    </Label><br />
    <Input
      id="exampleSelectMulti"
      multiple
      name="selectMulti"
      type="select"
    >
      <option>
        AC BUS
      </option>
      <option>
        NON AC BUS
      </option>
      <option>
        LUXARY BUS
      </option>
    </Input>
    </FormGroup><br />
  
  <Button>
    Submit
  </Button>
</Form>

  )
}

export default Buses