import AddEntry from '../components/Planner/AddEntry';
import Entries from '../components/Planner/EntryList';
import styles from './Planner.css';
import { useEntries } from '../context/PlannerContext';

export default function Planner() {
  const { handleDelete } = useEntries();
  return (
    <main className={styles.main}>
      <AddEntry />

      <Entries remove={handleDelete} />
    </main>
  );
}
