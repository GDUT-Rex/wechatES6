var directoryList_js_1 = require("../../utils/directoryList.js");
Component({
  properties: {
    readnow:{
      type:Number,
      value:12
    },
    show: {
      type:Boolean,
      value:true
    },
    ani1: {
      type:null,
      value:''
    },
    ani2: {
      type: null,
      value: ''
    },
    contentList:{
      type:Array,
      value: directoryList_js_1.default.es6
    }
  },
  data: {

  
    // readnow:0//正在阅读章节的编号
  },
  methods: {
    backtoContent: function() {
      this.triggerEvent('toContent')
    },
    onclickList:function(e) {
      this.triggerEvent('onclickList', {index:e.target.dataset.index})
    }
  },
   lifetimes: {
    attached: function () {
      // // 在组件实例进入页面节点树时执行
      // var animation = wx.createAnimation({
      //   duration: 4000,
      //   timingFunction: 'ease',
      //   delay: 1000
      // });
      // // animation.opacity(0.2).translate(100, -100).step()
      // this.setData({
      //   ani: animation.export()
      // })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  observers:{
   
  }
})