//React
var React = require('react');

//react-bootstrap
var ReactBootstrap = require('react-bootstrap');
var Table = ReactBootstrap.Table;
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var Input = ReactBootstrap.Input;


var RgTable = React.createClass({
	getInitialState() {
    return { showEditModal: false ,showDelModal: false };
  },

	close() {
    this.setState({ showEditModal: false });
  },

	closeDel() {
		this.setState({ showDelModal: false });
	},

	open() {
    this.setState({ showEditModal: true });
  },

	openDel() {
    this.setState({ showDelModal: true });
  },

	render: function() {
		var rows = [];
		this.props.data.forEach(function(data,i) {
			//TODO:get each data's props
			rows.push(
								<tr key={i}>
									<td>1</td>
									<td>{data.firstName}</td>
									<td>{data.lastName}</td>
									<td>{data.userName}</td>
									<td><Button bsStyle="primary" onClick={this.open}>Edit</Button> <Button bsStyle="danger" onClick={this.openDel}>Delete</Button></td>
							</tr>
			);
    }, this);
    return (
			<div className="RgTable">
			  <Table striped>
			    <thead>
			      <tr>
			        <th>#</th>
			        <th>First Name</th>
			        <th>Last Name</th>
			        <th>Username</th>
							<th>Edit</th>
			      </tr>
			    </thead>
			    <tbody>
			    {rows}
			    </tbody>
			  </Table>
				<Modal show={this.state.showEditModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form className="form-horizontal">
							<Input type="text" label="First Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
							<Input type="textarea" label="Last Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
							<Input type="textarea" label="UserName" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="primary" onClick={this.close}>Update</Button>
						<Button onClick={this.close}>cancel</Button>
					</Modal.Footer>
				</Modal>
				<Modal show={this.state.showDelModal} onHide={this.closeDel}>
					<Modal.Header closeButton>
						<Modal.Title>Title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Are you sure you want to delete？
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="danger" onClick={this.closeDel}>Delete</Button>
						<Button onClick={this.closeDel}>cancel</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
  }
});



module.exports = RgTable;
