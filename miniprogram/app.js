"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_js_1 = require("./common/towxml/main.js");
App({
    onLaunch: function () {
        wx.BaaS = requirePlugin('sdkPlugin');
        wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment);
        wx.BaaS.init('ba924ca478dc7007d961');
    },
    shareFuc:function (){      
      return {
        title: '阮一峰ES6入门文档',
        path: 'pages/index/index',
        imageUrl: '../../common/image/th.jpg'
      } 
    },
    globalData: {},
    towxml: new main_js_1()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbURBQTRDO0FBUzVDLEdBQUcsQ0FBUztJQUNWLFFBQVEsRUFBRTtRQUNSLEVBQUUsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRXBDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQ3ZCLEVBQUUsQ0FBQyxXQUFXLEVBQ2QsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBRXBCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNELFVBQVUsRUFBRSxFQUVYO0lBQ0QsTUFBTSxFQUFFLElBQUksaUJBQU0sRUFBRTtDQUVyQixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC50c1xuaW1wb3J0IFRvd3htbCBmcm9tIFwiLi9jb21tb24vdG93eG1sL21haW4uanNcIlxuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuICBvbkxhdW5jaDphbnksXG4gIGdsb2JhbERhdGE6IHtcbiAgICBcbiAgfSxcbiAgdG93eG1sOm9iamVjdFxufVxuXG5BcHA8SU15QXBwPih7XG4gIG9uTGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgd3guQmFhUyA9IHJlcXVpcmVQbHVnaW4oJ3Nka1BsdWdpbicpXG4gICAgLy/orqnmj5Lku7bluK7liqnlrozmiJDnmbvlvZXjgIHmlK/ku5jnrYnlip/og71cbiAgICB3eC5CYWFTLnd4RXh0ZW5kKHd4LmxvZ2luLFxuICAgICAgd3guZ2V0VXNlckluZm8sXG4gICAgICB3eC5yZXF1ZXN0UGF5bWVudClcblxuICAgIHd4LkJhYVMuaW5pdCgnYmE5MjRjYTQ3OGRjNzAwN2Q5NjEnKVxuICB9LFxuICBnbG9iYWxEYXRhOiB7XG4gICAgXG4gIH0sXG4gIHRvd3htbDogbmV3IFRvd3htbCgpXG5cbn0pIl19