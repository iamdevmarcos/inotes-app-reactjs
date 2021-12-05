import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Note } from './types/Note';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:4000/notes");
    const json = await res.json();
    setNotes(json.notes);
    setLoading(false);
  }
  
  return (
    <C.Container>
      <C.Area>
        <C.Header>iNotes App</C.Header>

        {loading &&
          <div className="loading">
          <AiOutlineLoading3Quarters /> Loading...</div>
        }

        {!loading && notes.length > 0 &&
          <>  
            <h1>List of Notes</h1>

            <ul>
              {notes.map((item) => (
                <li>{item.title}</li>
              ))}
            </ul>
          </>
        }
      </C.Area>
    </C.Container>
  );
}

export default App;