if (typeof window !== "undefined") {
  window.Clipboard = ((window, document, navigator) => {
    let textArea, copy;

    const isOS = () => {
      return navigator.userAgent.match(/ipad|iphone/i);
    };

    const createTextArea = (text) => {
      textArea = document.createElement("textArea");
      textArea.value = text;
      document.body.appendChild(textArea);
    };

    const selectText = () => {
      let range, selection;

      if (isOS()) {
        range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.select();
      }
    };

    const copyToClipboard = () => {
      document.execCommand("copy");
      document.body.removeChild(textArea);
    };

    copy = (text) => {
      createTextArea(text);
      selectText();
      copyToClipboard();
    };

    return {
      copy: copy,
    };
  })(window, document, navigator);
}

const copy = (string) => window.Clipboard.copy(string);

export default copy;
