const color = 'green';
const test = {
  color: 'blue',
  getColor: function () {
    const color = 'red';
    console.log(this.color);
  },
};
const getColor = test.getColor;

getColor(); // 'green' or Error in strict mode
test.getColor(); // 'blue'
