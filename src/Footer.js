import React from 'react'

function Footer() {
  return (
    <>
        <footer>
            <div className="footer-1">
                <h1>Nguyen Thi Thu</h1>
                <div className="footer-icon">
                    <div>
                        <a href="#"><i className="fas fa-phone"></i></a>
                    </div>
                    <div>
                        <a href="#"><i class="fas fa-envelope-open"></i></a>
                    </div>
                    <div>
                        <a href="#"><i class="fas fa-map-marker-alt"></i></a>
                    </div>
                    <div>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </div>
                    <div>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                Copyright | Nguyen Thi Thu | 2024
            </div>
        </footer>
    </>
  )
}

export default Footer
