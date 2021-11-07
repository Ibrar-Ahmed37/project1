import React from 'react'
import {DropdownButton,Dropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import "./css/Navbar.css";
import i18n from "i18next";

const Navbar = ({
    selectLanguage
}) => {
    
    return (
        <nav class="navbar navbar-light bg-light justify-content-between px-3">
            <a class="navbar-brand">Navbar</a>

            <DropdownButton id="dropdown-basic-button" title="Language">
                <Dropdown.Item onClick={() => selectLanguage('en')}>en</Dropdown.Item>
                <Dropdown.Item onClick={() => selectLanguage('de')}>De</Dropdown.Item>
            </DropdownButton>
        </nav>
    )
}

export default Navbar
