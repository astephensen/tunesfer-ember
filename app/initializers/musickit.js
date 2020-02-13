export function initialize() {
  MusicKit.configure({
    developerToken: 'eyJhbGciOiJFUzI1NiIsImtpZCI6IkIyNE5TNzdYQjcifQ.eyJpc3MiOiJVRjVUSzM2VVg1IiwiaWF0IjoxNTgxMTM5NTg2LCJleHAiOjE1OTY2OTE1ODZ9.WW3QjG-xEPo5ceBtkUDAV38JqIA6LFJ7u01PUy85qDQLw5DgLZ2iYm-PnIpOemJLxtS65XeEpGdFNXA81vNWsA',
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
