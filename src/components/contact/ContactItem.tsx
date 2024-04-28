import { ListGroupItem, Image } from 'react-bootstrap';
import { IContact } from '../../types/Contact';

type propTypes = Readonly<IContact>

export function ContactItem(props: propTypes) {
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <Image width={40} src={props.avatar} roundedCircle />
            <p className='mb-0 ms-3'>{props.name}</p>
        </ListGroupItem>
    )
}
