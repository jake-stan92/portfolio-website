const ContactForm = () => {
    return (
        <div className="contact-form container">
                <h3>Contact</h3>
                <form id="contact-form" action="">
                    <input type="text" placeholder="FIRST NAME *" required></input>
                    <input type="text" placeholder="LAST NAME *" required></input>
                    <input type="email" placeholder="EMAIL *" required></input>
                    <input type="text" placeholder="PHONE"></input>
                    <input className="col-span2" type="text" placeholder="SUBJECT *" required></input>
                    <textarea className="col-span2 row-span3" type="text" placeholder="MESSAGE *" maxLength="150" required></textarea>
                    <button id="contact-form-send-button" type="submit">Send</button>
                </form>
        </div>         
    )
}

export default ContactForm;