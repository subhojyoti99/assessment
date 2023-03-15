import React from "react";

export default function Footer() {
  return (
    <div>
            
            <div class="text-midium text-white p-4">
                <hr className="footer_hr"/>
                <div className="max-w-{100%} m-px pl-2 pr-2">
                    <div className="flex items-center justify-center flex-wrap">
                        <div className="footer-col-1">
                            <h3>You can visit this site or our Android Environment Setup</h3>
                        </div>
                        <div className="footer-col-2">
                        <p>This page is still under-going upgrades. Work on bug fixing is still going-on..</p>
                        </div>
                        <div className="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="#">Latest Post</a></li>
                                <li><a href="#">Subscription</a></li>
                                <li><a href="#">Join Groups</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                        <hr className="footer_hr" />
                        <p className="copyright">&copy; subhojyotisingha || 2023</p>
                        <h3 className="text-center">Portfolio  link</h3>
                    <div className="portfollio">
                        <ul>
                            <li><a href="https://subhojyoti99.github.io/Portfolio_with_voiceassistant/" target="_blank">S</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}
