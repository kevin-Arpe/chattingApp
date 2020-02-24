import React from 'react';

class Board extends React.Component {
    render() {
        return (
          <tr>
              <td>{this.props.item.brdnum}</td>
              <td>{this.props.item.brdtitle}</td>
              <td>{this.props.item.brdwriter}</td>
              <td>{this.props.item.brddate.toLocaleTimeString()}</td>
          </tr>
        );
    }
}

export default Board;