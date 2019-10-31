"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myself = [
  {
    title: '简介',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/计算机网络.md'
  },
  {
    title:'TCP',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/TCP.md'
  },
  {
    title: '无差错运输',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/无差错运输.md'
  }, {
    title: 'UDP',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/UDP.md'
  }, {
    title: 'HTTP',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/HTTP.md'
  }, {
    title: 'Socket',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/Socket.md'
  },
  {
    title: '其他知识',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/其他知识.md'
  },
]
let es6 = [
  {
  title: '前言',
  markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/readme.md'
  },
  {
    title: 'ECMAScript 6简介',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/intro.md'
  },
  {
    title: 'let 和 const 命令',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/let.md'

  },
  {
    title: '变量的解构赋值',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/destructuring.md'
  },
  {
    title: '字符串的扩展',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/string.md'
  },
  {
    title: '字符串的新增方法',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/string-methods.md'
  },
  {
    title: '正则的扩展',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/regex.md'
  },
  {
    title: '数值的扩展',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/number.md'
  },
  {
    title: '函数的扩展',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/function.md'
  },
  {
    title: '数组的扩展',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/array.md'
  },
  {
    title: '对象的扩展',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/object.md'
  },
  {
    title: '对象的新增方法',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/object-methods.md'
  },
  {
    title: 'Symbol',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/symbol.md'
  },
  {
    title: 'Set 和 Map 数据结构',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/set-map.md'
  },
  {
    title: 'Proxy',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/proxy.md'
  },
  {
    title: 'Reflect',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/reflect.md'
  },
  {
    title: 'Promise 对象',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/promise.md'
  },
  {
    title: 'Iterator 和 for...of 循环',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/iterator.md'
  },
  {
    title: 'Generator 函数的语法',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/generator.md'
  },
  {
    title: 'Generator 函数的异步应用',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/generator-async.md'
  },
  {
    title: 'async 函数',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/async.md'
  },
  {
    title: 'Class 的基本语法',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/class.md'
  },
  {
    title: 'Class 的继承',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/class-extends.md'
  },
  {
    title: 'Module 的语法',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/module.md'
  },
  {
    title: 'Module 的加载实现',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/module-loader.md'
  },
  {
    title: '编程风格',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/style.md'
  },
  {
    title: '读懂规格',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/spec.md'
  },
  {
    title: '异步遍历器',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/async-iterator.md'
  },
  {
    title: 'ArrayBuffer',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/arraybuffer.md'
  },
  {
    title: '最新提案',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/proposals.md'
  },
  {
    title: 'Decorator',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/decorator.md'
  }]

let notebook = [
  {
    title: 'this',
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/1iHW17ZxTlog95hv.md'
  },
  {
    title: "闭包",
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/1iHW8ca7OAvjouhs.md'
  }, 
  {
    title: "闭包例题",
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/1iHW17TgoIHfcKDQ.md'
  },
  {
    title: "API实现",
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/1iHW8czNm81AcleM.md'
  },
  {
    title: "异步上",
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/1iIX3oCPWGPFmwME.md'
  },
  {
    title: "异步下",
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/1iIX3oT6Y8AA36WI.md'
  },
  {
    title: "手写promise",
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/1iIX3oUUhX7Mwk9j.md'
  },
  {
    title: "面向对象与原型",
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/1iIX3ok9SFO3BbLV.md'
  },
  {
    title: "html与css（一）",
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/1iIX3oDCUYd55oOd.md'
  },
  {
    title: "html与css（二）",
    markdownUrl: 'https://cloud-minapp-29076.cloud.ifanrusercontent.com/1iIXAN5KN9xh00cy.md'
  },
]




exports.default = {
  'es6':es6,
  'myself': myself,
  'notebook': notebook
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3J5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpcmVjdG9yeUxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZTtJQUNiO1FBQ0UsS0FBSyxFQUFDLElBQUk7UUFDVixXQUFXLEVBQUMsMkVBQTJFO0tBQ3hGO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsZ0JBQWdCO0tBQ3hCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsZ0JBQWdCO0tBQ3hCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLFFBQVE7S0FDaEI7SUFDRDtRQUNFLEtBQUssRUFBRSxVQUFVO0tBQ2xCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLFFBQVE7S0FDaEI7SUFDRDtRQUNFLEtBQUssRUFBRSxnQkFBZ0I7S0FDeEI7SUFDRDtRQUNFLEtBQUssRUFBRSxPQUFPO0tBQ2Y7SUFDRDtRQUNFLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsWUFBWTtLQUNwQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLHdCQUF3QjtLQUNoQztJQUNEO1FBQ0UsS0FBSyxFQUFFLGlCQUFpQjtLQUN6QjtJQUNEO1FBQ0UsS0FBSyxFQUFFLG1CQUFtQjtLQUMzQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLFVBQVU7S0FDbEI7SUFDRDtRQUNFLEtBQUssRUFBRSxhQUFhO0tBQ3JCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsV0FBVztLQUNuQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLFlBQVk7S0FDcEI7SUFDRDtRQUNFLEtBQUssRUFBRSxjQUFjO0tBQ3RCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsYUFBYTtLQUNyQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNEO1FBQ0UsS0FBSyxFQUFFLFdBQVc7S0FDbkI7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHRpdGxlOifliY3oqIAnLFxyXG4gICAgbWFya2Rvd25Vcmw6J2h0dHBzOi8vY2xvdWQtbWluYXBwLTI5MDc2LmNsb3VkLmlmYW5ydXNlcmNvbnRlbnQuY29tLzFocFFVTE5LblZ6Y2M0VXYubWQnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0VDTUFTY3JpcHQgNueugOS7iydcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnbGV0IOWSjCBjb25zdCDlkb3ku6QnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ+WPmOmHj+eahOino+aehOi1i+WAvCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn5a2X56ym5Liy55qE5omp5bGVJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICflrZfnrKbkuLLnmoTmlrDlop7mlrnms5UnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ+ato+WImeeahOaJqeWxlSdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn5pWw5YC855qE5omp5bGVJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICflh73mlbDnmoTmianlsZUnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ+aVsOe7hOeahOaJqeWxlSdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn5a+56LGh55qE5omp5bGVJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICflr7nosaHnmoTmlrDlop7mlrnms5UnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1N5bWJvbCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU2V0IOWSjCBNYXAg5pWw5o2u57uT5p6EJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdQcm94eSdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUmVmbGVjdCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUHJvbWlzZSDlr7nosaEnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0l0ZXJhdG9yIOWSjCBmb3IuLi5vZiDlvqrnjq8nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0dlbmVyYXRvciDlh73mlbDnmoTor63ms5UnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0dlbmVyYXRvciDlh73mlbDnmoTlvILmraXlupTnlKgnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ2FzeW5jIOWHveaVsCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ2xhc3Mg55qE5Z+65pys6K+t5rOVJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDbGFzcyDnmoTnu6fmib8nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ01vZHVsZSDnmoTor63ms5UnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ01vZHVsZSDnmoTliqDovb3lrp7njrAnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ+e8lueoi+mjjuagvCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn6K+75oeC6KeE5qC8J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICflvILmraXpgY3ljoblmagnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0FycmF5QnVmZmVyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfmnIDmlrDmj5DmoYgnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0RlY29yYXRvcidcclxuICB9XHJcbl0iXX0=