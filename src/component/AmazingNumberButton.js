import React from "react";
import '../CSS/AmazingNumberButton.css'


class AmazingNumberButton extends React.Component {
    render() {
        return (
            <>
                <div className="btn " onClick={this.props.inputNum}> 1 </div>
                <div className="btn " onClick={this.props.inputNum}> 2 </div>
                <div className="btn " onClick={this.props.inputNum}> 3 </div>
                <div className="btn " onClick={this.props.inputNum}> 4 </div>
                <div className="btn " onClick={this.props.inputNum}> 5 </div>
                <div className="btn " onClick={this.props.inputNum}> 6 </div>
                <div className="btn " onClick={this.props.inputNum}> 7 </div>
                <div className="btn " onClick={this.props.inputNum}> 8 </div>
                <div className="btn " onClick={this.props.inputNum}> 9 </div>
                <div className="btn " onClick={this.props.inputNum}> 0 </div>
                <div className="btn-yellow " onClick={this.props.operatorType}> + </div>
                <div className="btn-yellow " onClick={this.props.operatorType}> X </div>
                <div className="btn-yellow " onClick={this.props.operatorType}> - </div>
                <div className="btn-yellow " onClick={this.props.operatorType}> / </div>
                <div className="btn-yellow " onClick={this.props.percent}> % </div>
                <div className="btn-yellow " onClick={this.props.reset}> AC </div>
                <div className="btn " onClick={this.props.minusPlus}> - / + </div>
                <div className="btn " onClick={this.props.inputNum}> . </div>
                <div className="btn " onClick={this.props.equals}> = </div>
            </>
        )
    }
}

export default AmazingNumberButton;