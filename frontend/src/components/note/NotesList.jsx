const NotesList = ({notes}) => {
  return (
    <div className="p-4 space-y-4">
      {notes.length === 0 ? (
        <div>No notes found</div>
      ) : (
        notes.map((note) => (
          <div key={note._id} className="border p-4 rounded shadow">
            <h2 className="font-bold text-xl">{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
