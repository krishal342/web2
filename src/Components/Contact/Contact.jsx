import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import React from "react";

import './Contact.css'
function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "05b448eb-46a6-4d49-ace7-fd97539536cf");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div>
            <div className="w-full bg-black">
                <NavBar />
            </div>

            <div className="form">
                <form onSubmit={onSubmit}>
                    <input className="input" type="text" placeholder="Your Name" name="name"/>
                    <input className="input" type="text" placeholder="Email" name="email"/>
                    <textarea name="message" id="" placeholder="Write Your Comment..."></textarea>
                    <input className="submit" type="submit" />
                    <p className="message">{result}</p>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Contact