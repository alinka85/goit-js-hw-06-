const inputRef = document.querySelector('#font-size-control');

const inputRefSize = (event) => {
    const textSize = document.querySelector('#text');
     textSize.style.fontSize = `${event.currentTarget.value}px`;
   
    }

inputRef.addEventListener('input',inputRefSize);

