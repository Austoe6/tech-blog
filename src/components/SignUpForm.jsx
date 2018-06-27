import React from 'react'

class SignUpForm extends React.Component{
    state = {
        name: '',
        email: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited form')
        this.setState({name: '', email:''})
    }

    handleNameChange = (e) => this.setState({name: e.target.value})

    handleEmailChange = (e) => this.setState({email: e.target.value})
    
    render(){
        return(
            <div className="contact-form" onSubmit={this.handleSubmit}>
                <form>
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