/*! kui-vue v1.6.9 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([42],{"0pCJ":function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{width:"700px"}},[r("Tabs",{attrs:{card:""}},[r("TabPane",{attrs:{label:"Tab1",icon:"social-windows"}},[e._v("我是内容1....")]),e._v(" "),r("TabPane",{attrs:{label:"Tab2",icon:"social-apple"}},[e._v("我是内容2....")]),e._v(" "),r("TabPane",{attrs:{label:"Tab3",icon:"social-android"}},[e._v("我是内容3....")])],1),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("Checkbox",{attrs:{value:"true",indeterminate:e.t}}),e._v(" "),r("Form",{ref:"form",attrs:{"label-width":80,model:e.form,rules:e.rules,labelAlign:e.labelAlign}},[r("FormItem",{attrs:{label:"Input",prop:"input"}},[r("Input",{attrs:{clearable:"",mini:""},model:{value:e.form.input,callback:function(t){e.$set(e.form,"input",t)},expression:"form.input"}})],1),e._v(" "),r("FormItem",{staticClass:"k-form-item-required",attrs:{label:"Select"}},[r("Row",{attrs:{gutter:"8"}},[r("Col",{attrs:{span:"11"}},[r("FormItem",{attrs:{prop:"select"}},[r("Select",{attrs:{clearable:""},model:{value:e.form.select,callback:function(t){e.$set(e.form,"select",t)},expression:"form.select"}},[r("Option",{attrs:{value:"0"}},[e._v("男男男男男男男男男男男男男男男男男男男男男男男男男男男")]),e._v(" "),r("Option",{attrs:{value:"1"}},[e._v("女")]),e._v(" "),r("Option",{attrs:{value:"2"}},[e._v("妖")])],1)],1)],1),e._v(" "),r("Col",{attrs:{span:"11"}},[r("FormItem",{attrs:{prop:"select2"}},[r("Select",{attrs:{clearable:""},model:{value:e.form.select2,callback:function(t){e.$set(e.form,"select2",t)},expression:"form.select2"}},[r("Option",{attrs:{value:"0"}},[e._v("男")]),e._v(" "),r("Option",{attrs:{value:"1"}},[e._v("女")]),e._v(" "),r("Option",{attrs:{value:"2"}},[e._v("妖")])],1)],1)],1)],1)],1),e._v(" "),r("FormItem",{attrs:{label:"DatePicker",prop:"datepicker"}},[r("DatePicker",{attrs:{clearable:"",mini:""},model:{value:e.form.datepicker,callback:function(t){e.$set(e.form,"datepicker",t)},expression:"form.datepicker"}})],1),e._v(" "),r("FormItem",{attrs:{label:"Radio",prop:"radio"}},[r("RadioGroup",{model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[r("Radio",{attrs:{label:"0"}},[e._v("男")]),e._v(" "),r("Radio",{attrs:{label:"1"}},[e._v("女")]),e._v(" "),r("Radio",{attrs:{label:"2"}},[e._v("妖")])],1)],1),e._v(" "),r("FormItem",{attrs:{label:"Checkbox",prop:"checkbox"}},[r("CheckboxGroup",{model:{value:e.form.checkbox,callback:function(t){e.$set(e.form,"checkbox",t)},expression:"form.checkbox"}},[r("Checkbox",{attrs:{label:"0"}},[e._v("男")]),e._v(" "),r("Checkbox",{attrs:{label:"1"}},[e._v("女")]),e._v(" "),r("Checkbox",{attrs:{label:"2"}},[e._v("妖")]),e._v(" "),r("Checkbox",{attrs:{label:"3"}},[e._v("鲛人")])],1)],1),e._v(" "),r("FormItem",{attrs:{label:"Text",prop:"textarea"}},[r("Input",{attrs:{type:"textarea",placeholder:"情输入..."},model:{value:e.form.textarea,callback:function(t){e.$set(e.form,"textarea",t)},expression:"form.textarea"}})],1),e._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("Submit")]),e._v(" "),r("Button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){e.resetForm("form")}}},[e._v("Reset")])],1)],1),e._v(" "),r("Button",{on:{click:e.test}},[e._v("test")])],1)},o=[]},ga5R:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("iwcd"),o=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);var l=r("0pCJ"),i=r("XyMi"),s=Object(i.a)(o.a,l.a,l.b,!1,null,null,null);t.default=s.exports},iwcd:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("zXXW"),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={data:function(){var e=this,t=function(t,r,n){""===r?n(new Error("请填写密码")):(""!==e.customForm.rePassword&&e.$refs.customForm.validateField("rePassword"),n())},r=function(t,r,n){""===r?n(new Error("请再次输入密码")):(e.customForm.password!==r&&n(new Error("两次密码输入不一致")),n())},n=function(e,t,r){""===t?r(new Error("请输入用户名")):t.length<2||t.length>6?r(new Error("用户名长度为2-6位")):r()};return{b:1,a:!0,t:!1,labelAlign:"right",code:o.default,form:{switch:!0,input:"",select:0,select2:2,datepicker:"2018-10-10",radio:0,checkbox:["0"],textarea:""},rules:{input:[{required:!0,trigger:"blur"},{pattner:/^[1][3,4,5,7,8][0-9]{9}$/,trigger:"blur"}],select:[{required:!0,trigger:"change"}],select2:[{required:!0,trigger:"change"}],datepicker:[{required:!0,trigger:"change"}],radio:[{required:!0,trigger:"change"}],checkbox:[{required:!0,trigger:"change",min:2,max:3}],textarea:[{required:!0,message:"必填",trigger:"blur"},{min:2,max:5,message:"长度为2-5个字符",trigger:"blur"}]},customRules:{userName:[{validator:n,trigger:"blur"}],password:[{validator:t,trigger:"blur"}],rePassword:[{validator:r,trigger:"blur"}]},customForm:{userName:"",password:"",rePassword:""},count:1,dynamicForm:{items:[{value:"",index:1}]}}},methods:{test1:function(e){},test:function(){this.form.select=2,this.form.select2=0,this.t=!this.t,this.a=!this.a},add:function(){this.count++,this.dynamicForm.items.push({value:"",index:this.count})},del:function(e){this.dynamicForm.items.splice(e,1)},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$Message.success("验证通过"):t.$Message.error("验证失败")})},resetForm:function(e){this.$refs[e].resetFields()}}}},zXXW:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};n.base='<Form :label-width="80">\n    <FormItem label="Input">\n        <Input v-model="form.input"></Input>\n    </FormItem>\n    <FormItem label="Select">\n        <Select v-model="form.select">\n            <Option v-for="(x,y) in select" :key="y" :value="x.value">{{x.label}}</Option>\n        </Select>\n    </FormItem>\n    <FormItem label="DatePicker">\n        <DatePicker v-model="form.datepicker"></DatePicker>\n    </FormItem>\n    <FormItem label="Radio">\n        <RadioGroup v-model="form.radio">\n            <Radio label="0">男</Radio>\n            <Radio label="1">女</Radio>\n            <Radio label="2">妖</Radio>\n        </RadioGroup>\n    </FormItem>\n    <FormItem label="Checkbox">\n        <CheckboxGroup v-model="form.checkbox">\n            <Checkbox label="0">男</Checkbox>\n            <Checkbox label="1">女</Checkbox>\n            <Checkbox label="2">妖</Checkbox>\n        </CheckboxGroup>\n    </FormItem>\n    <FormItem label="Switch">\n        <Switch true-text="是" false-text="否"></Switch>\n    </FormItem>\n    <FormItem label="Text">\n        <Input type="textarea" placeholder="情输入..."></Input>\n    </FormItem>\n    <FormItem>\n        <Button type="primary">Submit</Button>\n        <Button style="margin-left: 10px">Cancel</Button>\n    </FormItem>\n</Form>\n<script>\nexport default {\n  data(){\n      return{\n        form: {\n            switch: true,\n            input: "",\n            select: 0,\n            datepicker: "",\n            radio: "1",\n            checkbox: [\'0\']\n        },\n      }\n  }\n}\n<\/script>',n.invalid='<Form :label-width="80" ref="form" :model="form" :rules="rules" :labelAlign="labelAlign">\n    <FormItem label="Input" prop="input">\n        <Input v-model="form.input"></Input>\n    </FormItem>\n    <FormItem label="Select">\n        <Row>\n            <Col span="12">\n            <FormItem  prop="province">\n                <Select v-model="form.province" clearable>\n                    <Option value="0">北京</Option>\n                    <Option value="1">上海</Option>\n                    <Option value="2">广州</Option>\n                    <Option value="3">深圳</Option>\n                </Select>\n            </FormItem>\n            </Col>\n            <Col span="11" offset="1">\n            <FormItem prop="city">\n                <Select v-model="form.city" clearable>\n                    <Option value="0">南山区</Option>\n                    <Option value="1">龙华区</Option>\n                    <Option value="2">福田区</Option>\n                    <Option value="3">宝安区</Option>\n                </Select>   \n            </FormItem>\n            </Col>\n        </Row>\n    </FormItem>\n    <FormItem label="DatePicker" prop="datepicker">\n        <DatePicker v-model="form.datepicker" clearable></DatePicker>\n    </FormItem>\n    <FormItem label="Radio" prop="radio">\n        <RadioGroup v-model="form.radio">\n            <Radio label="0">男</Radio>\n            <Radio label="1">女</Radio>\n            <Radio label="2">妖</Radio>\n        </RadioGroup>\n    </FormItem>\n    <FormItem label="Checkbox" prop="checkbox">\n        <CheckboxGroup v-model="form.checkbox">\n            <Checkbox label="0">男</Checkbox>\n            <Checkbox label="1">女</Checkbox>\n            <Checkbox label="2">妖</Checkbox>\n            <Checkbox label="3">鲛人</Checkbox>\n        </CheckboxGroup>\n    </FormItem>\n    <FormItem label="Text" prop="textarea">\n        <Input type="textarea" placeholder="情输入..." v-model="form.textarea"></Input>\n    </FormItem>\n    <FormItem>\n        <Button type="primary" @click="submitForm(\'form\')">Submit</Button>\n        <Button style="margin-left: 10px" @click="resetForm(\'form\')">Reset</Button>\n    </FormItem>\n</Form>\n<script>\nexport default {\n    data() {\n        return {\n            labelAlign: \'right\',\n            code: code,\n            select: [\n                { label: "男", value: "0" },\n                { label: "女", value: "1" },\n                { label: "妖", value: "2" },\n            ],\n            form: {\n                switch: true,\n                input: "",\n                province:\'\',\n                city:\'\',\n                select: \'\',\n                datepicker: "",\n                radio: "",\n                checkbox: [],\n                textarea: \'\'\n            },\n            rules: {\n                input: [{ required: true, trigger: \'blur\' }],\n                select: [{ required: true, trigger: \'change\' }],\n                province: [{ required: true, trigger: \'change\' }],\n                city: [{ required: true, trigger: \'change\' }],\n                datepicker: [{ required: true, trigger: \'change\' }],\n                radio: [{ required: true, trigger: \'change\' }],\n                checkbox: [{ required: true, trigger: \'change\', min: 2, max: 3 }],\n                textarea: [{ required: true, message: \'必填\', trigger: \'blur\' }, { min: 2, max: 5, message: \'长度为2-5个字符\', trigger: \'blur\' }],\n            },\n        };\n    },\n    methods: {\n        submitForm(name) {\n            console.log(this.$refs[name].model)\n            this.$refs[name].validate(valid => {\n                if (valid) {\n                    this.$Message.success(\'验证通过\')\n                } else {\n                    this.$Message.error(\'验证失败\')\n                }\n            })\n        },\n        resetForm(name) {\n            this.$refs[name].resetFields()\n        },\n    }\n};\n<\/script>\n',n.customValid='<Form :model="customForm" :rules="customRules" labelWidth="80" ref="customForm">\n    <FormItem label="userName" prop="userName">\n        <Input v-model="customForm.userName" />\n    </FormItem>\n    <FormItem label="password" prop="password">\n        <Input v-model="customForm.password" type="password" />\n    </FormItem>\n    <FormItem label="Confrim" prop="rePassword">\n        <Input v-model="customForm.rePassword" type="password" />\n    </FormItem>\n    <FormItem>\n        <Button type="primary" @click="submitForm(\'customForm\')">Submit</Button>\n        <Button style="margin-left: 10px" @click="resetForm(\'customForm\')">Reset</Button>\n    </FormItem>\n</Form>\n<script>\nimport code from \'../code/form\'\nexport default {\n    data() {\n        const validatePass = (rule, value, callback) => {\n            if (value === \'\') {\n                callback(new Error(\'请填写密码\'))\n            } else {\n                if (this.customForm.rePassword !== "") {\n                    this.$refs.customForm.validateField(\'rePassword\')\n                }\n                callback()\n            }\n        };\n        const validateRePass = (rule, value, callback) => {\n            if (value === \'\') {\n                callback(new Error(\'请再次输入密码\'))\n            } else {\n                if (this.customForm.password !== value) {\n                    callback(new Error(\'两次密码输入不一致\'))\n                }\n                callback()\n            }\n        };\n        const validateUserName = (rule, value, callback) => {\n            if (value === \'\') {\n                callback(new Error(\'请输入用户名\'))\n            } else {\n                if (value.length < 2 || value.length > 6) {\n                    callback(new Error(\'用户名长度为2-6位\'))\n                } else {\n                    callback()\n                }\n            }\n        };\n        return {\n            labelAlign: \'right\',\n            code: code,\n            select: [\n                { label: "男", value: "0" },\n                { label: "女", value: "1" },\n                { label: "妖", value: "2" },\n            ],\n            customRules: {\n                userName: [{ validator: validateUserName, trigger: \'blur\' }],\n                password: [{ validator: validatePass, trigger: \'blur\' }],\n                rePassword: [{ validator: validateRePass, trigger: \'blur\' }],\n            },\n            customForm: {\n                userName: \'\',\n                password: \'\',\n                rePassword: \'\'\n            },\n        };\n    },\n    methods: {\n        submitForm(name) {\n            console.log(this.$refs[name].model)\n            this.$refs[name].validate(valid => {\n                if (valid) {\n                    this.$Message.success(\'验证通过\')\n                } else {\n                    this.$Message.error(\'验证失败\')\n                }\n            })\n        },\n        resetForm(name) {\n            this.$refs[name].resetFields()\n        },\n    }\n};\n<\/script>\n',t.default=n}});