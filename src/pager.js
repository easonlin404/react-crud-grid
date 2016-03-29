var React = require('react');
var Pager = require('react-bootstrap').Pager;
var PageItem = require('react-bootstrap').PageItem;

var RgPager = React.createClass({
	render: function() {
    return pagerInstance;
  }
});

const pagerInstance = (
	<div className="Pager">
		<nav>
			<ul className="pagination">
				<li>
					<a href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li><a href="#">1</a></li>
				<li><a href="#">2</a></li>
				<li><a href="#">3</a></li>
				<li><a href="#">4</a></li>
				<li><a href="#">5</a></li>
				<li>
					<a href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
);


module.exports = RgPager;
