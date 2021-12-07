const verifyErrors = (json: any) => {
    if(json.error !== '' && json.error !== undefined) {
        alert(json.error);
    }

    console.log(json);
}

export const insertNote = async (title: string) => {
    const res = await fetch('http://localhost:4000/note', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, categoryId: 1 })
    });
    const json = await res.json();

    verifyErrors(json);
}

export const toggleDone = async (id: number) => {
    const res = await fetch(`http://localhost:4000/note/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });
    const json = await res.json();

    verifyErrors(json);
}

export const removeNote = async (id: number) => {
    const res = await fetch(`http://localhost:4000/note/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });
    const json = await res.json();

    verifyErrors(json);
}