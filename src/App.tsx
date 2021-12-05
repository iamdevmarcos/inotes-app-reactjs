import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Note } from './types/Note';
import { ListItem } from './components/ListItem';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pressEnter, setPressEnter] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      switch(e.code) {
        case 'Enter':
          setPressEnter(true);
          break;
      }
    });
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
                  {notes.map((item, index) => (
                    <ListItem
                      key={index}
                      data={item}
                    />
                  ))
                  }
                </>
              }

              {!pressEnter &&
                  <div className="enterStep">
                    <span>
                      Press <C.Key onClick={e=>setPressEnter(true)}>enter</C.Key> to start
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