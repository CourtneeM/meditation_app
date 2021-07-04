import './styles/style.css';
import displayController from "./modules/display_controller";

const songs = [];
let currentTimeInSeconds = 0;

const convertTime = currentTimeInSeconds => {
  return `${currentTimeInSeconds}`;
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
  const modifyTime = (() => {
    const incrementTime = modifyTimeAmount => currentTimeInSeconds += modifyTimeAmount * 60;
    
    const decrementTime = modifyTimeAmount => {
      if (currentTimeInSeconds - modifyTimeAmount * 60 < 0) return currentTimeInSeconds = 0;
      currentTimeInSeconds -= modifyTimeAmount * 60;
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

  const startMeditation = () => {
    document.querySelector('#start-btn').addEventListener('click', () => {
      
    });
  }
})();

