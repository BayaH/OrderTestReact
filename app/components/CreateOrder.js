import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setStep } from '../actions/OrderUi';
import autobind from 'autobind-decorator';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Menu from 'material-ui/lib/menus/menu';
import { AppConstants } from '../constants/AppConstants'; 
import Formule from './Formule';
import Sauce from './Sauce';

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
  setStep(e, menuItem) {
    
    this.props.setStep(menuItem);
    alert("on a cliqué sur: "+menuItem);
  }

  render() {
    return (
      <div>
        <div>
          <Menu className='leftMenu' onChange={this.setStep}>   
            <MenuItem className="OrderMenuItem" ref='formule' value={AppConstants.FORMULE}>Formule</MenuItem>
            <MenuItem className="OrderMenuItem" ref='sauce' value={AppConstants.SAUCE}>Sauces</MenuItem>
            <MenuItem className="OrderMenuItem" value={AppConstants.DESSERT}>Desserts</MenuItem>
            <MenuItem className="OrderMenuItem" value={AppConstants.BOISSON}>Boissons</MenuItem>
            <MenuItem className="OrderMenuItem" value={AppConstants.SUPPLEMENT}>Supplément</MenuItem>
          </Menu>
        </div>

        <div className='createOrder'>
          {(() => {
            switch (this.state.activeStep) {
              case AppConstants.SAUCE:   return  <Sauce />;
              default:      return <Formule />;
        }
      })()}
        </div>
      </div>
    );
  }
}
