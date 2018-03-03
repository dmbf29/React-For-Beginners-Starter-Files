import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
          <h2>Please Enter a Store</h2>
          <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={this.myInput} />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    )
  }
}

// StorePicker.contextTypes = {
//   router: React.PropTypes.object
// }

export default StorePicker;
