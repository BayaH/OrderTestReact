import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTabIndex } from '../actions/OrderUi';
import autobind from 'autobind-decorator';
import MenuItem from 'material-ui/lib/menus/menu-item';

@connect((state => {
    return {
      tabIndex: state.orderUi.tabIndex
    };
}), { setTabIndex })
export default class CreateOrder extends React.Component {

  static propTypes = {
    tabIndex: PropTypes.number.isRequired,
    setTabIndex: PropTypes.func.isRequired
  };

  @autobind
  handleChange(value) {
    this.props.setTabIndex(value);
  }

  render() {
    return (
      <div>

        <div className= 'leftMenu'>
          <MenuItem className="OrderMenuItem">Formule</MenuItem>
          <MenuItem className="OrderMenuItem">Sauces</MenuItem>
          <MenuItem className="OrderMenuItem">Desserts</MenuItem>
          <MenuItem className="OrderMenuItem">Boissons</MenuItem>
          <MenuItem className="OrderMenuItem">Supplément</MenuItem>
        </div>

        <div className='createOrder'>
          Creation de la commande
        </div>
      </div>
    );
  }
}
