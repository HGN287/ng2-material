import {Component, View, ViewEncapsulation, Attribute} from 'angular2/angular2';
import {MdCheckbox} from "../checkbox/checkbox";

// TODO(jelbourn): add gesture support
// TODO(jelbourn): clean up CSS.

@Component({
  selector: 'md-switch',
  inputs: ['checked', 'disabled'],
  host: {
    'role': 'checkbox',
    '[attr.aria-checked]': 'checked',
    '[attr.aria-disabled]': 'disabled_',
    '(keydown)': 'onKeydown($event)',
  }
})
@View({
  templateUrl: '/packages/barbatus_ng2-material/src/components/switcher/switch.html',
  directives: [],
  encapsulation: ViewEncapsulation.None
})
export class MdSwitch extends MdCheckbox {
  constructor(@Attribute('tabindex') tabindex: string) {
    super(tabindex);
  }
}
