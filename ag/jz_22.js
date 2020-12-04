const bfs = (root) => {
  if (!root) {
    return [];
  }
  const output = [];
  const query = [];
  query.push(root);
  while (query.length > 0) {
    let pl = query.length;
    while (pl-- > 0) {
      const node = query.shift();
      output.push(node.val);
      node.left && query.push(node.left);
      node.right && query.push(node.right);
    }
  }
  return output;
};
function PrintFromTopToBottom(root) {
  return bfs(root);
}
