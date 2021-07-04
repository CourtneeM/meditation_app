const displayController = (() => { 
  const generateTimerDisplay = () => {
    const timerDisplayH2 = document.createElement('h2');

    timerDisplayH2.id = 'timer-display';
    timerDisplayH2.textContent = "00:00";

    return timerDisplayH2;
  }

  const generateModifyTimesContainer = () => {
    const modifyTimesContainer = document.createElement('div');
    const modifyOptions = [1, 5, 10];

    modifyTimesContainer.id = 'modify-times-container';
    
    modifyOptions.forEach(option => {
      const modifyTimeContainer = document.createElement('div');
      const incrementBtn = document.createElement('i');
      const decrementBtn = document.createElement('i');
      const timeAmount = document.createElement('p');

      modifyTimeContainer.classList.add('modify-time-container');
      incrementBtn.classList.add('incremenet-time-btn');
      decrementBtn.classList.add('decrement-time-btn');
      timeAmount.classList.add('modify-time-amount');

      timeAmount.textContent = option;

      [incrementBtn, timeAmount, decrementBtn].forEach(el => modifyTimeContainer.appendChild(el));
      modifyTimesContainer.appendChild(modifyTimeContainer);
    });

    return modifyTimesContainer;
  }

  const generateQuickSelectTimeContainer = () => {
    const quickSelectTimeContainer = document.createElement('div');
    const quickSelectOptions = [5, 10, 15];

    quickSelectTimeContainer.id = 'quick-select-time-container';

    quickSelectOptions.forEach(option => {
      const quickSelectTime = document.createElement('p');
      
      quickSelectTime.classList.add('quick-select-time');
      quickSelectTime.textContent = option;

      quickSelectTimeContainer.appendChild(quickSelectTime);
    });

    return quickSelectTimeContainer;
  }

  const generateSoundEffectsContainer = () => {
    const soundEffectsContainer = document.createElement('div');
    const soundEffectOptions = ['effect1', 'effect2', 'effect3', 'effect4'];

    soundEffectsContainer.id = 'sound-effects-container';

    soundEffectOptions.forEach(option => {
      const soundEffectContainer = document.createElement('div');

      soundEffectContainer.id = option;
      soundEffectContainer.classList.add('sound-effect');
      // add sound element and necessary attributes;

      soundEffectsContainer.appendChild(soundEffectContainer);
    });

    return soundEffectsContainer;
  }

  const generateStartBtn = () => {
    const startBtn = document.createElement('button');

    startBtn.id = 'start-btn';
    startBtn.textContent = 'Start';

    return startBtn;
  }

  const initialRender = () => {
    const appContainer = document.createElement('div');

    appContainer.id = 'app-container';

    [generateTimerDisplay(), generateModifyTimesContainer(), generateQuickSelectTimeContainer(),
     generateSoundEffectsContainer(), generateStartBtn()].forEach(el => appContainer.appendChild(el));
    
    document.querySelector('body').appendChild(appContainer);
  };

  return { initialRender }
})();

export default displayController;
