var React = require('react');
var ReactDOM = require('react-dom');


/**
react-bootstrap
**/
var Button = require('react-bootstrap').Button;

/**
Table
*/
var Table = require("./table");
var AddModal = require("./addModal");
var Pager = require('./Pager');

var ReactCrudGrid = React.createClass({
  render: function() {
    return (
      <div className="ReactCrudGrid">
       <AddModal/>
        <Table data={this.props.data}/>
        <Pager/>
      </div>
    );
  }
});

module.exports = ReactCrudGrid;
