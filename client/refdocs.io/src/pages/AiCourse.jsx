import react from 'react'

import styles from "./Aiml.module.css"

function AiCourse() {

    function switchTAB() {

    }
    return (
        <div>
            <header className={styles.header}>

                <div className={styles.nav} id="nav">
                    <div id="learned-logo">
                        <a href="../index.html"><img src="../images/icon/logo.png" style={{ width: '120px' }} /></a>
                    </div>
                    <div className={styles.switchTab} id="switch-tab" onClick={switchTAB}><img src="../images/icon/menu.png" /></div>
                    <ul id="list-switch">
                        <li><a href="../subjects/computer_courses.html"><img src="../images/courses/computer.png" className={styles.icon} />Computer Courses</a></li>
                        <li><a href="#"><img src="../images/courses/projects.png" />Machine Learning</a></li>
                    </ul>
                    <div className={styles.search} id="search-switch">
                        <input type="search" placeholder="Search" className={styles.srch} /><button id="srchbtn"><img src="../images/icon/search.png" /></button>
                    </div>
                </div>
            </header>
            <div className={styles.title}>
                <span>Machine Learning and Artificial Intelligence<br />on refdocs.io</span>
                <div className={styles.shortDesc}>
                    <p>Learn Machine languages and concepts to prepare for a career in<br />MACHINE DESIGNER</p>
                </div>
            </div>
            <div className={styles.course}>
                <div className={styles.cbox}>
                    <div className={styles.det}><a href="#machineLearning">Machine learning (ML)</a></div>
                    <div className={styles.det}><a href="#artificial-intelligence">Artificial intelligence (AI)</a></div>
                </div>

                <div className={styles.inbt}>
                    Accelerate your career with Machine MAKER
                </div>

                <div className={styles.ccard}>
                    <center>
                        <div className={styles.ccardbox}>
                            <div className={styles.dcard}>
                                <div className={styles.fpart}><img src="../images/imgs/ml.png" alt="Machine Learning" /></div>
                                <a href="#machineLearning">
                                    <div className={styles.spart}>ML Course</div>
                                </a>
                            </div>
                            <div className={styles.dcard}>
                                <div className={styles.fpart}><img src="../images/imgs/ai.png" alt="Artificial Intelligence" /></div>
                                <a href="#artificial-intelligence">
                                    <div className={styles.spart}>AI Course</div>
                                </a>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
            <div className={styles.title2} id="machineLearning">
                <span>Start Machine learning tutorial series</span>
                <div className={styles.shortDesc2}>
                    <p>Show your MACHINE LEARNING skills</p>
                </div>
            </div>
            <center>
                <div className={styles.ccardbox2}>
                    <div className={styles.dcard2}><span className={styles.tag}>1/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=gmvvaobm7eQ&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw" target="_blank"><img src="../images/imgs/ml.png" alt="Machine Learning" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>2/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=8jazNUpO3lQ&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&index=2" target="_blank"><img src="../images/imgs/ml.png" alt="Machine Learning" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>3/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=J_LnPL3Qg70&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&index=3" target="_blank"><img src="../images/imgs/ml.png" alt="Machine Learning" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>4/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=vsWrXfO3wWw&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&index=4" target="_blank"><img src="../images/imgs/ml.png" alt="Machine Learning" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>5/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=KfnhNlD8WZI&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&index=5" target="_blank"><img src="../images/imgs/ml.png" alt="Machine Learning" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>6/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=9yl6-HEY7_s&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&index=6" target="_blank"><img src="../images/imgs/ml.png" alt="Machine Learning" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>7/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=9yl6-HEY7_s&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&index=7" target="_blank"><img src="../images/imgs/ml.png" alt="Machine Learning" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>8/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=vsWrXfO3wWw&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&index=4" target="_blank"><img src="../images/imgs/ml.png" alt="Machine Learning" /></a>
                        </div>
                    </div>
                </div>
            </center>
            <br /><br />
            <div className={styles.clickMe}>
                <a href="https://youtu.be/gmvvaobm7eQ" target="_blank">Click Here to Watch the Full Playlist</a>
            </div>

            {/* Videos on AI */}
            <div className={styles.title2} id="artificial-intelligence">
                <span>Start Artificial Intelligence Tutorial Series</span>
                <div className={styles.shortDesc2}>
                    <p>Show your controlled machine strength</p>
                </div>
            </div>

            <center>
                <div className={styles.ccardbox2}>
                    <div className={styles.dcard2}><span className={styles.tag}>1/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=FpvnF7_-tW8&list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe" target="_blank"><img src="../images/imgs/ai.png" alt="Artificial Intelligence" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>2/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=Oth_jnB5lOA&list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&index=2" target="_blank"><img src="../images/imgs/ai.png" alt="Artificial Intelligence" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>3/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=Oth_jnB5lOA&list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&index=3" target="_blank"><img src="../images/imgs/ai.png" alt="Artificial Intelligence" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>4/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=Oth_jnB5lOA&list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&index=4" target="_blank"><img src="../images/imgs/ai.png" alt="Artificial Intelligence" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>5/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=Oth_jnB5lOA&list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&index=5" target="_blank"><img src="../images/imgs/ai.png" alt="Artificial Intelligence" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>6/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=Oth_jnB5lOA&list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&index=6" target="_blank"><img src="../images/imgs/ai.png" alt="Artificial Intelligence" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>7/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=Oth_jnB5lOA&list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&index=7" target="_blank"><img src="../images/imgs/ai.png" alt="Artificial Intelligence" /></a>
                        </div>
                    </div>
                    <div className={styles.dcard2}><span className={styles.tag}>8/8</span>
                        <div className={styles.fpart2}>
                            <a href="https://www.youtube.com/watch?v=Oth_jnB5lOA&list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&index=8" target="_blank"><img src="../images/imgs/ai.png" alt="Artificial Intelligence" /></a>
                        </div>
                    </div>
                </div>
            </center>

            <br /><br />

            <div className={styles.clickMe}>
                <a href="https://www.youtube.com/watch?v=VOaoabf3LPM" target="_blank">Click Here to Watch the Full Playlist</a>
            </div>

            <br /><br /><br />
            <footer>
                <div className={styles.footerContainer}>
                    <div className={styles.leftCol}>
                        <img src="/images/icon/logo - Copy.png" style={{ width: '200px' }} />
                        <div className={styles.logo}></div>
                        <div className={styles.socialMedia}>
                            <a href="#"><img src="/images/icon/fb.png" alt="Facebook" /></a>
                            <a href="#"><img src="/images/icon/insta.png" alt="Instagram" /></a>
                            <a href="#"><img src="/images/icon/tt.png" alt="Twitter" /></a>
                            <a href="#"><img src="/images/icon/ytube.png" alt="YouTube" /></a>
                            <a href="#"><img src="/images/icon/linkedin.png" alt="LinkedIn" /></a>
                        </div>
                        <br />
                        <br />
                        <p className={styles.rightsText}>Copyright © 2023 Created By Team KAMP IV,
                            <br /> All Rights Reserved.</p>
                        <br />
                        <p><img src="/images/icon/location.png" alt="Location" />Indian Institute Of
                            Information Technology, Lucknow <br />Ahmamau, Lucknow - 226002
                        </p>
                        <br />
                        <p><img src="/images/icon/phone.png" alt="Phone" /> +91-1234-567-890<br /><img
                            src="/images/icon/mail.png" alt="Mail" />&nbsp; KAMPIV@gmail.com</p>
                    </div>
                    <div className={styles.rightCol}>
                        <h1 style={{ color: '#fff' }}>Our Newsletter</h1>
                        <div className={styles.border}></div>
                        <br />
                        <p>Enter Your Email to get our News and updates.</p>
                        <form className={styles.newsletterForm}>
                            <input className={styles.txtb} type="email" placeholder="Enter Your Email" />
                            <input className={styles.btn} type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AiCourse