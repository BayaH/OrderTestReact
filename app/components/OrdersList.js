import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

export default class OrdersList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
		  fixedHeader: true,
		  fixedFooter: true,
		  stripedRows: false,
		  showRowHover: false,
		  selectable: true,
		  multiSelectable: false,
		  enableSelectAll: false,
		  deselectOnClickaway: true,
		  height: '300px',
		};
	}

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
					height={this.state.height}
  					fixedHeader={this.state.fixedHeader}
  					fixedFooter={this.state.fixedFooter}
  					selectable={this.state.selectable}
					multiSelectable={this.state.multiSelectable}
					onRowSelection={this._onRowSelection}>
					<TableHeader enableSelectAll={this.state.enableSelectAll}>
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
					    deselectOnClickaway={this.state.deselectOnClickaway}
					    showRowHover={this.state.showRowHover}
					    stripedRows={this.state.stripedRows}>
					    {ordersList}
					 </TableBody>
				</Table>
			</div>
		)	
	}
}