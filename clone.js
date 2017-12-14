/*
* @param {target} javascript5种类型
* */
function clone(target) {
    var type = Object.prototype.toString.call(target);
    switch (type) {
        case '[object Number]':
            return target;
        case '[object Boolean]':
            return target;
        case '[object String]':
            return target;
        case '[object Array]':
            var temp = [];
            for(var i = 0; i < target.length; i++) {
                temp.push(clone(target[i]))
            }
            return temp;
        case '[object Object]':
            var middle = {};
            for(var key in target) {
                middle[key] = clone(target[key])
            }
            return middle;
        case '[object Null]':
            return target;
        case '[object Undefined]':
            return target;
        default:
            return target
    }
}
/*
* 数组去重
* @param {Array}
* */
Array.prototype.norepeat = function () {
    var empty = [];
    for(var i = 0; i < this.length; i++) {
        empty.indexOf(this[i]) === -1 ? empty.push(this[i]) : ''
    }
    return empty
}
function norepeat(array) {
    return Array.from(new Set(array))
}
/*
* 类数组转化数组
* */
var demo = {0: 'a', 1: 'b',2: 'c',length: 3};
demo = Array.prototype.slice.call(demo);
demo.forEach(function (key, index) {
    console.log(key,index)
})
/*
* 选择器，class,id,tagName
* */
function select(selector) {
    var type = selector.substring(0,1);
    console.log(type)
    switch (type) {
        case '.':
            return document.getElementsByClassName(selector.substring(1))
        case '#':
            return document.getElementById(selector.substring(1))
        default:
            return document.getElementsByTagName(type)

    }
}
select('div')
select('#test')
select('.real')