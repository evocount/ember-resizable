import Controller from '@ember/controller';
import { action } from '@ember/object';

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
  onResize(direction, newDimensions/*, delta, element*/) {
    this.setProperties(newDimensions);
  }
}
