import './App.css';
import NewVideoForm from './ui/components/NewVideoForm';
import VideoList from './ui/components/VideoList';
import VideoPlayer from './ui/components/VideoPlayer';

function App() {
  return (
    <div className="App">
      <NewVideoForm />
      <VideoPlayer />
      <VideoList />
    </div>
  );
}

export default App;
