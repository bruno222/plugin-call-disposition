import * as React from 'react';
import { connect } from 'react-redux';
import { Actions, withTheme, withTaskContext, CheckboxGroup } from '@twilio/flex-ui';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const DefaultDisposition = 'DEFAULT';

// {"reasonsUnselected": ["Login error","Change personal details"], "reasonsSelected": ["Insufficient Funds", "Failed Payment"]}
class DispositionDialog extends React.Component {
  state = {
    callDisposition: DefaultDisposition,
    // options: ['Cooking & Baking', 'Coffee Machine', 'Laundry Care', 'Dishwashers', 'Cooling', 'Washing Machines'],
  };

  handleClose = () => {
    this.closeDialog();
  };

  closeDialog = () => {
    Actions.invokeAction('SetComponentState', {
      name: 'DispositionDialog',
      state: { isOpen: false, reasonsUnselected: [], reasonsSelected: [] },
    });
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ callDisposition: value });
  };

  handleSaveDisposition = async () => {
    //save disposition
    console.log('Saving call disposition');
    console.log('task: ', this.props.task);
    this.closeDialog();
    // let dispValue = this.state.callDisposition;
    // if (dispValue != DefaultDisposition) {
    //   let newAttributes = { ...this.props.task.attributes };
    //   newAttributes.disposition = dispValue;
    //   //insights outcome
    //   let conversations = this.props.task.attributes.conversations;
    //   let newConv = {};
    //   if (conversations) {
    //     newConv = { ...conversations };
    //   }
    //   newConv.outcome = dispValue;
    //   newAttributes.conversations = newConv;

    //   await this.props.task.setAttributes(newAttributes);
    //   //clear disposition
    //   this.setState({ callDisposition: DefaultDisposition });
    //   this.closeDialog();
    // }
  };

  render() {
    console.log('@@@ props', this.props);

    const reasonsUnselected = this.props.reasonsUnselected || [];
    const reasonsSelected = this.props.reasonsSelected || [];

    return (
      <Dialog open={this.props.isOpen || false} onClose={this.handleClose}>
        <DialogContent>
          <DialogContentText>Select the reason for this contact:</DialogContentText>
          {reasonsSelected.map((option) => (
            <div style={{ marginTop: '12px' }} key={option}>
              <input type="checkbox" id={option} name={option} defaultChecked={true} />
              <label htmlFor={option}> {option}</label>
            </div>
          ))}
          {reasonsUnselected.map((option) => (
            <div style={{ marginTop: '12px' }} key={option}>
              <input type="checkbox" id={option} name={option} />
              <label htmlFor={option}> {option}</label>
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSaveDisposition} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
  const componentViewStates = state.flex.view.componentViewStates;
  const dispositionDialogState = componentViewStates && componentViewStates.DispositionDialog;
  const isOpen = dispositionDialogState && dispositionDialogState.isOpen;
  const reasonsUnselected = dispositionDialogState && dispositionDialogState.reasonsUnselected;
  const reasonsSelected = dispositionDialogState && dispositionDialogState.reasonsSelected;
  return {
    isOpen,
    reasonsUnselected,
    reasonsSelected,
  };
};

export default connect(mapStateToProps)(withTheme(withTaskContext(DispositionDialog)));
