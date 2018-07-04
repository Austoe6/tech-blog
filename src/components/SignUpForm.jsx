import React from 'react'
import classnames from 'classnames'

class SignUpForm extends React.Component{
    state = {
        name: '',
        email: '',
        loading: false,
        success: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited form')
        this.setState({loading: true})
    }

    handleNameChange = (e) => this.setState({name: e.target.value})

    handleEmailChange = (e) => this.setState({email: e.target.value})
    
    render(){
        if (this.state.loading){
            return (
                <div className="contact-form__loader">
                    Submiting...
                </div>
            )
        }

        return(
            <div className="contact-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" placeholder='Name' value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        <input type="email" placeholder='Email' value={this.state.email} onChange={this.handleEmailChange}/>
                    </label>
                    <input className='btn--outline contact-form__submit-btn' type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignUpForm