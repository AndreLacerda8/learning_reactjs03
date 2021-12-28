import ReactDom from 'react-dom'

import { Button } from './Button'
import { Card } from './Card'

import styles from './ErrorModal.module.css'

function Backdrop(props){
  return <div onClick={props.onConfirm} className={styles.backdrop}></div>
}

function ModalOverlay(props){
  return (
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
  )
}

export function ErrorModal(props){
  return (
    <>
      {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
    </>
  )
}