import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import './Contact.css'

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
      <Layout>
        <div className='contact-container'>
          <h2 className='contact-title'>CONTACT</h2>
          
            <form
            className='contact-form'
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mdopwlll"
            method="POST"
            >
            
            <label className='contact-label'>EMAIL:</label>
            <input className='input' type="email" name="email" autoFocus placeholder='Input email address' />
            <label className='contact-label'>MESSAGE:</label>
            <textarea className='textarea-input' type="text" name="message" placeholder='Input message' />
            {status === "SUCCESS" ? <p>Thanks for reaching out!</p> : <button className='contact-button'>SUBMIT</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>
        </div>
        </Layout>
    </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}