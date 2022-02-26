import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showInform, setShowInform] = useState(false);
  const [inform, setInform] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInform(`Thanks ${email} has been leave the message for us. Much Love.`);
    setShowInform(true);
    setEmail("");
    setName("");
    setMessage("");
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
          {showInform && <span>{inform} :)</span>}
        </form>
      </div>
    </div>
  );
}
