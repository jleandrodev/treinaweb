import styles from './TextInput.module.css'

export default function TextInput(props) {
  return (
    <textarea className={styles['input']} { ...props } />
  )
}