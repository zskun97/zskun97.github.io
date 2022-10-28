(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{344:function(t,a,s){"use strict";s.r(a);var e=s(3),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模板方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板方法"}},[t._v("#")]),t._v(" 模板方法")]),t._v(" "),a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。")]),t._v(" "),a("p",[t._v("父类定义骨架，子类实现某些细节")]),t._v(" "),a("p",[t._v("为了防止子类重写父类的骨架方法，可以在父类中对骨架方法使用"),a("code",[t._v("final")]),t._v("。对于需要子类实现的抽象方法，一般声明为"),a("code",[t._v("protected")]),t._v("，使得这些方法对外部客户端不可见")]),t._v(" "),a("p",[t._v("比如大象放进冰箱需要几步?")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("打开冰箱门\n放入大象\n关上冰箱门\n")])])]),a("p",[t._v("只针对"),a("strong",[t._v("大象放进冰箱")]),t._v("这个业务编排了业务步骤,和抽象方法, 具体的实现有子类去实现; 实现类中你是左手开冰箱门还是右手开冰箱门,还是用牙开冰箱门都可以")]),t._v(" "),a("p",[t._v("模板方法是一种高层定义骨架，底层实现细节的设计模式，适用于流程固定，但某些步骤不确定或可替换的情况。")])])}),[],!1,null,null,null);a.default=r.exports}}]);