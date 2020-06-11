var position =[];
cc.Class({
    extends: cc.Component,

    properties: {
        draw:cc.Graphics,
    },
    start () {
        // 手指触摸开始,移动起点到触摸点
        this.node.on('touchstart',function(touch) {
            var t_pos = touch.getLocation();
            var pos = this.node.convertToNodeSpaceAR(t_pos);
            this.draw.moveTo(pos.x,pos.y);
        },this);
        // 手指移动，不断绘图
        var i = 0;
        this.node.on('touchmove',function(touch) {
            var t_pos = touch.getLocation();
            var pos = this.node.convertToNodeSpaceAR(t_pos);
            this.draw.lineTo(pos.x,pos.y);
            //ID 第一笔画就是ID:0，第二笔画就是 ID:1
            var point = {
                X:pos.x,
                Y:pos.y,
                ID:i
            }
            position.push(point);
            //this.QdollarPoints.push(point);
            this.draw.stroke();
        },this);
        // 结束触摸
        this.node.on('touchend',function(touch) {
            localStorage.removeItem('pointInfo');
            cc.log(JSON.stringify(position));
            // 将目标关卡信息存入本地，在Game.js中取出
            cc.sys.localStorage.setItem('pointInfo', JSON.stringify(position));
            i++;
        },this);
    }
});
module.exports.clearPosition = function () {
    cc.log(123);
    //var a= position;
    position = [];
    //var b = position;
};