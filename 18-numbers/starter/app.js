const updateCount = (element) => {
  let counter = 0;
  const increaseCount = setInterval(() => {
    const value = element.dataset.value;
    const increment = Math.ceil(value / 1000);
    counter += increment;
    element.textContent = `${counter}+`;
    if (counter >= value) {
      clearInterval(increaseCount);
    }
  }, 1);
};

Array.from(document.querySelectorAll('.number'), (span) => {
  updateCount(span);
});
