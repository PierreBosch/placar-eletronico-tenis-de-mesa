import React from 'react';
import { Link } from "react-router-dom";
import { Container, Menu } from './styles';

export default function Home() {
    return (
        <Container>
            <Menu>
                <ul>
                    <li>
                        <Link to="/individual">Individual</Link>
                    </li>
                    <li>
                        <Link to="/doubles">Duplas</Link>
                    </li>
                </ul>
            </Menu>
        </Container>
    );
}
