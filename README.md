# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


   
    <div className="container-fluid footer">
            <div className="row">
                <div className="footer-left-side col-md-6">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className='join pb-4' htmlFor="emailInput">Join our newsletter to stay up to date on features and releases.</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailInput"
                                            name="user_email"
                                            placeholder="example@mail.com"
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                        />
                                    </div>
                                    <div className='pt-3'>
                                        <button type="submit" className="subscribe text-white">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>










                <div className="footer-right-side col-md-6">
                    <ul className='mx-5'>
                        <h1 className='pages pb-4'>Pages</h1>
                        <li><a href="/home" className='text-decoration-none'>Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                        <li><a href="/legal">Legal</a></li>
                    </ul>



                    <div class="column-end">
                        <h3>INFORMATION</h3>
                        <p>New Collection</p>
                        <p>About Store</p>
                        <p>Contact Us</p>
                        <p>Latest News</p>
                        <p>Our Sitemap</p>
                        <p>Orders History</p>
                    </div>

                </div>
            </div>
        </div>