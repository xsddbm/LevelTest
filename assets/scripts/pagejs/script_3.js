cc.Class({
    extends: cc.Component,

    properties: {
        img: {
            default: [],
            type: [cc.Node]
        },
    },


    start () {
        this.img[0].on(cc.Node.EventType.TOUCH_END, function (event) {
            alert(0);
        }, this);
        this.img[1].on(cc.Node.EventType.TOUCH_END, function (event) {
            alert(1);
        }, this);
        this.img[2].on(cc.Node.EventType.TOUCH_END, function (event) {
            alert(2);
        }, this);
    },

});
