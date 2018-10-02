// 自执行函数创建模板
(function (window) {

    var states = {}; // 私有变量，用于保存状态和数据

    // 封装判断数据类型的函数

    /**
     * type 方法
     * 判断数据类型
     * @param {*} ele 数据
     * @returns 返回类型
     */
    function type(ele) {
        if (ele == null) {
            return ele + '';
        }

        return toString.call(ele).replace(/[\[\]]/g, '').split(' ')[1].toLowerCase();
    }

    // get方法

    /**
     * get方法
     * 通过属性名拿取对应的值
     * @param {*} name 属性名
     * @returns 有则返回值，没有就返回空
     */
    function get(name) {
        return states[name] ? states[name] : "";
    }
    /**
     * getStates 方法
     * 直接获取整个states对象，不需要传值
     * @returns statses对象
     */
    function getStates() {
        return states;
    }

    /**
     *  set 方法
     *  保存状态和数据
     * @param {*} options {键值对}
     * @param {*} target {键值对} 属性值为对象的属性，只在函数实现递归时传入
     * @desc 通过传入键值对的方式修改states树，使用方式和小程序的data 或者 react 中的setStates 类似
     */
    function set(options, target) {
        var keys = Object.keys(options);
        var o = target ? target : states;

        keys.map(function (item) {
            if (typeof o[item] == "undefined") {
                o[item] = options[item];
            } else {
                type(o[item]) == "object" ? set(options[item], o[item]) : o[item] = options[item];
            }
            return item;
        })
    }

    window.get = get;
    window.getStates = getStates;
    window.set = set;
})(window)