import { Link } from 'react-router-dom';

export function PageHome() {
    return (
        <div id="page-home">
            <h1>Home Page</h1>
            <Link to={'/tasks'}>Tasks</Link>
            <Link to={'/contacts'}>List</Link>
        </div>
    )
}