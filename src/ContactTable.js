import React, { Component } from "react";

/*  So a row is basically an iFrame, or two iFrames  (it depends on the styling which you can figure out later on).  For now, create one.      */

class ContactRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.phone}</td>
        <a href={this.props.contact.email}><td>Download</td></a>
      </tr>
    );
  }
}
class ContactTable extends React.Component {
  render() {
    var rows = [];
    this.props.contacts.forEach((contact) => {
      if (contact.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ContactRow contact={contact} />);
    });
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Track</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ContactTable;