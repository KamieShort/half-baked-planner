import React, { useEffect, useState } from 'react';
import { useEntries } from '../context/PlannerContext';

export default function EditForm({ entry }) {
  const [editing, setEditing] = useState(false);
  const { edit, setEdit, handleEdit } = useEntries();

  let conditionalContent;

  if (editing) {
    conditionalContent = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEditing(false);

          handleEdit(edit);
        }}
      >
        <input
          value={edit.content}
          onChange={(e) =>
            setEdit({
              ...entry,
              content: e.target.value,
            })
          }
        />
        <button type="submit">Save</button>
      </form>
    );
  } else {
    conditionalContent = (
      <div>
        <button
          type="button"
          onClick={() => {
            setEditing(true);
            setEdit(entry);
          }}
        >
          Edit
        </button>
      </div>
    );
  }

  return conditionalContent;
}
