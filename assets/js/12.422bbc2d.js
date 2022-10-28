(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{326:function(e,a,t){"use strict";t.r(a);var r=t(3),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"springboot整合多数据源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot整合多数据源"}},[e._v("#")]),e._v(" springboot整合多数据源")]),e._v(" "),a("h1",{attrs:{id:"springboot整合多数据源-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot整合多数据源-2"}},[e._v("#")]),e._v(" springboot整合多数据源")]),e._v(" "),a("p",[e._v("参考链接: https://www.cnblogs.com/aizen-sousuke/p/11756279.html 参考链接: https://blog.csdn.net/tuesdayma/article/details/81081666")]),e._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介：")]),e._v(" "),a("p",[e._v("随着并发量的不断增加，显然单个数据库已经承受不了高并发带来的压力。一个项目使用多个数据库（无论是主从复制- - 读写分离还是分布式数据库结构）的重要性变得越来越明显。传统项目中（个人对传统项目的理解就是所有的业务模块都在一个tomcat中完成，多个相同的tomcat集群也可认为是传统项目）整合多数据源有两种方法：分包和AOP。")]),e._v(" "),a("h2",{attrs:{id:"版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[e._v("#")]),e._v(" 版本：")]),e._v(" "),a("p",[e._v("springboot：1.5.9.RELEASE mariadb：5.7")]),e._v(" "),a("h2",{attrs:{id:"一、分包方式实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、分包方式实现"}},[e._v("#")]),e._v(" 一、分包方式实现：")]),e._v(" "),a("p",[e._v("springboot+mybatis")]),e._v(" "),a("p",[a("strong",[e._v("1、在application.properties中配置两个数据库：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("## test1 databasespring.datasource.test1.url=jdbc:mysql://localhost:3307/multipledatasource1?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC&useSSL=falsespring.datasource.test1.username=rootspring.datasource.test1.password=rootspring.datasource.test1.driver-class-name=com.mysql.cj.jdbc.Driver## test2 databasespring.datasource.test2.url=jdbc:mysql://localhost:3307/multipledatasource2?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC&useSSL=falsespring.datasource.test2.username=rootspring.datasource.test2.password=rootspring.datasource.test2.driver-class-name=com.mysql.cj.jdbc.Driver12345678910\n")])])]),a("p",[a("strong",[e._v("2、建立连个数据源的配置文件：")])]),e._v(" "),a("p",[e._v("springbooot中的参数可以参考上一篇博客（不定期更新中）：https://blog.csdn.net/tuesdayma/article/details/81029539")]),e._v(" "),a("p",[e._v("第一个配置文件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//表示这个类为一个配置类@Configuration// 配置mybatis的接口类放的地方@MapperScan(basePackages = "com.mzd.multipledatasources.mapper.test01", sqlSessionFactoryRef = "test1SqlSessionFactory")public class DataSourceConfig1 {    // 将这个对象放入Spring容器中    @Bean(name = "test1DataSource")    // 表示这个数据源是默认数据源    @Primary    // 读取application.properties中的配置参数映射成为一个对象    // prefix表示参数的前缀    @ConfigurationProperties(prefix = "spring.datasource.test1")    public DataSource getDateSource1() {        return DataSourceBuilder.create().build();    }    @Bean(name = "test1SqlSessionFactory")    // 表示这个数据源是默认数据源    @Primary    // @Qualifier表示查找Spring容器中名字为test1DataSource的对象    public SqlSessionFactory test1SqlSessionFactory(@Qualifier("test1DataSource") DataSource datasource)            throws Exception {        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();        bean.setDataSource(datasource);        bean.setMapperLocations(                // 设置mybatis的xml所在位置                new PathMatchingResourcePatternResolver().getResources("classpath*:mapping/test01/*.xml"));        return bean.getObject();    }    @Bean("test1SqlSessionTemplate")    // 表示这个数据源是默认数据源    @Primary    public SqlSessionTemplate test1sqlsessiontemplate(            @Qualifier("test1SqlSessionFactory") SqlSessionFactory sessionfactory) {        return new SqlSessionTemplate(sessionfactory);    }}123456789101112131415161718192021222324252627282930313233343536\n')])])]),a("p",[e._v("第二个配置文件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Configuration@MapperScan(basePackages = "com.mzd.multipledatasources.mapper.test02", sqlSessionFactoryRef = "test2SqlSessionFactory")public class DataSourceConfig2 {    @Bean(name = "test2DataSource")    @ConfigurationProperties(prefix = "spring.datasource.test2")    public DataSource getDateSource2() {        return DataSourceBuilder.create().build();    }    @Bean(name = "test2SqlSessionFactory")    public SqlSessionFactory test2SqlSessionFactory(@Qualifier("test2DataSource") DataSource datasource)            throws Exception {        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();        bean.setDataSource(datasource);        bean.setMapperLocations(                new PathMatchingResourcePatternResolver().getResources("classpath*:mapping/test02/*.xml"));        return bean.getObject();    }    @Bean("test2SqlSessionTemplate")    public SqlSessionTemplate test2sqlsessiontemplate(            @Qualifier("test2SqlSessionFactory") SqlSessionFactory sessionfactory) {        return new SqlSessionTemplate(sessionfactory);    }}123456789101112131415161718192021222324\n')])])]),a("p",[e._v("注意：")]),e._v(" "),a("p",[e._v("1、@Primary这个注解必须要加，因为不加的话spring将分不清楚那个为主数据源（默认数据源）")]),e._v(" "),a("p",[e._v("2、mapper的接口、xml形式以及dao层都需要两个分开，目录如图：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://img-blog.csdn.net/20180717154735494?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1ZXNkYXltYQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://img-blog.csdn.net/20180717154735494?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1ZXNkYXltYQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("3、bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources(“XXXX”));mapper的xml形式文件位置必须要配置，不然将报错：no statement （这种错误也可能是mapper的xml中，namespace与项目的路径不一致导致的，具体看情况吧，注意一下就行，问题不大的）")]),e._v(" "),a("p",[e._v("4、在service层中根据不同的业务注入不同的dao层。")]),e._v(" "),a("p",[e._v("5、如果是主从复制- -读写分离：比如test01中负责增删改，test02中负责查询。但是需要注意的是负责增删改的数据库必须是主库（master）")]),e._v(" "),a("p",[e._v("6、如果是分布式结构的话，不同模块操作各自的数据库就好，test01包下全是test01业务，test02全是test02业务，但是如果test01中掺杂着test02的编辑操作，这时候将会产生事务问题：即test01中的事务是没法控制test02的事务的，这个问题在之后的博客中会解决。")]),e._v(" "),a("h2",{attrs:{id:"二、aop实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、aop实现"}},[e._v("#")]),e._v(" 二、AOP实现：")]),e._v(" "),a("p",[a("strong",[e._v("简介：")]),e._v(" 用这种方式实现多数据源的前提必须要清楚两个知识点：AOP原理和AbstractRoutingDataSource抽象类。")]),e._v(" "),a("p",[e._v("**1、AOP：**这个东西。。。不切当的说就是相当于拦截器，只要满足要求的都会被拦截过来，然后进行一些列的操作。具体需要自己去体会。。。")]),e._v(" "),a("p",[e._v("**2、AbstractRoutingDataSource：**这个类是实现多数据源的关键，他的作用就是动态切换数据源，实质：有多少个数据源就存多少个数据源在targetDataSources（是AbstractRoutingDataSource的一个map类型的属性，其中value为每个数据源，key表示每个数据源的名字）这个属性中，然后根据determineCurrentLookupKey（）这个方法获取当前数据源在map中的key值，然后determineTargetDataSource（）方法中动态获取当前数据源，如果当前数据源不存并且默认数据源也不存在就抛出异常。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public abstract class AbstractRoutingDataSource extends AbstractDataSource implements InitializingBean {    //多数据源map集合    private Map<Object, Object> targetDataSources;    //默认数据源    private Object defaultTargetDataSource;    //其实就是targetDataSources，后面的afterPropertiesSet（）方法会将targetDataSources赋值给resolvedDataSources    private Map<Object, DataSource> resolvedDataSources;    private DataSource resolvedDefaultDataSource;    public void setTargetDataSources(Map<Object, Object> targetDataSources) {        this.targetDataSources = targetDataSources;    }    protected DataSource determineTargetDataSource() {        Assert.notNull(this.resolvedDataSources, "DataSource router not initialized");        Object lookupKey = this.determineCurrentLookupKey();        DataSource dataSource = (DataSource)this.resolvedDataSources.get(lookupKey);        if (dataSource == null && (this.lenientFallback || lookupKey == null)) {            dataSource = this.resolvedDefaultDataSource;        }        if (dataSource == null) {            throw new IllegalStateException("Cannot determine target DataSource for lookup key [" + lookupKey + "]");        } else {            return dataSource;        }    }    protected abstract Object determineCurrentLookupKey();}\n')])])]),a("p",[a("strong",[e._v("具体实现：")])]),e._v(" "),a("p",[e._v("**1、定义一个动态数据源：**继承AbstractRoutingDataSource 抽象类，并重写determineCurrentLookupKey（）方法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public class DynamicDataSource extends AbstractRoutingDataSource {    @Override    protected Object determineCurrentLookupKey() {        DataSourceType.DataBaseType dataBaseType = DataSourceType.getDataBaseType();        return dataBaseType;    }}\n")])])]),a("p",[a("strong",[e._v("2、创建一个切换数据源类型的类：")]),e._v(" ThreadLocal这个知识点可以参考我的博客：https://blog.csdn.net/tuesdayma/article/details/74841657 就是为了线程的安全性，每个线程之间不会相互影响。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class DataSourceType {    public enum DataBaseType {        TEST01, TEST02    }    // 使用ThreadLocal保证线程安全    private static final ThreadLocal<DataBaseType> TYPE = new ThreadLocal<DataBaseType>();    // 往当前线程里设置数据源类型    public static void setDataBaseType(DataBaseType dataBaseType) {        if (dataBaseType == null) {            throw new NullPointerException();        }        System.err.println("[将当前数据源改为]：" + dataBaseType);        TYPE.set(dataBaseType);    }    // 获取数据源类型    public static DataBaseType getDataBaseType() {        DataBaseType dataBaseType = TYPE.get() == null ? DataBaseType.TEST01 : TYPE.get();        System.err.println("[获取当前数据源的类型为]：" + dataBaseType);        return dataBaseType;    }    // 清空数据类型    public static void clearDataBaseType() {        TYPE.remove();    }}\n')])])]),a("p",[e._v("**3、定义多个数据源：**怎么定义就不多说了，和方法一是一样的，主要是将定义好的多个数据源放在动态数据源中。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Configuration@MapperScan(basePackages = "com.mzd.multipledatasources.mapper", sqlSessionFactoryRef = "SqlSessionFactory")public class DataSourceConfig {    @Primary    @Bean(name = "test1DataSource")    @ConfigurationProperties(prefix = "spring.datasource.test1")    public DataSource getDateSource1() {        return DataSourceBuilder.create().build();    }    @Bean(name = "test2DataSource")    @ConfigurationProperties(prefix = "spring.datasource.test2")    public DataSource getDateSource2() {        return DataSourceBuilder.create().build();    }    @Bean(name = "dynamicDataSource")    public DynamicDataSource DataSource(@Qualifier("test1DataSource") DataSource test1DataSource,            @Qualifier("test2DataSource") DataSource test2DataSource) {        Map<Object, Object> targetDataSource = new HashMap<>();        targetDataSource.put(DataSourceType.DataBaseType.TEST01, test1DataSource);        targetDataSource.put(DataSourceType.DataBaseType.TEST02, test2DataSource);        DynamicDataSource dataSource = new DynamicDataSource();        dataSource.setTargetDataSources(targetDataSource);        dataSource.setDefaultTargetDataSource(test1DataSource);        return dataSource;    }    @Bean(name = "SqlSessionFactory")    public SqlSessionFactory test1SqlSessionFactory(@Qualifier("dynamicDataSource") DataSource dynamicDataSource)            throws Exception {        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();        bean.setDataSource(dynamicDataSource);        bean.setMapperLocations(                new PathMatchingResourcePatternResolver().getResources("classpath*:mapping/*.xml"));        return bean.getObject();    }}\n')])])]),a("p",[e._v("**4、定义AOP：**就是不同业务切换不同数据库的入口。如果觉得execution太长不愿意写，就可以定义一个注解来实现。可参考于我的博客：https://blog.csdn.net/tuesdayma/article/details/79704238")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Aspect@Componentpublic class DataSourceAop {    @Before("execution(* com.mzd.multipledatasources.service..*.test01*(..))")    public void setDataSource2test01() {        System.err.println("test01业务");        DataSourceType.setDataBaseType(DataBaseType.TEST01);    }    @Before("execution(* com.mzd.multipledatasources.service..*.test02*(..))")    public void setDataSource2test02() {        System.err.println("test02业务");        DataSourceType.setDataBaseType(DataBaseType.TEST02);    }}\n')])])]),a("p",[a("strong",[e._v("整体目录如图：")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://img-blog.csdn.net/20180717181055626?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1ZXNkYXltYQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://img-blog.csdn.net/20180717181055626?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1ZXNkYXltYQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"三、使用注解整合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、使用注解整合"}},[e._v("#")]),e._v(" 三、使用注解整合")]),e._v(" "),a("p",[e._v("springboot+druid+mybatisplus")]),e._v(" "),a("h3",{attrs:{id:"主要依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要依赖"}},[e._v("#")]),e._v(" 主要依赖")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("spring-boot-starter-webmybatis-plus-boot-starterdynamic-datasource-spring-boot-starter # 配置动态数据源druid-spring-boot-starter # 阿里的数据库连接池mysql-connector-javalombok\n")])])]),a("p",[e._v("pom.xml文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<?xml version="1.0" encoding="UTF-8"?><project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">   <modelVersion>4.0.0</modelVersion>   <parent>       <groupId>org.springframework.boot</groupId>       <artifactId>spring-boot-starter-parent</artifactId>       <version>2.1.9.RELEASE</version>       <relativePath/> \x3c!-- lookup parent from repository --\x3e   </parent>   <groupId>com.example</groupId>   <artifactId>mutipledatasource2</artifactId>   <version>0.0.1-SNAPSHOT</version>   <name>mutipledatasource2</name>   <description>Demo project for Spring Boot</description>   <properties>       <java.version>1.8</java.version>   </properties>   <dependencies>       <dependency>           <groupId>org.springframework.boot</groupId>           <artifactId>spring-boot-starter-web</artifactId>       </dependency>       <dependency>           <groupId>com.baomidou</groupId>           <artifactId>mybatis-plus-boot-starter</artifactId>           <version>3.2.0</version>       </dependency>       <dependency>           <groupId>com.baomidou</groupId>           <artifactId>dynamic-datasource-spring-boot-starter</artifactId>           <version>2.5.6</version>       </dependency>       <dependency>           <groupId>mysql</groupId>           <artifactId>mysql-connector-java</artifactId>           <scope>runtime</scope>       </dependency>       <dependency>           <groupId>com.alibaba</groupId>           <artifactId>druid-spring-boot-starter</artifactId>           <version>1.1.20</version>       </dependency>       <dependency>           <groupId>org.projectlombok</groupId>           <artifactId>lombok</artifactId>           <optional>true</optional>       </dependency>       <dependency>           <groupId>org.springframework.boot</groupId>           <artifactId>spring-boot-starter-test</artifactId>           <scope>test</scope>       </dependency>   </dependencies>   <build>       <plugins>           <plugin>               <groupId>org.springframework.boot</groupId>               <artifactId>spring-boot-maven-plugin</artifactId>           </plugin>       </plugins>   </build>   <profiles>       <profile>           <id>local1</id>           <properties>               <profileActive>local1</profileActive>           </properties>           <activation>               <activeByDefault>true</activeByDefault>           </activation>       </profile>       <profile>           <id>local2</id>           <properties>               <profileActive>local2</profileActive>           </properties>       </profile>   </profiles></project>\n')])])]),a("h3",{attrs:{id:"application-yml-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-yml-配置文件"}},[e._v("#")]),e._v(" application.yml 配置文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server:  port: 8080spring:  datasource:    dynamic:      primary: db1 # 配置默认数据库      datasource:        db1: # 数据源1配置          url: jdbc:mysql://localhost:3306/db1?characterEncoding=utf8&useUnicode=true&useSSL=false&serverTimezone=GMT%2B8          username: root          password: root          driver-class-name: com.mysql.cj.jdbc.Driver        db2: # 数据源2配置          url: jdbc:mysql://localhost:3306/db2?characterEncoding=utf8&useUnicode=true&useSSL=false&serverTimezone=GMT%2B8          username: root          password: root          driver-class-name: com.mysql.cj.jdbc.Driver      durid:        initial-size: 1        max-active: 20        min-idle: 1        max-wait: 60000  autoconfigure:    exclude:  com.alibaba.druid.spring.boot.autoconfigure.DruidDataSourceAutoConfigure # 去除druid配置\n")])])]),a("p",[a("code",[e._v("DruidDataSourceAutoConfigure")]),e._v("会注入一个"),a("code",[e._v("DataSourceWrapper")]),e._v("，其会在原生的"),a("code",[e._v("spring.datasource")]),e._v("下找 url, username, password 等。动态数据源 URL 等配置是在 dynamic 下，因此需要排除，否则会报错。排除方式有两种，一种是上述配置文件排除，还有一种可以在项目启动类排除：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@SpringBootApplication(exclude = DruidDataSourceAutoConfigure.class)public class Application {  public static void main(String[] args) {    SpringApplication.run(Application.class, args);  }}\n")])])]),a("h3",{attrs:{id:"给使用非默认数据源添加注解-ds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给使用非默认数据源添加注解-ds"}},[e._v("#")]),e._v(" 给使用非默认数据源添加注解@DS")]),e._v(" "),a("p",[a("code",[e._v("@DS")]),e._v(" 可以注解在方法上和类上，同时存在方法注解优先于类上注解。 注解在 service 实现或 mapper 接口方法上，不要同时在 service 和 mapper 注解。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@DS("db2") public interface UserMapper extends BaseMapper<User> {}@Service@DS("db2")public class ModelServiceImpl extends ServiceImpl<ModelMapper, Model> implements IModelService {}  @Select("SELECT * FROM user")  @DS("db2")  List<User> selectAll();\n')])])]),a("h1",{attrs:{id:"springboot配置多数据源mybatis配置失效问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot配置多数据源mybatis配置失效问题"}},[e._v("#")]),e._v(" springboot配置多数据源mybatis配置失效问题")]),e._v(" "),a("p",[e._v("参考链接: https://blog.csdn.net/weixin_30256901/article/details/99267676 参考链接: https://blog.csdn.net/qq_38380025/article/details/84636408")]),e._v(" "),a("p",[e._v("mybatis配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#开启驼峰映射mybatis.configuration.map-underscore-to-camel-case=true#开启打印sqlmybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl\n")])])]),a("p",[e._v("失效处理")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    @Bean    @ConfigurationProperties(prefix = "mybatis.configuration")    public org.apache.ibatis.session.Configuration globalConfiguration() {        return new org.apache.ibatis.session.Configuration();    }    @Bean    public SqlSessionFactory sqlSessionFactory(org.apache.ibatis.session.Configuration config) throws Exception {        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();        sqlSessionFactoryBean.setDataSource(myRoutingDataSource);        sqlSessionFactoryBean.setTypeAliasesPackage("com.bling.dab.domain");        sqlSessionFactoryBean.setConfiguration(config);        sqlSessionFactoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mapper/*.xml"));        return sqlSessionFactoryBean.getObject();\n')])])]),a("p",[e._v("问题解决，失效原因是配置多数据源，自定义的sqlsessionFactory不会加载mybatis配置，而单数据源的sqlsessionFactory不是自定义的默认去加载了mybatis配置")])])}),[],!1,null,null,null);a.default=s.exports}}]);