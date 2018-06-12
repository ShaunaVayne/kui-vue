/*! kui-vue v1.7.6 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{BybE:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[a("div",{ref:"demo",staticClass:"k-demo-main"},[a("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),a("div",{staticClass:"k-desc"},[a("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),a("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[a("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),a("div",{staticClass:"k-demo-line"}),t._v(" "),a("Collapse",[a("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},n=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n})},C8VU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=a("z7BB"),o=(s=n)&&s.__esModule?s:{default:s};e.default=o.default},KmQ5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={base:"<DatePicker></DatePicker>",clearable:"<DatePicker clearable></DatePicker>",size:"<DatePicker></DatePicker>\n<DatePicker mini></DatePicker>",date:'<Row gutter="10">\n    <Col span="6">\n    <h4>年</h4>\n    <DatePicker format="YYYY"></DatePicker>\n    </Col>\n    <Col span="6">\n    <h4>月</h4>\n    <DatePicker format="MM"></DatePicker>\n    </Col>\n    <Col span="6">\n    <h4>时间</h4>\n    <DatePicker format="YYYY-MM-DD HH:mm:ss"></DatePicker>\n    </Col>\n  </Row>',range:'<Row padding="10">\n    <Col span="8">\n    <h4>范围</h4>\n    <DatePicker :value="[]"></DatePicker>\n    </Col>\n    <Col span="8">\n    <h4>范围符号</h4>\n    <DatePicker range-separator="至" :value="[]"></DatePicker>\n    </Col>\n  </Row>',disabled:'<Row padding="10">\n    <Col span="8">\n    <h4>局部禁用</h4>\n    <DatePicker :disabled-date="disabledDate"></DatePicker>\n    </Col>\n    <Col span="8">\n    <h4>禁用</h4>\n    <DatePicker disabled></DatePicker>\n    </Col>\n  </Row>\n  methods: { \n    disabledDate: time => {\n      var day = time.getDay();\n      return day === 0 || day === 6;\n    }\n  }',lang:'英文：\n  <DatePicker lang="en"></DatePicker> \n  中文：\n  <DatePicker></DatePicker>'};e.default=s},"U9/v":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=d(a("YEIV")),n=d(a("cF/K")),o=d(a("Ff65")),r=d(a("7+I9"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:r.default},components:{Code:n.default,Collapse:o.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,s.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},rPBU:function(t,e,a){"use strict";a.r(e);var s=a("t4Pn"),n=a("ynSj");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);var r=a("KHd+"),d=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);e.default=d.exports},sOOp:function(t,e,a){"use strict";a.r(e);var s=a("U9/v"),n=a.n(s);for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);e.default=n.a},t4Pn:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("DatePicker 日期选择器")]),t._v(" "),a("Alert",[t._v("注意：非 template/render 模式下，需使用 date-picker。")]),t._v(" "),a("h3",[t._v("代码示例")]),t._v(" "),a("Row",{attrs:{gutter:"8"}},[a("Col",{attrs:{span:"12"}},[a("Demo",{attrs:{title:"基础用法",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("DatePicker")],1),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可使用\n        "),a("code",[t._v("v-model")]),t._v("进行数据双向绑定")]),t._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),a("Demo",{attrs:{title:"可清除",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("DatePicker",{attrs:{clearable:""}})],1),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过设置\n          "),a("code",[t._v("clearble")]),t._v("属性可控制是否显示清空按钮")])]),t._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.clearable))])]),t._v(" "),a("Demo",{attrs:{title:"尺寸",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("DatePicker"),t._v(" "),a("DatePicker",{attrs:{mini:""}})],1),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过设置\n          "),a("code",[t._v("mini")]),t._v("可设置组件大小，\n          "),a("code",[t._v("width")]),t._v("属性可控制组件宽度")])]),t._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.size))])]),t._v(" "),a("Demo",{attrs:{title:"日期单位",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Row",{attrs:{gutter:"10"}},[a("Col",{attrs:{span:"8"}},[t._v(" 年\n          "),a("DatePicker",{attrs:{format:"YYYY"}})],1),t._v(" "),a("Col",{attrs:{span:"8"}},[t._v(" 月\n          "),a("DatePicker",{attrs:{format:"MM"}})],1),t._v(" "),a("Col",{attrs:{span:"8"}},[t._v(" 时间\n          "),a("DatePicker",{attrs:{format:"YYYY-MM-DD HH:mm:ss"}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),a("code",[t._v("format")]),t._v("来控制显示年月日或者其他格式")]),t._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.date))])])],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("Demo",{attrs:{title:"选择日期范围",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Row",{attrs:{padding:"10"}},[a("Col",{attrs:{span:"8"}},[a("h4",[t._v("范围")]),t._v(" "),a("DatePicker",{attrs:{value:[]}})],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("h4",[t._v("范围符号")]),t._v(" "),a("DatePicker",{attrs:{"range-separator":"至",value:[]}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可以通过\n        "),a("code",[t._v("range-separator")]),t._v("来设置展示分隔符")]),t._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.range))])]),t._v(" "),a("Demo",{attrs:{title:"禁用",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Row",{attrs:{padding:"10"}},[a("Col",{attrs:{span:"8"}},[a("h4",[t._v("局部禁用")]),t._v(" "),a("DatePicker",{attrs:{"disabled-date":t.disabledDate}})],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("h4",[t._v("禁用")]),t._v(" "),a("DatePicker",{attrs:{disabled:""}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置\n          "),a("code",[t._v("disabled")]),t._v("属性来控制组件是否可用")])]),t._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])]),t._v(" "),a("Demo",{attrs:{title:"多语言",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("英文：\n        "),a("DatePicker",{attrs:{lang:"en"}}),t._v("\n        中文：\n        "),a("DatePicker")],1),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),a("code",[t._v("lang")]),t._v("来控制语言类型，目前有英文和中文两种，默认中文\n        "),a("code",[t._v("zh-cn")])]),t._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.lang))])])],1)],1),t._v(" "),a("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-border"},[a("table",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("默认时间值")]),t._v(" "),a("td",[t._v("Date, Array, String")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("是否禁用")]),t._v(" "),a("td",[t._v("Boolen")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("mini")]),t._v(" "),a("td",[t._v("组件尺寸大小")]),t._v(" "),a("td",[t._v("Boolean ")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("rangeSeparator")]),t._v(" "),a("td",[t._v("日期区间间隔符")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("～")])]),t._v(" "),a("tr",[a("td",[t._v("clearable")]),t._v(" "),a("td",[t._v("是否显示清除图标")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("placeholder")]),t._v(" "),a("td",[t._v("提示语")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("lang")]),t._v(" "),a("td",[t._v("本地化，提供2中语言切换 中英，zh，en")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("zh")])]),t._v(" "),a("tr",[a("td",[t._v("transfer")]),t._v(" "),a("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("disabledDate")]),t._v(" "),a("td",[t._v("范围分离")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("format")]),t._v(" "),a("td",[t._v("时间格式化，支持YYYY-MM-DD HH:mm:ss ")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("YYYY-MM-DD")])]),t._v(" "),a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("默认值改变之后的回调，返回当前选择的时间，字符串")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("-")])])])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n})},vWKY:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(a("KmQ5")),n=o(a("C8VU"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:n.default},data:function(){return{code:s.default}},methods:{disabledDate:function(t){var e=t.getDay();return 0===e||6===e}}}},ynSj:function(t,e,a){"use strict";a.r(e);var s=a("vWKY"),n=a.n(s);for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);e.default=n.a},z7BB:function(t,e,a){"use strict";a.r(e);var s=a("BybE"),n=a("sOOp");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);var r=a("KHd+"),d=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);e.default=d.exports}}]);