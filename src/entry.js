var React = require('react');
var ReactDOM = require('react-dom');


var ReactCrudGrid = require('./react-crud-grid');

var data =[
{	firstName: 'Mark',
	lastName:	 'Otto',
	userName:	'@mdo'
},
{
	firstName: 'Jacob',
	lastName:	 'Thornton',
	userName:	'@fat'
},
{
	firstName: 'Larry the Bird',
	userName:	'@twitter'
}
];

var SPA = React.createClass({
	render: function() {
    return (
      <ReactCrudGrid data={data}/>
    );
  }
});


var mountNode = document.getElementById('content');

ReactDOM.render( <SPA/>, mountNode);
