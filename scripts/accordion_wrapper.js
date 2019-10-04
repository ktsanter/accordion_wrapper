function toggleAccordionContents(e) {
  const TOGGLE_DOWN_SYMBOL = '&#9658;';
  const TOGGLE_RIGHT_SYMBOL = '&#9660;';
  var elemContent = e.getElementsByTagName('div')[0];
  var elemToggleSymbol = e.getElementsByTagName('span')[0];
  
  if (elemContent.style.display == 'none') {
    elemContent.style.display = 'block';
    elemToggleSymbol.innerHTML = TOGGLE_RIGHT_SYMBOL;
    window.dispatchEvent(new Event('resize')); // particularly for H5P objects

  } else {
    elemContent.style.display = 'none';
    elemToggleSymbol.innerHTML = TOGGLE_DOWN_SYMBOL;
  }
}
