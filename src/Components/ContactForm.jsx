const ContactForm = () => {
    return (
        <div className="contact-form container">
                <h3>Contact</h3>
                <form id="contact-form" action="">
                    <input name="first-name-input" type="text" placeholder="FIRST NAME *" required></input>
                    <input name="last-name-input" type="text" placeholder="LAST NAME *" required></input>
                    <input name="email-input" type="email" placeholder="EMAIL *" required></input>
                    <input name="phone-input" type="text" placeholder="PHONE"></input>
                    <input name="subject-input" className="col-span2" type="text" placeholder="SUBJECT *" required></input>
                    <textarea name="message-input" className="col-span2 row-span3" type="text" placeholder="MESSAGE *" maxLength="150" required></textarea>
                    <button id="contact-form-send-button" type="submit">Send</button>
                </form>
        </div>         
    )
}

export default ContactForm;