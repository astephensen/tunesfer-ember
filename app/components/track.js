import Component from '@glimmer/component';
import { TrackItemState } from '../models/track-item';

export default class TrackComponent extends Component {
  get idle() {
    return this.args.state === TrackItemState.IDLE;
  }

  get processing() {
    return this.args.state === TrackItemState.PROCESSING;
  }

  get notFound() {
    return this.args.state === TrackItemState.NOT_FOUND;
  }

  get done() {
    return this.args.state === TrackItemState.DONE;
  }

  get failed() {
    return this.args.state === TrackItemState.FAILED;
  }

  get cancelled() {
    return this.args.state === TrackItemState.CANCELLED;
  }
}
