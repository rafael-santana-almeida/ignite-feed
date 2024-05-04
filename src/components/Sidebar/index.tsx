import { PencilLine } from 'phosphor-react';
import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9rZW1vbnxlbnwwfHwwfHx8MA%3D%3D"
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar} 
          src="https://avatars.githubusercontent.com/u/46360769?v=4"
        />

        <strong>Rafael Santana</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}