import React from 'react'
import classnames from 'classnames'
import axios from 'axios'
import successIcon from '../assets/check.svg'
import errorIcon from '../assets/slash.svg'

//netlify function api endpoint
const formAPI = '/.netlify/functions/signup'

//submit function
function formHandler(email, names) {
    const data = {
        email: email,
        names: names
    }

    return axios({
        method: 'post',
        url: formAPI,
        data: data,
    })
}

class SignUpForm extends React.Component{
    state = {
        name: '',
        email: '',
        loading: false,
        success: false,
        validationError: false,
        submitError: false
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let email = this.state.email
        let names = this.state.name
        
        if(!email){
            this.setState({validationError: true})
        } else {
            this.setState({validationError: false, loading: true})

            formHandler(email, names).then((res) => {
                console.log(res)
                this.setState({success: true, loading: false})
            }).catch((e) => {
                this.setState({submitError: true, loading: false})
            })
        }
    }

    handleNameChange = (e) => this.setState({name: e.target.value})

    handleEmailChange = (e) => this.setState({email: e.target.value})
    
    render(){
        const formStyles = classnames('contact-form',{'contact-form--error': this.state.validationError})

        if (this.state.loading){
            return (
                <div className="contact-form__loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        }

        if(this.state.success){
            return(
                <div className='contact-form--success'>
                    <div className='success-icon'>
                        <img src={successIcon} alt='tick'/>
                    </div>
                    <p>Welcome onboard</p>
                </div>
            )
        }

        if(this.state.submitError){
            return(
                <div className='contact-form__submit-error'>
                    <div className='error-icon'>
                        <img src={errorIcon} alt='tick'/>
                    </div>
                    <p>We encountered an error submiting your request</p>
                </div>
            )
        }

        return(
            <div className={formStyles}>
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