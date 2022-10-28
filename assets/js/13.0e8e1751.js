(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{327:function(_,a,v){"use strict";v.r(a);var t=v(3),r=Object(t.a)({},(function(){var _=this,a=_._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"分布式事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[_._v("#")]),_._v(" 分布式事务")]),_._v(" "),a("h2",{attrs:{id:"一、什么是分布式事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是分布式事务"}},[_._v("#")]),_._v(" 一、什么是分布式事务")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[_._v("分布式事务是指事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于不同的分布式系统的不同节点之上。\n")])])]),a("p",[_._v("比如在大型电商系统中，下单接口通常会扣减库存、减去优惠、生成订单id。而订单服务与库存、优惠、订单id都是不同的服务，下单接口的成功与否，不仅取决于本地的DB操作，而且依赖第三方系统的结果，")]),_._v(" "),a("p",[_._v("这时候分布式事务就保证这些操作要么全部成功，要么全部失败。")]),_._v(" "),a("p",[_._v("本质上来说分布式事务就是为了保证不同数据库的数据一致性")]),_._v(" "),a("h2",{attrs:{id:"二、分布式事务有几种方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、分布式事务有几种方案"}},[_._v("#")]),_._v(" 二、分布式事务有几种方案")]),_._v(" "),a("h3",{attrs:{id:"_1、两阶段提交-xa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、两阶段提交-xa"}},[_._v("#")]),_._v(" 1、两阶段提交/XA")]),_._v(" "),a("p",[_._v("两阶段提交，也就是说要分两步提交。存在一个负责协调各个本地资源管理器的事务管理器，本地资源管理器一般是由数据库实现，事务管理器在第一阶段的时候询问各个资源管理器是否都就绪？如果收到每个资源的回复都是yes，则在第二阶段提交事务，如果其中任意一个资源的回复是no，则回滚事务。")]),_._v(" "),a("p",[a("img",{attrs:{src:"/img/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1/1.png",alt:""}}),_._v(" "),a("img",{attrs:{src:"/img/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1/2.png",alt:""}})]),_._v(" "),a("p",[_._v("流程：")]),_._v(" "),a("p",[_._v("第一阶段（prepare）：事务管理器向所有本地资源管理器发起请求，询问是否是ready状态，所有参与者都将与本事务能否成功的信息反馈给协调者")]),_._v(" "),a("p",[_._v("第二阶段（commit/rollback）：事务管理器根据所有本地资源管理器的反馈，通知所有本地资源管理器，步调一致的在所有分支撒谎给你提交或者回滚")]),_._v(" "),a("h3",{attrs:{id:"存在的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题"}},[_._v("#")]),_._v(" 存在的问题")]),_._v(" "),a("p",[_._v("同步阻塞：当参与是五折存在占用公共资源的情况，其中一个占用的资源，其他事务参与者就只能阻塞等待资源释放，处于阻塞状态")]),_._v(" "),a("p",[_._v("单点故障：一旦事务管理器出现故障，整个系统不可用")]),_._v(" "),a("p",[_._v("数据不一致：在阶段二，如果事务管理器只发送了部分commit消息，此时网络发生异常，那么只有部分参与者接收到commit消息，也就是说只有部分参与者提交了事务，是的系统数据不一致")]),_._v(" "),a("p",[_._v("不确定性：当事务管理器发送commit之后，并且此时只有一个参与者收到了commit，那么当该参与者与事务管理器同时宕机之后，重新选举的事务管理器无法确定该消息是否提交成功")]),_._v(" "),a("h3",{attrs:{id:"_2、tcc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、tcc"}},[_._v("#")]),_._v(" 2、TCC")]),_._v(" "),a("p",[_._v("TCC（Try Confirm Cancel）")]),_._v(" "),a("p",[_._v("Try阶段：尝试执行，完成所有业务检查（一致性），预留必须业务资源（准隔离性）")]),_._v(" "),a("p",[_._v("Confirm阶段：确认执行真正执行业务，不做任何业务检查，只是用Try阶段预约的业务资源，Confirm操作满足幂等性。要求具备幂等设计，Confirm失败后需要进行重试")]),_._v(" "),a("p",[_._v("Cancel阶段：取消执行，释放try阶段预留的业务资源Cancel操作满足幂等性Cancel阶段的异常和Confirm阶段异常处理方案基本上一致")]),_._v(" "),a("p",[_._v("在Try阶段，是对业务系统进行检查及资源预览，比如订单和存储操作，需要检查库存剩余数量是否够用，并进行预留，预留操作的话就是新建一个可用库存数量字段，Try阶段操作是对这个可用库存数量进行操作。")]),_._v(" "),a("h3",{attrs:{id:"_3、本地消息表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、本地消息表"}},[_._v("#")]),_._v(" 3、本地消息表")]),_._v(" "),a("p",[_._v("该方案种会有消息生产者和消费者两个角色，假设A是消息生产者，系统B是消息消费者，大致流程为")]),_._v(" "),a("p",[a("img",{attrs:{src:"/img/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1/3.png",alt:""}})]),_._v(" "),a("p",[_._v("1、当系统A被其它系统调用发生数据库表更新操作，首先会更新数据库的业务表，其次会往相同数据库的消息表种插入一条数据，两个操作发生在同一个事务中")]),_._v(" "),a("p",[_._v("2、系统A的脚本定期轮询本地消息往mq中写入一条消息，如果消息发送失败会进行重试")]),_._v(" "),a("p",[_._v("3、系统B消费mq中的消息，并处理业务逻辑，如果本地事务处理失败，会在继续消费mq中的消息进行重试，如果业务上的失败可以通知系统A进行回滚操作")]),_._v(" "),a("p",[_._v("本地消息表实现的条件")]),_._v(" "),a("p",[_._v("1、消费者与生成者的接口都要支持幂等")]),_._v(" "),a("p",[_._v("2、生产者需要额外的创建消息表")]),_._v(" "),a("p",[_._v("3、需要提供补偿逻辑，如果消费者业务失败，需要生产者支持回滚操作")]),_._v(" "),a("p",[_._v("容错机制：")]),_._v(" "),a("p",[_._v("1、步骤1失败时，事务直接回滚")]),_._v(" "),a("p",[_._v("2、步骤2、3写mq与消费mq失败会进行重试")]),_._v(" "),a("p",[_._v("3、步骤3业务失败系统B向系统A发起事务回滚操作")]),_._v(" "),a("p",[_._v("此方案的核心是将需要分布式处理的任务通过消息日志的方式来异步执行，消息日志可以存储到本地文本，数据库或消息队列，再通过业务规则自动或人工发起重试。人工重试更多的是应用于支付场景，通过对账系统对事后问题的处理")]),_._v(" "),a("h2",{attrs:{id:"三、分布式事务应用的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、分布式事务应用的场景"}},[_._v("#")]),_._v(" 三、分布式事务应用的场景")]),_._v(" "),a("h3",{attrs:{id:"_1、转账"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、转账"}},[_._v("#")]),_._v(" 1、转账")]),_._v(" "),a("p",[_._v("假设用户A使用银行app发起一笔跨行转账给用户B，银行系统首先扣掉用户A的钱。然后增加用户B账户中的余额。此时就会出现2种异常情况：1 用户A的账户扣款成功，用户B账户余额增加失败。")]),_._v(" "),a("p",[_._v("2用户A账户扣款失败，用户B的账户余额增加成功。")]),_._v(" "),a("h3",{attrs:{id:"_2、下单扣库存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、下单扣库存"}},[_._v("#")]),_._v(" 2、下单扣库存")]),_._v(" "),a("p",[_._v("在电商系统中，在下单接口中必定会涉及生成订单id，扣减库存等操作，对于微服务架构系统，订单id与与库存服务一般都是独立的服务，此时就需要分布式事务来保证整个下单接口的成功")]),_._v(" "),a("h3",{attrs:{id:"_3、同步超时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、同步超时"}},[_._v("#")]),_._v(" 3、同步超时")]),_._v(" "),a("p",[_._v("在微服务体系架构下，我们的支付与订单都是作为单独的系统存在。订单的支付状态依赖支付系统的通知。")]),_._v(" "),a("p",[_._v("如：我们的支付系统收到来自第三方支付的通知，告知某个订单支付成功，接收通知接口需要同步调用订单服务变更订单状态接口，更新订单状态为成功。")]),_._v(" "),a("p",[_._v("如图：可以看出有两次调用，第三方支付调用支付服务，以及支付服务调用订单服务，这两步调用都有可能出现调用超时的情况，此处如果没有分布式事务的保证，就会出现用户订单实际支付情况与")]),_._v(" "),a("p",[_._v("最终用户看到的订单支付情况不一致")]),_._v(" "),a("p",[a("img",{attrs:{src:"/img/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1/4.png",alt:""}})]),_._v(" "),a("h2",{attrs:{id:"四、分布式事务的实际应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、分布式事务的实际应用"}},[_._v("#")]),_._v(" 四、分布式事务的实际应用")])])}),[],!1,null,null,null);a.default=r.exports}}]);