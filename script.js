
const allInputBoxes = Array.from(document.querySelectorAll('.code'));

function isDigit(character) {
	return /^[0-9]$/.test(character);
}

function handleKeyDown(event, currentIndex) {
	const currentBox = allInputBoxes[currentIndex];

	if(event.key === 'Backspace')
	{
		event.preventDefault();
		if(currentBox.value !==""){
			clearBox(currentBox);
		}
		else{
			focusPreviousBox(currentIndex);
			if(currentIndex-1 >= 0)
			  {
				  clearBox(allInputBoxes[currentIndex - 1])
			  }
        }
    }
}

function handleInput(event, currentIndex){

	const currentBox = allInputBoxes[currentIndex];
	const typedCharacter = event.data;

	if(!typedCharacter || !isDigit(typedCharacter))
	{
		currentBox.value = "";
		return;
    }
       currentBox.value = typedCharacter.slice(-1);
	   currentBox.classList.add('filled');

	focusNextBox(currentIndex)
}


function clearBox(inputBox){
	inputBox.value = "";
	inputBox.classList.remove('filled');
}

function focusPreviousBox(currentIndex) {
	const previousIndex = currentIndex - 1;
	if(previousIndex >= 0)
	{
	  allInputBoxes[previousIndex].focus();
	}
}

function  focusNextBox(currentIndex) {
	const nextIndex = currentIndex +1;
	if(nextIndex< allInputBoxes.length){
       allInputBoxes[nextIndex].focus();
	}
}

function handleClick(currentIndex) {
	const currentBox = allInputBoxes[currentIndex];
	currentBox.value = '';
	currentBox.classList.remove('filled');
}

allInputBoxes.forEach(function (inputBox , index) {

	inputBox.addEventListener('keydown', function (event) {
		handleKeyDown(event, index);
	})

	inputBox.addEventListener('input', function (event) {
		handleInput(event, index)
	})

	inputBox.addEventListener('click', function () {
		handleClick(index);
	})
})

allInputBoxes[0].focus();








