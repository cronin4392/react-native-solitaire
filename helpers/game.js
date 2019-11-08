if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
    padString = String(typeof padString !== "undefined" ? padString : " ");
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

export const displayTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - 60 * minutes;
  const remainingSecondsPadded = remainingSeconds.toString().padStart(2, "0");

  return `${minutes}:${remainingSecondsPadded}`;
};
