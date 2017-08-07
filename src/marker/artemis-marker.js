import Constants from '../common/common-constants';
import HtmlDOM from '../common/html-dom';
import {log} from '../common/logger';

export default class Marker {

	constructor(settings, htmlDom){
		this._settings = settings;
		this._singleMatchColor = this._settings.colors.singleMatchColor;
		this._singleMatchTextColor = this._getTextColor(this._singleMatchColor);
		this._scoreColors = this._settings.colors.scoreColors;
		this._scoreTextColors = [];
		this._scoreColors.forEach(colorHex => {
			this._scoreTextColors.push(this._getTextColor(colorHex));
		});
		this._htmlDom = htmlDom;
		this._isDebug = log.isDebug();
	}

	_getBrightness(colorHex) {
		let r = parseInt(colorHex.substring(1, 3), 16);
		let g = parseInt(colorHex.substring(3, 5), 16);
		let b = parseInt(colorHex.substring(5, 7), 16);
		let brightness = Math.sqrt(r * r * .241 + g * g * .691 + b * b * .068);
		return brightness|0;
	}

	_getTextColor(colorHex) {
		let brightness = this._getBrightness(colorHex);
		return brightness > 136 ? '#000000' : '#FFFFFF';
	}

	_ensureColorClassesExistOnHtmlDom() {
		if (!this._htmlDom.artemisColorClassesExistOnHtmlDom) {
			this._htmlDom.addColorClassesToHtmlDom(this._singleMatchColor, this._singleMatchTextColor, this._scoreColors, this._scoreTextColors);
			this._htmlDom.artemisColorClassesExistOnHtmlDom = true;
		}
	}

	mark(scoringResult) {
		if (this._isDebug){log.debug('Marker.mark() - start')}
		this._ensureColorClassesExistOnHtmlDom();
		let perfectScoreCount = 0;
		scoringResult.elements.forEach(elm => {
			if (elm.primaryScore === 1) {
				perfectScoreCount++;
			}
		});
		if (this._isDebug){log.debug('perfectScoreCount: ${perfectScoreCount}')}
		let className = '';
		scoringResult.elements.forEach(elm => {
			if (elm.primaryScore === 1 &&  perfectScoreCount === 1) {
				className = `${Constants.artemisElmClassPrefix}${Constants.artemisElmClassSingleMatchSuffix}`;
			} else {
				className = `${Constants.artemisElmClassPrefix}${(elm.primaryScore*(this._scoreColors.length-1)|0)}`;
			}
			HtmlDOM.addElmClassToHtmlDom(elm.domElm, className);
		});
		this._htmlDom.artemisElmClassesExistOnHtmlDom = true;
		if (this._isDebug){log.debug('Marker.mark() - end')}
	}

	markEverything() {
		if (this._isDebug){log.debug('Marker.markAll() - start')}
		this._ensureColorClassesExistOnHtmlDom();
		let className = `${Constants.artemisElmClassPrefix}${this._scoreColors.length-1}`;
		let domElms = this._htmlDom.getRelevantDomElms();
		domElms.forEach(domElm => {
			HtmlDOM.addElmClassToHtmlDom(domElm, className);
		});
		this._htmlDom.artemisElmClassesExistOnHtmlDom = true;
		if (this._isDebug){log.debug('Marker.markAll() - end')}
	}

}
