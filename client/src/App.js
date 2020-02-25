import React from 'react';
import './App.css';
import Board from './components/board';
import BoardForm from './components/boardform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxNum: 2,
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
    };
    this.saveDataHandler = this.saveDataHandler.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  saveDataHandler(data) {
    this.setState({
      maxNum: this.state.boards.length + 1,
      boards: this.state.boards.concat({
        brdnum: this.state.maxNum + 1,
        brddate: new Date(),
        brdtitle: data.brdtitle,
        brdwriter: data.brdwriter
      })
    })
  }

  handleRemove(brdnum) {
    this.setState({
      boards: this.state.boards.filter(item => item.brdnum !== brdnum)
    });
  }

  render() {
    const { boards } = this.state;

    return (
      <div>
        <BoardForm onSaveData={this.saveDataHandler} />
        <table border="1">
            <thead>
                <tr align="center">
                    <td width="50">No.</td>
                    <td width="300">Title</td>
                    <td width="100">Name</td>
                    <td width="100">Date</td>
                    <td width="25">X</td>
                </tr>
            </thead>
            <tbody>
                {
                    boards.map( (item) => <Board key={item.brdnum} item={item} handleRemove={this.handleRemove} /> ) 
                }
            </tbody>
        </table>
      </div>
    );
  }
}

export default App;
