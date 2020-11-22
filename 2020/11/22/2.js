const input3 = document.getElementById('input-3');
const msg3 = document.getElementById('message-3');
let data3 = {
  message: 'initial message 3',
};

input3.value = data3.message;
msg3.textContent = data3.message;
data3 = new Proxy(data3, {
  get(target, key, receiver) {
    return Reflect.get(...arguments);
  },
  set(target, key, value, receiver) {
    msg3.textContent = value;
    input3.value = value;
    return Reflect.set(...arguments);
  },
});

input3.addEventListener('keyup', (e) => {
  data3.message = e.target.value;
});
