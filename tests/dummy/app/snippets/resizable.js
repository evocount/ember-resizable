import Component from '@ember/component';
import { action } from '@ember-decorators/object';


export default class DummyComponent extends Component {
  width = 300;
  height = 200;
  minWidth = 10;
  minHeight = 10;
  maxWidth = null;
  maxHeight = null;
  grid = [1, 1];
  lockAspectRatio = false;
  directions = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];

  @action
  onResize(direction, { width, height }/*, clientSize, delta*/) {
    // this is not actually necessary for <ReSizable> to change its size
    this.set('width', width);
    this.set('height', height);
  }
}
