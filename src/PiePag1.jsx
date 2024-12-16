import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSpotify, FaTiktok } from "react-icons/fa";
import "./Estilos.css";
export default function PiePag1() {
    return (
        <footer className="footer-container">
            <p>© {new Date().getFullYear()} Realizado por: Ivette Sharon Lima Guachalla</p>
            <p>Hecho con: Vite + React y Reactstrap</p>
            <div className="social-icons">
                <a
                    href="https://www.facebook.com/forkingandcountry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://x.com/4kingandcountry?lang=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaTwitter />
                </a>
                <a
                    href="https://www.instagram.com/forkingandcountry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.youtube.com/@ForKingAndCountry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaYoutube />
                </a>
                <a
                    href="https://open.spotify.com/intl-es/artist/3sDbKMebVH2VYcRSl7u1VC?si=sISVwndBSwWR1eftFWAuhg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaSpotify />
                </a>
                <a
                    href="https://www.tiktok.com/@forkingandcountry?lang=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaTiktok />
                </a>
            </div>
        </footer>
    );
}