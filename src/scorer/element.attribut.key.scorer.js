export default class ElementAttributeKeyScorer {

    scorer(param,elem){
        for(let i=0; i<elem.attrs.length; i++){
            if(elem.attrs[i]["name"] === param){
                return 1;
            } 
        }
        return 0;
    }
}