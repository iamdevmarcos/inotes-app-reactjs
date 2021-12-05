import { ChangeEvent, useState } from 'react';
import * as C from './styles';
import { Note } from '../../types/Note';

type Props = {
    data: Note
}

export const ListItem = ({ data }: Props) => {
    const [isChecked, setIsChecked] = useState(data.done);

    const handleChecked = (e: ChangeEvent) => {
        setIsChecked(prevState => !prevState);
    }

    return(
        <C.Container>
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={handleChecked}
            />
            <label>{data.title}</label>
        </C.Container>
    );
}