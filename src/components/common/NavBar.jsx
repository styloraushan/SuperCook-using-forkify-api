import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Menu borderless fixed="top" style={styles.navbar}>
            <Menu.Item>
                <h2 style={styles.title}>Recipe Finder</h2>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item as={Link} to="/" style={styles.navItem}>
                    Home
                </Menu.Item>
                <Menu.Item as={Link} to="/recipes" style={styles.navItem}>
                    Recipes
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

const styles = {
    navbar: {
        background: 'linear-gradient(90deg, #1e3c72, #2a5298)', // Blue gradient
        padding: '12px 20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        color: 'white',
        margin: 0,
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navItem: {
        color: 'white',
        fontSize: '18px',
        fontWeight: '500',
        padding: '10px 15px',
        transition: '0.3s ease-in-out',
    },
};

export default NavBar;
