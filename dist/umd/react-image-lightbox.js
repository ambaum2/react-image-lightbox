(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-modal"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-modal"], factory);
	else if(typeof exports === 'object')
		exports["ReactImageLightbox"] = factory(require("react"), require("react-modal"));
	else
		root["ReactImageLightbox"] = factory(root["react"], root["react-modal"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
	                                                                                                                                                                                                                                                                   * react-image-lightbox
	                                                                                                                                                                                                                                                                   * Copyright 2016 Chris Fritz All rights reserved.
	                                                                                                                                                                                                                                                                   * @license Open source under the MIT License
	                                                                                                                                                                                                                                                                   */

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactModal = __webpack_require__(3);

	var _reactModal2 = _interopRequireDefault(_reactModal);

	var _util = __webpack_require__(4);

	var _constant = __webpack_require__(5);

	var _style = __webpack_require__(6);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Add fallback classes for browsers without flexbox support
	var styles = _style2.default;
	var _ieVersion = (0, _util.getIEVersion)();
	if (_ieVersion < 10) {
	    styles = _extends({}, styles, {
	        toolbarSide: styles.toolbarSide + ' ' + styles.toolbarSideNoFlex,
	        toolbarLeftSide: styles.toolbarLeftSide + ' ' + styles.toolbarLeftSideNoFlex,
	        toolbarRightSide: styles.toolbarRightSide + ' ' + styles.toolbarRightSideNoFlex
	    });
	}

	var ReactImageLightbox = function (_Component) {
	    _inherits(ReactImageLightbox, _Component);

	    function ReactImageLightbox(props) {
	        _classCallCheck(this, ReactImageLightbox);

	        var _this = _possibleConstructorReturn(this, (ReactImageLightbox.__proto__ || Object.getPrototypeOf(ReactImageLightbox)).call(this, props));

	        _this.state = {
	            //-----------------------------
	            // Animation
	            //-----------------------------

	            // Lightbox is closing
	            // When Lightbox is mounted, if animation is enabled it will open with the reverse of the closing animation
	            isClosing: !props.animationDisabled,

	            // Component parts should animate (e.g., when images are moving, or image is being zoomed)
	            shouldAnimate: false,

	            //-----------------------------
	            // Zoom settings
	            //-----------------------------
	            // Zoom level of image
	            zoomLevel: _constant.MIN_ZOOM_LEVEL,

	            //-----------------------------
	            // Image position settings
	            //-----------------------------
	            // Horizontal offset from center
	            offsetX: 0,

	            // Vertical offset from center
	            offsetY: 0
	        };

	        _this.closeIfClickInner = _this.closeIfClickInner.bind(_this);
	        _this.handleImageDoubleClick = _this.handleImageDoubleClick.bind(_this);
	        _this.handleImageMouseWheel = _this.handleImageMouseWheel.bind(_this);
	        _this.handleKeyInput = _this.handleKeyInput.bind(_this);
	        _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	        _this.handleOuterMouseDown = _this.handleOuterMouseDown.bind(_this);
	        _this.handleOuterMouseMove = _this.handleOuterMouseMove.bind(_this);
	        _this.handleOuterMousewheel = _this.handleOuterMousewheel.bind(_this);
	        _this.handleOuterTouchStart = _this.handleOuterTouchStart.bind(_this);
	        _this.handleOuterTouchMove = _this.handleOuterTouchMove.bind(_this);
	        _this.handleCaptionMousewheel = _this.handleCaptionMousewheel.bind(_this);
	        _this.handleWindowResize = _this.handleWindowResize.bind(_this);
	        _this.handleZoomInButtonClick = _this.handleZoomInButtonClick.bind(_this);
	        _this.handleZoomOutButtonClick = _this.handleZoomOutButtonClick.bind(_this);
	        _this.requestClose = _this.requestClose.bind(_this);
	        _this.requestMoveNext = _this.requestMoveNext.bind(_this);
	        _this.requestMovePrev = _this.requestMovePrev.bind(_this);
	        return _this;
	    }

	    _createClass(ReactImageLightbox, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            // Whether event listeners for keyboard and mouse input have been attached or not
	            this.listenersAttached = false;

	            // Used to disable animation when changing props.mainSrc|nextSrc|prevSrc
	            this.keyPressed = false;

	            // Used to store load state / dimensions of images
	            this.imageCache = {};

	            // Time the last keydown event was called (used in keyboard action rate limiting)
	            this.lastKeyDownTime = 0;

	            // Used for debouncing window resize event
	            this.resizeTimeout = null;

	            // Used to determine when actions are triggered by the scroll wheel
	            this.wheelActionTimeout = null;
	            this.resetScrollTimeout = null;
	            this.scrollX = 0;
	            this.scrollY = 0;

	            // Used in panning zoomed images
	            this.isDragging = false;
	            this.dragStartX = 0;
	            this.dragStartY = 0;
	            this.dragStartOffsetX = 0;
	            this.dragStartOffsetY = 0;

	            // Used to differentiate between images with identical src
	            this.keyCounter = 0;

	            // Used to detect a move when all src's remain unchanged (four or more of the same image in a row)
	            this.moveRequested = false;

	            if (!this.props.animationDisabled) {
	                // Make opening animation play
	                this.setState({ isClosing: false });
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.mounted = true;
	            this.attachListeners();

	            this.loadAllImages();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this2 = this;

	            // Iterate through the source types for prevProps and nextProps to
	            //  determine if any of the sources changed
	            var sourcesChanged = false;
	            var prevSrcDict = {};
	            var nextSrcDict = {};
	            this.getSrcTypes().forEach(function (srcType) {
	                if (_this2.props[srcType.name] !== nextProps[srcType.name]) {
	                    sourcesChanged = true;

	                    prevSrcDict[_this2.props[srcType.name]] = true;
	                    nextSrcDict[nextProps[srcType.name]] = true;
	                }
	            });

	            if (sourcesChanged || this.moveRequested) {
	                // Reset the loaded state for images not rendered next
	                Object.keys(prevSrcDict).forEach(function (prevSrc) {
	                    if (!(prevSrc in nextSrcDict) && prevSrc in _this2.imageCache) {
	                        _this2.imageCache[prevSrc].loaded = false;
	                    }
	                });

	                this.moveRequested = false;

	                // Load any new images
	                this.loadAllImages(nextProps);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.mounted = false;
	            this.detachListeners();
	        }

	        // Attach key and mouse input events

	    }, {
	        key: 'attachListeners',
	        value: function attachListeners() {
	            if (!this.listenersAttached && typeof window !== 'undefined') {
	                window.addEventListener('resize', this.handleWindowResize);
	                window.addEventListener('mouseup', this.handleMouseUp);
	                window.addEventListener('touchend', this.handleMouseUp);

	                // Have to add an extra mouseup handler to catch mouseup events outside of the window
	                //  if the page containing the lightbox is displayed in an iframe
	                if ((0, _util.isInIframe)()) {
	                    window.top.addEventListener('mouseup', this.handleMouseUp);
	                    window.top.addEventListener('touchend', this.handleMouseUp);
	                }

	                this.listenersAttached = true;
	            }
	        }

	        // Change zoom level

	    }, {
	        key: 'changeZoom',
	        value: function changeZoom(zoomLevel, clientX, clientY) {
	            // Ignore if zoom disabled
	            if (!this.props.enableZoom) {
	                return;
	            }

	            // Constrain zoom level to the set bounds
	            var nextZoomLevel = Math.max(_constant.MIN_ZOOM_LEVEL, Math.min(_constant.MAX_ZOOM_LEVEL, zoomLevel));

	            // Ignore requests that don't change the zoom level
	            if (nextZoomLevel === this.state.zoomLevel) {
	                return;
	            } else if (nextZoomLevel === _constant.MIN_ZOOM_LEVEL) {
	                // Snap back to center if zoomed all the way out
	                return this.setState({
	                    zoomLevel: nextZoomLevel,
	                    offsetX: 0,
	                    offsetY: 0
	                });
	            }

	            var imageBaseSize = this.getBestImageForType('mainSrc');
	            if (imageBaseSize === null) {
	                return;
	            }

	            var currentZoomMultiplier = this.getZoomMultiplier();
	            var nextZoomMultiplier = this.getZoomMultiplier(nextZoomLevel);

	            // Default to the center of the image to zoom when no mouse position specified
	            var boxRect = this.getLightboxRect();
	            var pointerX = typeof clientX !== 'undefined' ? clientX - boxRect.left : boxRect.width / 2;
	            var pointerY = typeof clientY !== 'undefined' ? clientY - boxRect.top : boxRect.height / 2;

	            var currentImageOffsetX = (boxRect.width - imageBaseSize.width * currentZoomMultiplier) / 2;
	            var currentImageOffsetY = (boxRect.height - imageBaseSize.height * currentZoomMultiplier) / 2;

	            var currentImageRealOffsetX = currentImageOffsetX - this.state.offsetX;
	            var currentImageRealOffsetY = currentImageOffsetY - this.state.offsetY;

	            var currentPointerXRelativeToImage = (pointerX - currentImageRealOffsetX) / currentZoomMultiplier;
	            var currentPointerYRelativeToImage = (pointerY - currentImageRealOffsetY) / currentZoomMultiplier;

	            var nextImageRealOffsetX = pointerX - currentPointerXRelativeToImage * nextZoomMultiplier;
	            var nextImageRealOffsetY = pointerY - currentPointerYRelativeToImage * nextZoomMultiplier;

	            var nextImageOffsetX = (boxRect.width - imageBaseSize.width * nextZoomMultiplier) / 2;
	            var nextImageOffsetY = (boxRect.height - imageBaseSize.height * nextZoomMultiplier) / 2;

	            var nextOffsetX = nextImageOffsetX - nextImageRealOffsetX;
	            var nextOffsetY = nextImageOffsetY - nextImageRealOffsetY;

	            // When zooming out, limit the offset so things don't get left askew
	            var maxOffsets = this.getMaxOffsets();
	            if (this.state.zoomLevel > nextZoomLevel) {
	                nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, nextOffsetX));
	                nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, nextOffsetY));
	            }

	            this.setState({
	                zoomLevel: nextZoomLevel,
	                offsetX: nextOffsetX,
	                offsetY: nextOffsetY
	            });
	        }
	    }, {
	        key: 'closeIfClickInner',
	        value: function closeIfClickInner(event) {
	            if (event.target.className.search(/\binner\b/) > -1) {
	                this.requestClose(event);
	            }
	        }

	        // Detach key and mouse input events

	    }, {
	        key: 'detachListeners',
	        value: function detachListeners() {
	            if (this.listenersAttached) {
	                window.removeEventListener('resize', this.handleWindowResize);
	                window.removeEventListener('mouseup', this.handleMouseUp);
	                window.removeEventListener('touchend', this.handleMouseUp);

	                if ((0, _util.isInIframe)()) {
	                    window.top.removeEventListener('mouseup', this.handleMouseUp);
	                    window.top.removeEventListener('touchend', this.handleMouseUp);
	                }

	                this.listenersAttached = false;
	            }
	        }

	        // Get info for the best suited image to display with the given srcType

	    }, {
	        key: 'getBestImageForType',
	        value: function getBestImageForType(srcType) {
	            var imageSrc = this.props[srcType];
	            var fitSizes = {};

	            if (this.isImageLoaded(imageSrc)) {
	                // Use full-size image if available
	                fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height);
	            } else if (this.isImageLoaded(this.props[srcType + 'Thumbnail'])) {
	                // Fall back to using thumbnail if the image has not been loaded
	                imageSrc = this.props[srcType + 'Thumbnail'];
	                fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height, true);
	            } else {
	                return null;
	            }

	            return {
	                src: imageSrc,
	                height: fitSizes.height,
	                width: fitSizes.width
	            };
	        }

	        // Get sizing for when an image is larger than the window

	    }, {
	        key: 'getFitSizes',
	        value: function getFitSizes(width, height, stretch) {
	            var boxSize = this.getLightboxRect();
	            var maxHeight = boxSize.height - this.props.imagePadding * 2;
	            var maxWidth = boxSize.width - this.props.imagePadding * 2;

	            if (!stretch) {
	                maxHeight = Math.min(maxHeight, height);
	                maxWidth = Math.min(maxWidth, width);
	            }

	            var maxRatio = maxWidth / maxHeight;
	            var srcRatio = width / height;

	            if (maxRatio > srcRatio) {
	                // height is the constraining dimension of the photo
	                return {
	                    width: width * maxHeight / height,
	                    height: maxHeight
	                };
	            }

	            return {
	                width: maxWidth,
	                height: height * maxWidth / width
	            };
	        }
	    }, {
	        key: 'getMaxOffsets',
	        value: function getMaxOffsets() {
	            var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;

	            var currentImageInfo = this.getBestImageForType('mainSrc');
	            if (currentImageInfo === null) {
	                return { maxX: 0, minX: 0, maxY: 0, minY: 0 };
	            }

	            var boxSize = this.getLightboxRect();
	            var zoomMultiplier = this.getZoomMultiplier(zoomLevel);

	            var maxX = 0;
	            if (zoomMultiplier * currentImageInfo.width - boxSize.width < 0) {
	                // if there is still blank space in the X dimension, don't limit except to the opposite edge
	                maxX = (boxSize.width - zoomMultiplier * currentImageInfo.width) / 2;
	            } else {
	                maxX = (zoomMultiplier * currentImageInfo.width - boxSize.width) / 2;
	            }

	            var maxY = 0;
	            if (zoomMultiplier * currentImageInfo.height - boxSize.height < 0) {
	                // if there is still blank space in the Y dimension, don't limit except to the opposite edge
	                maxY = (boxSize.height - zoomMultiplier * currentImageInfo.height) / 2;
	            } else {
	                maxY = (zoomMultiplier * currentImageInfo.height - boxSize.height) / 2;
	            }

	            return {
	                maxX: maxX,
	                maxY: maxY,
	                minX: -1 * maxX,
	                minY: -1 * maxY
	            };
	        }

	        // Get image src types

	    }, {
	        key: 'getSrcTypes',
	        value: function getSrcTypes() {
	            return [{
	                name: 'mainSrc',
	                keyEnding: 'i' + this.keyCounter
	            }, {
	                name: 'mainSrcThumbnail',
	                keyEnding: 't' + this.keyCounter
	            }, {
	                name: 'nextSrc',
	                keyEnding: 'i' + (this.keyCounter + 1)
	            }, {
	                name: 'nextSrcThumbnail',
	                keyEnding: 't' + (this.keyCounter + 1)
	            }, {
	                name: 'prevSrc',
	                keyEnding: 'i' + (this.keyCounter - 1)
	            }, {
	                name: 'prevSrcThumbnail',
	                keyEnding: 't' + (this.keyCounter - 1)
	            }];
	        }

	        /**
	         * Get sizing when the image is scaled
	         */

	    }, {
	        key: 'getZoomMultiplier',
	        value: function getZoomMultiplier() {
	            var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;

	            return Math.pow(_constant.ZOOM_RATIO, zoomLevel);
	        }

	        /**
	         * Get the size of the lightbox in pixels
	         */

	    }, {
	        key: 'getLightboxRect',
	        value: function getLightboxRect() {
	            if (this.outerEl) {
	                return this.outerEl.getBoundingClientRect();
	            }

	            return {
	                width: (0, _util.getWindowWidth)(),
	                height: (0, _util.getWindowHeight)(),
	                top: 0,
	                right: 0,
	                bottom: 0,
	                left: 0
	            };
	        }

	        /**
	         * Handle user keyboard actions
	         */

	    }, {
	        key: 'handleKeyInput',
	        value: function handleKeyInput(event) {
	            event.stopPropagation();

	            // Ignore key input during animations
	            if (this.isAnimating()) {
	                return;
	            }

	            // Allow slightly faster navigation through the images when user presses keys repeatedly
	            if (event.type === 'keyup') {
	                this.lastKeyDownTime -= this.props.keyRepeatKeyupBonus;
	                return;
	            }

	            var keyCode = event.which || event.keyCode;

	            // Ignore key presses that happen too close to each other (when rapid fire key pressing or holding down the key)
	            // But allow it if it's a lightbox closing action
	            var currentTime = new Date();
	            if (currentTime.getTime() - this.lastKeyDownTime < this.props.keyRepeatLimit && keyCode !== _constant.KEYS.ESC) {
	                return;
	            }
	            this.lastKeyDownTime = currentTime.getTime();

	            switch (keyCode) {
	                // ESC key closes the lightbox
	                case _constant.KEYS.ESC:
	                    event.preventDefault();
	                    this.requestClose(event);
	                    break;

	                // Left arrow key moves to previous image
	                case _constant.KEYS.LEFT_ARROW:
	                    if (!this.props.prevSrc) {
	                        return;
	                    }

	                    event.preventDefault();
	                    this.keyPressed = true;
	                    this.requestMovePrev(event);
	                    break;

	                // Right arrow key moves to next image
	                case _constant.KEYS.RIGHT_ARROW:
	                    if (!this.props.nextSrc) {
	                        return;
	                    }

	                    event.preventDefault();
	                    this.keyPressed = true;
	                    this.requestMoveNext(event);
	                    break;

	                default:
	            }
	        }

	        /**
	         * Handle a mouse wheel event over the lightbox container
	         */

	    }, {
	        key: 'handleOuterMousewheel',
	        value: function handleOuterMousewheel(event) {
	            var _this3 = this;

	            // Prevent scrolling of the background
	            event.preventDefault();
	            event.stopPropagation();

	            var xThreshold = _constant.WHEEL_MOVE_X_THRESHOLD;
	            var actionDelay = 0;
	            var imageMoveDelay = 500;

	            clearTimeout(this.resetScrollTimeout);
	            this.resetScrollTimeout = setTimeout(function () {
	                _this3.scrollX = 0;
	                _this3.scrollY = 0;
	            }, 300);

	            // Prevent rapid-fire zoom behavior
	            if (this.wheelActionTimeout !== null || this.isAnimating()) {
	                return;
	            }

	            if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
	                // handle horizontal scrolls with image moves
	                this.scrollY = 0;
	                this.scrollX += event.deltaX;

	                var bigLeapX = xThreshold / 2;
	                // If the scroll amount has accumulated sufficiently, or a large leap was taken
	                if (this.scrollX >= xThreshold || event.deltaX >= bigLeapX) {
	                    // Scroll right moves to next
	                    this.requestMoveNext(event);
	                    actionDelay = imageMoveDelay;
	                    this.scrollX = 0;
	                } else if (this.scrollX <= -1 * xThreshold || event.deltaX <= -1 * bigLeapX) {
	                    // Scroll left moves to previous
	                    this.requestMovePrev(event);
	                    actionDelay = imageMoveDelay;
	                    this.scrollX = 0;
	                }
	            }

	            // Allow successive actions after the set delay
	            if (actionDelay !== 0) {
	                this.wheelActionTimeout = setTimeout(function () {
	                    _this3.wheelActionTimeout = null;
	                }, actionDelay);
	            }
	        }
	    }, {
	        key: 'handleImageMouseWheel',
	        value: function handleImageMouseWheel(event) {
	            event.preventDefault();
	            var yThreshold = _constant.WHEEL_MOVE_Y_THRESHOLD;

	            if (Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
	                event.stopPropagation();
	                // If the vertical scroll amount was large enough, perform a zoom
	                if (Math.abs(event.deltaY) < yThreshold) {
	                    return;
	                }

	                this.scrollX = 0;
	                this.scrollY += event.deltaY;

	                this.changeZoom(this.state.zoomLevel - event.deltaY, event.clientX, event.clientY);
	            }
	        }

	        /**
	         * Handle a double click on the current image
	         */

	    }, {
	        key: 'handleImageDoubleClick',
	        value: function handleImageDoubleClick(event) {
	            if (this.state.zoomLevel > _constant.MIN_ZOOM_LEVEL) {
	                // A double click when zoomed in zooms all the way out
	                this.changeZoom(_constant.MIN_ZOOM_LEVEL, event.clientX, event.clientY);
	            } else {
	                // A double click when zoomed all the way out zooms in
	                this.changeZoom(this.state.zoomLevel + _constant.ZOOM_BUTTON_INCREMENT_SIZE, event.clientX, event.clientY);
	            }
	        }

	        /**
	         * Handle a mouse click ending in the lightbox container
	         */

	    }, {
	        key: 'handleMouseUp',
	        value: function handleMouseUp() {
	            var _this4 = this;

	            if (!this.isDragging) {
	                return;
	            }

	            this.isDragging = false;

	            // Snap image back into frame if outside max offset range
	            var maxOffsets = this.getMaxOffsets();
	            var nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, this.state.offsetX));
	            var nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, this.state.offsetY));
	            if (nextOffsetX !== this.state.offsetX || nextOffsetY !== this.state.offsetY) {
	                this.setState({
	                    offsetX: nextOffsetX,
	                    offsetY: nextOffsetY,
	                    shouldAnimate: true
	                });

	                setTimeout(function () {
	                    _this4.setState({ shouldAnimate: false });
	                }, this.props.animationDuration);
	            }
	        }

	        // Handle move start over the lightbox container
	        // This happens:
	        // - On a mouseDown event
	        // - On a touchstart event

	    }, {
	        key: 'handleMoveStart',
	        value: function handleMoveStart(clientX, clientY) {
	            // Only allow dragging when zoomed
	            if (this.state.zoomLevel <= _constant.MIN_ZOOM_LEVEL) {
	                return;
	            }

	            this.isDragging = true;
	            this.dragStartX = clientX;
	            this.dragStartY = clientY;
	            this.dragStartOffsetX = this.state.offsetX;
	            this.dragStartOffsetY = this.state.offsetY;
	        }

	        // Handle the mouse clicking down in the lightbox container

	    }, {
	        key: 'handleOuterMouseDown',
	        value: function handleOuterMouseDown(event) {
	            event.preventDefault();
	            this.handleMoveStart(event.clientX, event.clientY);
	        }

	        // Touch screen version of handleOuterMouseDown()

	    }, {
	        key: 'handleOuterTouchStart',
	        value: function handleOuterTouchStart(event) {
	            var touchObj = event.changedTouches[0];
	            this.handleMoveStart(parseInt(touchObj.clientX, 10), parseInt(touchObj.clientY, 10));
	        }

	        // Handle dragging over the lightbox container
	        // This happens:
	        // - After a mouseDown and before a mouseUp event
	        // - After a touchstart and before a touchend event

	    }, {
	        key: 'handleMove',
	        value: function handleMove(clientX, clientY) {
	            if (!this.isDragging) {
	                return;
	            }

	            var newOffsetX = this.dragStartX - clientX + this.dragStartOffsetX;
	            var newOffsetY = this.dragStartY - clientY + this.dragStartOffsetY;
	            if (this.state.offsetX !== newOffsetX || this.state.offsetY !== newOffsetY) {
	                this.setState({
	                    offsetX: newOffsetX,
	                    offsetY: newOffsetY
	                });
	            }
	        }

	        // Handle the mouse dragging over the lightbox container
	        // (after a mouseDown and before a mouseUp event)

	    }, {
	        key: 'handleOuterMouseMove',
	        value: function handleOuterMouseMove(event) {
	            this.handleMove(event.clientX, event.clientY);
	        }

	        // Touch screen version of handleOuterMouseMove()

	    }, {
	        key: 'handleOuterTouchMove',
	        value: function handleOuterTouchMove(event) {
	            event.preventDefault();

	            // We shouldn't go any further if we're not zoomed
	            if (this.state.zoomLevel <= _constant.MIN_ZOOM_LEVEL) {
	                return;
	            }

	            var touchObj = event.changedTouches[0];
	            this.handleMove(parseInt(touchObj.clientX, 10), parseInt(touchObj.clientY, 10));
	        }

	        // Handle the window resize event

	    }, {
	        key: 'handleWindowResize',
	        value: function handleWindowResize() {
	            clearTimeout(this.resizeTimeout);
	            this.resizeTimeout = setTimeout(this.forceUpdate.bind(this), 100);
	        }
	    }, {
	        key: 'handleZoomInButtonClick',
	        value: function handleZoomInButtonClick() {
	            this.changeZoom(this.state.zoomLevel + _constant.ZOOM_BUTTON_INCREMENT_SIZE);
	        }
	    }, {
	        key: 'handleZoomOutButtonClick',
	        value: function handleZoomOutButtonClick() {
	            this.changeZoom(this.state.zoomLevel - _constant.ZOOM_BUTTON_INCREMENT_SIZE);
	        }
	    }, {
	        key: 'handleCaptionMousewheel',
	        value: function handleCaptionMousewheel(event) {
	            event.stopPropagation();

	            if (!this.caption) {
	                return;
	            }

	            var height = this.caption.getBoundingClientRect().height;
	            var scrollHeight = this.caption.scrollHeight;
	            var scrollTop = this.caption.scrollTop;
	            if (event.deltaY > 0 && height + scrollTop >= scrollHeight || event.deltaY < 0 && scrollTop <= 0) {
	                event.preventDefault();
	            }
	        }

	        // Detach key and mouse input events

	    }, {
	        key: 'isAnimating',
	        value: function isAnimating() {
	            return this.state.shouldAnimate || this.state.isClosing;
	        }

	        // Check if image is loaded

	    }, {
	        key: 'isImageLoaded',
	        value: function isImageLoaded(imageSrc) {
	            return imageSrc && imageSrc in this.imageCache && this.imageCache[imageSrc].loaded;
	        }

	        // Load image from src and call callback with image width and height on load

	    }, {
	        key: 'loadImage',
	        value: function loadImage(srcType, imageSrc, done) {
	            var _this5 = this;

	            // Return the image info if it is already cached
	            if (this.isImageLoaded(imageSrc)) {
	                setTimeout(function () {
	                    done();
	                }, 1);
	                return;
	            }

	            var that = this;
	            var inMemoryImage = new Image();

	            inMemoryImage.onerror = function (errorEvent) {
	                _this5.props.onImageLoadError(imageSrc, srcType, errorEvent);
	                done(errorEvent);
	            };

	            inMemoryImage.onload = function onLoad() {
	                that.imageCache[imageSrc] = {
	                    loaded: true,
	                    width: this.width,
	                    height: this.height
	                };

	                done();
	            };

	            inMemoryImage.src = imageSrc;
	        }

	        // Load all images and their thumbnails

	    }, {
	        key: 'loadAllImages',
	        value: function loadAllImages() {
	            var _this6 = this;

	            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

	            var generateLoadDoneCallback = function generateLoadDoneCallback(srcType, imageSrc) {
	                return function (err) {
	                    // Give up showing image on error
	                    if (err) {
	                        return;
	                    }

	                    // Don't rerender if the src is not the same as when the load started
	                    // or if the component has unmounted
	                    if (_this6.props[srcType] !== imageSrc || !_this6.mounted) {
	                        return;
	                    }

	                    // Force rerender with the new image
	                    _this6.forceUpdate();
	                };
	            };

	            // Load the images
	            this.getSrcTypes().forEach(function (srcType) {
	                var type = srcType.name;

	                // Load unloaded images
	                if (props[type] && !_this6.isImageLoaded(props[type])) {
	                    _this6.loadImage(type, props[type], generateLoadDoneCallback(type, props[type]));
	                }
	            });
	        }

	        // Request that the lightbox be closed

	    }, {
	        key: 'requestClose',
	        value: function requestClose(event) {
	            var _this7 = this;

	            // Call the parent close request
	            var closeLightbox = function closeLightbox() {
	                return _this7.props.onCloseRequest(event);
	            };

	            if (this.props.animationDisabled || event.type === 'keydown' && !this.props.animationOnKeyInput) {
	                // No animation
	                return closeLightbox();
	            }

	            // With animation
	            // Start closing animation
	            this.setState({ isClosing: true });

	            // Perform the actual closing at the end of the animation
	            setTimeout(closeLightbox, this.props.animationDuration);
	        }
	    }, {
	        key: 'requestMove',
	        value: function requestMove(direction, event) {
	            var _this8 = this;

	            // Reset the zoom level on image move
	            var nextState = {
	                zoomLevel: _constant.MIN_ZOOM_LEVEL,
	                offsetX: 0,
	                offsetY: 0
	            };

	            // Enable animated states
	            if (!this.props.animationDisabled && (!this.keyPressed || this.props.animationOnKeyInput)) {
	                nextState.shouldAnimate = true;
	                setTimeout(function () {
	                    return _this8.setState({ shouldAnimate: false });
	                }, this.props.animationDuration);
	            }
	            this.keyPressed = false;

	            this.moveRequested = true;

	            if (direction === 'prev') {
	                this.keyCounter--;
	                this.setState(nextState);
	                this.props.onMovePrevRequest(event);
	            } else {
	                this.keyCounter++;
	                this.setState(nextState);
	                this.props.onMoveNextRequest(event);
	            }
	        }

	        // Request to transition to the next image

	    }, {
	        key: 'requestMoveNext',
	        value: function requestMoveNext(event) {
	            this.requestMove('next', event);
	        }

	        // Request to transition to the previous image

	    }, {
	        key: 'requestMovePrev',
	        value: function requestMovePrev(event) {
	            this.requestMove('prev', event);
	        }

	        // Request to transition to the previous image

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this9 = this;

	            var _props = this.props,
	                animationDisabled = _props.animationDisabled,
	                animationDuration = _props.animationDuration,
	                clickOutsideToClose = _props.clickOutsideToClose,
	                discourageDownloads = _props.discourageDownloads,
	                enableZoom = _props.enableZoom,
	                imageTitle = _props.imageTitle,
	                nextSrc = _props.nextSrc,
	                prevSrc = _props.prevSrc,
	                toolbarButtons = _props.toolbarButtons,
	                reactModalStyle = _props.reactModalStyle,
	                showPrevNextButtons = _props.showPrevNextButtons;
	            var _state = this.state,
	                zoomLevel = _state.zoomLevel,
	                offsetX = _state.offsetX,
	                offsetY = _state.offsetY,
	                isClosing = _state.isClosing;


	            var boxSize = this.getLightboxRect();
	            var transitionStyle = {};

	            // Transition settings for sliding animations
	            if (!animationDisabled && this.isAnimating()) {
	                transitionStyle = _extends({}, transitionStyle, {
	                    transition: 'transform ' + animationDuration + 'ms'
	                });
	            }

	            // Key endings to differentiate between images with the same src
	            var keyEndings = {};
	            this.getSrcTypes().forEach(function (_ref) {
	                var name = _ref.name,
	                    keyEnding = _ref.keyEnding;

	                keyEndings[name] = keyEnding;
	            });

	            // Images to be displayed
	            var images = [];
	            var addImage = function addImage(srcType, imageClass) {
	                var baseStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	                // Ignore types that have no source defined for their full size image
	                if (!_this9.props[srcType]) {
	                    return;
	                }

	                var imageStyle = _extends({}, baseStyle, transitionStyle);
	                if (zoomLevel > _constant.MIN_ZOOM_LEVEL) {
	                    imageStyle.cursor = 'move';
	                }

	                var bestImageInfo = _this9.getBestImageForType(srcType);
	                if (bestImageInfo === null) {
	                    var loadingIcon = void 0;
	                    if (_ieVersion < 10) {
	                        loadingIcon = _react2.default.createElement(
	                            'div',
	                            { className: styles.loadingContainer__icon },
	                            (0, _util.translate)('Loading...')
	                        );
	                    } else {
	                        loadingIcon = _react2.default.createElement(
	                            'div',
	                            { className: 'ril-loading-circle ' + styles.loadingCircle + ' ' + styles.loadingContainer__icon },
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint }),
	                            _react2.default.createElement('div', { className: 'ril-loading-circle-point ' + styles.loadingCirclePoint })
	                        );
	                    }

	                    // Fall back to loading icon if the thumbnail has not been loaded
	                    images.push(_react2.default.createElement(
	                        'div',
	                        {
	                            className: imageClass + ' ' + styles.image + ' not-loaded ril-not-loaded',
	                            style: imageStyle,
	                            key: _this9.props[srcType] + keyEndings[srcType]
	                        },
	                        _react2.default.createElement(
	                            'div',
	                            { className: styles.loadingContainer },
	                            loadingIcon
	                        )
	                    ));

	                    return;
	                }

	                imageStyle.width = bestImageInfo.width;
	                imageStyle.height = bestImageInfo.height;

	                var imageSrc = bestImageInfo.src;
	                if (discourageDownloads) {
	                    imageStyle.backgroundImage = 'url(\'' + imageSrc + '\')';
	                    images.push(_react2.default.createElement(
	                        'div',
	                        {
	                            className: imageClass + ' ' + styles.image + ' ' + styles.imageDiscourager,
	                            onDoubleClick: _this9.handleImageDoubleClick,
	                            onWheel: _this9.handleImageMouseWheel,
	                            style: imageStyle,
	                            key: imageSrc + keyEndings[srcType]
	                        },
	                        _react2.default.createElement('div', { className: 'download-blocker ril-download-blocker ' + styles.downloadBlocker })
	                    ));
	                } else {
	                    images.push(_react2.default.createElement(
	                        'div',
	                        { key: 'img-container-' + imageSrc + keyEndings[srcType] },
	                        _react2.default.createElement('img', {
	                            onDoubleClick: _this9.handleImageDoubleClick,
	                            onWheel: _this9.handleImageMouseWheel,
	                            style: imageStyle,
	                            src: imageSrc,
	                            key: imageSrc + keyEndings[srcType],
	                            alt: imageTitle || (0, _util.translate)('Image'),
	                            useMap: '#lightbox-map-' + srcType,
	                            className: imageClass + ' ' + styles.image
	                        }),
	                        _react2.default.createElement(
	                            'map',
	                            { name: 'lightbox-map-' + srcType },
	                            _react2.default.createElement('area', {
	                                onClick: !_this9.isAnimating() ? _this9.requestMovePrev : function () {},
	                                shape: 'rect',
	                                coords: '0,' + (bestImageInfo.height - 150) + ',' + bestImageInfo.width / 2 + ',' + bestImageInfo.height,
	                                alt: 'aao stats prev',
	                                title: 'aao stats prev'
	                            }),
	                            _react2.default.createElement('area', {
	                                onClick: !_this9.isAnimating() ? _this9.requestMoveNext : function () {},
	                                shape: 'rect',
	                                coords: bestImageInfo.width / 2 + ',' + (bestImageInfo.height - 150) + ',' + bestImageInfo.width + ',' + bestImageInfo.height,
	                                alt: 'aao stats next',
	                                title: 'aao stats next'
	                            }),
	                            _react2.default.createElement('area', {
	                                onClick: !_this9.isAnimating() ? _this9.requestClose : function () {},
	                                shape: 'rect',
	                                coords: bestImageInfo.width - 50 + ',' + 0 + ',' + bestImageInfo.width + ',' + 50,
	                                alt: 'aao stats close',
	                                title: 'aao stats close'
	                            })
	                        )
	                    ));
	                }
	            };

	            var zoomMultiplier = this.getZoomMultiplier();
	            // Next Image (displayed on the right)
	            addImage('nextSrc', 'image-next ril-image-next ' + styles.imageNext, ReactImageLightbox.getTransform({ x: boxSize.width }));
	            // Main Image
	            addImage('mainSrc', 'image-current ril-image-current', ReactImageLightbox.getTransform({
	                x: -1 * offsetX,
	                y: -1 * offsetY,
	                zoom: zoomMultiplier
	            }));
	            // Previous Image (displayed on the left)
	            addImage('prevSrc', 'image-prev ril-image-prev ' + styles.imagePrev, ReactImageLightbox.getTransform({ x: -1 * boxSize.width }));

	            var noop = function noop() {};

	            // Prepare styles and handlers for the zoom in/out buttons
	            var zoomInButtonClasses = [styles.toolbarItemChild, styles.builtinButton, styles.zoomInButton];
	            var zoomOutButtonClasses = [styles.toolbarItemChild, styles.builtinButton, styles.zoomOutButton];
	            var zoomInButtonHandler = this.handleZoomInButtonClick;
	            var zoomOutButtonHandler = this.handleZoomOutButtonClick;

	            // Disable zooming in when zoomed all the way in
	            if (zoomLevel === _constant.MAX_ZOOM_LEVEL) {
	                zoomInButtonClasses.push(styles.builtinButtonDisabled);
	                zoomInButtonHandler = noop;
	            }

	            // Disable zooming out when zoomed all the way out
	            if (zoomLevel === _constant.MIN_ZOOM_LEVEL) {
	                zoomOutButtonClasses.push(styles.builtinButtonDisabled);
	                zoomOutButtonHandler = noop;
	            }

	            // Ignore clicks during animation
	            if (this.isAnimating()) {
	                zoomInButtonHandler = noop;
	                zoomOutButtonHandler = noop;
	            }

	            var modalStyle = {
	                overlay: _extends({
	                    zIndex: 1000,
	                    backgroundColor: 'transparent'
	                }, reactModalStyle.overlay),
	                content: _extends({
	                    backgroundColor: 'transparent',
	                    overflow: 'hidden', // Needed, otherwise keyboard shortcuts scroll the page
	                    border: 'none',
	                    borderRadius: 0,
	                    padding: 0,
	                    top: 0,
	                    left: 0,
	                    right: 0,
	                    bottom: 0
	                }, reactModalStyle.content)
	            };

	            // DEPRECATION NOTICE
	            // All unprefixed classes (listed below) will be removed in v4.0.0.
	            // Use their `ril-` prefixed alternatives instead.
	            //
	            // DEPRECATED: close, closing, download-blocker, image-current,
	            //             image-next, image-prev, inner, next-button, not-loaded,
	            //             outer, prev-button, toolbar, toolbar-left, toolbar-right,
	            //             zoom-in, zoom-out

	            return _react2.default.createElement(
	                _reactModal2.default,
	                {
	                    isOpen: true,
	                    onRequestClose: clickOutsideToClose ? this.requestClose : noop,
	                    onAfterOpen: function onAfterOpen() {
	                        return _this9.outerEl && _this9.outerEl.focus();
	                    } // Focus on the div with key handlers
	                    , style: modalStyle,
	                    contentLabel: 'aria-label'
	                },
	                _react2.default.createElement(
	                    'div',
	                    { // eslint-disable-line jsx-a11y/no-static-element-interactions
	                        // Floating modal with closing animations
	                        className: 'outer ril-outer ' + styles.outer + ' ' + styles.outerAnimating + (isClosing ? ' closing ril-closing ' + styles.outerClosing : ''),
	                        style: {
	                            transition: 'opacity ' + animationDuration + 'ms',
	                            animationDuration: animationDuration + 'ms',
	                            animationDirection: isClosing ? 'normal' : 'reverse'
	                        },
	                        ref: function ref(el) {
	                            _this9.outerEl = el;
	                        },
	                        onWheel: this.handleOuterMousewheel,
	                        onMouseMove: this.handleOuterMouseMove,
	                        onMouseDown: this.handleOuterMouseDown,
	                        onTouchStart: this.handleOuterTouchStart,
	                        onTouchMove: this.handleOuterTouchMove,
	                        tabIndex: '-1' // Enables key handlers on div
	                        , onKeyDown: this.handleKeyInput,
	                        onKeyUp: this.handleKeyInput
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        { // eslint-disable-line jsx-a11y/no-static-element-interactions
	                            // Image holder
	                            className: 'inner ril-inner ' + styles.inner,
	                            onClick: clickOutsideToClose ? this.closeIfClickInner : noop
	                        },
	                        images
	                    ),
	                    prevSrc && showPrevNextButtons && _react2.default.createElement('button', { // Move to previous image button
	                        type: 'button',
	                        className: 'prev-button ril-prev-button ' + styles.navButtons + ' ' + styles.navButtonPrev,
	                        key: 'prev',
	                        onClick: !this.isAnimating() ? this.requestMovePrev : noop // Ignore clicks during animation
	                    }),
	                    nextSrc && showPrevNextButtons && _react2.default.createElement('button', { // Move to next image button
	                        type: 'button',
	                        className: 'next-button ril-next-button ' + styles.navButtons + ' ' + styles.navButtonNext,
	                        key: 'next',
	                        onClick: !this.isAnimating() ? this.requestMoveNext : noop // Ignore clicks during animation
	                    }),
	                    _react2.default.createElement(
	                        'div',
	                        { // Lightbox toolbar
	                            className: 'toolbar ril-toolbar ' + styles.toolbar
	                        },
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'toolbar-left ril-toolbar-left ' + styles.toolbarSide + ' ' + styles.toolbarLeftSide },
	                            _react2.default.createElement(
	                                'li',
	                                { className: 'ril-toolbar__item ' + styles.toolbarItem },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'ril-toolbar__item__child ' + styles.toolbarItemChild },
	                                    imageTitle
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            {
	                                className: ['toolbar-right', 'ril-toolbar-right', styles.toolbarSide, styles.toolbarRightSide].join(' ')
	                            },
	                            !toolbarButtons ? '' : toolbarButtons.map(function (button, i) {
	                                return _react2.default.createElement(
	                                    'li',
	                                    { key: i, className: 'ril-toolbar__item ' + styles.toolbarItem },
	                                    button
	                                );
	                            }),
	                            enableZoom && _react2.default.createElement(
	                                'li',
	                                { className: 'ril-toolbar__item ' + styles.toolbarItem },
	                                _react2.default.createElement('button', { // Lightbox zoom in button
	                                    type: 'button',
	                                    key: 'zoom-in',
	                                    className: 'zoom-in ril-zoom-in ' + zoomInButtonClasses.join(' '),
	                                    onClick: zoomInButtonHandler
	                                })
	                            ),
	                            enableZoom && _react2.default.createElement(
	                                'li',
	                                { className: 'ril-toolbar__item ' + styles.toolbarItem },
	                                _react2.default.createElement('button', { // Lightbox zoom out button
	                                    type: 'button',
	                                    key: 'zoom-out',
	                                    className: 'zoom-out ril-zoom-out ' + zoomOutButtonClasses.join(' '),
	                                    onClick: zoomOutButtonHandler
	                                })
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                { className: 'ril-toolbar__item ' + styles.toolbarItem },
	                                _react2.default.createElement('button', { // Lightbox close button
	                                    type: 'button',
	                                    key: 'close',
	                                    className: 'close ril-close ril-toolbar__item__child' + (' ' + styles.toolbarItemChild + ' ' + styles.builtinButton + ' ' + styles.closeButton),
	                                    onClick: !this.isAnimating() ? this.requestClose : noop // Ignore clicks during animation
	                                })
	                            )
	                        )
	                    ),
	                    this.props.imageCaption && _react2.default.createElement(
	                        'div',
	                        { // Image caption
	                            onWheel: this.handleCaptionMousewheel,
	                            onMouseDown: function onMouseDown(event) {
	                                return event.stopPropagation();
	                            },
	                            className: 'ril-caption ' + styles.caption,
	                            ref: function ref(el) {
	                                _this9.caption = el;
	                            }
	                        },
	                        _react2.default.createElement(
	                            'div',
	                            {
	                                className: 'ril-caption-content ' + styles.captionContent
	                            },
	                            this.props.imageCaption
	                        )
	                    )
	                )
	            );
	        }
	    }], [{
	        key: 'getTransform',
	        value: function getTransform(_ref2) {
	            var _ref2$x = _ref2.x,
	                x = _ref2$x === undefined ? null : _ref2$x,
	                _ref2$y = _ref2.y,
	                y = _ref2$y === undefined ? null : _ref2$y,
	                _ref2$zoom = _ref2.zoom,
	                zoom = _ref2$zoom === undefined ? null : _ref2$zoom;

	            var isOldIE = _ieVersion < 10;
	            var transforms = [];
	            if (x !== null || y !== null) {
	                transforms.push(isOldIE ? 'translate(' + (x || 0) + 'px,' + (y || 0) + 'px)' : 'translate3d(' + (x || 0) + 'px,' + (y || 0) + 'px,0)');
	            }

	            if (zoom !== null) {
	                transforms.push(isOldIE ? 'scale(' + zoom + ')' : 'scale3d(' + zoom + ',' + zoom + ',1)');
	            }

	            return _defineProperty({}, isOldIE ? 'msTransform' : 'transform', transforms.length === 0 ? 'none' : transforms.join(' '));
	        }
	    }]);

	    return ReactImageLightbox;
	}(_react.Component);

	ReactImageLightbox.propTypes = {
	    //-----------------------------
	    // Image sources
	    //-----------------------------

	    // Main display image url
	    mainSrc: _react.PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types

	    // Previous display image url (displayed to the left)
	    // If left undefined, movePrev actions will not be performed, and the button not displayed
	    prevSrc: _react.PropTypes.string,

	    // Next display image url (displayed to the right)
	    // If left undefined, moveNext actions will not be performed, and the button not displayed
	    nextSrc: _react.PropTypes.string,

	    //-----------------------------
	    // Image thumbnail sources
	    //-----------------------------

	    // Thumbnail image url corresponding to props.mainSrc
	    mainSrcThumbnail: _react.PropTypes.string, // eslint-disable-line react/no-unused-prop-types

	    // Thumbnail image url corresponding to props.prevSrc
	    prevSrcThumbnail: _react.PropTypes.string, // eslint-disable-line react/no-unused-prop-types

	    // Thumbnail image url corresponding to props.nextSrc
	    nextSrcThumbnail: _react.PropTypes.string, // eslint-disable-line react/no-unused-prop-types

	    //-----------------------------
	    // Event Handlers
	    //-----------------------------

	    // Close window event
	    // Should change the parent state such that the lightbox is not rendered
	    onCloseRequest: _react.PropTypes.func.isRequired,

	    // Move to previous image event
	    // Should change the parent state such that props.prevSrc becomes props.mainSrc,
	    //  props.mainSrc becomes props.nextSrc, etc.
	    onMovePrevRequest: _react.PropTypes.func,

	    // Move to next image event
	    // Should change the parent state such that props.nextSrc becomes props.mainSrc,
	    //  props.mainSrc becomes props.prevSrc, etc.
	    onMoveNextRequest: _react.PropTypes.func,

	    // Called when an image fails to load
	    // (imageSrc: string, srcType: string, errorEvent: object): void
	    onImageLoadError: _react.PropTypes.func,

	    //-----------------------------
	    // Download discouragement settings
	    //-----------------------------

	    // Enable download discouragement (prevents [right-click -> Save Image As...])
	    discourageDownloads: _react.PropTypes.bool,

	    //-----------------------------
	    // Animation settings
	    //-----------------------------

	    // Disable all animation
	    animationDisabled: _react.PropTypes.bool,

	    // Disable animation on actions performed with keyboard shortcuts
	    animationOnKeyInput: _react.PropTypes.bool,

	    // Animation duration (ms)
	    animationDuration: _react.PropTypes.number,

	    //-----------------------------
	    // Keyboard shortcut settings
	    //-----------------------------

	    // Required interval of time (ms) between key actions
	    // (prevents excessively fast navigation of images)
	    keyRepeatLimit: _react.PropTypes.number,

	    // Amount of time (ms) restored after each keyup
	    // (makes rapid key presses slightly faster than holding down the key to navigate images)
	    keyRepeatKeyupBonus: _react.PropTypes.number,

	    //-----------------------------
	    // Image info
	    //-----------------------------

	    // Image title
	    imageTitle: _react.PropTypes.node,

	    // Image caption
	    imageCaption: _react.PropTypes.node,

	    //-----------------------------
	    // Lightbox style
	    //-----------------------------

	    // Set z-index style, etc., for the parent react-modal (format: https://github.com/reactjs/react-modal#styles )
	    reactModalStyle: _react.PropTypes.object,

	    // Padding (px) between the edge of the window and the lightbox
	    imagePadding: _react.PropTypes.number,

	    //-----------------------------
	    // Other
	    //-----------------------------

	    // Array of custom toolbar buttons
	    toolbarButtons: _react.PropTypes.arrayOf(_react.PropTypes.node),

	    // When true, clicks outside of the image close the lightbox
	    clickOutsideToClose: _react.PropTypes.bool,

	    // Set to false to disable zoom functionality and hide zoom buttons
	    enableZoom: _react.PropTypes.bool,

	    showPrevNextButtons: _react.PropTypes.bool
	};

	ReactImageLightbox.defaultProps = {
	    onMovePrevRequest: function onMovePrevRequest() {},
	    onMoveNextRequest: function onMoveNextRequest() {},
	    onImageLoadError: function onImageLoadError() {},

	    discourageDownloads: false,

	    animationDisabled: false,
	    animationOnKeyInput: false,
	    animationDuration: 300,

	    keyRepeatLimit: 180,
	    keyRepeatKeyupBonus: 40,

	    reactModalStyle: {},
	    imagePadding: 10,
	    clickOutsideToClose: true,
	    enableZoom: true,
	    showPrevNextButtons: false
	};

	exports.default = ReactImageLightbox;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getIEVersion = getIEVersion;
	exports.translate = translate;
	exports.getWindowWidth = getWindowWidth;
	exports.getWindowHeight = getWindowHeight;
	exports.isInIframe = isInIframe;
	/**
	 * Get the version of Internet Explorer in use, or undefined
	 *
	 * @return {?number} ieVersion - IE version as an integer, or undefined if not IE
	 */
	function getIEVersion() {
	    if (typeof window === 'undefined') {
	        return undefined;
	    }

	    var match = window.navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
	    return match ? parseInt(match[1], 10) : undefined;
	}

	/**
	 * Placeholder for future translate functionality
	 */
	function translate(str) {
	    var replaceStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	    if (!str) {
	        return '';
	    }

	    var translated = str;
	    if (replaceStrings) {
	        Object.keys(replaceStrings).forEach(function (placeholder) {
	            translated = translated.replace(placeholder, replaceStrings[placeholder]);
	        });
	    }

	    return translated;
	}

	function getWindowWidth() {
	    if (typeof window === 'undefined') {
	        return 0;
	    }

	    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	}

	function getWindowHeight() {
	    if (typeof window === 'undefined') {
	        return 0;
	    }

	    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	}

	// Returns true if this window is rendered as an iframe inside another window
	function isInIframe() {
	    try {
	        return window.self !== window.top;
	    } catch (e) {
	        return true;
	    }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// Min image zoom level
	var MIN_ZOOM_LEVEL = exports.MIN_ZOOM_LEVEL = 0;

	// Max image zoom level
	var MAX_ZOOM_LEVEL = exports.MAX_ZOOM_LEVEL = 300;

	// Size ratio between previous and next zoom levels
	var ZOOM_RATIO = exports.ZOOM_RATIO = 1.007;

	// How much to increase/decrease the zoom level when the zoom buttons are clicked
	var ZOOM_BUTTON_INCREMENT_SIZE = exports.ZOOM_BUTTON_INCREMENT_SIZE = 100;

	// Used to judge the amount of horizontal scroll needed to initiate a image move
	var WHEEL_MOVE_X_THRESHOLD = exports.WHEEL_MOVE_X_THRESHOLD = 200;

	// Used to judge the amount of vertical scroll needed to initiate a zoom action
	var WHEEL_MOVE_Y_THRESHOLD = exports.WHEEL_MOVE_Y_THRESHOLD = 1;

	var KEYS = exports.KEYS = {
	    ESC: 27,
	    LEFT_ARROW: 37,
	    RIGHT_ARROW: 39
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&-autoprefixer&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&-autoprefixer&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "@-webkit-keyframes closeWindow___2Hlon {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes closeWindow___2Hlon {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.outer___2lDXy {\n  background-color: rgba(0, 0, 0, 0.85);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 100%; }\n\n.outerClosing___1EQGK {\n  opacity: 0; }\n\n.inner___1rfRQ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.image___2FLq2 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  max-width: 100%;\n  max-height: 100%; }\n\n.imagePrev___F6xVQ {\n  @extends .image; }\n\n.imageNext___1uRqJ {\n  @extends .image; }\n\n.imageDiscourager___3-CUB {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain; }\n\n.navButtons___3kNVF {\n  border: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 20px;\n  height: 34px;\n  padding: 40px 30px;\n  margin: auto;\n  cursor: pointer;\n  opacity: 0.7; }\n  .navButtons___3kNVF:hover {\n    opacity: 1; }\n  .navButtons___3kNVF:active {\n    opacity: 0.7; }\n\n.navButtonPrev___2vBS8 {\n  left: 0;\n  background: rgba(0, 0, 0, 0.2) url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDE5LDMgLTIsLTIgLTE2LDE2IDE2LDE2IDEsLTEgLTE1LC0xNSAxNSwtMTUgeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\") no-repeat center; }\n\n.navButtonNext___30R2i {\n  right: 0;\n  background: rgba(0, 0, 0, 0.2) url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDEsMyAyLC0yIDE2LDE2IC0xNiwxNiAtMSwtMSAxNSwtMTUgLTE1LC0xNSB6IiBmaWxsPSIjRkZGIi8+PC9zdmc+\") no-repeat center; }\n\n.downloadBlocker___3rU9- {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n  background-size: cover; }\n\n.caption___3vDh_,\n.toolbar___1xYly {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.caption___3vDh_ {\n  bottom: 0;\n  max-height: 150px;\n  overflow: auto; }\n\n.captionContent___30kw2 {\n  padding: 10px 20px;\n  color: #FFF; }\n\n.toolbar___1xYly {\n  top: 0;\n  height: 50px; }\n\n.toolbarSide___3FYWk {\n  height: 50px;\n  margin: 0; }\n\n.toolbarSideNoFlex___KxqgW {\n  height: auto;\n  line-height: 50px;\n  max-width: 48%;\n  position: absolute;\n  top: 0;\n  bottom: 0; }\n\n.toolbarLeftSide___8beAg {\n  padding-left: 20px;\n  padding-right: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.toolbarLeftSideNoFlex___3O3cZ {\n  left: 0;\n  overflow: visible; }\n\n.toolbarRightSide___1Sdfc {\n  padding-left: 0;\n  padding-right: 20px;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n\n.toolbarRightSideNoFlex___oa0FT {\n  right: 0; }\n\n.toolbarItem___3WbMb {\n  display: inline-block;\n  line-height: 50px;\n  padding: 0;\n  color: #FFF;\n  font-size: 120%;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.toolbarItemChild___2U_MP {\n  vertical-align: middle; }\n\n.builtinButton___1zqo6 {\n  width: 40px;\n  height: 35px;\n  cursor: pointer;\n  border: none;\n  opacity: 0.7; }\n  .builtinButton___1zqo6:hover {\n    opacity: 1; }\n  .builtinButton___1zqo6:active {\n    outline: none; }\n\n.builtinButtonDisabled___3uvqe {\n  cursor: default;\n  opacity: 0.5; }\n  .builtinButtonDisabled___3uvqe:hover {\n    opacity: 0.5; }\n\n.closeButton___3BdAF {\n  background: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJtIDEsMyAxLjI1LC0xLjI1IDcuNSw3LjUgNy41LC03LjUgMS4yNSwxLjI1IC03LjUsNy41IDcuNSw3LjUgLTEuMjUsMS4yNSAtNy41LC03LjUgLTcuNSw3LjUgLTEuMjUsLTEuMjUgNy41LC03LjUgLTcuNSwtNy41IHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=\") no-repeat center; }\n\n.zoomInButton___3xtuX {\n  background: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PHBhdGggZD0iTTEyIDV2NiIvPjwvZz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+\") no-repeat center; }\n\n.zoomOutButton___38PZx {\n  background: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PC9nPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=\") no-repeat center; }\n\n.outerAnimating___2-fZi {\n  -webkit-animation-name: closeWindow___2Hlon;\n          animation-name: closeWindow___2Hlon; }\n\n@-webkit-keyframes pointFade___2RA5J {\n  0%, 19.999%, 100% {\n    opacity: 0; }\n  20% {\n    opacity: 1; } }\n\n@keyframes pointFade___2RA5J {\n  0%, 19.999%, 100% {\n    opacity: 0; }\n  20% {\n    opacity: 1; } }\n\n.loadingCircle___3JNJg {\n  width: 60px;\n  height: 60px;\n  position: relative; }\n\n.loadingCirclePoint___3md-S {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n  .loadingCirclePoint___3md-S:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #FFF;\n    border-radius: 30%;\n    -webkit-animation: pointFade___2RA5J 1200ms infinite ease-in-out both;\n            animation: pointFade___2RA5J 1200ms infinite ease-in-out both; }\n  .loadingCirclePoint___3md-S:nth-of-type(1) {\n    -webkit-transform: rotate(0deg);\n        -ms-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(7) {\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(1):before, .loadingCirclePoint___3md-S:nth-of-type(7):before {\n    -webkit-animation-delay: -1200ms;\n            animation-delay: -1200ms; }\n  .loadingCirclePoint___3md-S:nth-of-type(2) {\n    -webkit-transform: rotate(30deg);\n        -ms-transform: rotate(30deg);\n            transform: rotate(30deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(8) {\n    -webkit-transform: rotate(210deg);\n        -ms-transform: rotate(210deg);\n            transform: rotate(210deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(2):before, .loadingCirclePoint___3md-S:nth-of-type(8):before {\n    -webkit-animation-delay: -1000ms;\n            animation-delay: -1000ms; }\n  .loadingCirclePoint___3md-S:nth-of-type(3) {\n    -webkit-transform: rotate(60deg);\n        -ms-transform: rotate(60deg);\n            transform: rotate(60deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(9) {\n    -webkit-transform: rotate(240deg);\n        -ms-transform: rotate(240deg);\n            transform: rotate(240deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(3):before, .loadingCirclePoint___3md-S:nth-of-type(9):before {\n    -webkit-animation-delay: -800ms;\n            animation-delay: -800ms; }\n  .loadingCirclePoint___3md-S:nth-of-type(4) {\n    -webkit-transform: rotate(90deg);\n        -ms-transform: rotate(90deg);\n            transform: rotate(90deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(10) {\n    -webkit-transform: rotate(270deg);\n        -ms-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(4):before, .loadingCirclePoint___3md-S:nth-of-type(10):before {\n    -webkit-animation-delay: -600ms;\n            animation-delay: -600ms; }\n  .loadingCirclePoint___3md-S:nth-of-type(5) {\n    -webkit-transform: rotate(120deg);\n        -ms-transform: rotate(120deg);\n            transform: rotate(120deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(11) {\n    -webkit-transform: rotate(300deg);\n        -ms-transform: rotate(300deg);\n            transform: rotate(300deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(5):before, .loadingCirclePoint___3md-S:nth-of-type(11):before {\n    -webkit-animation-delay: -400ms;\n            animation-delay: -400ms; }\n  .loadingCirclePoint___3md-S:nth-of-type(6) {\n    -webkit-transform: rotate(150deg);\n        -ms-transform: rotate(150deg);\n            transform: rotate(150deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(12) {\n    -webkit-transform: rotate(330deg);\n        -ms-transform: rotate(330deg);\n            transform: rotate(330deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(6):before, .loadingCirclePoint___3md-S:nth-of-type(12):before {\n    -webkit-animation-delay: -200ms;\n            animation-delay: -200ms; }\n  .loadingCirclePoint___3md-S:nth-of-type(7) {\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(13) {\n    -webkit-transform: rotate(360deg);\n        -ms-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  .loadingCirclePoint___3md-S:nth-of-type(7):before, .loadingCirclePoint___3md-S:nth-of-type(13):before {\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms; }\n\n.loadingContainer___2vaJ- {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.loadingContainer__icon___1wQQz {\n  color: #FFF;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n      -ms-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%); }\n", ""]);

	// exports
	exports.locals = {
		"outer": "outer___2lDXy",
		"outerClosing": "outerClosing___1EQGK",
		"inner": "inner___1rfRQ",
		"image": "image___2FLq2",
		"imagePrev": "imagePrev___F6xVQ",
		"imageNext": "imageNext___1uRqJ",
		"imageDiscourager": "imageDiscourager___3-CUB",
		"navButtons": "navButtons___3kNVF",
		"navButtonPrev": "navButtonPrev___2vBS8",
		"navButtonNext": "navButtonNext___30R2i",
		"downloadBlocker": "downloadBlocker___3rU9-",
		"caption": "caption___3vDh_",
		"toolbar": "toolbar___1xYly",
		"captionContent": "captionContent___30kw2",
		"toolbarSide": "toolbarSide___3FYWk",
		"toolbarSideNoFlex": "toolbarSideNoFlex___KxqgW",
		"toolbarLeftSide": "toolbarLeftSide___8beAg",
		"toolbarLeftSideNoFlex": "toolbarLeftSideNoFlex___3O3cZ",
		"toolbarRightSide": "toolbarRightSide___1Sdfc",
		"toolbarRightSideNoFlex": "toolbarRightSideNoFlex___oa0FT",
		"toolbarItem": "toolbarItem___3WbMb",
		"toolbarItemChild": "toolbarItemChild___2U_MP",
		"builtinButton": "builtinButton___1zqo6",
		"builtinButtonDisabled": "builtinButtonDisabled___3uvqe",
		"closeButton": "closeButton___3BdAF",
		"zoomInButton": "zoomInButton___3xtuX",
		"zoomOutButton": "zoomOutButton___38PZx",
		"outerAnimating": "outerAnimating___2-fZi",
		"closeWindow": "closeWindow___2Hlon",
		"loadingCircle": "loadingCircle___3JNJg",
		"loadingCirclePoint": "loadingCirclePoint___3md-S",
		"pointFade": "pointFade___2RA5J",
		"loadingContainer": "loadingContainer___2vaJ-",
		"loadingContainer__icon": "loadingContainer__icon___1wQQz"
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;