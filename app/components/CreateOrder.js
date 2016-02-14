import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setStep } from '../actions/OrderUi';
import autobind from 'autobind-decorator';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Menu from 'material-ui/lib/menus/menu';
import { AppConstants } from '../constants/AppConstants'; 

@connect((state => {
    return {
      activeStep: state.orderUi.activeStep
    };
}), { setStep })
export default class CreateOrder extends React.Component {

  static propTypes = {
    activeStep: PropTypes.string.isRequired,
    setStep: PropTypes.func.isRequired
  };

  @autobind
  setStep() {
    
    // this.props.setStep(value);
    alert("on a cliqué sur: ");
  }

  render() {
    return (
      <div>
        <div>
          <Menu className='leftMenu'>   
            <MenuItem className="OrderMenuItem" ref='formule' onTouchTap={this.setStep}>Formule</MenuItem>
            <MenuItem className="OrderMenuItem" ref='sauce'>Sauces</MenuItem>
            <MenuItem className="OrderMenuItem">Desserts</MenuItem>
            <MenuItem className="OrderMenuItem">Boissons</MenuItem>
            <MenuItem className="OrderMenuItem">Supplément</MenuItem>
          </Menu>
        </div>

        <div className='createOrder'>
          Creation de la commande
        </div>
      </div>
    );
  }
}
