import { Button } from './Button'
import { Card } from './Card'

import styles from './ErrorModal.module.css'

export function ErrorModal(props){
  return (
    <div>
      <div onClick={props.onConfirm} className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}