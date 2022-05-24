import styles from './Header.css';
import { useEntries } from '../../context/PlannerContext';

export default function Header() {
  const { entries } = useEntries();
  return (
    <header className={styles.header}>
      <h2>My Planner</h2>

      <span>{entries.length} Item(s) Left</span>
    </header>
  );
}
