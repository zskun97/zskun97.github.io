(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{339:function(t,e,a){t.exports=a.p+"assets/img/image-20220111114315417.94b4f41c.png"},434:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"策略模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[t._v("#")]),t._v(" 策略模式")]),t._v(" "),e("h3",{attrs:{id:"定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),e("p",[t._v("策略模式作为一种软件设计模式，指对象有某个行为，但是在不同的场景中，该行为有不同的实现算法。"),e("strong",[t._v("定义一系列的算法，把它们一个个封装起来，并且使它们可相互替换。")])]),t._v(" "),e("p",[t._v("策略模式的核心思想是在一个计算方法中把容易变化的算法抽出来作为“策略”参数传进去，从而使得新增策略不必修改原有逻辑。")]),t._v(" "),e("p",[e("strong",[t._v("组成")]),t._v(" 抽象策略角色： 策略类，通常由一个接口或者抽象类实现。 具体策略角色：包装了相关的算法和行为。 环境角色：持有一个策略类的"),e("strong",[t._v("引用")]),t._v("，最终给客户端调用。")]),t._v(" "),e("p",[e("strong",[t._v("实际例子: 线程池创建是需要传入拒绝策略, 这就是策略模式")])]),t._v(" "),e("h3",{attrs:{id:"实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),e("p",[e("strong",[t._v("通俗场景理解")])]),t._v(" "),e("p",[t._v("比如自行车大概分 公路车 山地车 bmx 淑女车")]),t._v(" "),e("p",[t._v("现在要实现一个场景就是 我骑车去上学")]),t._v(" "),e("p",[t._v("工厂模式: 我想要公路车,我告诉工厂,他给我一个公路车; 这个车我可以让他做任何事 我不是工厂模式的一部分,我是调用方 但是这件事本身没携带我的信息, 比如转向, 并不知道是谁在操作, 所以需要将“我”传给这个转向方法; 需要刹车,再将我传递给刹车方法;")]),t._v(" "),e("p",[t._v("策略模式: 我相当于环境角色, 我有一个属性是自行车, 我有一个动作是去上学 这时候外界比如妈妈让我去上学, 但是目前我没有车不知道怎么去上学, 所以需要妈妈给我一个车,然后调用我的上学动作 我是策略模式的一部分, 并且外界调用我去使用自行车时,能提供的方法由我决定, 比如自行车可以转向,但是我不会转向,那外界就不能让我转向")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@Testvoid testStrategy(){    //通过工厂方法实现小明骑公路车    Person xiaoming = new Person("小明");    //先获得一辆公路车    Bicycle bicycle = bicycleFactory.get(1);    //调用自行车的骑行动作    bicycle.ride(xiaoming.getName());    System.out.println("小明换一辆山地车");    bicycle=bicycleFactory.get(2);    bicycle.turn(xiaoming.getName());    System.out.println("");    //通过策略模式实现小红骑行山地车    Person xiaohong = new Person("小红");    //给小红一辆山地车(这里结合了工厂模式)    xiaohong.setBicycle(bicycleFactory.get(2));    //调用小红的前行动作    xiaohong.ride();    System.out.println("小红换一辆公路车");    xiaohong.setBicycle(bicycleFactory.get(1));    xiaohong.turn();    //两个方式比较发现, 工厂模式的操作主体是Bicycle, 而我们本语义的主体是Person}\n')])])]),e("p",[t._v("输出结果：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("小明骑公路车前进\n小明换一辆山地车\n小明骑山地车转向\n\n小红骑山地车前进\n小红换一辆公路车\n小红骑公路车转向\n")])])]),e("h3",{attrs:{id:"策略模式和工厂方法的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#策略模式和工厂方法的区别"}},[t._v("#")]),t._v(" "),e("strong",[t._v("策略模式和工厂方法的区别")])]),t._v(" "),e("p",[t._v("策略模式是行为模式 工厂方法是建造模式")]),t._v(" "),e("p",[e("strong",[t._v("项目结构")]),t._v(" 结构相似, 一个接口, 几个实现类, 一个工厂factory/环境角色contest")]),t._v(" "),e("p",[e("img",{attrs:{src:a(339),alt:"../../../img//other/image-20220111114315417.png"}})]),t._v(" "),e("p",[e("strong",[t._v("代码的差异")])]),t._v(" "),e("p",[t._v("工厂方法: 工厂直接返回对应的实例, 调用方可以使用实例中所有的方法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@Componentpublic class BicycleFactory {    private Map<Integer, Bicycle> bicycleMap = new ConcurrentHashMap();    @PostConstruct    public void init() {        //这里1 2 不符合规范，可以写到枚举中        bicycleMap.put(1, new RoadVehicle());        bicycleMap.put(2, new MountainBike());    }    public Bicycle get(Integer type){        return bicycleMap.get(type);    }}\n")])])]),e("p",[t._v("策略模式: 调用方传入对应的实例, 将其作为Context的一部分, 调用方通过Context去使用该实例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@Datapublic class Person {    String name;    Bicycle bicycle;  //这个策略模式使用的    public Person(String name){        this.name = name;    }    //下面的方法属于策略模式使用    public void ride(){        this.bicycle.ride(this.name);    }    public void turn(){        this.bicycle.turn(this.name);    }}\n")])])]),e("p",[t._v("工厂模式： 1）根据你给出的目的来生产不同用途的产品 2）即根据你给出一些属性来生产不同行为的一类对象返回给你。 3）关注对象创建 策略模式： 1）用工厂生产的产品来做对应的事情，例如用自行车来去学校，用汽车来出远门郊游。 2）即根据你给出对应的对象来执行对应的方法。 3）关注行为的选择")]),t._v(" "),e("p",[t._v("工厂模式：根据客户选择的条件，来帮客户创建一个对象。 策略模式：客户给它一个创建好的对象，它来帮客户做相应的事。")]),t._v(" "),e("p",[t._v("工厂模式中只管生产实例，具体怎么使用工厂实例由调用方决定，策略模式是将生成实例的使用策略放在策略类中配置后才提供调用方使用。 工厂模式调用方可以直接调用工厂实例的方法属性等，策略模式不能直接调用实例的方法属性，需要在策略类中封装策略后调用。")]),t._v(" "),e("h3",{attrs:{id:"策略模式和桥接模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#策略模式和桥接模式"}},[t._v("#")]),t._v(" 策略模式和桥接模式")]),t._v(" "),e("p",[t._v("策略模式和桥接都是一个类中含有其他类的引用")]),t._v(" "),e("p",[t._v("从设计思想去区分, 策略模式是行为模式, 桥接是结构模式 他们不是对立的")])])}),[],!1,null,null,null);e.default=n.exports}}]);