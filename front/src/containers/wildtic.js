import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postApi } from '../actions';
import '../App.css'

class WildTic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.button = this.button.bind(this);
    }
    button(event) {
        if (event.key === 'Enter') {
            this.props.postApi(this.state.name);
        }
    }
    render() {
        return (
            <div>
                <div className="header"></div>
                <div className='form'>
                    Name:
                    <input
                        className="text"
                        type="text"
                        value={this.state.name}
                        placeholder="Type your name"
                        autoFocus={true}
                        onKeyPress={this.button}
                        onChange={(e) => this.setState({ name: e.target.value })} />
                    <button
                        className="btn"
                        onClick={() => this.props.postApi(this.state.name)}>Send</button>
                    <div>
                        <h2>{this.props.wildtic.message}</h2>
                    </div>
                </div>

            </div>
        );
    }
}
function mapStateToProps({ wildtic }) {
    return {
        wildtic
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postApi
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WildTic);
