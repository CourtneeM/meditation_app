import './styles/style.css';
import displayController from "./modules/display_controller";

const soundEffects = {
  rain: '../dist/sounds/344430__babuababua__light-rain.mp3',
  fire: '../dist/sounds/17554__dynamicell__fire-embers-large-campfire.mp3',
  ocean: '../dist/sounds/48412__luftrum__oceanwavescrushing.mp3',
  coffeeShop: '../dist/sounds/327594__janevdmerwe1995__ambience-of-coffee-shop.mp3'
};
let selectedSound = 'rain';

const SECONDS_IN_A_MINUTE = 60;
let currentTimeInSeconds = 300;

const convertTime = currentTimeInSeconds => {
  let minutes = currentTimeInSeconds >= SECONDS_IN_A_MINUTE ? String(Math.floor(currentTimeInSeconds / SECONDS_IN_A_MINUTE)) : String(0);
  let seconds = String(Math.round(currentTimeInSeconds % SECONDS_IN_A_MINUTE));

  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}

const setTimerDisplay = () => {
  const newTimerDisplay = convertTime(currentTimeInSeconds);
  displayController.updateTimerDisplay(newTimerDisplay);
}

const initialRender = (() => {
  displayController.initialRender();
  setTimerDisplay();
})();

const eventHandler = (() => {
  const modifyTimeListener = (() => {
    const incrementTime = modifyTimeAmount => currentTimeInSeconds += modifyTimeAmount * SECONDS_IN_A_MINUTE;
    
    const decrementTime = modifyTimeAmount => {
      if (currentTimeInSeconds - modifyTimeAmount * SECONDS_IN_A_MINUTE < 0) return currentTimeInSeconds = 0;
      currentTimeInSeconds -= modifyTimeAmount * SECONDS_IN_A_MINUTE;
    }
    
    [...document.querySelectorAll('.modify-time-container')].forEach(container => {
      container.addEventListener('click', e => {
        let modifyTimeAmount;

        if (e.target.classList.contains('increment-time-btn')) {
          modifyTimeAmount = e.target.parentElement.querySelector('.modify-time-amount').textContent;
          incrementTime(modifyTimeAmount);
          setTimerDisplay(currentTimeInSeconds);
        }
        
        if (e.target.classList.contains('decrement-time-btn')) {
          modifyTimeAmount = e.target.parentElement.querySelector('.modify-time-amount').textContent;
          decrementTime(modifyTimeAmount);
          setTimerDisplay(currentTimeInSeconds);
        }
      });
    });
  })();

  const setQuickTimeListener = (() => {
    [...document.querySelectorAll('.quick-select-time')].forEach(quickTime => {
      quickTime.addEventListener('click', e => {
        let quickTimeAmount = e.target.textContent;
        currentTimeInSeconds = quickTimeAmount * SECONDS_IN_A_MINUTE;
        setTimerDisplay(currentTimeInSeconds);
      });
    });
  })();

  const setSoundEffectListener = (() => {
    const soundEffectContainers = [...document.querySelectorAll('.sound-effect')];
    soundEffectContainers.forEach(soundEffect => {
      soundEffect.addEventListener('click', () => {
        soundEffectContainers.forEach(soundEffect => soundEffect.classList.remove('selected-sound'));
        soundEffect.classList.add('selected-sound');

        switch (soundEffect.id) {
          case 'rain-sound': return selectedSound = 'rain';
          case 'fire-sound': return selectedSound = 'fire';
          case 'ocean-sound': return selectedSound = 'ocean';
          case 'coffee-shop-sound': return selectedSound = 'coffeeShop';
        }
      });
    });
  })();

  const startMeditation = (() => {
    document.querySelector('#start-btn').addEventListener('click', () => {
      const audio = new Audio(soundEffects[selectedSound]);
      audio.play();
      audio.loop = true;
      
      const body = document.querySelector('body');
      body.style.pointerEvents = 'none';

      const countdown = setInterval(() => {
        if (currentTimeInSeconds <= 0) {
          clearInterval(countdown);
          audio.pause();

          body.style.pointerEvents = 'auto';
        } else { 
          currentTimeInSeconds -= 1;
          setTimerDisplay();
        }
      }, 1000);
    });
  })();
})();

