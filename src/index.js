import _ from 'lodash';
import './style.css'
function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello World!';
    return element;
  }
  document.body.appendChild(component());