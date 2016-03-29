var React = require('react');
var ReactDOM = require('react-dom');
var $ = require("jquery");

/**
react-bootstrap
**/
var Button = require('react-bootstrap').Button;

/**
Table
*/
var Table = require("./table");
var AddModal = require("./addModal");

var ReactCrudGrid = React.createClass({
  render: function() {
    return (
      <div className="ReactCrudGrid">
       <AddModal/>
        <Table/>
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
  }
});

module.exports = ReactCrudGrid;
