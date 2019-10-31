"use strict";
const app = getApp()
const promiseRequset = function (url){
  let tableName = 'diction'
  let Product = new wx.BaaS.TableObject(tableName)
  return Product.get('5da1acc7416ba25a880e4d48')
}

Page({
    data: {},
    onLoad:()=>{
      promiseRequset().then((res)=>{
        let data = res.data.str
        wx.setStorageSync('diction', JSON.stringify(data))
      },rej=>{
        wx.showModal({
          title: '服务器错误',
          content: '请稍后再来访问',
        })
      })
    },
    onClick: function (e) {
        var url = "" + e.currentTarget.dataset.str;
        var link ='' + e.currentTarget.dataset.link
        if (url === 'Directory') {
          wx.navigateTo({
              url: "../" + url + "/" + url+`?link=${link}`
            });
        }
        else {
            wx.navigateTo({
                url: "../" + url + "/" + url
            });
        }
    },
  onShareAppMessage: app.shareFuc
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBWUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFLEVBRUw7SUFDRCxPQUFPLEVBQUUsVUFBVSxDQUFhO1FBQzlCLElBQUksR0FBRyxHQUFHLEtBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBSyxDQUFBO1FBQzFDLElBQUcsR0FBRyxLQUFLLFdBQVcsRUFBRTtZQUN0QixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxRQUFNLEdBQUcsU0FBSSxHQUFLO2FBQ3hCLENBQUMsQ0FBQTtTQUNIO2FBQU07WUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxRQUFNLEdBQUcsU0FBSSxHQUFLO2FBQ3hCLENBQUMsQ0FBQTtTQUNIO0lBRUgsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG4vLyBpbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXG5cbi8vIGNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcbmludGVyZmFjZSBDbGlja0V2ZW50IHtcbiAgY3VycmVudFRhcmdldDp7XG4gICAgZGF0YXNldDp7XG4gICAgICBzdHI6U3RyaW5nXG4gICAgfVxuICB9XG59XG5QYWdlKHtcbiAgZGF0YToge1xuXG4gIH0sXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uIChlOiBDbGlja0V2ZW50KSB7XG4gICAgbGV0IHVybCA9IGAke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnN0cn1gXG4gICAgaWYodXJsID09PSAnRGlyZWN0b3J5Jykge1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogYC4uLyR7dXJsfS8ke3VybH1gXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi4vJHt1cmx9LyR7dXJsfWBcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cbn0pXG4iXX0=