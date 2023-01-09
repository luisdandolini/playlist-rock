import './App.css';

function App() {
  return (
    <div className="container-app">
      <div className='playlist-first'>
        <img className='music' src='/img/music.png' alt='Foto música'/>
        <h2 className='music-name'>Acorda Devinho</h2>
        <p className='band-name'>Banda Rocketseat</p>
        <div>
          <div className='controls'>
            <img src='/img/play-back.png' alt='Ícone voltar música' />
            <img src='/img/play.png' alt='Ícone play música' />
            <img src='/img/play-forward.png' alt='Ícone avançar música' />
          </div>
          <img className='music-time' src='/img/time-music.png' alt='Tempo da música' />
          <div className='music-minutes'>
            <span>03:20</span> <span>00:12</span>
          </div>
        </div>
      </div>

      <div className='playlist-second'>
        <div className='container-second'>
          <img src='/img/music.png' alt='Foto música'/>
          <div>
            <h2>Acorda Devinho</h2>
            <p>Banda Rocketseat</p>
          </div>
        </div>
        <div>
          <div className='controls'>
            <img src='/img/play-back.png' alt='Ícone voltar música' />
            <img src='/img/play.png' alt='Ícone play música' />
            <img src='/img/play-forward.png' alt='Ícone avançar música' />
          </div>
          <img className='music-time-second' src='/img/time-music.png' alt='Tempo da música' />
          <div className='music-minutes-second'>
            <span>03:20</span> <span>00:12</span>
          </div>
        </div>
      </div>

      <div className='playlist-third'>
        <div className='container-second'>
          <img src='/img/music.png' alt='Foto música'/>
          <div>
            <h2>Acorda Devinho</h2>
            <p>Banda Rocketseat</p>
          </div>
        </div>
        <div className='controls'>
            <img src='/img/play-back.png' alt='Ícone voltar música' />
            <img src='/img/play.png' alt='Ícone play música' />
            <img src='/img/play-forward.png' alt='Ícone avançar música' />
          </div>
      </div>
    </div>
  );
}

export default App;
