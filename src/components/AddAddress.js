import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import card from './../decorators/card'
import {isAddress} from "../ethereum/isAddress";
import {connect} from 'react-redux'

class AddAddress extends Component {
  static defaultProps = {};
  
  static propTypes = {};
  
  state = {
    address: ''
  };
  addressChangeHandler = (ev) => this.setState({address: ev.target.value})
  addAddress = (ev) => {
    // dispatcher
    this.setState({address: ''})
  }
  
  render() {
    const {address} = this.state
    return (
      <Form inline>
        <FormGroup className="mb-5 mr-sm-5 mb-sm-0">
          <Label for="watchedAddress" className="mr-sm-5">Address to watch</Label>
          <Input type="text" name="address" id="watchedAddress" placeholder='0x0' value={address}
                 valid={isAddress(address)} className="mr-sm-5" onChange={this.addressChangeHandler}/>
        </FormGroup>
        <Button onClick={this.addAddress}>Add address</Button>
      </Form>
    );
  }
}

export default card('Add new address to watch', AddAddress);

