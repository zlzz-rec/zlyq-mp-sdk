# zlyq-mp-sdk

### 引入 SDK
###### 1.先获取微信小程序 SDK 源码 
###### 2.将 zlyq-mp-sdk/wxSDK 文件放入小程序 utils文件夹内
###### 3.在 app.js 文件中通过 require() 引入 SDK 
### 
    var zlzzSDK = require('./utils/zlyq-mp-sdk/wxSDK.js')
    

### 配置初始化
###### 引入 SDK 后，可通过 init() 进行 SDK 初始化参数配置： 
### 
    zlzzSDK.default.init({    
      project_id: 1,//项目id  
      user_id: "xxxx",// 登录后必填,不登陆可以不填，填写默认登陆  
      debug_mode: "no_debug",//no_debug:关闭Debug模式;debug_and_import:开启Debug模式并导入数据;debug_and_not_import:开始Debug模式不导入数据   
    })
    
### 微信小程序登陆
###### 可通过 login() 登陆
### 
    zlzzSDK.login({    
      user_id: "ox1d4ed07b25e65a74"// 登录必填   
    })

### 微信小程序退出登陆
###### 可通过 logout() 退出登陆，清空user_id
### 
    zlzzSDK.default.logout()


    
### 微信小程序预置事件
###### 系统已经将通用的事件定义为预置事件,自动采集，无需开发者操作
### 
    事件名称	  相应小程序生命周期函数	    触发时机说明
    mpStart	  App.onShow	            小程序启动，或从后台进入前台显示	启动小程序时
    mpEnd	  App.onHide	            点击小程序右上角退出按钮、微信进入后台、手机锁屏、小程序进程被杀死时
    mpView	  Page.onShow	            小程序启动打开页面、从后台进入前台打开页面时触发、每次打开页面都会调用一次
    mpShare	  Page.onShareAppMessage  设置这个函数后，点击右上角的分享按钮触发	
                                      暂时只能获取到用户触发分享，无法监听是否分享成功的反馈 


### 微信小程序自定义事件
###### 可通过 customEvents() 事件记录
### 
    zlzzSDK.customEvents({    
      event: "onclick"//事件名称   
    })

### 微信小程序用户画像
###### 系统提供了客户端SDK和服务端SDK的更新用户画像方法，创建/更新用户画像的消息全部都会经过标准模块接口进行过滤识别才会最终入库。
###### 与埋点数据不同的是:用户画像数据入库之后是可修改的，且对于不同类型的属性可能有不同的操作方法，因此各端SDK都提供了不同的方法用来对用户画像数据进行增删改查。 
可通过 postProfile()方法 <br />  
####  对用户画像的操作方法
###  
    set:不存在则新增，存在则覆盖;
    set_once:首次调用正常赋值，重复调用不会覆盖;
    append:只有数组字段才可以使用，以追加的方式添加到数组;
    increase:只有数字类型字段可以调用，用作计数;
    delete:删除用户画像;
    unset:取消画像字段的赋值
### 
    zlzzSDK.default.postProfile({    
      debug_mode:"no_debug",
      type: "set_once",// 对用户画像的操作方法
      property:{//用户画像的属性
          userSex: '男',
          userLever: 'VIP3'
      }
    })
