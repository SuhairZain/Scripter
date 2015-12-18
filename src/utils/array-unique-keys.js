/**
 * Created by SuhairZain on 19/12/15.
 */

const Generate = new (require('generate-id'))();

var ArrayUniqueKeys = {};

ArrayUniqueKeys.assignKeys = function (array) {
    const length = array.length;
    for(var i=0; i<length; ++i){
        array[i].key = Generate.generate(4);
    }
    return array;
};

module.exports = ArrayUniqueKeys;