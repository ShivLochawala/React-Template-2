import React, {Component} from 'react';

class Contact extends Component{

    render(){
        return(
            <>
            <hr/>
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-text">
                                <h2>Contact Info</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="c-o">Address:</td>
                                            <td>856 Cordia Extension Apt. 356, Lake, US</td>
                                        </tr>
                                        <tr>
                                            <td className="c-o">Phone:</td>
                                            <td>(12) 345 67890</td>
                                        </tr>
                                        <tr>
                                            <td className="c-o">Email:</td>
                                            <td>info.colorlib@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className="c-o">Fax:</td>
                                            <td>+(12) 345 67890</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <form action="#" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Your Name" required/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Your Email" required/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Your Message" required></textarea>
                                        <button type="submit">Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}
export default Contact;