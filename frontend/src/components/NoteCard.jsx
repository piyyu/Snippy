const NoteCard = ({title, content, onClick}) => {
  return (
    <div className="border p-4 rounded shadow" onClick={onClick} >
      <div>{title}</div>
      <div>{content}</div>
    </div>
  )
}

export default NoteCard;