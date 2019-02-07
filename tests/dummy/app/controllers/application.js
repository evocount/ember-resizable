import Controller from '@ember/controller';
import { action, computed } from '@ember-decorators/object';

const getSize = (n) => !isNaN(parseFloat(n)) && isFinite(n) ? `${n}px` : n;

export default class ApplicationController extends Controller {
  width = 300;
  height = 200;
  minWidth = 10;
  minHeight = 10;
  maxWidth = null;
  maxHeight = null;
  grid = [1, 1];
  lockAspectRatio = false;
  directions = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];

  availableDirections = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];

  @action
  onResize(direction, newDimensions/*, clientSize, delta*/) {
    this.setProperties(newDimensions);
  }

  @computed('width', 'height')
  get resizableStyle() {
    return `width: ${getSize(this.width)}; height: ${getSize(this.height)};`;
  }
}
