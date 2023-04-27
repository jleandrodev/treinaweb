import './App.css';
import NewVideoForm from './ui/components/NewVideoForm';
import VideoList from './ui/components/VideoList';
import VideoPlayer from './ui/components/VideoPlayer';
import {VideoContext} from './data/video/VideoContext'

function App() {
  return (
    <div className="App">
      <VideoContext>
        <NewVideoForm />
        <VideoPlayer />
        <VideoList />
      </VideoContext>
    </div>
  );
}

export default App;
