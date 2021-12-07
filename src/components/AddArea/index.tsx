import { useState, KeyboardEvent } from 'react';
import * as C from './styles';
import { api } from '../../services/api';

type Props = {
    reloadNotes: () => void
}

export const AddArea = ({ reloadNotes }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleEnter = async (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            await api.insertNote(inputText);
            reloadNotes();
        }
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="type something"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleEnter}
            />
        </C.Container>
    );
}