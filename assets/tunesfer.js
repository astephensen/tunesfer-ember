'use strict';



;define("tunesfer/app", ["exports", "ember-resolver", "ember-load-initializers", "tunesfer/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("tunesfer/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("tunesfer/components/back-button.css", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "back-button": "_back-button_d3zgsj"
  };
  _exports.default = _default;
});
;define("tunesfer/components/back-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <button type="button" local-class="back-button">{{svg-jar "back"}}{{yield}}</button>
  
  */
  {
    id: "Zi+XUiLk",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[7,\"button\",true],[11,\"class\",[29,[[28,\"local-class\",[\"back-button\"],[[\"from\"],[\"tunesfer/components/back-button.css\"]]]]]],[10,\"type\",\"button\"],[8],[1,[28,\"svg-jar\",[\"back\"],null],false],[14,1],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "tunesfer/components/back-button.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("tunesfer/components/ember-popover", ["exports", "ember-tooltips/components/ember-popover"], function (_exports, _emberPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopover.default;
    }
  });
});
;define("tunesfer/components/ember-tooltip", ["exports", "ember-tooltips/components/ember-tooltip"], function (_exports, _emberTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberTooltip.default;
    }
  });
});
;define("tunesfer/components/feedback-button.css", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "feedback-button-container": "_feedback-button-container_s1m31d",
    "feedback-button": "_feedback-button_s1m31d"
  };
  _exports.default = _default;
});
;define("tunesfer/components/feedback-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div local-class="feedback-button-container">
    <a local-class="feedback-button" href="mailto:tunesfer@alan.io">Feedback?</a>
  </div>
  
  */
  {
    id: "EH0RHPm/",
    block: "{\"symbols\":[],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"feedback-button-container\"],[[\"from\"],[\"tunesfer/components/feedback-button.css\"]]]]]],[8],[0,\"\\n  \"],[7,\"a\",true],[11,\"class\",[29,[[28,\"local-class\",[\"feedback-button\"],[[\"from\"],[\"tunesfer/components/feedback-button.css\"]]]]]],[10,\"href\",\"mailto:tunesfer@alan.io\"],[8],[0,\"Feedback?\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "tunesfer/components/feedback-button.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("tunesfer/components/info-bar.css", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "info-bar": "_info-bar_wdi38h"
  };
  _exports.default = _default;
});
;define("tunesfer/components/info-bar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div local-class="info-bar" ...attributes>
    {{@text}}
    {{yield}}
  </div>
  
  */
  {
    id: "+h7nQ4oy",
    block: "{\"symbols\":[\"&attrs\",\"@text\",\"&default\"],\"statements\":[[7,\"div\",false],[12,\"class\",[29,[[28,\"local-class\",[\"info-bar\"],[[\"from\"],[\"tunesfer/components/info-bar.css\"]]]]]],[13,1],[8],[0,\"\\n  \"],[1,[23,2,[]],false],[0,\"\\n  \"],[14,3],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "tunesfer/components/info-bar.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("tunesfer/components/loading-indicator.css", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "sk-circle": "_sk-circle_156iry",
    "sk-child": "_sk-child_156iry",
    "sk-circleBounceDelay": "_sk-circleBounceDelay_156iry",
    "sk-circle2": "_sk-circle2_156iry",
    "sk-circle3": "_sk-circle3_156iry",
    "sk-circle4": "_sk-circle4_156iry",
    "sk-circle5": "_sk-circle5_156iry",
    "sk-circle6": "_sk-circle6_156iry",
    "sk-circle7": "_sk-circle7_156iry",
    "sk-circle8": "_sk-circle8_156iry",
    "sk-circle9": "_sk-circle9_156iry",
    "sk-circle10": "_sk-circle10_156iry",
    "sk-circle11": "_sk-circle11_156iry",
    "sk-circle12": "_sk-circle12_156iry",
    "color-white": "_color-white_156iry"
  };
  _exports.default = _default;
});
;define("tunesfer/components/loading-indicator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div local-class="sk-circle {{if @white 'color-white'}}">
    <div local-class="sk-circle1 sk-child"></div>
    <div local-class="sk-circle2 sk-child"></div>
    <div local-class="sk-circle3 sk-child"></div>
    <div local-class="sk-circle4 sk-child"></div>
    <div local-class="sk-circle5 sk-child"></div>
    <div local-class="sk-circle6 sk-child"></div>
    <div local-class="sk-circle7 sk-child"></div>
    <div local-class="sk-circle8 sk-child"></div>
    <div local-class="sk-circle9 sk-child"></div>
    <div local-class="sk-circle10 sk-child"></div>
    <div local-class="sk-circle11 sk-child"></div>
    <div local-class="sk-circle12 sk-child"></div>
  </div>
  
  */
  {
    id: "V4P/DcXq",
    block: "{\"symbols\":[\"@white\"],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"sk-circle \",[28,\"if\",[[23,1,[]],\"color-white\"],null]],null]],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle1 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle2 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle3 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle4 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle5 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle6 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle7 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle8 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle9 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle10 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle11 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"sk-circle12 sk-child\"],[[\"from\"],[\"tunesfer/components/loading-indicator.css\"]]]]]],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "tunesfer/components/loading-indicator.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("tunesfer/components/music-button.css", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "music-button": "_music-button_7ua1ft",
    "large": "_large_7ua1ft",
    "music-image": "_music-image_7ua1ft"
  };
  _exports.default = _default;
});
;define("tunesfer/components/music-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <button type="button" local-class="music-button {{if @large 'large'}}" {{on "click" @action}}>
    {{#unless @hideImage}}{{svg-jar "music" local-class="music-image" width="18px" height="18px"}}{{/unless}}
    {{@title}}{{yield}}
  </button>
  
  */
  {
    id: "0hm0VYm5",
    block: "{\"symbols\":[\"@large\",\"@action\",\"@hideImage\",\"@title\",\"&default\"],\"statements\":[[7,\"button\",false],[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"music-button \",[28,\"if\",[[23,1,[]],\"large\"],null]],null]],[[\"from\"],[\"tunesfer/components/music-button.css\"]]]]]],[12,\"type\",\"button\"],[3,\"on\",[\"click\",[23,2,[]]]],[8],[0,\"\\n  \"],[4,\"unless\",[[23,3,[]]],null,{\"statements\":[[1,[28,\"svg-jar\",[\"music\"],[[\"width\",\"height\",\"class\"],[\"18px\",\"18px\",[28,\"concat\",[[28,\"local-class\",[\"music-image\"],[[\"from\"],[\"tunesfer/components/music-button.css\"]]]],null]]]],false]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[23,4,[]],false],[14,5],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "tunesfer/components/music-button.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("tunesfer/components/playlist-info.css", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "playlist-info": "_playlist-info_gn9bw6",
    "playlist-image": "_playlist-image_gn9bw6",
    "playlist-text-container": "_playlist-text-container_gn9bw6",
    "playlist-name-container": "_playlist-name-container_gn9bw6",
    "playlist-name": "_playlist-name_gn9bw6",
    "playlist-by": "_playlist-by_gn9bw6",
    "playlist-author": "_playlist-author_gn9bw6",
    "playlist-description": "_playlist-description_gn9bw6",
    "playlist-image-loading": "_playlist-image-loading_gn9bw6"
  };
  _exports.default = _default;
});
;define("tunesfer/components/playlist-info", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div local-class="playlist-info">
    {{#if @loading}}
      <div local-class="playlist-image"></div>
      <div local-class="playlist-text-container">
        <div local-class="playlist-name-container">
          <div local-class="playlist-name">Loading playlist...</div>
          <div local-class="playlist-author">One moment please!</div>
        </div>
        <div local-class="playlist-description">{{yield}}</div>
      </div>
    {{else}}
      <img local-class="playlist-image" src={{@image}} alt="Playlist cover" />
      <div local-class="playlist-text-container">
        <div local-class="playlist-name-container">
          <div local-class="playlist-name">{{@name}}</div>
          <div local-class="playlist-author"><span local-class="playlist-by">By</span> {{@author}}</div>
        </div>
        {{! TODO: Don't use dangerous curlies }}
        {{! template-lint-disable no-triple-curlies }}
        <div local-class="playlist-description">{{{format-spotify-description @description}}}</div>
        <div local-class="playlist-yield">{{yield}}</div>
      </div>
    {{/if}}
  </div>
  
  */
  {
    id: "kzEdw4XG",
    block: "{\"symbols\":[\"@image\",\"@name\",\"@author\",\"@description\",\"&default\",\"@loading\"],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-info\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[0,\"\\n\"],[4,\"if\",[[23,6,[]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-image\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-text-container\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[0,\"\\n      \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-name-container\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[0,\"\\n        \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-name\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[0,\"Loading playlist...\"],[9],[0,\"\\n        \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-author\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[0,\"One moment please!\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-description\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[14,5],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"img\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-image\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[11,\"src\",[23,1,[]]],[10,\"alt\",\"Playlist cover\"],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-text-container\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[0,\"\\n      \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-name-container\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[0,\"\\n        \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-name\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[1,[23,2,[]],false],[9],[0,\"\\n        \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-author\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[7,\"span\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-by\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[0,\"By\"],[9],[0,\" \"],[1,[23,3,[]],false],[9],[0,\"\\n      \"],[9],[0,\"\\n\"],[0,\"      \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-description\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[1,[28,\"format-spotify-description\",[[23,4,[]]],null],true],[9],[0,\"\\n      \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-yield\"],[[\"from\"],[\"tunesfer/components/playlist-info.css\"]]]]]],[8],[14,5],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "tunesfer/components/playlist-info.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("tunesfer/components/playlist-search.css", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "playlist-search-container": "_playlist-search-container_i3qzzq",
    "hidden": "_hidden_i3qzzq",
    "playlist-search-box": "_playlist-search-box_i3qzzq",
    "playlist-form": "_playlist-form_i3qzzq"
  };
  _exports.default = _default;
});
;define("tunesfer/components/playlist-search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div local-class="playlist-search-container">
    {{!-- Note: Need to use the fn helper because the Input component behaves strangely --}}
    <Input local-class="playlist-search-box" value={{@value}} placeholder={{@placeholder}} @enter={{fn @enter}} @input={{fn @input}}/>
  </div>
  
  */
  {
    id: "75fiM1Hd",
    block: "{\"symbols\":[\"@value\",\"@placeholder\",\"@enter\",\"@input\"],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"playlist-search-container\"],[[\"from\"],[\"tunesfer/components/playlist-search.css\"]]]]]],[8],[0,\"\\n\"],[0,\"  \"],[5,\"input\",[[12,\"class\",[29,[[28,\"local-class\",[\"playlist-search-box\"],[[\"from\"],[\"tunesfer/components/playlist-search.css\"]]]]]],[12,\"value\",[23,1,[]]],[12,\"placeholder\",[23,2,[]]]],[[\"@enter\",\"@input\"],[[28,\"fn\",[[23,3,[]]],null],[28,\"fn\",[[23,4,[]]],null]]]],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "tunesfer/components/playlist-search.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("tunesfer/components/track.css", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "track-row": "_track-row_1wi86y",
    "track-processing": "_track-processing_1wi86y",
    "track-index": "_track-index_1wi86y",
    "track-name-container": "_track-name-container_1wi86y",
    "track-name": "_track-name_1wi86y",
    "track-artist-album": "_track-artist-album_1wi86y",
    "track-duration": "_track-duration_1wi86y"
  };
  _exports.default = _default;
});
;define("tunesfer/components/track", ["exports", "@glimmer/component", "tunesfer/models/track-item"], function (_exports, _component, _trackItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div local-class="track-row">
    {{#if this.idle}}
      <div local-class="track-index">
        {{@index}}.
      </div>
    {{else}}
      <div local-class="track-index track-processing">
        {{#if this.processing }}
          <LoadingIndicator />
        {{else if this.done}}
          {{svg-jar "check" height="30px" width="30px"}}
          <EmberTooltip @text="The tune was found and added to the playlist" @side="right" />
        {{else if this.notFound}}
          {{svg-jar "warning" height="30px" width="30px"}}
          <EmberTooltip @text="This tune couldn't be found" @side="right" />
        {{else if this.skipped}}
          {{svg-jar "skip" height="30px" width="30px"}}
          <EmberTooltip @text="This tune already exists in the playlist" @side="right" />
        {{else if this.failed}}
          {{svg-jar "cross" height="30px" width="30px"}}
          <EmberTooltip @text="There was an error when adding this tune" @side="right" />
        {{else if this.cancelled}}
          {{svg-jar "cancel" height="30px" width="30px"}}
          <EmberTooltip @text="The playlist transfer was canceled" @side="right" />
        {{/if}}
      </div>
    {{/if}}
    <div local-class="track-name-container">
      <div local-class="track-name">{{@name}}</div>
      <div local-class="track-artist-album">
        {{@artist}} • {{@album}}
      </div>
    </div>
    <div local-class="track-duration">{{@duration}}</div>
  </div>
  
  */
  {
    id: "WJL300Bi",
    block: "{\"symbols\":[\"@index\",\"@name\",\"@artist\",\"@album\",\"@duration\"],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"track-row\"],[[\"from\"],[\"tunesfer/components/track.css\"]]]]]],[8],[0,\"\\n\"],[4,\"if\",[[23,0,[\"idle\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"track-index\"],[[\"from\"],[\"tunesfer/components/track.css\"]]]]]],[8],[0,\"\\n      \"],[1,[23,1,[]],false],[0,\".\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"track-index track-processing\"],[[\"from\"],[\"tunesfer/components/track.css\"]]]]]],[8],[0,\"\\n\"],[4,\"if\",[[23,0,[\"processing\"]]],null,{\"statements\":[[0,\"        \"],[5,\"loading-indicator\",[],[[],[]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,0,[\"done\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,\"svg-jar\",[\"check\"],[[\"height\",\"width\"],[\"30px\",\"30px\"]]],false],[0,\"\\n        \"],[5,\"ember-tooltip\",[],[[\"@text\",\"@side\"],[\"The tune was found and added to the playlist\",\"right\"]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,0,[\"notFound\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,\"svg-jar\",[\"warning\"],[[\"height\",\"width\"],[\"30px\",\"30px\"]]],false],[0,\"\\n        \"],[5,\"ember-tooltip\",[],[[\"@text\",\"@side\"],[\"This tune couldn't be found\",\"right\"]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,0,[\"skipped\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,\"svg-jar\",[\"skip\"],[[\"height\",\"width\"],[\"30px\",\"30px\"]]],false],[0,\"\\n        \"],[5,\"ember-tooltip\",[],[[\"@text\",\"@side\"],[\"This tune already exists in the playlist\",\"right\"]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,0,[\"failed\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,\"svg-jar\",[\"cross\"],[[\"height\",\"width\"],[\"30px\",\"30px\"]]],false],[0,\"\\n        \"],[5,\"ember-tooltip\",[],[[\"@text\",\"@side\"],[\"There was an error when adding this tune\",\"right\"]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,0,[\"cancelled\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,\"svg-jar\",[\"cancel\"],[[\"height\",\"width\"],[\"30px\",\"30px\"]]],false],[0,\"\\n        \"],[5,\"ember-tooltip\",[],[[\"@text\",\"@side\"],[\"The playlist transfer was canceled\",\"right\"]]],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"track-name-container\"],[[\"from\"],[\"tunesfer/components/track.css\"]]]]]],[8],[0,\"\\n    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"track-name\"],[[\"from\"],[\"tunesfer/components/track.css\"]]]]]],[8],[1,[23,2,[]],false],[9],[0,\"\\n    \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"track-artist-album\"],[[\"from\"],[\"tunesfer/components/track.css\"]]]]]],[8],[0,\"\\n      \"],[1,[23,3,[]],false],[0,\" \u2022 \"],[1,[23,4,[]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"track-duration\"],[[\"from\"],[\"tunesfer/components/track.css\"]]]]]],[8],[1,[23,5,[]],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "tunesfer/components/track.hbs"
    }
  });

  class TrackComponent extends _component.default {
    get idle() {
      return this.args.state === _trackItem.TrackItemState.IDLE;
    }

    get processing() {
      return this.args.state === _trackItem.TrackItemState.PROCESSING;
    }

    get notFound() {
      return this.args.state === _trackItem.TrackItemState.NOT_FOUND;
    }

    get skipped() {
      return this.args.state === _trackItem.TrackItemState.SKIPPED;
    }

    get done() {
      return this.args.state === _trackItem.TrackItemState.DONE;
    }

    get failed() {
      return this.args.state === _trackItem.TrackItemState.FAILED;
    }

    get cancelled() {
      return this.args.state === _trackItem.TrackItemState.CANCELLED;
    }

  }

  _exports.default = TrackComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TrackComponent);
});
;define("tunesfer/controllers/playlist", ["exports", "ember-concurrency", "tunesfer/models/track-item"], function (_exports, _emberConcurrency, _trackItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let PlaylistController = (_dec = (0, _emberConcurrency.task)(function* () {
    yield this.tunesfer.authorize();
    this.notifyPropertyChange('isAuthorized');
  }), _dec2 = (0, _emberConcurrency.task)(function* () {
    if (!this.tunesfer.isAuthorized) {
      throw new Error('The user is unauthorized!');
    } // If required, fetch the full playlist from Spotify and swap out the model.


    if (this.model.playlist.tracks.total > 100) {
      const spotifyPlaylist = yield this.tunesfer.getSpotifyPlaylist(this.model.playlist.id, true);
      this.model = {
        playlist: spotifyPlaylist
      };
    } // Check if the playlist exists in the library.


    let playlist = yield this.tunesfer.findPlaylist(this.model.playlist.name);

    if (!playlist) {
      playlist = yield this.tunesfer.createPlaylist(this.model.playlist.name);
    } else {
      // Fetch the full playlist.
      playlist = yield this.tunesfer.getPlaylist(playlist.id);
    } // Create tasks for each of the tracks.


    let tasks = this.model.playlist.tracks.items.map(trackItem => {
      trackItem.state = _trackItem.TrackItemState.IDLE;
      trackItem.task = this.processTrack.perform(trackItem, playlist);
      return trackItem.task;
    }); // Wait for it all to complete.

    yield (0, _emberConcurrency.all)(tasks);
  }).restartable(), _dec3 = (0, _emberConcurrency.task)(function* (trackItem, playlist) {
    trackItem.state = _trackItem.TrackItemState.PROCESSING; // Find the track.

    const track = yield this.tunesfer.findSpotifySong(trackItem.track);

    if (!track) {
      trackItem.state = _trackItem.TrackItemState.NOT_FOUND;
      return;
    } // See if the track already exists in the playlist.


    const existingTrack = playlist.tracks.find(playlistTrack => {
      return track.attributes.name === playlistTrack.attributes.name;
    });

    if (existingTrack) {
      trackItem.state = _trackItem.TrackItemState.SKIPPED;
      return;
    } // Add the track to the playlist.


    try {
      const result = yield this.tunesfer.addSongToPlaylist(track, playlist);

      if (!result) {
        trackItem.state = _trackItem.TrackItemState.FAILED;
        return;
      }

      trackItem.state = _trackItem.TrackItemState.DONE;
    } catch {
      trackItem.state = _trackItem.TrackItemState.FAILED;
    }
  }).enqueue(), (_class = (_temp = class PlaylistController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "tunesfer", _descriptor, this);

      _initializerDefineProperty(this, "authorize", _descriptor2, this);

      _initializerDefineProperty(this, "addPlaylist", _descriptor3, this);

      _initializerDefineProperty(this, "processTrack", _descriptor4, this);
    }

    get additionalTracksAvailable() {
      return this.model.playlist.tracks.total - this.model.playlist.tracks.items.length;
    }
    /**
     * Task to authorize the user with Apple Music.
     */


    cancel() {
      this.addPlaylist.cancelAll();
      this.processTrack.cancelAll(); // Reset track state.

      for (const trackItem of this.model.playlist.tracks.items) {
        if (trackItem.state === _trackItem.TrackItemState.IDLE || trackItem.state === _trackItem.TrackItemState.PROCESSING) {
          trackItem.state = _trackItem.TrackItemState.CANCELLED;
        }
      }
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tunesfer", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "authorize", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "addPlaylist", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "processTrack", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "cancel", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "cancel"), _class.prototype)), _class));
  _exports.default = PlaylistController;
});
;define("tunesfer/controllers/search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const PLAYLIST_REGEX = /playlist\/([a-zA-Z0-9]+)/;
  let SearchController = (_class = (_temp = class SearchController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "playlistUrl", _descriptor, this);

      _initializerDefineProperty(this, "error", _descriptor2, this);
    }

    get hasEnteredPlaylist() {
      return !Ember.isBlank(this.playlistUrl);
    }

    get playlistIsValid() {
      return PLAYLIST_REGEX.test(this.playlistUrl);
    }

    get hideInvalidLink() {
      return !this.hasEnteredPlaylist || this.playlistIsValid;
    }

    loadPlaylist(playlistUrl) {
      const result = playlistUrl.match(PLAYLIST_REGEX);

      if (!result || result.length !== 2) {
        return;
      }

      const [, playlistId] = result;
      this.transitionToRoute('playlist', playlistId);
    }

    validatePlaylist(event) {
      this.playlistUrl = event.target.value; // Clear any existing errors.

      this.error = null;
    }

    randomPlaylist() {
      this.transitionToRoute('playlist', '2H4gnRP5H2sKrexuWhpS99');
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "playlistUrl", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "error", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "loadPlaylist", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "loadPlaylist"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validatePlaylist", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "validatePlaylist"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "randomPlaylist", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "randomPlaylist"), _class.prototype)), _class);
  _exports.default = SearchController;
});
;define("tunesfer/helpers/add-one", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function addOne([value]) {
    return value + 1;
  });

  _exports.default = _default;
});
;define("tunesfer/helpers/app-version", ["exports", "tunesfer/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("tunesfer/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("tunesfer/helpers/format-milliseconds", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function formatMilliseconds([milliseconds]) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = (milliseconds % 60000 / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  });

  _exports.default = _default;
});
;define("tunesfer/helpers/format-spotify-description", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function formatSpotifyDescription([description]) {
    // Convert Spotify playlist links to Tunesfer ones.
    const formattedDescription = description.replace(/spotify:playlist:/g, '/');
    return formattedDescription;
  });

  _exports.default = _default;
});
;define("tunesfer/helpers/local-class", ["exports", "ember-css-modules/helpers/local-class"], function (_exports, _localClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _localClass.default;
    }
  });
  Object.defineProperty(_exports, "localClass", {
    enumerable: true,
    get: function () {
      return _localClass.localClass;
    }
  });
});
;define("tunesfer/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("tunesfer/helpers/svg-jar", ["exports", "ember-svg-jar/utils/make-helper", "ember-svg-jar/utils/make-svg"], function (_exports, _makeHelper, _makeSvg) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.svgJar = svgJar;
  _exports.default = void 0;

  function getInlineAsset(assetId) {
    try {
      /* eslint-disable global-require */
      return require(`ember-svg-jar/inlined/${assetId}`).default;
    } catch (err) {
      return null;
    }
  }

  function svgJar(assetId, svgAttrs) {
    return (0, _makeSvg.default)(assetId, svgAttrs, getInlineAsset);
  }

  var _default = (0, _makeHelper.default)(svgJar);

  _exports.default = _default;
});
;define("tunesfer/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("tunesfer/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "tunesfer/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("tunesfer/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("tunesfer/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("tunesfer/initializers/export-application-global", ["exports", "tunesfer/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("tunesfer/initializers/musickit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    MusicKit.configure({
      developerToken: 'eyJhbGciOiJFUzI1NiIsImtpZCI6IkIyNE5TNzdYQjcifQ.eyJpc3MiOiJVRjVUSzM2VVg1IiwiaWF0IjoxNTgxMTM5NTg2LCJleHAiOjE1OTY2OTE1ODZ9.WW3QjG-xEPo5ceBtkUDAV38JqIA6LFJ7u01PUy85qDQLw5DgLZ2iYm-PnIpOemJLxtS65XeEpGdFNXA81vNWsA',
      app: {
        name: 'Tunesfer',
        build: '1.0',
        icon: 'https://tunesfer.com/logo.png'
      }
    });
  }

  var _default = {
    initialize
  };
  _exports.default = _default;
});
;define("tunesfer/models/playlist", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class PlaylistModel extends Ember.Object {}

  _exports.default = PlaylistModel;
});
;define("tunesfer/models/track-item", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.TrackItemState = void 0;

  var _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const TrackItemState = {
    IDLE: 'idle',
    PROCESSING: 'processing',
    NOT_FOUND: 'not_found',
    SKIPPED: 'skipped',
    FAILED: 'failed',
    DONE: 'done',
    CANCELLED: 'cancelled'
  };
  _exports.TrackItemState = TrackItemState;
  let TrackItemModel = (_class = (_temp = class TrackItemModel extends Ember.Object {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "task", _descriptor, this);

      _initializerDefineProperty(this, "state", _descriptor2, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "task", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "state", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return TrackItemState.IDLE;
    }
  })), _class);
  _exports.default = TrackItemModel;
});
;define("tunesfer/router", ["exports", "tunesfer/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('search', {
      path: '/'
    });
    this.route('playlist', {
      path: ':playlist_id'
    });
    this.route('legacy-playlist', {
      path: ':user_id/playlist/:playlist_id'
    });
    this.route('about');
  });
});
;define("tunesfer/routes/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class AboutRoute extends Ember.Route {}

  _exports.default = AboutRoute;
});
;define("tunesfer/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationRoute extends Ember.Route {}

  _exports.default = ApplicationRoute;
});
;define("tunesfer/routes/legacy-playlist", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class LegacyPlaylistRoute extends Ember.Route {}

  _exports.default = LegacyPlaylistRoute;
});
;define("tunesfer/routes/playlist", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let PlaylistRoute = (_class = (_temp = class PlaylistRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "tunesfer", _descriptor, this);
    }

    async model({
      playlist_id: playlistId
    }) {
      try {
        const playlist = await this.tunesfer.getSpotifyPlaylist(playlistId);
        return {
          playlist
        };
      } catch {
        this.transitionTo('search').then(searchRoute => {
          searchRoute.controller.set('error', 'Unable to load playlist');
        });
      }
    }

    setupController(controller) {
      super.setupController(...arguments); // Reset all tasks.

      controller.authorize.cancelAll({
        resetState: true
      });
      controller.addPlaylist.cancelAll({
        resetState: true
      });
      controller.processTrack.cancelAll({
        resetState: true
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tunesfer", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = PlaylistRoute;
});
;define("tunesfer/routes/search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SearchRoute extends Ember.Route {}

  _exports.default = SearchRoute;
});
;define("tunesfer/services/tunesfer", ["exports", "fetch", "tunesfer/models/playlist", "tunesfer/models/track-item"], function (_exports, _fetch, _playlist, _trackItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  const TUNESFER_API = 'https://api.tunesfer.com';
  const APPLE_MUSIC_API = 'https://api.music.apple.com';

  class TunesferService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "musicKit", MusicKit.getInstance());
    }

    /**
     * Indicates if the current user is authorized.
     */
    get isAuthorized() {
      return this.musicKit.isAuthorized;
    }
    /**
     * Returns the headers required for a request.
     */


    get headers() {
      return {
        Authorization: `Bearer ${this.musicKit.api.developerToken}`,
        'Music-User-Token': this.musicKit.api.userToken
      };
    }
    /**
     * Authorizes the user with Apple Music.
     *
     * @returns {bool} A success flag.
     */


    async authorize() {
      try {
        await this.musicKit.authorize();
        return true;
      } catch {
        return false;
      } finally {
        this.notifyPropertyChange('isAuthorized');
      }
    }
    /**
     * Fetches a playlist from Spotify and returns a Playlist object.
     *
     * @param {string} playlistId The ID of the playlist.
     * @param {boolean} fetchAllTracks Indicates if all of the tracks should be fetched.
     * @returns {Playlist} The fetched playlist.
     */


    async getSpotifyPlaylist(playlistId, fetchAllTracks = false) {
      let requestUrl = `${TUNESFER_API}/playlist/${playlistId}`;

      if (fetchAllTracks) {
        requestUrl += '?fetchAllTracks=true';
      }

      return (0, _fetch.default)(requestUrl).then(response => {
        return response.json();
      }).then(json => {
        const playlist = _playlist.default.create(json);

        playlist.tracks.items = playlist.tracks.items.map(trackItem => _trackItem.default.create(trackItem));
        return playlist;
      });
    }
    /**
     * Searches for a playlist in the user's library with the passed in name.
     *
     * @param {string} name The name of the playlist to search for.
     * @returns {Object|null} The Apple Music playlist that was found or null if it wasn't.
     */


    async findPlaylist(name) {
      const searchResults = await this.musicKit.api.library.search(name, {
        types: 'library-playlists'
      });
      const foundPlaylist = searchResults['library-playlists'].data.find(playlist => {
        return playlist.attributes.name.toLowerCase() === name.toLowerCase();
      });
      return foundPlaylist || null;
    }
    /**
     * Fetches a playlist and all of its songs from the user's library.
     *
     * @param {string} playlistId The id of the playlist to fetch.
     * @returns {Object|null} The Apple Music playlist or null if it couldn't be found.
     */


    async getPlaylist(playlistId) {
      const playlist = await this.musicKit.api.library.playlist(playlistId);

      if (!playlist) {
        return null;
      } // Fetch all of the tracks and add it as a new property in the playlist.


      let tracks = playlist.relationships.tracks.data;
      let next = playlist.relationships.tracks.next;

      while (next) {
        const result = await (0, _fetch.default)(`${APPLE_MUSIC_API}/${next}`, {
          method: 'GET',
          headers: this.headers
        });
        const resultJSON = await result.json();
        tracks = tracks.concat(resultJSON.data);
        next = resultJSON.next;
      }

      playlist.tracks = tracks;
      return playlist;
    }
    /**
     * Creates a playlist.
     *
     * Note: We have to send a request instead of using MusicKit as there's no way of creating a playlist using the
     * library. MusicKit conveniently provides the required tokens.
     *
     * @param {string} name The name of the playlist.
     * @param {string} description The description of the playlist.
     * @returns {Object} An Apple Music playlist object.
     */


    async createPlaylist(name, description) {
      const result = await (0, _fetch.default)(`${APPLE_MUSIC_API}/v1/me/library/playlists`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          attributes: {
            name,
            description
          }
        })
      });
      const resultJSON = await result.json();
      const playlist = resultJSON.data[0];
      playlist.tracks = []; // TODO: Create model?

      return playlist;
    }
    /**
     * Searches for a song based on a Spotify track object.
     *
     * @param {Object} track The Spotify track to search for.
     * @returns {Object|null} The Apple Music song object or null if one could not be found.
     */


    async findSpotifySong(track) {
      let albumName = track.album.name;
      let artistName = track.artists[0].name;
      let trackName = track.name; // Attempt to find the song based on all of the information presented.

      const fullSearchResult = await this.findSong(`${trackName}, ${artistName}, ${albumName}`);

      if (fullSearchResult) {
        return fullSearchResult;
      } // Attempt to find the song with just the track and artist.


      const trackArtistSearchResult = await this.findSong(`${trackName}, ${artistName}`);

      if (trackArtistSearchResult) {
        return trackArtistSearchResult;
      } // Try stripping anything following a hyphen in the track name.
      // This is usually "Remastered" or "Anniversary version".


      let hyphenIndex = trackName.indexOf('-');

      if (hyphenIndex !== -1) {
        let minimalTrackName = trackName.substring(0, hyphenIndex - 1);
        const minimalTrackArtistSearchResult = await this.findSong(`${minimalTrackName}, ${artistName}`);

        if (minimalTrackArtistSearchResult) {
          return minimalTrackArtistSearchResult;
        }
      } // Couldn't find it :(.


      return null;
    }
    /**
     * Searches for a song with a string.
     *
     * @param {string} query The song to search for.
     * @returns {Object} The Apple Music song object or null if one could not be found.
     */


    async findSong(query) {
      const result = await this.musicKit.api.search(query);

      if (result.songs && result.songs.data && result.songs.data[0]) {
        return result.songs.data[0];
      }

      return null;
    }
    /**
     * Adds a song to a playlist.
     *
     * @param {Object} song The song to add.
     * @param {Object} playlist The playlist to add the song to.
     */


    async addSongToPlaylist(song, playlist) {
      return this.addSongsToPlaylist([song], playlist);
    }
    /**
     * Adds multiple songs to a playlist.
     *
     * @param {Array[Object]} songs The songs to add.
     * @param {Object} playlist The playlist to add the song to.
     */


    async addSongsToPlaylist(songs, playlist) {
      return await (0, _fetch.default)(`https://api.music.apple.com/v1/me/library/playlists/${playlist.id}/tracks`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.musicKit.api.developerToken}`,
          'Music-User-Token': this.musicKit.api.userToken
        },
        body: JSON.stringify({
          data: songs.map(song => {
            return {
              id: song.id
            };
          })
        })
      });
    }

  }

  _exports.default = TunesferService;
});
;define("tunesfer/styles/app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {};
  _exports.default = _default;
});
;define("tunesfer/styles/playlist", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "info-container": "_info-container_fyak6l",
    "info-indicator": "_info-indicator_fyak6l",
    "loading": "_loading_fyak6l",
    "info-text": "_info-text_fyak6l",
    "info-success": "_info-success_fyak6l",
    "cancel-button": "_cancel-button_fyak6l",
    "track-list": "_track-list_fyak6l",
    "info-bar-container": "_info-bar-container_fyak6l",
    "more-tracks-info": "_more-tracks-info_fyak6l"
  };
  _exports.default = _default;
});
;define("tunesfer/styles/reset", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {};
  _exports.default = _default;
});
;define("tunesfer/styles/search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "search-container": "_search-container_1y3fu9",
    "logo-container": "_logo-container_1y3fu9",
    "logo": "_logo_1y3fu9",
    "or": "_or_1y3fu9",
    "bottom-links": "_bottom-links_1y3fu9",
    "beta-tag": "_beta-tag_1y3fu9",
    "error-bar": "_error-bar_1y3fu9",
    "hidden": "_hidden_1y3fu9"
  };
  _exports.default = _default;
});
;define("tunesfer/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JXn1OmAC",
    "block": "{\"symbols\":[],\"statements\":[[5,\"link-to\",[],[[\"@route\"],[\"application\"]],{\"statements\":[[5,\"back-button\",[],[[],[]]]],\"parameters\":[]}],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"About\"],[9],[0,\"\\n\\n\"],[7,\"p\",true],[8],[0,\"There are so many cool Spotify playlists out there with no easy way of pulling them into Apple Music. So I created Tunesfer!\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Notably, Tunesfer does all of the Apple Music requests directly so there's no reason to give your Apple ID password to anyone but Apple. It also doesn't require you to have a Spotify account to transfer playlists, just use any public playlist link.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"If you have any ideas or questions please feel free to contact me via \"],[7,\"a\",true],[10,\"href\",\"mailto:contact@tunesfer.com\"],[8],[0,\"contact@tunesfer.com\"],[9],[0,\" or jump over to the \"],[7,\"a\",true],[10,\"href\",\"https://github.com/astephensen/tunesfer-web\"],[8],[0,\"Github repository\"],[9],[0,\" if you want to contribute!\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"- Alan\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "tunesfer/templates/about.hbs"
    }
  });

  _exports.default = _default;
});
;define("tunesfer/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "80UnvAfP",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[1,[22,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[5,\"feedback-button\",[],[[],[]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "tunesfer/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("tunesfer/templates/legacy-playlist", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ekc01ZBQ",
    "block": "{\"symbols\":[],\"statements\":[[0,\"TODO: Handle legacy playlist url /userId/playlist/playlistId\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "tunesfer/templates/legacy-playlist.hbs"
    }
  });

  _exports.default = _default;
});
;define("tunesfer/templates/playlist-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "IH6SA1yX",
    "block": "{\"symbols\":[],\"statements\":[[5,\"link-to\",[],[[\"@route\"],[\"application\"]],{\"statements\":[[5,\"back-button\",[],[[],[]]]],\"parameters\":[]}],[0,\"\\n\\n\"],[5,\"playlist-info\",[],[[\"@loading\"],[true]],{\"statements\":[[0,\"\\n  \"],[5,\"loading-indicator\",[],[[],[]]],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "tunesfer/templates/playlist-loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("tunesfer/templates/playlist", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Pdb08Wto",
    "block": "{\"symbols\":[\"trackItem\",\"trackIndex\"],\"statements\":[[5,\"link-to\",[],[[\"@route\"],[\"application\"]],{\"statements\":[[5,\"back-button\",[],[[],[]]]],\"parameters\":[]}],[0,\"\\n\\n\"],[5,\"playlist-info\",[],[[\"@image\",\"@name\",\"@description\",\"@author\"],[[23,0,[\"model\",\"playlist\",\"images\",\"firstObject\",\"url\"]],[23,0,[\"model\",\"playlist\",\"name\"]],[23,0,[\"model\",\"playlist\",\"description\"]],[23,0,[\"model\",\"playlist\",\"owner\",\"display_name\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"if\",[[23,0,[\"addPlaylist\",\"isIdle\"]]],null,{\"statements\":[[4,\"unless\",[[23,0,[\"addPlaylist\",\"lastSuccessful\"]]],null,{\"statements\":[[4,\"if\",[[23,0,[\"tunesfer\",\"isAuthorized\"]]],null,{\"statements\":[[0,\"        \"],[5,\"music-button\",[],[[\"@title\",\"@action\"],[\"Add to Apple Music\",[28,\"perform\",[[23,0,[\"addPlaylist\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[5,\"music-button\",[],[[\"@title\",\"@action\"],[\"Log in to Apple Music\",[28,\"perform\",[[23,0,[\"authorize\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n\\n\"],[4,\"if\",[[23,0,[\"addPlaylist\",\"isRunning\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"info-container\"],[[\"from\"],[\"tunesfer/styles/playlist\"]]]]]],[8],[0,\"\\n    \"],[5,\"info-bar\",[],[[],[]],{\"statements\":[[0,\"\\n      \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"info-indicator\"],[[\"from\"],[\"tunesfer/styles/playlist\"]]]]]],[8],[0,\"\\n        \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"loading\"],[[\"from\"],[\"tunesfer/styles/playlist\"]]]]]],[8],[5,\"loading-indicator\",[],[[\"@white\"],[true]]],[9],[0,\"\\n        \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"info-text\"],[[\"from\"],[\"tunesfer/styles/playlist\"]]]]]],[8],[0,\"This playlist is being added to your Apple Music library. You will need to keep this window open until it is done.\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"button\",false],[12,\"class\",[29,[[28,\"local-class\",[\"cancel-button\"],[[\"from\"],[\"tunesfer/styles/playlist\"]]]]]],[12,\"type\",\"button\"],[3,\"on\",[\"click\",[23,0,[\"cancel\"]]]],[8],[0,\"Cancel\"],[9],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,0,[\"addPlaylist\",\"lastSuccessful\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"info-container info-success\"],[[\"from\"],[\"tunesfer/styles/playlist\"]]]]]],[8],[0,\"\\n    \"],[5,\"info-bar\",[],[[\"@text\"],[\"All done! This playlist is now in your Apple Music library. Note that it may take a few moments for all of the songs to show up!\"]]],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"track-list\"],[[\"from\"],[\"tunesfer/styles/playlist\"]]]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\",\"playlist\",\"tracks\",\"items\"]]],null,{\"statements\":[[0,\"    \"],[5,\"track\",[],[[\"@index\",\"@name\",\"@artist\",\"@album\",\"@duration\",\"@state\"],[[28,\"add-one\",[[23,2,[]]],null],[23,1,[\"track\",\"name\"]],[23,1,[\"track\",\"artists\",\"firstObject\",\"name\"]],[23,1,[\"track\",\"album\",\"name\"]],[28,\"format-milliseconds\",[[23,1,[\"track\",\"duration_ms\"]]],null],[23,1,[\"state\"]]]]],[0,\"\\n\"]],\"parameters\":[1,2]},null],[9],[0,\"\\n\\n\"],[4,\"if\",[[23,0,[\"additionalTracksAvailable\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"info-bar-container\"],[[\"from\"],[\"tunesfer/styles/playlist\"]]]]]],[8],[0,\"\\n    \"],[5,\"info-bar\",[[12,\"class\",[29,[[28,\"local-class\",[\"more-tracks-info\"],[[\"from\"],[\"tunesfer/styles/playlist\"]]]]]]],[[\"@text\"],[[29,[\"Plus \",[23,0,[\"additionalTracksAvailable\"]],\" more tunes not shown\"]]]]],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "tunesfer/templates/playlist.hbs"
    }
  });

  _exports.default = _default;
});
;define("tunesfer/templates/search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "T/BoQhUU",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"search-container\"],[[\"from\"],[\"tunesfer/styles/search\"]]]]]],[8],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"logo-container\"],[[\"from\"],[\"tunesfer/styles/search\"]]]]]],[8],[1,[28,\"svg-jar\",[\"logo\"],[[\"height\",\"width\",\"class\"],[\"50px\",\"50px\",[28,\"concat\",[[28,\"local-class\",[\"logo\"],[[\"from\"],[\"tunesfer/styles/search\"]]]],null]]]],false],[7,\"h1\",true],[8],[0,\"Tunesfer\"],[9],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"beta-tag\"],[[\"from\"],[\"tunesfer/styles/search\"]]]]]],[8],[0,\"BETA\"],[9],[9],[0,\"\\n  \"],[7,\"h2\",true],[8],[0,\"Transfer Spotify playlists to Apple Music!\"],[9],[0,\"\\n  \"],[5,\"playlist-search\",[],[[\"@value\",\"@enter\",\"@input\",\"@placeholder\"],[[23,0,[\"playlistUrl\"]],[23,0,[\"loadPlaylist\"]],[23,0,[\"validatePlaylist\"]],\"Enter a Spotify playlist link\"]]],[0,\"\\n  \"],[5,\"info-bar\",[[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"error-bar \",[28,\"if\",[[23,0,[\"hideInvalidLink\"]],\"hidden\"],null]],null]],[[\"from\"],[\"tunesfer/styles/search\"]]]]]]],[[\"@text\"],[\"Are you sure that's a Spotify playlist link?\"]]],[0,\"\\n  \"],[5,\"info-bar\",[[12,\"class\",[29,[[28,\"local-class\",[[28,\"concat\",[\"error-bar \",[28,\"unless\",[[23,0,[\"error\"]],\"hidden\"],null]],null]],[[\"from\"],[\"tunesfer/styles/search\"]]]]]]],[[\"@text\"],[\"That playlist could not be found. Please make sure it is public and try again.\"]]],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[28,\"local-class\",[\"or\"],[[\"from\"],[\"tunesfer/styles/search\"]]]]]],[8],[0,\"- or -\"],[9],[0,\"\\n  \"],[5,\"music-button\",[],[[\"@large\",\"@hideImage\",\"@title\",\"@action\"],[\"true\",\"true\",\"Try some Australian Indie?\",[23,0,[\"randomPlaylist\"]]]]],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "tunesfer/templates/search.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('tunesfer/config/environment', [], function() {
  var prefix = 'tunesfer';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("tunesfer/app")["default"].create({"name":"tunesfer","version":"0.0.0+204b8166"});
          }
        
//# sourceMappingURL=tunesfer.map
