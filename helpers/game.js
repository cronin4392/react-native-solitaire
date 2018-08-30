export const displayTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - (seconds * minutes);
  const remainingSecondsPadded = remainingSeconds.toString().padStart(2, '0');

  return `${minutes}:${remainingSecondsPadded}`;
}