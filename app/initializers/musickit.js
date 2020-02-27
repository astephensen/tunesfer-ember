import ENV from 'tunesfer/config/environment';

export function initialize() {
  MusicKit.configure({
    developerToken: ENV.APP.AM_DEVELOPER_TOKEN,
    app: {
      name: 'Tunesfer',
      build: '1.0',
      icon: 'https://tunesfer.com/logo.png'
    }
  });
}

export default {
  initialize
};
