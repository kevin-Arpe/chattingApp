import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { item, handleRemove } = this.props;
        handleRemove(item.brdnum);
    }

    render() {
        return (
          <tr>
              <td>{this.props.item.brdnum}</td>
              <td>{this.props.item.brdtitle}</td>
              <td>{this.props.item.brdwriter}</td>
              <td>{this.props.item.brddate.toLocaleTimeString()}</td>
              <td><button type="button" onClick={this.handleClick}>X</button></td>
          </tr>
        );
    }
}

export default Board;