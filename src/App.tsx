import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Note } from './types/Note';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pressEnter, setPressEnter] = useState(false);
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
          <C.Header>iNotes</C.Header>

          {loading &&
            <div className="loading">⌛ Loading...</div>
          }

          {!loading && notes.length > 0 &&
            <>
              {pressEnter &&
                <>
                  <h1>List of Notes</h1>

                  <ul>
                    {notes.map((item) => (
                      <li>{item.title}</li>
                    ))}
                  </ul>
                </>
              }

              {!pressEnter &&
                  <div className="enterStep">
                    <span>
                      Press <C.Key>enter</C.Key> to start
                    </span>
                  </div>
              }
            </>
          }
        </C.Area>
      </C.Container>
  );
}

export default App;