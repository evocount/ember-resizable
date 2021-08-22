import Component from '@ember/component';
import { dasherize, capitalize } from '@ember/string';
import { isNone } from '@ember/utils';
import { action, computed } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { observes, on } from '@ember-decorators/object';
import template from './template';

const getSize = (n) => (!isNaN(parseFloat(n)) && isFinite(n) ? `${n}px` : n);

@layout(template)
@classNames('re-sizable')
class ReSizable extends Component {
  minWidth = 10;
  minHeight = 10;
  maxWidth = null;
  maxHeight = null;
  grid = [1, 1];
  lockAspectRatio = false;
  directions = [
    'top',
    'right',
    'bottom',
    'left',
    'topRight',
    'bottomRight',
    'bottomLeft',
    'topLeft',
  ];

  onResizeStart = null;
  onResizeStop = null;
  onResize = null;

  @className
  isActive = false;

  // this is done so instead of with an `@attribute` because the latter requires `unsafe-inline` in `style-src`
  // in the CSP settings. See https://github.com/evocount/ember-resizable/issues/405
  @on('didRender')
  // eslint-disable-next-line ember/no-observers
  @observes('width', 'height', 'elementWidth', 'elementHeight')
  style() {
    if (isNone(this.width)) {
      this.element.style.removeProperty('width');
    } else {
      this.element.style.setProperty(
        'width',
        getSize(this.elementWidth || this.width)
      );
    }
    if (isNone(this.height)) {
      this.element.style.removeProperty('height');
    } else {
      this.element.style.setProperty(
        'height',
        getSize(this.elementHeight || this.height)
      );
    }
  }

  @computed('_width')
  get width() {
    return this._width;
  }

  set width(value) {
    this.set('_width', value);
    this.set('elementWidth', value);
  }

  @computed('_height')
  get height() {
    return this._height;
  }

  set height(value) {
    this.set('_height', value);
    this.set('elementHeight', value);
  }

  willDestroyElement() {
    super.willDestroyElement(...arguments);

    this._removeEventListeners();
  }

  getBoxSize() {
    const style = window.getComputedStyle(this.element);
    const width = ~~style.getPropertyValue('width').replace('px', '');
    const height = ~~style.getPropertyValue('height').replace('px', '');
    return { width, height };
  }

  @action
  _onResizeStart(direction, event) {
    if (this.isActive) {
      return;
    }

    if (event.touches) {
      event = event.touches[0];
    } else {
      if (event.button === 2) {
        // Upon click with right mouse button we can become stuck in resizing mode
        return;
      }
    }

    if (this.onResizeStart) {
      this.onResizeStart(direction, event, this.element);
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

    window.addEventListener('mouseup', this._onMouseUp);
    window.addEventListener('mousemove', this._onMouseMove, {
      passive: true,
    });
    window.addEventListener('touchmove', this._onTouchMove, {
      passive: true,
    });
    window.addEventListener('touchend', this._onMouseUp);
  }

  @action
  _onTouchMove(event) {
    this._onMouseMove(event.touches[0]);
  }

  _calculateResized(originalPos, currentPos, dimension, snapSize) {
    let newSize = this.get(`_original.${dimension}`) + currentPos - originalPos;
    newSize = Math.max(
      Math.min(newSize, this.get(`max${capitalize(dimension)}`) || newSize),
      this.get(`min${capitalize(dimension)}`) || 0
    );
    newSize = Math.round(newSize / snapSize) * snapSize;
    return newSize;
  }

  @action
  _onMouseMove({ clientX, clientY }) {
    const direction = dasherize(this._direction);
    const original = this._original;
    const ratio = original.height / original.width;
    let newWidth = original.width;
    let newHeight = original.height;

    if (direction.includes('right') || direction.includes('left')) {
      let factor = direction.includes('left') ? -1 : 1;
      newWidth = this._calculateResized(
        original.x * factor,
        clientX * factor,
        'width',
        this.grid[0]
      );
    }

    if (direction.includes('bottom') || direction.includes('top')) {
      let factor = direction.includes('top') ? -1 : 1;
      newHeight = this._calculateResized(
        original.y * factor,
        clientY * factor,
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

    this.set('elementWidth', newWidth);
    this.set('elementHeight', newHeight);

    if (this.onResize) {
      this.onResize(
        this._direction,
        { width: newWidth, height: newHeight },
        {
          width: newWidth - original.width,
          height: newHeight - original.height,
        },
        this.element
      );
    }
  }

  @action
  _onMouseUp() {
    if (!this.isActive) {
      return;
    }

    if (this.onResizeStop) {
      const styleSize = this.getBoxSize();
      this.onResizeStop(
        this._direction,
        {
          width: styleSize.width - this._original.width,
          height: styleSize.height - this._original.height,
        },
        this.element
      );
    }

    this.set('isActive', false);

    this._removeEventListeners();
  }

  _removeEventListeners() {
    window.removeEventListener('mouseup', this._onMouseUp);
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('touchmove', this._onTouchMove);
    window.removeEventListener('touchend', this._onMouseUp);
  }
}

export { getSize };

export default ReSizable;
