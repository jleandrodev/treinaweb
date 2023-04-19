import styles from './App.module.css';
import Tweet from './components/data-display/Tweet/Tweet';
import TextInput from './components/inputs/TextInput/TextInput';
import Index from './pages';

const tweet = {
  date: 'há 5 dias',
  text: 'Meu tweet',
  user: {
    name: 'Jhonatan Ozório',
    username: '@jleandro',
    picture: 'https://github.com/jleandrodev.png'
  }
}

function App() {
  return (
    <div className={styles['app-container']}>
      <Index />
      <TextInput />
      <Tweet tweet={tweet} />
    </div>
  );
}

export default App;
