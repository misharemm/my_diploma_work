document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.choseDevise__button');
  const deviceWindow = document.querySelector('.choseDevise__chose');
  const desk = document.querySelector('.choseDevise__desk');
  const devices = document.querySelectorAll('.choseDevise__devise');
  const drawingBoard = document.getElementById('drawingBoard');
  const colorPicker = document.getElementById('color');
  const sizePicker = document.getElementById('choseDevise__size');
  const chosenColor = document.getElementById('chosenColor');

  let isDrawing = false;
  let drawingEnabled = false;
  let color = '#000000';
  let size = 5;
  let startX = 0;
  let startY = 0;

  chosenColor.style.backgroundColor = color;

  colorPicker.addEventListener('input', (e) => {
    color = e.target.value;
    chosenColor.style.backgroundColor = color;
  });

  sizePicker.addEventListener('input', (e) => {
    size = e.target.value;
  });

  chosenColor.addEventListener('click', () => {
    drawingEnabled = !drawingEnabled;
    chosenColor.classList.toggle('active');
  });

  button.addEventListener('click', () => {
    deviceWindow.classList.toggle('choseDevise__chose--hidden');
  });

  devices.forEach(device => {
    device.addEventListener('click', () => {
      const clonedDevice = device.cloneNode(true);
      desk.appendChild(clonedDevice);
      deviceWindow.classList.add('choseDevise__chose--hidden');
      makeDraggable(clonedDevice);
    });
  });

  function makeDraggable(element) {
    let offsetX, offsetY;

    element.addEventListener('mousedown', (e) => {
      offsetX = e.clientX - element.getBoundingClientRect().left;
      offsetY = e.clientY - element.getBoundingClientRect().top;
      element.style.cursor = 'grabbing';

      const onMouseMove = (e) => {
        const deskRect = desk.getBoundingClientRect();
        let newX = e.clientX - deskRect.left - offsetX;
        let newY = e.clientY - deskRect.top - offsetY;

        newX = Math.max(0, Math.min(newX, deskRect.width - element.clientWidth));
        newY = Math.max(0, Math.min(newY, deskRect.height - element.clientHeight));

        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        element.style.cursor = 'grab';
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }

  drawingBoard.addEventListener('mousedown', (e) => {
    if (!drawingEnabled) return;
    isDrawing = true;
    const rect = drawingBoard.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;
    if (!e.shiftKey) {
      const point = createPoint(e);
      drawingBoard.appendChild(point);
    }
  });

  drawingBoard.addEventListener('mouseup', (e) => {
    if (!isDrawing) return;
    isDrawing = false;
    if (e.shiftKey) {
      const rect = drawingBoard.getBoundingClientRect();
      const endX = e.clientX - rect.left;
      const endY = e.clientY - rect.top;
      drawLine(startX, startY, endX, endY);
    }
  });

  drawingBoard.addEventListener('mousemove', (e) => {
    if (!isDrawing || e.shiftKey) return;
    const point = createPoint(e);
    drawingBoard.appendChild(point);
  });

  function createPoint(e) {
    const rect = drawingBoard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const point = document.createElement('div');
    point.className = 'drawing-point';
    point.style.width = `${size}px`;
    point.style.height = `${size}px`;
    point.style.backgroundColor = color;
    point.style.position = 'absolute';
    point.style.left = `${x - size / 2}px`;
    point.style.top = `${y - size / 2}px`;
    return point;
  }

  function drawLine(x1, y1, x2, y2) {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    const line = document.createElement('div');
    line.className = 'drawing-line';
    line.style.position = 'absolute';
    line.style.width = `${length}px`;
    line.style.height = `${size}px`;
    line.style.backgroundColor = color;
    line.style.transformOrigin = '0 50%';
    line.style.transform = `rotate(${angle}deg)`;
    line.style.left = `${x1}px`;
    line.style.top = `${y1 - size / 2}px`;
    drawingBoard.appendChild(line);
  }
});
