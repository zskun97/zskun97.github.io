(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{410:function(t,v,_){"use strict";_.r(v);var a=_(3),e=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"ddd抽奖系统学习打卡🚀-day-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ddd抽奖系统学习打卡🚀-day-3"}},[t._v("#")]),t._v(" DDD抽奖系统学习打卡🚀 day 3")]),t._v(" "),v("p",[t._v("Created: January 30, 2022 8:54 AM")]),t._v(" "),v("p",[t._v("第11节")]),t._v(" "),v("p",[t._v("通过路由组件分库分表使用事务时，不能像第10节一样在dao接口上添加注解，不然每次通过接口调用时都会进入切面然后有切换数据源的动作，没办法处理事务，所以需要手动切换数据源 dbRouter.doRouter(partake.getuId()) ，并通过编程式事务进行管理")]),t._v(" "),v("p",[t._v("需要注意，前提是事务中这些表的路由键都是同一业务字段，比如userid，才能保证数据都在同一个库中，上面操作才有意义；如果事务中操作的数据分配在不同的库中，或者在应用层添加事务，那么上述操作不可用，不知道小傅哥后面有没有加这些功能，有点像分布式事务了")]),t._v(" "),v("p",[t._v("第12节")]),t._v(" "),v("p",[t._v("这一章节比较简单，只是在应用层编排了业务逻辑，和之前自己理解的应用层差不多")]),t._v(" "),v("p",[t._v("第13节")]),t._v(" "),v("p",[t._v("今天有点浆糊不在状态，跳过明天仔细看")]),t._v(" "),v("p",[t._v("第14节")]),t._v(" "),v("p",[t._v("学习对象转换，之前都是直接使用工具类没想太多；")]),t._v(" "),v("p",[t._v("结合小傅哥的dto2vo插件介绍，在接口层转换对象时，可以封装MapStruct维护转换关系；但是在方法中的对象转换操作比较多时，又不值当单独维护一套映射，且对象属性名不匹配或者可能存在变更时（一般自己内部定义的都会尽量的统一）使用工具类隐形转换不好知道都影响什么位置，这时get/set可能是最省心的了（虽然看起来有点 额 有点原始。。），避免字段无法映射导致无法赋值；")]),t._v(" "),v("p",[t._v("推荐小傅哥的vo2dto插件哈，idea直接搜索就有啦")])])}),[],!1,null,null,null);v.default=e.exports}}]);