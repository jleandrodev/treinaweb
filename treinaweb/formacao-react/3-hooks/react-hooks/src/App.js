import './App.css';
import NewVideoForm from './ui/components/NewVideoForm';
import VideoList from './ui/components/VideoList';

function App() {
  return (
    <div className="App">
      <NewVideoForm />
      <VideoList />
    </div>
  );
}

export default App;
