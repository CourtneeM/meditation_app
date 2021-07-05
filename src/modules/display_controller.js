const displayController = (() => { 
  const generate = (() => {
    const timerDisplay = () => {
      const timerDisplayContainer = document.createElement('div');
      const timerDisplayH2 = document.createElement('h2');
  
      timerDisplayContainer.id = 'timer-display-container';
      timerDisplayH2.id = 'timer-display';
  
      [timerDisplayH2, modifyTimesContainer()].forEach(el => timerDisplayContainer.appendChild(el));
      return timerDisplayContainer;
    }

    const modifyTimesContainer = () => {
      const modifyTimesContainer = document.createElement('div');
      const modifyOptions = [1, 5, 10];
  
      modifyTimesContainer.id = 'modify-times-container';
      
      modifyOptions.forEach(option => {
        const modifyTimeContainer = document.createElement('div');
        const incrementBtn = document.createElement('i');
        const decrementBtn = document.createElement('i');
        const timeAmount = document.createElement('p');
  
        modifyTimeContainer.classList.add('modify-time-container');
        incrementBtn.classList.add('increment-time-btn', 'fas', 'fa-plus');
        decrementBtn.classList.add('decrement-time-btn', 'fas', 'fa-minus');
        timeAmount.classList.add('modify-time-amount');
  
        timeAmount.textContent = option;
  
        [incrementBtn, timeAmount, decrementBtn].forEach(el => modifyTimeContainer.appendChild(el));
        modifyTimesContainer.appendChild(modifyTimeContainer);
      });
  
      return modifyTimesContainer;
    }

    const quickSelectTimeContainer = () => {
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

    const soundEffectsContainer = () => {
      const soundEffectsContainer = document.createElement('div');
      const soundEffectOptions = ['rain', 'fire', 'ocean', 'coffee-shop'];
  
      soundEffectsContainer.id = 'sound-effects-container';
  
      soundEffectOptions.forEach(option => {
        const soundEffectContainer = document.createElement('div');
  
        soundEffectContainer.id = `${option}-sound`;
        soundEffectContainer.classList.add('sound-effect', 'fas');

        switch (option) {
          case 'rain':
            soundEffectContainer.classList.add('selected-sound', 'fa-cloud-showers-heavy');
            break;
          case 'fire':
            soundEffectContainer.classList.add('fa-fire-alt');
            break;
          case 'ocean':
            soundEffectContainer.classList.add('fa-water')
            break;
          case 'coffee-shop':
            soundEffectContainer.classList.add('fa-coffee');
            break;
        }
  
        soundEffectsContainer.appendChild(soundEffectContainer);
      });
  
      return soundEffectsContainer;
    }

    const startBtn = () => {
      const startBtn = document.createElement('button');
  
      startBtn.id = 'start-btn';
      startBtn.textContent = 'Start';
  
      return startBtn;
    }

    const credits = () => {
      const creditsContainer = document.createElement('div');
      const p = document.createElement('p');
      const soundURLs = { rain: 'https://freesound.org/people/babuababua/sounds/344430/',
                         fire: 'https://freesound.org/people/Dynamicell/sounds/17554/',
                         ocean: 'https://freesound.org/people/Luftrum/sounds/48412/',
                         'coffee shop': 'https://freesound.org/people/JanevdMerwe1995/sounds/327594/'};

      
      creditsContainer.id = 'credits-container';
      p.textContent = 'Sounds';

      creditsContainer.appendChild(p);

      for (let name in soundURLs) {
        const a = document.createElement('a');

        a.textContent = name;
        a.setAttribute('href', soundURLs[name]);
        a.setAttribute('target', '_blank');
        creditsContainer.appendChild(a);
      }

      return creditsContainer;
    }

    return { timerDisplay, modifyTimesContainer, quickSelectTimeContainer, soundEffectsContainer, startBtn, credits }
  })();

  const initialRender = () => {
    const appContainer = document.createElement('div');
    const timerDisplay = generate.timerDisplay();
    const quickSelectTimeContainer = generate.quickSelectTimeContainer();
    const soundEffectsContainer = generate.soundEffectsContainer();
    const startBtn = generate.startBtn();
    const creditsContainer = generate.credits();

    appContainer.id = 'app-container';

    [timerDisplay, quickSelectTimeContainer, soundEffectsContainer, startBtn, creditsContainer]
    .forEach(el => appContainer.appendChild(el));
    
    document.querySelector('body').appendChild(appContainer);
  };

  const updateTimerDisplay = newTimerDisplay => {
    document.querySelector('#timer-display').textContent = newTimerDisplay;
  }

  return { initialRender, updateTimerDisplay }
})();

export default displayController;
