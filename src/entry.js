var React = require('react');
var ReactDOM = require('react-dom');


var ReactCrudGrid = require('./react-crud-grid');

var SPA = React.createClass({
	render: function() {
    return (
      <ReactCrudGrid/>
    );
  }
});


var mountNode = document.getElementById('content');

ReactDOM.render( <SPA/>, mountNode);
