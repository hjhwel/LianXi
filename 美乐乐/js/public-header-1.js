/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-08-22 22:34:49
 * @version $Id$
 */

;(function($){
  $(function(){

    $("body").prepend(`
    <div class="pub-header">

    <!-- 顶部广告 -->
    <div class="title-adv">

      <div class="title-adv-box">

        <a href="###"><img src="image/header-img/title-adv.jpg" alt=""></a>

      </div>

    </div>

    <!-- 头部导航栏 -->
    <div class="pub-header-box clearfix">
      <div class="pub-header-bg">
        <!-- 版心 -->
        <div class="container">
          <!-- 顶部信息 -->
          <div class="main-header">

            <div class="main-header-l">
              <div class="adress">
                <i></i>
                <span>郑州站</span>
              </div>
              <div class="change">
                <span>[切换]</span>
              </div>
              <div class="login">
                <a href="" class="log">请登录</a>
                <a href="" class="reg">免费注册</a>
              </div>
            </div>

            <div class="main-header-r">

              <ul class="customer">
                <li class="customer-list mll">
                  <a href="###">
                    <span>我的美乐乐</span>
                    <i class="item"></i>
                  </a>
                  <div class="drop-down-content">
                    <a href="###">我的订单</a>
                    <a href="###">我的金币</a>
                    <a href="###">我的红包</a>
                    <a href="###">我的收藏</a>
                    <a href="###">我要评价</a>
                    <a href="###">申请报价</a>
                  </div>
                </li>
                <li class="customer-list cart">
                  <a href="###">
                    <i class="icon"></i>
                    <span>购物车</span>
                    <strong>0</strong>
                    <i class="item"></i>
                  </a>
                  <div class="drop-down-cart">
                    <div class="cart-info">
                      购物车中还没有商品，赶紧选购吧!
                    </div>
                  </div>
                </li>
                <li class="customer-list attention">
                  <a href="###">
                    <i class="icon"></i>
                    <span>关注美乐乐</span>
                    <i class="item"></i>
                  </a>
                  <div class="drop-down-attention">
                    <a href="###"><img src="image/header-img/header-sub-code.jpg" alt=""></a>
                    <span>扫码关注</span>
                    <img src="image/header-img/header-sub-codeInfo.jpg" alt="">
                  </div>
                </li>
                <li class="customer-list help">
                  <a href="###">
                  <span>帮助中心</span>
                  <i class="item"></i>
                  </a>
                  <div class="drop-down-help">
                    <a href="###">购买流程</a>
                    <a href="###">在线帮助</a>
                    <a href="###">企业采购</a>
                  </div>
                </li>
                <li class="customer-list adress">
                  <a href="###">
                  <span>收藏本站</span>
                  </a>
                  <div class="drop-down-adress adress-mask">
                    <a href="###" class="phone"><div class="mask"></div>二七区体验馆 :<strong class="tel">0371-86589176</strong></a>
                    <a href="###" class="phone">金水区体验馆 :<strong class="tel">0371-55950010</strong></a>
                  </div>
                </li>
                <li class="customer-scroll">
                <div class="scroll-mask"></div>
                  <div class="customer-scroll-move">
                    <a href="###" class="phone">全国热线：<strong class="tel">400 0098666</strong></a>
                    <a href="###" class="phone">金水区体验馆：<strong class="tel">0371-55950010</strong></a>
                    <a href="###" class="phone">二七区体验馆：<strong class="tel">0371-86589176</strong></a>
                    <a href="###" class="phone">全国热线：<strong class="tel">400 0098666</strong></a>
                  </div>
                </li>

              </ul>

            </div>

          </div>

          <!-- 头部信息 -->
          <div class="search-box">
            <div class="logo"><a href="###"><img src="image/header-img/logo.png" alt=""></a></div>
            <div class="adv-img"><a href="###"><img src="image/header-img/dynamic-adv.gif" alt=""></a></div>
            <div class="form-box toggle">
              <form action="">
                <input type="text" class="search-info" placeholder="11周年庆每满5000减500，爆品齐放价>>>">
                <input type="submit" value="搜索" class="search-sub">
              </form>
            </div>
            <div class="search-hot-info">
              <a href="###" class="hot">99元换购</a>
              <a href="###">床</a>
              <a href="###">沙发</a>
              <a href="###">餐桌椅</a>
              <a href="###">实木床</a>
              <a href="###" class="hot">床垫大促</a>
              <a href="###">转角沙发</a>
              <a href="###">灯饰</a>
            </div>
            <div class="search-r"><a href="###"><img src="image/header-img/title-code.png" alt=""></a></div>
          </div>
          <!-- 头部信息 结束-->

          <!-- 菜单栏 -->
          <div class="menu-box">

            <div class="container">

              <div class="menu-title">
                <h2>商品分类</h2>
                <a href=""><i></i></a>
              </div>

              <ul class="menu-list">

                <li><a href="###"><img src="image/header-img/title-11y.gif" alt=""></a></li>
                <li><a href="###">首页</a></li>
                <li><a href="###">家具城</a></li>
                <li><a href="###">建材城</a></li>
                <li><a href="###">家居家饰</a></li>
                <li><a href="###">团购</a></li>
                <li><a href="###">体验馆</a><img src="image/header-img/title-hot.gif" alt=""></li>
                <li><a href="###">阅木</a></li>
                <li><a href="###">客户晒家</a></li>
                <li><a href="###">图览家居</a></li>

              </ul>

              <!-- 菜单列表 -->
                <ul class="sub-list">

                  <li class="sub-list-hover">
                    <!-- 列表 1 -->
                    <div class="list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">卧室</a>
                          </li>
                          <li class="info-list">
                            <a href="###">床</a>
                            <a href="###" class="red-text">美国进口床垫</a>
                            <a href="###" class="red-text">美规床</a>
                            <a href="###">床头柜</a>
                            <a href="###">床垫</a>
                            <a href="###">衣柜</a>
                            <a href="###">斗柜</a>
                            <a href="###">妆台镜/妆凳</a>
                            <a href="###">穿衣镜/衣帽架</a>
                            <a href="###">床尾凳</a>
                            <a href="###">卧室套装</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">客厅</a>
                          </li>
                          <li class="info-list">
                            <a href="###" class="red-text">沙发</a>
                            <a href="###">茶几/边桌</a>
                            <a href="###">电视柜</a>
                            <a href="###">鞋柜</a>
                            <a href="###">酒柜/装饰柜</a>
                            <a href="###">屏风</a>
                            <a href="###">休闲椅/凳间厅/玄关柜</a>
                            <a href="###">花架/装饰架</a>
                            <a href="###" class="red-text">客厅套装</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">餐厅</a>
                          </li>
                          <li class="info-list">
                            <a href="###">餐桌</a>
                            <a href="###">餐椅</a>
                            <a href="###">餐边柜</a>
                            <a href="###" class="red-text">餐厅套装</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">书房</a>
                          </li>
                          <li class="info-list">
                            <a href="###" class="red-text">书桌/书台</a>
                            <a href="###">书柜/书架</a>
                            <a href="###">书椅/转椅</a>
                            <a href="###">书房套装</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">儿童房</a>
                          </li>
                          <li class="info-list">
                            <a href="###">儿童床</a>
                            <a href="###" class="red-text">儿童床垫</a>
                            <a href="###">儿童床头柜</a>
                            <a href="###">儿童衣柜</a>
                            <a href="###">儿童桌</a>
                            <a href="###">儿童椅</a>
                            <a href="###">儿童柜类</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">户外/阳台</a>
                          </li>
                          <li class="info-list">
                            <a href="###">户外桌</a>
                            <a href="###">户外椅</a>
                            <a href="###" class="red-text">户外套装</a>
                            <a href="###">吊篮/吊椅</a>
                            <a href="###">摇椅</a>
                            <a href="###">藤艺家具</a>
                            <a href="###">折叠床</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">办公家具</a>
                          </li>
                          <li class="info-list">
                            <a href="###" class="red-text">办公沙发</a>
                            <a href="###">办公桌</a>
                            <a href="###">文件柜</a>
                            <a href="###">办公椅</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###" class="red-text">凯撒豪庭</a>
                            <a href="###">幕娅</a>
                            <a href="###">白金宫殿</a>
                            <a href="###">法兰西玫瑰</a>
                            <a href="###">韩菲尔</a>
                            <a href="###">卡富亚</a>
                            <a href="###" class="red-text">蓝骑家居</a>
                            <a href="###">卡洛林</a>
                            <a href="###">青春城堡</a>
                            <a href="###" class="red-text">喜临门</a>
                            <a href="###">木木原</a>
                            <a href="###">蒂美悦</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-1.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###" class="text">家具</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 2 -->
                    <div class="list-box small-list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">卧室</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###" class="red-text">床</a>
                            <a href="###">床垫</a>
                            <a href="###">美规床</a>
                            <a href="###">美国进口床垫</a>
                            <a href="###">床头柜</a>
                            <a href="###">衣柜</a>
                            <a href="###">斗柜</a>
                            <a href="###">妆台镜/妆凳</a>
                            <a href="###">穿衣镜/衣帽架</a>
                            <a href="###">床尾凳</a>
                            <a href="###" class="red-text">卧室套装</a>
                          </li>
                        </ul>
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">热门搜索</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###" class="red-text">实木床</a>
                            <a href="###">布艺床</a>
                            <a href="###">乳胶床垫</a>
                            <a href="###">进口床垫</a>
                            <a href="###" class="red-text">简美床</a>
                            <a href="###">欧式床</a>
                            <a href="###">美式床</a>
                            <a href="###">榻榻米床</a>
                            <a href="###">高箱床</a>
                            <a href="###">床板床</a>
                            <a href="###">排骨架床</a>
                            <a href="###">真皮床</a>
                            <a href="###" class="red-text">躺门衣柜</a>
                            <a href="###">拉门衣柜</a>
                            <a href="###">四门衣柜</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###">韩菲尔</a>
                            <a href="###" class="red-text">卡富亚</a>
                            <a href="###">喜临门</a>
                            <a href="###">幕娅</a>
                            <a href="###">艾玛诗</a>
                            <a href="###" class="red-text">美宜经典</a>
                            <a href="###">彼岸阳光</a>
                            <a href="###">苏美尔</a>
                            <a href="###">迪诺迪奥</a>
                            <a href="###">凤凰天</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-2.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###">卧室</a>
                    <a href="###">床</a>
                    <a href="###">床垫</a>
                    <a href="###">衣柜</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 3 -->
                    <div class="list-box small-list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">客厅</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###" class="red-text">沙发</a>
                            <a href="###">电视柜</a>
                            <a href="###">茶几/边桌</a>
                            <a href="###">酒柜/装饰柜</a>
                            <a href="###">鞋柜</a>
                            <a href="###">休闲椅/凳</a>
                            <a href="###">屏风</a>
                            <a href="###" class="red-text">客厅套装</a>
                            <a href="###">花架/装饰架</a>
                            <a href="###">间厅/玄关柜</a>
                          </li>
                        </ul>
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">热门搜索</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###">实木沙发</a>
                            <a href="###">布艺沙发</a>
                            <a href="###" class="red-text">转角沙发</a>
                            <a href="###">欧式沙发</a>
                            <a href="###">真皮沙发</a>
                            <a href="###">中式沙发</a>
                            <a href="###">功能沙发</a>
                            <a href="###">美式沙发</a>
                            <a href="###">沙发床</a>
                            <a href="###" class="red-text">实木茶几</a>
                            <a href="###">欧式电视柜</a>
                            <a href="###">客厅电视柜</a>
                            <a href="###">酒柜装饰柜</a>
                            <a href="###">玄关鞋柜</a>
                            <a href="###">懒人沙发</a>
                            <a href="###" class="red-text">蓝骑沙发</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###" class="red-text">凯撒豪庭</a>
                            <a href="###">白金宫殿</a>
                            <a href="###">木木原</a>
                            <a href="###" class="red-text">帝美悦</a>
                            <a href="###">纳德威</a>
                            <a href="###" class="red-text">蓝骑家居</a>
                            <a href="###">卡洛林</a>
                            <a href="###">恩嘉依</a>
                            <a href="###" class="red-text">良品LIFE</a>
                            <a href="###">各色</a>
                            <a href="###">法兰西玫瑰</a>
                            <a href="###">木言木语</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-3.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###">客厅</a>
                    <a href="###">沙发</a>
                    <a href="###">电视柜</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 4 -->
                    <div class="list-box small-list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">餐厅</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###" class="red-text">餐厅套装</a>
                            <a href="###">餐桌</a>
                            <a href="###">餐椅</a>
                            <a href="###">餐边柜</a>
                          </li>
                        </ul>
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">热门搜索</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###">餐厅家具</a>
                            <a href="###" class="red-text">折叠餐桌</a>
                            <a href="###">餐桌椅组合</a>
                            <a href="###">蓝骑餐桌椅</a>
                            <a href="###">长餐桌</a>
                            <a href="###">圆餐桌</a>
                            <a href="###">大理石餐桌</a>
                            <a href="###" class="red-text">实木餐桌</a>
                            <a href="###">现代餐桌</a>
                            <a href="###">玻璃餐桌椅</a>
                            <a href="###">地中海餐桌</a>
                            <a href="###">扶手餐椅</a>
                            <a href="###">无扶手餐椅</a>
                            <a href="###">美式餐边柜</a>
                            <a href="###">实木餐边柜</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###" class="red-text">木木原</a>
                            <a href="###">帝美悦</a>
                            <a href="###">普罗旺斯</a>
                            <a href="###">广岛之恋</a>
                            <a href="###">悦麓</a>
                            <a href="###">北欧悠歌</a>
                            <a href="###" class="red-text">宜华.华洛思</a>
                            <a href="###">卡伦美家</a>
                            <a href="###">玫瑰尊典</a>
                            <a href="###">卡洛林</a>
                            <a href="###">韩木居</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-4.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###">餐厅</a>
                    <a href="###">餐桌</a>
                    <a href="###">餐椅</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 5 -->
                    <div class="list-box small-list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">书房</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###" class="red-text">书桌/工作台</a>
                            <a href="###">书柜</a>
                            <a href="###">书椅/转椅</a>
                            <a href="###">书房套装</a>
                          </li>
                        </ul>
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">热门搜索</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###">实木书桌</a>
                            <a href="###">中式书桌</a>
                            <a href="###">田园书桌</a>
                            <a href="###">办公桌</a>
                            <a href="###" class="red-text">电脑桌</a>
                            <a href="###">学生书桌</a>
                            <a href="###">简约书桌柜</a>
                            <a href="###">三门书柜</a>
                            <a href="###">四门书柜</a>
                            <a href="###">欧式书柜</a>
                            <a href="###">书柜电脑桌</a>
                            <a href="###">电脑椅</a>
                            <a href="###">办公转椅</a>
                            <a href="###" class="red-text">书橱</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###">凯撒豪庭</a>
                            <a href="###" class="red-text">韩菲尔</a>
                            <a href="###">帝美悦</a>
                            <a href="###">木木原</a>
                            <a href="###">苏美尔</a>
                            <a href="###">简欧·安娜</a>
                            <a href="###">达美风情</a>
                            <a href="###" class="red-text">幕娅</a>
                            <a href="###">伽蓝彼岸</a>
                            <a href="###">圣欧顿</a>
                            <a href="###">槿秀家园</a>
                            <a href="###">卡西施</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-5.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###">书房</a>
                    <a href="###">书桌</a>
                    <a href="###">书柜</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 6 -->
                    <div class="list-box small-list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">儿童房</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###">儿童床</a>
                            <a href="###" class="red-text">儿童床垫</a>
                            <a href="###">儿童床头柜</a>
                            <a href="###">儿童衣柜</a>
                            <a href="###">儿童桌</a>
                            <a href="###">儿童椅</a>
                            <a href="###">儿童柜类</a>
                          </li>
                        </ul>
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">热门搜索</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###">田园儿童床</a>
                            <a href="###" class="red-text">上下床</a>
                            <a href="###">高低床</a>
                            <a href="###">双层床</a>
                            <a href="###">儿童母子床</a>
                            <a href="###">儿童棕垫</a>
                            <a href="###">弹簧床垫</a>
                            <a href="###">乳胶垫</a>
                            <a href="###">拉门衣柜</a>
                            <a href="###">两门衣柜</a>
                            <a href="###" class="red-text">儿童书台</a>
                            <a href="###">学生桌</a>
                            <a href="###">儿童书柜</a>
                            <a href="###">儿童家具</a>
                            <a href="###">儿童座椅</a>
                            <a href="###">童床</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###">青春城堡</a>
                            <a href="###" class="red-text">小童舍</a>
                            <a href="###">木彩</a>
                            <a href="###">喜临门·红孩儿</a>
                            <a href="###">恒逸</a>
                            <a href="###" class="red-text">Caladoll卡乐多</a>
                            <a href="###">牧童人生</a>
                            <a href="###">艾玛诗</a>
                            <a href="###">苏美尔</a>
                            <a href="###">槿秀家园</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-6.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###">儿童房</a>
                    <a href="###">儿童床</a>
                    <a href="###">儿童桌</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 7 -->
                    <div class="list-box small-list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">户外/办公</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###">户外套装</a>
                            <a href="###">户外椅</a>
                            <a href="###" class="red-text">吊篮/吊椅</a>
                            <a href="###">摇椅</a>
                            <a href="###" class="red-text">折叠床</a>
                            <a href="###">藤艺家具</a>
                            <a href="###">办公桌</a>
                            <a href="###">办公椅</a>
                            <a href="###" class="red-text">办公沙发</a>
                            <a href="###">文件柜</a>
                            <a href="###" class="red-text">保险柜</a>
                          </li>
                        </ul>
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">热门搜索</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###">靠背椅</a>
                            <a href="###">大班台</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###" class="red-text">雅克集</a>
                            <a href="###">欧凯隆</a>
                            <a href="###">帝美悦</a>
                            <a href="###" class="red-text">RESTAR瑞仕达</a>
                            <a href="###">浩一</a>
                            <a href="###" class="red-text">HAOBIN浩彬</a>
                            <a href="###">思家</a>
                            <a href="###" class="red-text">艾斐堡</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-7.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###">户外/阳台</a>
                    <a href="###">办公家具</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 8 -->
                    <div class="list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">灯饰照明</a>
                          </li>
                          <li class="info-list">
                            <a href="###" class="red-text">吊灯</a>
                            <a href="###" class="red-text">吸顶灯</a>
                            <a href="###">落地灯</a>
                            <a href="###">台灯</a>
                            <a href="###">壁灯</a>
                            <a href="###">灯具套装</a>
                            <a href="###">LED灯/光源</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">厨房用品</a>
                          </li>
                          <li class="info-list">
                            <a href="###" class="red-text">厨盆/水槽</a>
                            <a href="###">厨房龙头</a>
                            <a href="###">厨房挂件</a>
                            <a href="###">沥水篮</a>
                            <a href="###">其他厨房配件</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">卫浴用品</a>
                          </li>
                          <li class="info-list">
                            <a href="###">浴缸</a>
                            <a href="###" class="red-text">浴室柜</a>
                            <a href="###">坐便器</a>
                            <a href="###">淋浴房</a>
                            <a href="###">花洒</a>
                            <a href="###">卫浴龙头</a>
                            <a href="###">卫浴挂件</a>
                            <a href="###">地漏</a>
                            <a href="###">洗面盆</a>
                            <a href="###">蹲便器</a>
                            <a href="###">坐便器盖板</a>
                            <a href="###">淋浴桶/林浴盆</a>
                            <a href="###">卫浴套装</a>
                            <a href="###">其他卫浴配件</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">家装五金</a>
                          </li>
                          <li class="info-list">
                            <a href="###" class="red-text">开关插座</a>
                            <a href="###">锁具</a>
                            <a href="###">门吸</a>
                            <a href="###">合页</a>
                            <a href="###">配电箱</a>
                            <a href="###">拉手</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">墙地面</a>
                          </li>
                          <li class="info-list">
                            <a href="###" class="red-text">地板</a>
                            <a href="###">瓷砖</a>
                            <a href="###">墙纸</a>
                            <a href="###">墙布</a>
                            <a href="###">辅助材料</a>
                            <a href="###">油漆</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">生活电器</a>
                          </li>
                          <li class="info-list">
                            <a href="###">音响</a>
                            <a href="###">饮水机</a>
                            <a href="###">热水器</a>
                            <a href="###">吸油烟机</a>
                            <a href="###" class="red-text">净化器</a>
                            <a href="###">净水设备</a>
                            <a href="###">吸尘器</a>
                            <a href="###">消毒柜/洗碗机</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###" class="red-text">赛朵</a>
                            <a href="###">凯撒豪庭·灯饰</a>
                            <a href="###">灯域</a>
                            <a href="###">提尔</a>
                            <a href="###" class="red-text">良品light</a>
                            <a href="###">欧英仕</a>
                            <a href="###" class="red-text">鸥达</a>
                            <a href="###">JOMOO九牧</a>
                            <a href="###">希朗</a>
                            <a href="###">摩普</a>
                            <a href="###">西门子</a>
                            <a href="###">CN墙纸</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-8.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###" class="text">建材灯饰</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 9 -->
                    <div class="list-box small-list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">灯饰照明</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###" class="red-text">吊灯</a>
                            <a href="###">壁灯</a>
                            <a href="###" class="red-text">吸顶灯</a>
                            <a href="###">台灯</a>
                            <a href="###">落地灯</a>
                            <a href="###">LED灯/光源</a>
                            <a href="###">灯具套装</a>
                          </li>
                        </ul>
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">热门搜索</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###" class="red-text">客厅灯</a>
                            <a href="###">卧室灯</a>
                            <a href="###">餐厅灯</a>
                            <a href="###">水晶灯</a>
                            <a href="###">节能灯</a>
                            <a href="###">布艺台灯</a>
                            <a href="###">客厅吊灯</a>
                            <a href="###" class="red-text">床头灯</a>
                            <a href="###">玻璃灯</a>
                            <a href="###">亚克力吸顶灯</a>
                            <a href="###">LED吊灯</a>
                            <a href="###">镜前灯</a>
                            <a href="###">客厅落地灯</a>
                            <a href="###">时尚吊灯</a>
                            <a href="###">射灯</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###" class="red-text">赛朵</a>
                            <a href="###">灯域</a>
                            <a href="###">提尔</a>
                            <a href="###">杰雷诺</a>
                            <a href="###">花田美屋</a>
                            <a href="###">尊阁</a>
                            <a href="###" class="red-text">良品light</a>
                            <a href="###">欧英仕</a>
                            <a href="###">朵兔</a>
                            <a href="###">中意</a>
                            <a href="###">贝高</a>
                            <a href="###" class="red-text">凯撒豪庭·灯饰</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-9.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###">灯饰照明</a>
                    <a href="###">吊灯</a>
                    <a href="###">吸顶灯</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 10 -->
                    <div class="list-box small-list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">卫浴</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###" class="red-text">浴室柜</a>
                            <a href="###">浴缸</a>
                            <a href="###">淋浴房</a>
                            <a href="###">花洒</a>
                            <a href="###">坐便器</a>
                            <a href="###">卫浴挂件</a>
                            <a href="###" class="red-text">卫浴龙头</a>
                            <a href="###">吊顶</a>
                            <a href="###">地漏</a>
                            <a href="###">洗面盆</a>
                            <a href="###">浴霸</a>
                            <a href="###">蹲便器</a>
                            <a href="###">冲水箱</a>
                            <a href="###">坐便器盖板</a>
                            <a href="###">浴桶浴盆</a>
                            <a href="###">卫浴套装</a>
                            <a href="###">浴室镜</a>
                          </li>
                        </ul>
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">热门搜索</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###">浴室套装</a>
                            <a href="###" class="red-text">欧式浴室柜</a>
                            <a href="###">双人鱼缸</a>
                            <a href="###">时尚卫浴</a>
                            <a href="###">淋浴花洒</a>
                            <a href="###">多功能花洒</a>
                            <a href="###">水龙头</a>
                            <a href="###">卫浴洁具</a>
                            <a href="###">风暖浴霸</a>
                            <a href="###">集成吊顶</a>
                            <a href="###">落地浴室柜</a>
                            <a href="###">现代浴室柜</a>
                            <a href="###" class="red-text">虹吸坐便器</a>
                            <a href="###">智能坐便器</a>
                            <a href="###">卫浴五件套</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###">鸥达</a>
                            <a href="###">卓美欧</a>
                            <a href="###" class="red-text">JOMOO九牧</a>
                            <a href="###">摩恩</a>
                            <a href="###" class="red-text">潜水艇</a>
                            <a href="###">希朗</a>
                            <a href="###">吉他</a>
                            <a href="###">卫浴无限</a>
                            <a href="###">摩普</a>
                            <a href="###" class="red-text">欧琳</a>
                            <a href="###">皇姿</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-10.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###">卫浴</a>
                    <a href="###">浴室柜</a>
                    <a href="###">坐便器</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 11 -->
                    <div class="list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">床上用品</a>
                          </li>
                          <li class="info-list">
                            <a href="###">枕芯</a>
                            <a href="###" class="red-text">床品套件</a>
                            <a href="###">床幔/蚊帐</a>
                            <a href="###" class="red-text">被芯</a>
                            <a href="###" class="red-text">毛毯</a>
                            <a href="###">床褥</a>
                            <a href="###">被套</a>
                            <a href="###">床笠</a>
                            <a href="###">枕套</a>
                            <a href="###">凉席</a>
                            <a href="###">婚庆家纺</a>
                            <a href="###">夏凉被</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">居家日用</a>
                          </li>
                          <li class="info-list">
                            <a href="###">晾晒架</a>
                            <a href="###">收纳柜</a>
                            <a href="###" class="red-text">置物架</a>
                            <a href="###">纸巾盒</a>
                            <a href="###">简易电脑桌</a>
                            <a href="###">衣架</a>
                            <a href="###">净化除味</a>
                            <a href="###">清洁用品</a>
                            <a href="###">收纳箱/袋</a>
                            <a href="###">洗簌用品</a>
                            <a href="###" class="red-text">家居收纳</a>
                            <a href="###">挂钩</a>
                            <a href="###">简易衣柜</a>
                            <a href="###">装饰镜/化妆镜</a>
                            <a href="###">垃圾桶</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">布艺织物</a>
                          </li>
                          <li class="info-list">
                            <a href="###" class="red-text">窗帘</a>
                            <a href="###">地毯/地垫</a>
                            <a href="###">沙发套/垫</a>
                            <a href="###">毛巾家纺</a>
                            <a href="###">坐垫/靠垫</a>
                            <a href="###">防尘罩</a>
                            <a href="###">轨道/罗马杆</a>
                            <a href="###">布艺玩具</a>
                            <a href="###" class="red-text">抱枕</a>
                            <a href="###">桌布</a>
                            <a href="###">桌旗</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">家居饰品</a>
                          </li>
                          <li class="info-list">
                            <a href="###" class="red-text">装饰画</a>
                            <a href="###" class="red-text">装饰摆件</a>
                            <a href="###">风水摆件</a>
                            <a href="###">钟</a>
                            <a href="###">电话机</a>
                            <a href="###">仿真花</a>
                            <a href="###">花瓶/花盆</a>
                            <a href="###">红酒架</a>
                            <a href="###">装饰花架</a>
                            <a href="###">烛台/蜡烛</a>
                            <a href="###">烟灰缸</a>
                            <a href="###">首饰盒</a>
                            <a href="###">创意公仔</a>
                            <a href="###">装饰托盘/底盘</a>
                          </li>
                        </ul>
                        <ul class="list-l-box">
                          <li class="info-title">
                            <a href="###">厨房餐饮</a>
                          </li>
                          <li class="info-list">
                            <a href="###" class="red-text">餐具</a>
                            <a href="###">厨用收纳</a>
                            <a href="###" class="red-text">茶具/咖啡具</a>
                            <a href="###">果盘/托物盘</a>
                            <a href="###">杯子</a>
                            <a href="###">酒具</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###" class="red-text">良品LIFE</a>
                            <a href="###">博洋家纺</a>
                            <a href="###">优曼之家</a>
                            <a href="###">纷缇</a>
                            <a href="###">雅克集</a>
                            <a href="###">邵氏家纺</a>
                            <a href="###" class="red-text">悦邻家居</a>
                            <a href="###">皇室家居</a>
                            <a href="###" class="red-text">馨视觉</a>
                            <a href="###">英伦欧堡</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-11.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###" class="text">家居家饰</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 12 -->
                    <div class="list-box small-list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">床品/家纺</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###" class="red-text">被芯</a>
                            <a href="###">枕芯</a>
                            <a href="###" class="red-text">床品套件</a>
                            <a href="###">毛毯</a>
                            <a href="###">婚庆家纺</a>
                            <a href="###">床褥</a>
                            <a href="###">床笠</a>
                            <a href="###">床裙</a>
                            <a href="###">床单</a>
                            <a href="###">被套</a>
                            <a href="###">枕套</a>
                            <a href="###">床幔/蚊帐</a>
                            <a href="###">凉席</a>
                            <a href="###">夏凉被</a>
                            <a href="###" class="red-text">窗帘</a>
                            <a href="###">地毯</a>
                            <a href="###">坐垫/靠垫</a>
                            <a href="###">沙发套/垫</a>
                            <a href="###">抱枕</a>
                            <a href="###">桌布</a>
                            <a href="###">桌旗</a>
                            <a href="###">毛巾家纺</a>
                            <a href="###">防尘罩</a>
                            <a href="###">布艺玩具</a>
                          </li>
                        </ul>
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">热门搜索</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###">床品套件</a>
                            <a href="###">纯棉四件套</a>
                            <a href="###" class="red-text">婚庆四件套</a>
                            <a href="###">儿童床品</a>
                            <a href="###">纤维被</a>
                            <a href="###" class="red-text">蚕丝被</a>
                            <a href="###">毛毯</a>
                            <a href="###" class="red-text">乳胶枕</a>
                            <a href="###">记忆枕</a>
                            <a href="###">布艺窗帘</a>
                            <a href="###">欧式窗帘</a>
                            <a href="###">遮光窗帘</a>
                            <a href="###">坐垫</a>
                            <a href="###" class="red-text">家用地毯</a>
                            <a href="###">抱枕</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###">博洋家纺</a>
                            <a href="###">优曼之家</a>
                            <a href="###">唯萨</a>
                            <a href="###">纷缇</a>
                            <a href="###" class="red-text">良品LIFE</a>
                            <a href="###">睡眠易</a>
                            <a href="###">凯黎舍</a>
                            <a href="###">邵氏家纺</a>
                            <a href="###">梦巢</a>
                            <a href="###" class="red-text">悦邻家居</a>
                            <a href="###">皇室家居</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-12.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###">床上用品</a>
                    <a href="###">布艺织物</a>
                  </li>
                  <li class="sub-list-hover">
                    <!-- 列表 13 -->
                    <div class="list-box small-list-box">
                      <ul class="list-l-info">
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">家居用品</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###" class="red-text">装饰画</a>
                            <a href="###">仿真花</a>
                            <a href="###">电话机</a>
                            <a href="###">烟灰缸</a>
                            <a href="###">钟</a>
                            <a href="###" class="red-text">装饰摆件</a>
                            <a href="###">装饰托盘/座盘</a>
                            <a href="###">风水摆件</a>
                            <a href="###">创意公仔</a>
                            <a href="###">红酒架</a>
                            <a href="###">首饰盒</a>
                            <a href="###" class="red-text">花瓶/花盆</a>
                            <a href="###">烛台/蜡烛</a>
                            <a href="###">装饰花架</a>
                          </li>
                        </ul>
                        <ul class="list-l-box small-list-l-box">
                          <li class="info-title">
                            <a href="###">热门搜索</a>
                          </li>
                          <li class="info-list small-info-list">
                            <a href="###">创意油画</a>
                            <a href="###" class="red-text">无框画</a>
                            <a href="###">有框画</a>
                            <a href="###">挂画</a>
                            <a href="###">客厅装饰画</a>
                            <a href="###">现代装饰画</a>
                            <a href="###">照片相框</a>
                            <a href="###">工艺摆件</a>
                            <a href="###">家居摆件</a>
                            <a href="###">红酒架</a>
                            <a href="###" class="red-text">仿真花</a>
                            <a href="###">墙贴</a>
                            <a href="###">首饰盒</a>
                            <a href="###">婚庆摆件</a>
                            <a href="###">欧式电话机</a>
                          </li>
                        </ul>

                        <li class="info-r">
                          <h6>推荐品牌</h6>
                          <div class="info-r-list clearfix">
                            <a href="###" class="red-text">馨视觉</a>
                            <a href="###">英伦欧堡</a>
                            <a href="###" class="red-text">宝优妮</a>
                            <a href="###">莎芮Saree</a>
                            <a href="###">SFMOBUL宝君美</a>
                            <a href="###">朵兰舍</a>
                            <a href="###" class="red-text">三南</a>
                            <a href="###">墨菲</a>
                            <a href="###">利临</a>
                          </div>
                          <a href="###" class="info-r-img"><img src="image/header-img/sub-info-list-13.jpg" alt=""></a>
                        </li>
                      </ul>
                    </div>
                    <i class="icon"></i>
                    <a href="###">家居饰品</a>
                    <a href="###">居家日用</a>
                  </li>
                </ul>
              <!-- 菜单列表 结束 -->

            </div>

          </div>

          <!-- 菜单栏 结束 -->

        </div>

      </div>

    </div>

  </div>
    `);

    // 列表箭头
    $(".customer-list").on("mouseenter",function(){
      $(".item").css({backgroundPosition:"0 0"})
      $(this).find(".item").css({backgroundPosition:"0 -5px"});
    });
    $(".customer-list").on("mouseleave",function(){
      $(".item").css({backgroundPosition:"0 0"})
    });

    // 滚动新闻
    var timer = null;
    var x = 0;

    headerInfoScroll();
    function headerInfoScroll(){
      timer = setInterval(function(){
        x++;
        $(".customer-scroll-move").animate({marginTop:-30*x},500,function(){
          if(x > $(".customer-scroll-move a").length - 2){
            $(".customer-scroll-move").css({
              marginTop:0
            })
            x=0
          }
        });
      },2000);
    }

    $(".scroll-mask").hide(0);
    $(".customer-scroll-move").on("mouseenter",function(){
      $(".drop-down-adress").show();
      $(".scroll-mask").show(0);
      clearInterval(timer);
    });
    $(".customer-scroll-move").on("mouseleave",function(){
      $(".drop-down-adress").hide();
      $(".scroll-mask").hide(0);
      headerInfoScroll();
    });
    $(".drop-down-adress").on("mouseenter",function(){
      $(".scroll-mask").show(0);
      $(".drop-down-adress").show(0);
    })
    $(".drop-down-adress").on("mouseleave",function(){
      $(".drop-down-adress").hide(0);
      $(".scroll-mask").hide(0);
    })

    // 搜索框聚焦
    $(".search-info").focus();

    // 二级列表
    $(".sub-list-hover").on("mouseenter",function(){
      $(".list-box").css({display:"none"}).stop().animate({paddingLeft:"0"});
      $(this).find(".list-box").css({display:"block"}).stop().animate({paddingLeft:"10px"});
    });

    // // 公共菜单显示隐藏
    // 公共菜单鼠标移入
    $(".menu-title").on("mouseenter",function(){
      // 二级菜单显示
      $(".sub-list").stop(true,true).fadeIn(0);
      // 二级菜单右侧列表隐藏
      $(".list-box").stop(true,true).hide();
    });
    // 公共菜单鼠标移出
    $(".menu-title").on("mouseleave",function(){
      // 二级菜单隐藏
      $(".sub-list").stop(true,true).hide(0);
    });
    // 二级菜单移入
    $(".sub-list").on("mouseenter",function(){
      // 让自己固定显示
      $(".sub-list").stop(true,true).fadeIn(0);
    });

    // 二级菜单移出
    $(".sub-list").on("mouseleave",function(){
      // 让自己隐藏
      $(".sub-list").stop(true,true).fadeOut();
    });

  });
}(jQuery));