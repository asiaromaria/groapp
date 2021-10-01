import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/Register'>
                        <li>Register</li>
                    </Link>
                    <Link to='/Login'>
                        <li>Login</li>
                    </Link>
                    <Link to='/Savings'>
                        <li>Savings</li>
                    </Link>
                    <Link to='/Credithistory'>
                        <li>Credit History</li>
                    </Link>
                </ul>
            </nav>
         );
    }
}
 
export default NavBar;