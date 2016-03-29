//React
var React = require('react');

//react-bootstrap
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

var EditButton = React.createClass({
  render : function(){
    return (<Button bsStyle="primary">Edit</Button>);
  }
});

module.exports = EditButton;
