import React from "react";

class Table extends React.Component {
  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Candidates</th>
            <th>Vote Tally</th>
          </tr>
        </thead>
        <tbody className='table-striped'>
          {this.props.candidates.map(candidate => {
            return (
              <tr>
                <td>{candidate.name}</td>
                <td>{candidate.party}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
