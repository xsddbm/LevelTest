var appScript = {
    ip: "http://127.0.0.1:8090/",
    version: "1.0.0",   

    Get: function(url,reqData,callback){
        var self = this;

        url += "?";
        //解析json
        for(var item in reqData){
            url += item +"=" +reqData[item] +"&";
        }
        // console.log(self.ip + url)
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status < 400){
                    var response = xhr.responseText;
                    // console.log(response)
                    if(response){
                        var responseJson = JSON.parse(response);
                        callback(responseJson);
                    }else{
                        console.log("返回数据不存在")
                        callback(false);
                    }
                }else{
                    console.log("请求失败")
                    callback(false);
                }
            }
        };
        console.log(self.ip + url);
        xhr.open("GET", self.ip + url, true);
        xhr.send();
    },

    Post: function (url, reqData, callback) {
        var self = this;
        // console.log(url)
        // console.log(reqData)
        //1.拼接请求参数
        var param = "";
        for(var item in reqData){
            param += item + "=" + reqData[item] + "&";
        }
        //2.发起请求
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status < 400){
                    var response = xhr.responseText;
                    // console.log(response)
                    if(response){
                        var responseJson = JSON.parse(response);
                        callback(responseJson);
                    }else{
                        console.log("返回数据不存在")
                        callback(false);
                    }
                }else{
                    console.log("请求失败")
                    callback(false);
                }
            }
        };
        xhr.open("POST", self.ip + url, true);
        xhr.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded");  
        xhr.send(param);
    },


};

module.exports = appScript;