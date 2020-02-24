import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          brdtitle: '',
          brdwriter: ''
      };

      this.changeHandler = this.changeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
    }
  
    changeHandler(event) {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({
        [key]: value
        });
    }
  
    submitHandler(event) {
        event.preventDefault();
  
        const newState = this.state;
        this.props.onSaveData(newState);
        this.setState({
            brdwriter: '',
            brdtitle: ''
        });
    }
  
    render() {
        return (
            <form onSubmit={this.submitHandler}>
            <input type="text" placeholder="title" name="brdtitle" value={this.state.brdtitle} onChange={this.changeHandler} />
            <input type="text" placeholder="name" name="brdwriter" value={this.state.brdwriter} onChange={this.changeHandler} />
            <button type="submit">Save</button>
            </form>
        );
    }
}

export default BoardForm;