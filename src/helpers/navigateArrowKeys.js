const navigateArrowKeys = (e, node) => {
  if (!(e.keyCode === 40 && !node.nextSibling)) e.preventDefault();
  if (e.keyCode === 40 && node.nextSibling) {
    node.nextSibling.focus();
  }
  if (e.keyCode === 38 && node.previousSibling) {
    node.previousSibling.focus();
  }
};

export default navigateArrowKeys;
