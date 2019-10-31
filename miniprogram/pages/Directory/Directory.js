"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var directoryList_js_1 = require("../../utils/directoryList.js");
const debounce = require("../../utils/util.js")
var app = getApp();
function storageManager(url) {
    return new Promise((resolve, rej)=>{
      wx.getStorage({
        key: url,
        success: (res) => {
          console.log(res)
          if (res.errMsg ==='getStorage:ok') {
            resolve(res.data)
          }else {
            rej()
          }
          
        }, fail: rej
      })
    })
  
}
function handleMarkdown(res){
  var pattern = /\s##\s/
  var _ts = res._ts
  var index = res.index
  res  = res.res
  // 以## 分页
  let allArticle = res.data.split(pattern)
  for (var _index in allArticle) {
    if (_index === 0 || _index === '0') {
    } else {
      allArticle[_index] = `## ${allArticle[_index]}`
    }
  }
  var allArticleLength = allArticle.length
  // 显示第一页内容
  var data = app.towxml.toJson(allArticle[0], 'markdown');
  data = app.towxml.initData(data, {
    app: _ts
  });
  data.theme = 'light';
  if (_ts.data.show) {
    _ts.setData({
      article: data,
      // 开始阅读 显示文章内容
      startRead: false,
      // 目录的高亮index
      readnow: index,
      // 目录显示
      // 每一章的页面内容
      allArticleLength: allArticleLength,
      allArticle: allArticle,
      // 每一章从第一页开始读
      characterIndex: 0
    });
  } else {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    });
    let xChange = 500 / 750 * wx.getSystemInfoSync().windowWidth
    animation.translate(-xChange, 0).step()
    _ts.setData({
      article: data,
      // 开始阅读 显示文章内容
      startRead: false,
      // 目录的高亮index
      readnow: index,
      // 目录显示
      show: true,
      ani1: animation,
      // 每一章的页面内容
      allArticleLength: allArticleLength,
      allArticle: allArticle,
      // 每一章从第一页开始读
      characterIndex: 0
    });
  }
  wx.pageScrollTo({
    scrollTop: 0
  })

}
function requsetMarkdown(_ts, url, index){
  new Promise((resolve,rej)=>{
    wx.request({
      url: url,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        // 保存到本地
        wx.setStorageSync(url, res)
        resolve({ res, _ts,index})
      }
    });
  }).then((res)=>{
    handleMarkdown(res)
    setTimeout(() => {
      wx.hideLoading()
    }, 1000)
  })
  
}
Page({
    data: {
      // 笔记
        link:'',
        directoryList: directoryList_js_1.default.es6,
        startRead:true,
        show: true,
        characterIndex:0,
        characterLength:0,
        readnow:-1,
        article: {},
        allArticle:[],
        allArticleLength:0,
        // 节流
        timeOut:false,
        // 目录动画
        ani1:"",
        ani2:''
    },
    onLoad: function (e) {

      let dictionData = wx.getStorageSync('diction')
      directoryList_js_1 = JSON.parse(dictionData)
      if (typeof directoryList_js_1 === 'string') {
        directoryList_js_1 = JSON.parse(directoryList_js_1)
      }
     
        this.setData({
          characterLength:this.data.directoryList.length,
          link:e.link,
          directoryList: directoryList_js_1[`${e.link}`]
        })
    },
    startRead: function () {
      try{
        this.requireData(this.data.directoryList[0].markdownUrl, 0);
      }catch(e) {
        wx.showModal({
          title: '更新中',
          content: '迟点再来试试？',
        })
      }
      
    },
    onShareAppMessage: app.shareFuc,
    onclickIcon: debounce.debounce(function(e){
      wx.showLoading({
        title: '加载中……',
      })
        let dir = e.target.dataset.dir
        let index = this.data.characterIndex, length = this.data.allArticleLength
        if (dir === 'right') {
          if ((index + 1) < length) {
            index = 1 + index
          } else {
            index = length - 1
          }
        } else if (dir === 'left') {
          if ((index - 1) < 0) {
            index = 0
          } else {
            index -= 1
          }
        }
        // 更新文章内容
        this.updateArticle(index)
        this.setData({
          characterIndex: index,
        })    
        setTimeout(()=>{
          wx.hideLoading()
        },1000)
      },1000)
        
    ,
    updateArticle(index){
      let data = this.data.allArticle[index]
      data = app.towxml.toJson(data, 'markdown');
      this.setData({
        article: data,
      })
      wx.pageScrollTo({
        scrollTop: 0
      })
    },
    showList: function (e) {
        var animation = wx.createAnimation({
          duration: 1000,
          timingFunction: 'ease'
        });
        // 目录蒙板动画
        var animation2 = wx.createAnimation({
          duration: 5000,
          timingFunction: 'ease'
        });
        let xChange = 500 / 750 * wx.getSystemInfoSync().windowWidth
        if (this.data.show) {
          animation.translate(xChange, 0).step()
        } else {
          animation.translate(-xChange, 0).step()
        }
                // 目录蒙板动画
        animation2.opacity(0.5).step()

        this.setData({
          show: !this.data.show,   
          ani1: animation.export(),
               // 目录蒙板动画
          ani2: animation2.export()
        });
    },
    onclickList:
      debounce.debounce(function(e){
        let index = e.detail.index
        wx.showLoading({
          title: '加载中……',
        })
        this.requireData(this.data.directoryList[index].markdownUrl, index)
      }, 1000)
    ,
    requireData: function (url, index) {
        var _ts = this;
        // 保存缓存
        // 获取缓存
        storageManager(url).then((res)=>{
          handleMarkdown({ res, _ts, index })
          wx.hideLoading()
        },(res)=>{
            requsetMarkdown(_ts, url, index)
        })
      }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlyZWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGlyZWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsaUVBQXlEO0FBQ3pELElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLGFBQWEsRUFBRSwwQkFBYTtRQUM1QixJQUFJLEVBQUUsS0FBSztRQUVYLE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFDRCxNQUFNO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBRXRDLENBQUM7SUFDRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFZLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtTQUN0QixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsV0FBVyxZQUFDLEdBQVU7UUFDcEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBRWpCLEVBQUUsQ0FBQyxPQUFRLENBQUM7WUFDVixHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsbUNBQW1DO2FBQ3BEO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFFWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDckIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFHbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7Z0JBR3JCLEdBQUcsQ0FBQyxPQUFRLENBQUM7b0JBQ1gsT0FBTyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmludGVyZmFjZSBJTXlBcHB7XHJcbiAgdG93eG1sOmFueVxyXG59XHJcbmltcG9ydCBEaXJlY3RvcnlMaXN0IGZyb20gJy4uLy4uL3V0aWxzL2RpcmVjdG9yeUxpc3QuanMnO1xyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBkaXJlY3RvcnlMaXN0OiBEaXJlY3RvcnlMaXN0LFxyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICAvL2FydGljbGXlsIbnlKjmnaXlrZjlgqh0b3d4bWzmlbDmja5cclxuICAgIGFydGljbGU6IHt9XHJcbiAgfSxcclxuICBvbkxvYWQoKXtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5kaXJlY3RvcnlMaXN0KVxyXG4gICAgLy8gdGhpcy5yZXF1aXJlRGF0YSh0aGlzLmRhdGEuZGlyZWN0b3J5TGlzdFswXS5tYXJrZG93blVybCEpXHJcbiAgfSxcclxuICBzdGFydFJlYWQoKXtcclxuICAgIHRoaXMucmVxdWlyZURhdGEodGhpcy5kYXRhLmRpcmVjdG9yeUxpc3RbMF0ubWFya2Rvd25VcmwhKVxyXG4gIH0sXHJcbiAgc2hvd0xpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBzaG93OiAhdGhpcy5kYXRhLnNob3dcclxuICAgIH0pXHJcbiAgfSxcclxuICByZXF1aXJlRGF0YSh1cmw6c3RyaW5nKSB7XHJcbiAgICBjb25zdCBfdHMgPSB0aGlzO1xyXG4gICAgLy/or7fmsYJtYXJrZG93buaWh+S7tu+8jOW5tui9rOaNouS4uuWGheWuuVxyXG4gICAgd3gucmVxdWVzdCEoe1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAvL+Wwhm1hcmtkb3du5YaF5a656L2s5o2i5Li6dG93eG1s5pWw5o2uXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhcHAudG93eG1sLnRvSnNvbihyZXMuZGF0YSwgJ21hcmtkb3duJyk7XHJcblxyXG4gICAgICAgIC8v6K6+572u5paH5qGj5pi+56S65Li76aKY77yM6buY6K6kJ2xpZ2h0J1xyXG4gICAgICAgIGRhdGEudGhlbWUgPSAnbGlnaHQnO1xyXG5cclxuICAgICAgICAvL+iuvue9ruaVsOaNrlxyXG4gICAgICAgIF90cy5zZXREYXRhISh7XHJcbiAgICAgICAgICBhcnRpY2xlOiBkYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSlcclxuIl19