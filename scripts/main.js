//--------------------------------------------------------------------------
// accordion wrapper embed generator
//--------------------------------------------------------------------------
// TODO:
//--------------------------------------------------------------------------
const app = function () {
  const ACCORDION_WRAPPER_CODE_URL = 'https://drive.google.com/uc?id=1tTJ69DYuDyqVTIwkYuUFfHPC9hJoh66z';
  
	const page = {};
  
	const settings = {
    clipboard: null
  };
	  
	//---------------------------------------
	// get things going
	//----------------------------------------
	function init () {
		page.body = document.getElementsByTagName('body')[0];
    page.embedComplete = document.getElementById('embedComplete');
    page.description = document.getElementById('description');
    page.embedContents = document.getElementById('contents');
    page.preview = document.getElementById('preview');
    
    showPreview('');
    document.getElementById('embedIcon').addEventListener('click', makeEmbedCode);
    document.getElementById('description').addEventListener('input', clearEmbed);
    document.getElementById('contents').addEventListener('input', clearEmbed);
  }
  
	//-----------------------------------------------------------------------------
	// page rendering
	//-----------------------------------------------------------------------------
  function showEmbedComplete(show) {
    if (show) {
      page.embedComplete.style.display = 'inline';
    } else {
      page.embedComplete.style.display = 'none';
    }
  }
  
  //--------------------------------------------------------------------------
  // handlers
	//--------------------------------------------------------------------------
  function makeEmbedCode() {
    var embedCode = '';
    
    embedCode += '<div>';
    embedCode += '<script type="text/javascript" src="' + ACCORDION_WRAPPER_CODE_URL + '"></script>';
    embedCode += '<span style="cursor: pointer"; onclick="toggleAccordionContents(this.parentNode)"> &#9658; </span>';
    embedCode += page.description.value;
    embedCode += '<div style="display:none;">';
    embedCode += page.embedContents.value;
    embedCode += '</div>';
    embedCode += '</div>';
    
    copyToClipboard(embedCode);
    showPreview(embedCode);

    showEmbedComplete(true);
  }
  
  function copyToClipboard(txt) {
    if (!settings.clipboard) settings.clipboard = new ClipboardCopy(page.body, 'plain');

    settings.clipboard.copyToClipboard(txt);
	}	
  
  function showPreview(html) {
    if (html == '') {
      html = '&nbsp;';
      page.preview.style.backgroundColor = '';
    } else {
      page.preview.style.backgroundColor = 'white';
    }
    page.preview.innerHTML = html;
  }
  
  function clearEmbed() {
    showEmbedComplete(false);
    showPreview('');
  }
	//---------------------------------------
	// utility functions
	//----------------------------------------  
  
	return {
		init: init
 	};
}();