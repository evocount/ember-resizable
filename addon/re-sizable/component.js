import Component from '@ember/component';
import { dasherize, capitalize } from '@ember/string';
import { action, } from '@ember-decorators/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { addEventListener, runDisposables } from 'ember-lifeline';
import template from './template';

/*global window*/

@layout(template)
@classNames('re-sizable')
class ReSizable extends Component {
  minWidth = 10;
  minHeight = 10;
  maxWidth = null;
  maxHeight = null;
  grid = [1, 1];
  lockAspectRatio = false;
  directions = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];

  onResizeStart = null;
  onResizeStop = null;
  onResize = null;

  @className
  isActive = false;

  didInsertElement() {
    super.didInsertElement(...arguments);

    // TODO only do this upon resizeStart
    addEventListener(this, window, 'mouseup', this._onMouseUp);
    addEventListener(this, window, 'mousemove', this._onMouseMove);
    addEventListener(this, window, 'touchmove', this._onTouchMove);
    addEventListener(this, window, 'touchend', this._onMouseUp);
  }

  willDestroyElement() {
    super.willDestroyElement(...arguments);

    runDisposables(this);
  }

  getBoxSize() {
    const style = window.getComputedStyle(this.element);
    const width = ~~style.getPropertyValue('width').replace('px', '');
    const height = ~~style.getPropertyValue('height').replace('px', '');
    return { width, height };
  }

  @action
  _onResizeStart(direction, event) {
    if(this.onResizeStart) {
      const clientSize = {
        width: this.element.clientWidth,
        height: this.element.clientHeight
      };

      this.onResizeStart(direction, this.getBoxSize(), clientSize, event);
    }

    const size = this.getBoxSize();
    this.set('isActive', true);
    this.set('_original', {
      x: event.clientX,
      y: event.clientY,
      width: size.width,
      height: size.height,
    });
    this.set('_direction', direction);
  }

  _onTouchMove(event) {
    this._onMouseMove(event.touches[0]);
  }

  _calcualateResized(originalPos, currentPos, dimension, snapSize) {
    let newSize = this.get(`_original.${dimension}`) + currentPos - originalPos;
    newSize = Math.max(
      Math.min(newSize, this.get(`max${capitalize(dimension)}`) || newSize),
      this.get(`min${capitalize(dimension)}`) || 0
    );
    newSize = Math.round(newSize / snapSize) * snapSize;
    return newSize;
  }

  _onMouseMove({ clientX, clientY }) {
    if (!this.isActive) {
      return;
    }

    const direction = dasherize(this._direction);
    const original = this._original;
    const ratio = original.height / original.width;
    let newWidth = original.width;
    let newHeight = original.height;

    if (direction.includes('right')) {
      newWidth = this._calcualateResized(
        original.x,
        clientX,
        'width',
        this.grid[0]
      );
    }

    if (direction.includes('left')) {
      newWidth = this._calcualateResized(
        -original.x,
        -clientX,
        'width',
        this.grid[0]
      );
    }

    if (direction.includes('bottom')) {
      newHeight = this._calcualateResized(
        original.y,
        clientY,
        'height',
        this.grid[1]
      );
    }

    if (direction.includes('top')) {
      newHeight = this._calcualateResized(
        -original.y,
        -clientY,
        'height',
        this.grid[1]
      );
    }

    if (this.lockAspectRatio) {
      const deltaWidth = Math.abs(newWidth - original.width);
      const deltaHeight = Math.abs(newHeight - original.height);
      if (deltaWidth < deltaHeight) {
        newWidth = newHeight / ratio;
      } else {
        newHeight = newWidth * ratio;
      }
    }

    if (this.onResize) {
      this.onResize(
        this._direction,
        { width: newWidth, height: newHeight },
        { width: this.element.clientWidth, height: this.element.clientHeight },
        { width: newWidth - original.width, height: newHeight - original.height }
      );
    }
  }

  _onMouseUp() {
    if (!this.isActive){
      return;
    }

    if (this.onResizeStop) {
      const styleSize = this.getBoxSize();
      this.onResizeStop(
        this._direction,
        styleSize,
        { width: this.element.clientWidth, height: this.element.clientHeight },
        { width: styleSize.width - this._original.width, height: styleSize.height - this._original.height }
      );
    }

    this.set('isActive', false);
  }
}

export default ReSizable;
