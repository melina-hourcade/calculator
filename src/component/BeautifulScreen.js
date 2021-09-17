import React from "react"; 
import NumberFormat from 'react-number-format';

class BeautifulScreen extends React.Component {
  
  render() {
    return (<div className="screen">{this.props.input !== "" || this.props.input === "0" ? (
      <NumberFormat
        value={this.props.input}
        displayType={'text'}
        thousandSeparator={true}
      />
    ) : (
      <NumberFormat
        value={this.props.preState}
        displayType={"text"}
        thousandSeparator={true}
      />
    )}
    </div>
    )
  }
}

export default BeautifulScreen;