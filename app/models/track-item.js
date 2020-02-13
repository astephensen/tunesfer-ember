import Object from '@ember/object';
import { tracked } from '@glimmer/tracking';

export const TrackItemState = {
  IDLE: 'idle',
  PROCESSING: 'processing',
  NOT_FOUND: 'not_found',
  FAILED: 'failed',
  DONE: 'done'
}

export default class TrackItemModel extends Object {
  @tracked
  task;

  @tracked
  state = TrackItemState.IDLE;
}
