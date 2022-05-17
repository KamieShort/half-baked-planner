import React, { useState } from 'react';
import { useEntries } from '../context/PlannerContext';

export default function EditForm({ entry }) {
  const [editing, setEditing] = useState(false);
  const { edit, setEdit } = useEntries();

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
          value={entry.edit}
          onChange={(e) => setEdit({ content: e.target.value })}
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
