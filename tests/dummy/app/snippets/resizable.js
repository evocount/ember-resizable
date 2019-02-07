import Component from '@ember/component';
import { action, computed } from '@ember-decorators/object';

const getSize = (n) => !isNaN(parseFloat(n)) && isFinite(n) ? `${n}px` : n;

export default class DummyComponent extends Component {
  width = 300;
  height = 200;

  /* ... */

  @action
  onResize(direction, { width, height }/*, clientSize, delta*/) {
    this.set('width', width);
    this.set('height', height);
  }

  @computed('width', 'height')
  get resizableStyle() {
    return `width: ${getSize(this.width)}; height: ${getSize(this.height)};`;
  }
}
