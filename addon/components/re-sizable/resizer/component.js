import Component from '@ember/component';
import { className, classNames } from '@ember-decorators/component';

@classNames('resizer')
class Resizer extends Component {

  @className
  direction = 'top';

  touchStart(event) {
    this.onResizeStart(this.direction, event.touches[0]);
  }

  mouseDown(event) {
    this.onResizeStart(this.direction, event);
  }

}

export default Resizer;
