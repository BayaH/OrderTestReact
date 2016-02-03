import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import { connect } from 'react-redux';

@connect(state => {
	return {
		orders : state.orders.orders,
		fixedHeader: true,
		fixedFooter: true,
		stripedRows: false,
		showRowHover: false,
		selectable: true,
		multiSelectable: false,
		enableSelectAll: false,
		deselectOnClickaway: true,
		height: '300px'
	}
})
export default class OrdersList extends React.Component{

	static propTypes = {
		orders : PropTypes.arrayOf(
			PropTypes.shape({
				menuType : PropTypes.string.isRequired,
				sauce : PropTypes.string.isRequired
			})
			).isRequired,
		fixedHeader: PropTypes.bool.isRequired,
		fixedFooter: PropTypes.bool.isRequired,
		stripedRows: PropTypes.bool.isRequired,
		showRowHover: PropTypes.bool.isRequired,
		selectable: PropTypes.bool.isRequired,
		multiSelectable: PropTypes.bool.isRequired,
		enableSelectAll: PropTypes.bool.isRequired,
		deselectOnClickaway: PropTypes.bool.isRequired,
		height: PropTypes.string.isRequired
	};

	// constructor(props){
	// 	super(props);

	// 	this.state = {
	// 	  fixedHeader: true,
	// 	  fixedFooter: true,
	// 	  stripedRows: false,
	// 	  showRowHover: false,
	// 	  selectable: true,
	// 	  multiSelectable: false,
	// 	  enableSelectAll: false,
	// 	  deselectOnClickaway: true,
	// 	  height: '300px',
	// 	};
	// }

	render(){
		let ordersList = this.props.orders.map(function (order, index) {
			return(
				<TableRow>
					<TableRowColumn>{order.menuType}</TableRowColumn>
					<TableRowColumn>{order.sauce}</TableRowColumn>
				</TableRow>
			)}.bind(this));
		return (
			<div>
				<Table
					height={this.props.height}
  					fixedHeader={this.props.fixedHeader}
  					fixedFooter={this.props.fixedFooter}
  					selectable={this.props.selectable}
					multiSelectable={this.props.multiSelectable}
					onRowSelection={this._onRowSelection}>
					<TableHeader enableSelectAll={this.props.enableSelectAll}>
						<TableRow>
      						<TableHeaderColumn colSpan="2" style={{textAlign: 'center'}}>
        						Liste des commandes
      						</TableHeaderColumn>
    					</TableRow>
    					<TableRow>
    						<TableHeaderColumn>Type de menu</TableHeaderColumn>
    						<TableHeaderColumn>Sauce</TableHeaderColumn>
    					</TableRow>
					</TableHeader>
					 <TableBody
					    deselectOnClickaway={this.props.deselectOnClickaway}
					    showRowHover={this.props.showRowHover}
					    stripedRows={this.props.stripedRows}>
					    {ordersList}
					 </TableBody>
				</Table>
			</div>
		)
	}
}
