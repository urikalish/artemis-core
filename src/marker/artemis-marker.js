import {ARETEMIS_CLASS} from '../common/common-constants';

export class Marker {

	constructor(settings){
    this._settings = settings;
	}

  addColorClassesToHtmlDocHead() {
    let uniqueColor = this._settings.colors["single-match-color"];
    let css = `.${ARETEMIS_CLASS}0{background-color: ${uniqueColor}; outline: 1px solid ${uniqueColor};}`;
    this._settings.colors["score-colors"].forEach((item,i) => {
      css += `.${ARETEMIS_CLASS}${i+1}{background-color: ${item.color}; outline: 1px solid ${item.color};}`;
    });
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

	mark(scoringResult) {
    for (let elm of scoringResult.elements){
      if (elm.colorClass === "" && elm.unique){
        elm.colorClass = 0;
      } else {
        let arrColor = settings.colors["score-colors"];
        // Comparison of score and the color
        arrColor.forEach((item,i) => {
          if (elm.colorClass === "" && CssClassScorer.score >= item.value){
              elm.colorClass = i+1;
          }
        });
      }
    }
	}

}
