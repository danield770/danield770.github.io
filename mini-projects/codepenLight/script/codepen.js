document.addEventListener('mousedown', panelDrag, false);

function panelDrag(event) {
  const element = event.target;

  if (element.classList.contains('v-split')) {
    initDrag(element, event, 'v');
  } else if (element.classList.contains('h-split')) {
    initDrag(element.parentElement, event, 'h');
  }
}
function initDrag(element, e, dir) {
  let startX, startY, startWidth, startHeight;
  let elem = element.previousElementSibling;

  if (dir === 'v') {
    startX = e.clientX;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(elem).width,
      10
    );
  }

  if (dir === 'h') {
    startY = e.clientY;
    startHeight = parseInt(
      document.defaultView.getComputedStyle(elem).height,
      10
    );
  }

  function doDrag(e) {
    if (dir === 'v') {
      elem.style.flexBasis = startWidth + e.clientX - startX + 'px';
    }
    if (dir === 'h') {
      elem.style.flexBasis = startHeight + e.clientY - startY + 'px';
    }
  }

  function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
  }

  document.documentElement.addEventListener('mousemove', doDrag, false);
  document.documentElement.addEventListener('mouseup', stopDrag, false);
}
