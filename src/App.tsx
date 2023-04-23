import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';
import Logo from './tetrobyte-logo.png';


function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  return (
    <div>
      <div className='logocontainer'>
      <img className='logo' src={Logo} alt="" />

      </div>
      <div className="app">
        <Board currentBoard={board} />
        <div className="controls">
          <h2>Score: {score}</h2>
          {isPlaying ? (
            <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
          ) : (
            <button onClick={startGame}>New Game</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
