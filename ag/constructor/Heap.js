class Heap {
  /**
   * 构建堆 (默认为)
   * @constructor
   * @param {Function} compareFn 比较函数
   */
  constructor(compareFn) {
    this._heap = [NaN]; // 下标从 1 开始
    this._size = 0;
    this._compare =
      typeof compareFn === 'function' ? compareFn : (a, b) => a - b;
  }

  /**
   * 交换元素
   * @private
   * @param {Number} a 下标 A
   * @param {Number} b 下标 B
   */
  _swap(a, b) {
    [this._heap[a], this._heap[b]] = [this._heap[b], this._heap[a]];
  }

  /**
   * 上浮最后一个子元素至指定位置
   * @private
   */
  _shift() {
    let i = this._size;
    const target = this._heap[i];
    while (i > 1 && target > this._heap[Math.floor(i / 2)]) {
      this._heap[i] = this._heap[Math.floor(i / 2)];
      i = Math.floor(i / 2);
    }
    this._heap[i] = target;
  }

  /**
   * 下沉头元素至指定位置
   * @private
   */
  _heapify() {
    let i = 1;
    let child = 2;
    const target = this._heap[i];
    while (child <= this._size) {
      // 选择更大的子结点
      if (this._heap[child] < this._heap[child + 1]) {
        child++;
      }
      // 到达指定位置
      if (target >= this._heap[child]) {
        break;
      }
      // 下沉交换
      this._heap[i] = this._heap[child];
      // 递归
      i = child;
      child = i * 2;
    }
    this._heap[i] = target;
  }

  /**
   * 插入元素
   * @public
   * @param {Number} val
   */
  push(val) {
    val = Number(val);
    if (!isNaN(val)) {
      this._heap.push(val);
      this._size++;
      this._shift();
    }
    return this;
  }

  /**
   * 删除头元素
   * @public
   */
  pop() {
    const top = this._heap[1];
    const newRoot = this._heap.pop();
    this._heap[1] = newRoot;
    this._size--;
    this._heapify();
    return top;
  }
}

const heap = new Heap();
heap.push(20).push(15).push(2).push(14).push(10).push(21).pop();
