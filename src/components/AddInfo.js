import React, { Component } from 'react';
import './add.css'
class AddInfo extends Component {
    state = {
        name: null,
        birthday:null,
        about: null,
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addInfo(this.state)
        this.setState({
            name: '',
            birthday:'',
            about: ''
        })
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='form-style'>
                    <form onSubmit={this.handleSubmit} >
                        <div class="input-field col s6">
                        <i className="glyphicon glyphicon-user" ></i>
                         <input type="text" id='about'  value={this.state.name} rows='4' onChange={this.handleChange}  className="validate"/>
                         <label for="icon_prefix"> Name</label>
                        </div>
                        <div className='form-group'>
                            <input type="text" id='birthday' placeholder='birthday' value={this.state.birthday} className='form-control' rows='4' onChange={this.handleChange} />
                        </div>
                        <div className='form-group'>
                            <textarea type="text" id='about' placeholder='Tell Me About Yourself' value={this.state.about} className='form-control' rows='4' onChange={this.handleChange} />
                        </div>
                        <button className='btn-btn-primary' data-toggle='tooltip' data-placement='right' title='Click Here To Submit'><b>Submit</b></button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddInfo;
