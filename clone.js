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