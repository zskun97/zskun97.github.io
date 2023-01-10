(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{357:function(t,a,s){t.exports=s.p+"assets/img/8.c7beeb2c.png"},358:function(t,a,s){t.exports=s.p+"assets/img/9.04af4a40.png"},359:function(t,a,s){t.exports=s.p+"assets/img/10.aec18ded.png"},441:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"springboot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot"}},[t._v("#")]),t._v(" SpringBoot")]),t._v(" "),a("p",[t._v("查看springboot加载的组件")]),t._v(" "),a("p",[t._v("启动类上获取容器")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigurableApplicationContext")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringBootDemoApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" beanDefinitionNames "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBeanDefinitionNames")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" beanDefinitionName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" beanDefinitionNames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("beanDefinitionName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"自动装配原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动装配原理"}},[t._v("#")]),t._v(" 自动装配原理")]),t._v(" "),a("p",[t._v("默认扫描当前包及其子包里面所有的组件")]),t._v(" "),a("p",[t._v("依赖包中的META-INF/spring.factories配置了默认需要导入的全类名")]),t._v(" "),a("p",[t._v("按需加载所有自动配置项")]),t._v(" "),a("p",[t._v("springboot所有自动配置功能都在"),a("code",[t._v("spring-boot-autoconfigure")]),t._v("包里面,这个包里面有全场景的自动配置类")]),t._v(" "),a("p",[t._v("配置类上有各种condition判断条件是否需要注册bean")]),t._v(" "),a("p",[a("img",{attrs:{src:s(357),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(358),alt:""}})]),t._v(" "),a("h3",{attrs:{id:"请求映射原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求映射原理"}},[t._v("#")]),t._v(" 请求映射原理")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("从dispatcherServlet的doDispatch开始")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1354552/1603181171918-b8acfb93-4914-4208-9943-b37610e93864.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_YXRndWlndS5jb20g5bCa56GF6LC3%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"https://cdn.nlark.com/yuque/0/2020/png/1354552/1603181171918-b8acfb93-4914-4208-9943-b37610e93864.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_YXRndWlndS5jb20g5bCa56GF6LC3%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"}})])]),t._v(" "),a("li",[a("p",[t._v("doDispatch方法中调用getHandler()获取请求对应的Handler(Controller方法)处理")])]),t._v(" "),a("li",[a("p",[t._v("getHandler方法中遍历处理器映射器"),a("code",[t._v("handlerMappings")]),t._v(" "),a("strong",[t._v("RequestMappingHandlerMapping")]),t._v("：保存了所有@RequestMapping 和handler的映射规则")]),t._v(" "),a("p",[a("img",{attrs:{src:s(359),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1354552/1603181662070-9e526de8-fd78-4a02-9410-728f059d6aef.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_48%2Ctext_YXRndWlndS5jb20g5bCa56GF6LC3%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"https://cdn.nlark.com/yuque/0/2020/png/1354552/1603181662070-9e526de8-fd78-4a02-9410-728f059d6aef.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_48%2Ctext_YXRndWlndS5jb20g5bCa56GF6LC3%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"}})])]),t._v(" "),a("li",[a("p",[t._v("AbstractHandlerMethodMapping."),a("code",[t._v("lookupHandlerMethod")]),t._v("方法, 从mapping中根据路径先查找一个集合, 然后从集合中根据请求方式进行匹配,如果最终匹配到多个会报错")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);