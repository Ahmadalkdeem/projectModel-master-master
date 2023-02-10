import { useState } from 'react'

function Contact() {
    //const [name, setName] = useState('')
    const [formStatus, setFormStatus] = useState('Send')
    const [textMessage, setTextMessage] = useState('')
    const onSubmit = (e: any) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
        setTextMessage("Thank You")
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-3">Contact</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" type="email" id="email" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-danger" type="submit" /* onClick={(e) => setName(e.target.value)} */>
                    {formStatus}
                </button>
            </form>

            <div>
                {textMessage && <span>{textMessage}</span>}
            </div>
        </div>
    )
}

export default Contact