import Object from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TrackItemModel extends Object {
  @tracked
  task;
}
