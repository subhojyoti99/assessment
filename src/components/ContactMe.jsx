import React, { useState, useEffect } from "react";
import {db} from "../firebase.config";
import { motion } from "framer-motion";


const ContactMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
    
        db.collection("contacts")
          .add({
            name: name,
            email: email,
            message: message,
          })
          .then(() => {
            setLoader(false);
            alert("Your message has been submitted👍");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });
    
        setName("");
        setEmail("");
        setMessage("");
      };

  return (
    <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">ContacT_us</h3>
                            <h1 className="diaplay-6 text-center mb-4">
                                Have Some <b>Queries..?</b>
                            </h1>
                            <hr className="w-screen mx-auto" />
                        </div>
                    </div>
                    
                        <div className="flex items-center justify-center">
                            <form method="post" enctype="text/plain" onSubmit={handleSubmit} className="form">
                                <div className="mb-3">
                                    <label for="name" className="gap-2">YouR_name</label>
                                    <input type="text" className="form-control text-black" placeholder="Abcd Xyz" onChange={(e)=> setName(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">EmaiL_address</label>
                                    <input type="email" className="form-control text-black" onChange={(e)=> setEmail(e.target.value)} placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">YouR_message</label>
                                    <textarea className="form-control text-black" onChange={(e)=> setMessage(e.target.value)} rows="10"></textarea>
                                </div>
                                <motion.button whileTap={{ scale: 0.75 }} type="submit" className="btn btn-outline-dark px-4 shadow rounded-pill">Submit<i className="fa fa-paper-plane ms-2"></i></motion.button>
                            </form>
                        </div>
                </div>
            </section>
        </div>
  )
}

export default ContactMe;