import React, { PropTypes } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import { setTabIndex } from '../actions/OrderUi';
import autobind from 'autobind-decorator';

@connect(state => {
    return ({
      tabIndex: state.orderUi.tabIndex
    });
}, { setTabIndex })
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
        <Tabs onChange={this.handleChange}
          value={this.props.tabIndex}
        >
          <Tab label="Formule" value={0}/>
          <Tab label="Dessert" value={1}/>
          <Tab label="Boissons" value={2}/>
          <Tab label="Supplément" value={3}/>
        </Tabs>
        <SwipeableViews index={this.props.tabIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            Formules + sauces
          </div>
          <div>
            Desserts
          </div>
          <div>
            Boissons
          </div>
          <div>
            Supplément
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
