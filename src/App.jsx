import './App.css';
import LikeImageHOC from './components/HOC/LikeImageHOC';
import LikePostHOC from './components/HOC/LikePostHOC';
import LikeImage from './components/RenderProps/LikeImage';
import LikePost from './components/RenderProps/LikePost';
import Render from './components/RenderProps/Render';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      
      <h4>Using HOC</h4>
      <div className='buttons'>
        <LikePostHOC/>
        <LikeImageHOC/>
      </div>

      <h4>Using Render Props</h4>
      <div className="buttons">
        <Render render={(counter, handleCount) => (
          <LikeImage handleLikeImageCount={handleCount} likeImageCounter={counter}/>
        )}/>
        <Render render={(counter, handleCount) => (
          <LikePost handlePostCount={handleCount} likePostCounter={counter}/>
        )}/>
      </div>

    </div>
  );
}

export default App;
