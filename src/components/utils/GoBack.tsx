import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export function GoBack() {
    return (
        <Link to={'/'}>
            <Button variant="danger">
                <i className="fa-solid fa-arrow-left me-2"></i> Go Back
            </Button>
        </Link>
    )

}