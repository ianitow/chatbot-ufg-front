function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function updateScroll(containerRef, ms = 5) {
  setTimeout(() => {
    containerRef.value.scrollTop = containerRef.value.scrollHeight;
  }, ms);
}

export { sleep, updateScroll };
