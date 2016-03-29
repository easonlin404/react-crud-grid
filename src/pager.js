var React = require('react');
var Pager = require('react-bootstrap').Pager;
var PageItem = require('react-bootstrap').PageItem;

var RgPager = React.createClass({
	render: function() {
    return pagerInstance;
  }
});

const pagerInstance = (
  <Pager className="pagination">
    <PageItem previous href="#">&larr; Previous</PageItem>
		<PageItem href="#">1</PageItem>
		<PageItem href="#">2</PageItem>
		<PageItem href="#">3</PageItem>
		<PageItem href="#">4</PageItem>
		<PageItem href="#">5</PageItem>
    <PageItem disabled next href="#">Next &rarr;</PageItem>
  </Pager>
);


module.exports = RgPager;
