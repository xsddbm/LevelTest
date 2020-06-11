var checkLine = {
    version : "1.0.0",
    FilterPoints:function(points,answerPoints,callback){
        cc.log(JSON.stringify(points));
        var truepoints = [];//正确点
        var lostpoints = [];//错误点
        var answer = answerPoints;

        var pipei = [];
        for (var i = 0; i < points.length; i++) {
            var q = answer.filter((p) => {
                return Math.abs(p.X-points[i].X)<20;
            });
            var f = q.filter((p) => {
                return Math.abs(p.Y-points[i].Y)<20; 
            });
            if(f.length>0)
            {
                truepoints = truepoints.concat(f);
                pipei = pipei.concat(f);
            }else{
                lostpoints.concat(f);
            }

        }
        //比较匹配上的点与所画线条长度
        //cc.log(answer.length);
        var setPoint = new Set(pipei);
        //cc.log(setPoint.size);
        //cc.log(points.length);
        //cc.log(truepoints.length);
        var pathlength = this.PathLength(points);
        var answerlength = this.PathLength(answer);
        if(Math.abs(answer.length-setPoint.size)<10 && Math.abs(pathlength-answerlength)<50)
        {
            callback(1);
        }else{
            callback(0);
        }
    },
    checkStartandEnd:function(points,answerPoints,callback){
        var p1 = points[0];
        var p2 = points[1];
        var a1 = answerPoints[0];
        var a2 = answerPoints[1];
        var length1 = this.EuclideanDistance(p1,a1);
        var length2 = this.EuclideanDistance(p2,a2);
        if((length1+length2)>20){
            callback(0);
        }else{
            callback(1);
        }
    },
    EuclideanDistance(pt1, pt2)
    {
        var s = this.SqrEuclideanDistance(pt1, pt2);
        return Math.sqrt(s);
    },
    SqrEuclideanDistance(pt1, pt2)
    {
        var dx = pt2.X - pt1.X;
        var dy = pt2.Y - pt1.Y;
        return (dx * dx + dy * dy);
    },
    //计算线条长度
    PathLength(points) // length traversed by a point path
    {
        var d = 0.0;
        //遍历线条所有点
        for (var i = 1; i < points.length; i++) {
            //如果是一条线的话，那么长度相加
            if (points[i].ID == points[i-1].ID)
                d += this.EuclideanDistance(points[i-1], points[i]);
        }
        return d;
    }
}
module.exports = checkLine;