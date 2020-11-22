const input2 = document.getElementById('input-2');
const msg2 = document.getElementById('message-2');
const data2 = {
  message: 'initial message 2',
};

input2.value = data2.message;
msg2.textContent = data2.message;
Object.defineProperty(data2, 'message', {
  set(newVal) {
    msg2.textContent = newVal;
    input2.value = newVal;
  },
  get() {
    return msg2.textContent;
  },
});

input2.addEventListener('keyup', (e) => {
  data2.message = e.target.value;
});
