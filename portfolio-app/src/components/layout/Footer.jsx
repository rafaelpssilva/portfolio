import "./Footer.css";
// import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://wa.me/5511945232656">WhatsApp</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rafael-silva-pe/">
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://github.com/rafaelpssilva">GitHub</a>
                </li>
            </ul>
            <div className="footer-cv">
                <a href="https://drive.google.com/file/d/1QuxWqArOoCz9WXMADwUQyj4p0r10bb_v/view">
                    Currículo
                </a>
            </div>
        </footer>
    );
}

export default Footer;
