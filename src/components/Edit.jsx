import React, { useState } from 'react';

export default function EditForm({ entry, edit }) {
  const [editing, setEditing] = useState(false);

  let conditionalContent;

  if (editing) {
    conditionalContent = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEditing(false);
        }}
      >
        <input
          type="text"
          value={entry.content}
          onChange={(e) => edit({ ...entry, content: e.target.value })}
        />
        <button type="submit">Save</button>
      </form>
    );
  } else {
    conditionalContent = (
      <div>
        <button type="button" onClick={() => setEditing(true)}>
          Edit
        </button>
      </div>
    );
  }

  return conditionalContent;
}
