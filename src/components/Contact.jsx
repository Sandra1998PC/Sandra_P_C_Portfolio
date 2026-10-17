
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setStatus("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "sandrapctla@gmail.com";

    const gmailUrl = new URL("https://mail.google.com/mail/");

    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", recipient);
    gmailUrl.searchParams.set("su", formData.subject);
    gmailUrl.searchParams.set(
      "body",
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    window.open(gmailUrl.toString(), "_blank");

    setStatus(
      "Gmail opened in a new tab with your message ready to send."
    );
    setFormData({...formData,  name: "",
    email: "",
    subject: "",
    message: "", });
  };


  const contactDetails = [
    {
      icon: Mail,
      label: "Email me",
      value: "sandrapctla@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sandrapctla%40gmail.com",
    },
    {
      icon: Phone,
      label: "Call me",
      value: "+91 70251 36588",
      href: "tel:+917025136588",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kerala, India",
      href: null,
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-eyebrow">
            <MessageCircle size={16} />
            GET IN TOUCH
          </span>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>

          <p>
            Have an opportunity, a project idea, or just want to connect?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact information */}
          <div className="contact-info">
            <div className="contact-info-heading">
              <h3>Let's talk!</h3>
              <p>
                I'm open to discussing web development opportunities
                and interesting projects.
              </p>
            </div>

            <div className="contact-details">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="contact-detail" key={item.label}>
                    <div className="contact-detail-icon">
                      <Icon size={20} />
                    </div>

                    <div className="contact-detail-text">
                      <span>{item.label}</span>

                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-socials">
              <p>Find me on</p>

              <div className="contact-social-links">
                <a
                  href="https://github.com/Sandra1998PC"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/sandra-p-c1998/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            <div className="contact-note">
              <div className="contact-note-icon">
                <CheckCircle2 size={19} />
              </div>

              <p>
                Open to new opportunities and collaborations.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send me a message</h3>

            <p className="contact-form-subtitle">
              Fill in the details below and let's connect.
            </p>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <Send size={17} />
            </button>

            {status && (

              <p className="contact-status" role="status">
                {status}
              </p>
            )}
          </form>
        </div>

        <div className="contact-footer">
          <p>
            Designed & built with care
            <span> ♥ </span>
            by Sandra
          </p>

          <a href="#home">
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
