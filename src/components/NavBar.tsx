import NavButton from './elements/NavButton';
import './elements/NavButton.css';
export default function NavBar() {
    return (
        <nav>
            <ul>
                <NavButton label={'Home'} onClick={function (): void {
                    throw new Error('Function not implemented.');
                } } isActive={false}></NavButton>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/clients">Clients</a></li>
            </ul>
        </nav>
    );
}