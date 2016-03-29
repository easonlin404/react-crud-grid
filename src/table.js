var React = require('react');
var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;


var RgTable = React.createClass({
	render: function() {
    return tableInstance;
  }
});

var tableInstance = (
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
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
				<td><Button bsStyle="primary">Edit</Button> <Button bsStyle="danger">Delete</Button></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
				<td><Button bsStyle="primary">Edit</Button> <Button bsStyle="danger">Delete</Button></td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
			  <td><Button bsStyle="primary">Edit</Button> <Button bsStyle="danger">Delete</Button></td>
      </tr>
    </tbody>
  </Table>
);

module.exports = RgTable;
