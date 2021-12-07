import { ChangeEvent, useState } from 'react';
import * as C from './styles';
import { Note } from '../../types/Note';
import { FirstLetterUp } from '../../helpers/FirstLetterUp';
import { toggleDone } from '../../services/api';

type Props = {
    data: Note,
    reloadNotes: () => void
}

export const ListItem = ({ data, reloadNotes }: Props) => {
    const [isChecked, setIsChecked] = useState(data.done);

    const handleDone = async (e: ChangeEvent) => {
        await toggleDone(data.id);
        reloadNotes();
    }

    const handleRemove = (id: number) => {
        alert(`Clicou no ${id}`);
    }

    return(
        <C.Container done={data.done}>
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={handleDone}
            />
            <label>{FirstLetterUp(data.title)}</label>
            <span>
                <div onClick={e=>handleRemove(data.id)}>❌</div>
            </span>
        </C.Container>
    );
}