import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Note } from './types/Note';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { api } from './services/api';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [pressEnter, setPressEnter] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);

  const [activePlus, setActivePlus] = useState(true);

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      switch(e.code) {
        case 'Enter':
          setPressEnter(true);
        break;

        case 'Equal':
        case 'NumpadAdd':
          setActivePlus(false);
        break;

        case 'Minus':
        case 'NumpadSubtract':
          setActivePlus(true);
        break;
      }
    });
  }, []);

  const loadNotes = async () => {
    try {
      setLoading(true);

      const json = await api.getAllNotes();
      setNotes(json.notes);

      setLoading(false);
    } catch(e) {
      setLoading(false);
      setErrorMessage("Tente novamente mais tarde...");
    }
    
  }
 
  return (
      <C.Container>

        {pressEnter &&
          <C.PlusButton>
            Press
            <C.Key onClick={e=>setActivePlus((prevState) => !prevState)}>
              {activePlus?'+':'-'}
            </C.Key>
          </C.PlusButton>
        }

        <C.Area>
          <C.Header>iNotes</C.Header>

          {loading &&
            <div className="loading">⌛ Loading...</div>
          }

          {!loading && notes.length == 0 &&
            <div className="loading">{errorMessage}</div>
          }

          {!loading && notes.length > 0 &&
            <>
              {pressEnter &&
                <>
                  {!activePlus &&
                    <AddArea reloadNotes={loadNotes} />
                  }

                  {notes.map((item, index) => (
                      <ListItem
                        key={index}
                        data={item}
                        reloadNotes={loadNotes}
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

        {pressEnter && !loading &&
          <C.Footer>
            Made with 🤍 by <a href="https://github.com/iamdevmarcos" target="_blank">Marcos Andre</a>
          </C.Footer>
        }
      </C.Container>
  );
}

export default App;