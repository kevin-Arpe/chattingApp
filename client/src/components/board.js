import React from 'react';

class BoardItem extends React.Component {
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

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: [
                {
                  brdnum: 1,
                  brdwriter: 'Lee Sin',
                  brdtitle: '당신의 뜻대로 따르겠소',
                  brddate: new Date()
                },
                {
                  brdnum: 2,
                  brdwriter: 'Lux',
                  brdtitle: '빛으로 인도하겠어요',
                  brddate: new Date()
                }
              ]
        }
    }

    render() {
        const boards = this.state.boards;

        return (
            <div>
                <table border="1">
                    <thead>
                        <tr align="center">
                            <td width="50">No.</td>
                            <td width="300">Title</td>
                            <td width="100">Name</td>
                            <td width="100">Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            boards.map( (item) => <BoardItem key={item.brdnum} item={item} /> ) 
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Board;