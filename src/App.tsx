import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus obcaecati esse ad enim inventore quaerat! Nobis expedita dolor fugiat? Tempora doloremque laborum at illo corporis suscipit ex, id quia consectetur.
        </main>
      </div>
    </>
  );
}