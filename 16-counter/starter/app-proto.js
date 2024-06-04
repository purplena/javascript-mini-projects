function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBth = element.querySelector('.reset');
  this.increaseBth = element.querySelector('.increase');
  this.decreaseBth = element.querySelector('.decrease');
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = this.value;

  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increaseBth.addEventListener('click', this.increase);
  this.decreaseBth.addEventListener('click', this.decrease);
  this.resetBth.addEventListener('click', this.reset);
}

Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check your selector: '${selection}'. No such element exists`
  );
}
