import './styles/style.css';
import displayController from "./modules/display_controller";

const songs = [];
const SECONDS_IN_A_MINUTE = 60;
let currentTimeInSeconds = 0;

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
    [...document.querySelectorAll('.sound-effect')].forEach(soundEffect => {
      // set up sound effects first
    });
  })();

  const startMeditation = (() => {
    document.querySelector('#start-btn').addEventListener('click', () => {
      const countdown = setInterval(() => {
        currentTimeInSeconds -= 1;
        setTimerDisplay();

        if (currentTimeInSeconds <= 0) clearInterval(countdown);
      }, 1000);
    });
  })();
})();

