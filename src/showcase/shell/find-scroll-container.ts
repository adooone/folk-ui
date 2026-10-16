// Page doesn't forward a ref to its internal scrolling surface, so the
// IntersectionObserver root is found by walking the DOM for the first
// overflow-y: auto/scroll descendant instead of reaching in through a ref.
export function findScrollContainer(root: HTMLElement): HTMLElement | null {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  let node = walker.nextNode();
  while (node) {
    const element = node as HTMLElement;
    const { overflowY } = getComputedStyle(element);
    if (overflowY === 'auto' || overflowY === 'scroll') return element;
    node = walker.nextNode();
  }
  return null;
}
