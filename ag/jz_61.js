function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function Serialize(pRoot) {
  if (!pRoot) {
    return '#!';
  }

  let ret = '';
  const queue = [];
  queue.push(pRoot);

  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      ret += `${node.val}!`;
      queue.push(node.left);
      queue.push(node.right);
    } else {
      ret += '#!';
    }
  }

  return ret;
}

function Deserialize(s) {
  if (!s || s.startsWith('#')) {
    return null;
  }

  // root
  const queue = [];
  const index = s.indexOf('!');
  const root = new TreeNode(Number(s.slice(0, index)));
  s = s.slice(index + 1);
  queue.push(root);

  // bfs
  while (queue.length > 0 && s.length > 0) {
    const node = queue.shift();
    // left
    if (s.charAt(0) === '#') {
      node.left = null;
      s = s.slice(2);
    } else {
      const index = s.indexOf('!');
      const child = new TreeNode(Number(s.slice(0, index)));
      node.left = child;
      queue.push(child);
      s = s.slice(index + 1);
    }
    // right
    if (s.charAt(0) === '#') {
      node.right = null;
      s = s.slice(2);
    } else {
      const index = s.indexOf('!');
      const child = new TreeNode(Number(s.slice(0, index)));
      node.right = child;
      queue.push(child);
      s = s.slice(index + 1);
    }
  }

  return root;
}

const tree = {
  val: 8,
  left: {
    val: 6,
    left: { val: 5, left: null, right: null },
    right: null,
  },
  right: {
    val: 10,
    left: null,
    right: { val: 11, left: null, right: null },
  },
};

Deserialize('8!6!10!5!#!#!11!#!#!#!#!');
