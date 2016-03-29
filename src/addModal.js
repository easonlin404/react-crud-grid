var React = require('react');

/**
react-bootstrap
*/
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var Popover = ReactBootstrap.Popover;
var Tooltip = ReactBootstrap.Tooltip;
var Input = ReactBootstrap.Input;

const AddModal = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          onClick={this.open}
        >
          Add
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
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
            <Button bsStyle="primary" onClick={this.close}>Add</Button>
            <Button onClick={this.close}>cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


module.exports = AddModal;
