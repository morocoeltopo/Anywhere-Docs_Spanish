(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{286:function(t,a,r){"use strict";r.r(a);var e=r(13),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("h2",{attrs:{id:"anywhere-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anywhere-是什么"}},[t._v("#")]),t._v(" Anywhere- 是什么？")]),t._v(" "),a("p",[t._v("Anywhere- 是我有一天突然有了灵感并开始着手制作的工具类 App。它支持将你常用的页面 (Activity) 收集到一个界面并保存，方便快速打开。在手机 App 数量繁多的今天，Anywhere- 也许能帮助你节约一些时间，做一些微小的工作。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://appcenter.ms",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://build.appcenter.ms/v0.1/apps/7a83abfb-6d9b-4b48-8c87-835c488c145e/branches/master/badge",alt:"Build status"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"anywhere-能做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anywhere-能做什么"}},[t._v("#")]),t._v(" Anywhere- 能做什么？")]),t._v(" "),a("p",[t._v("Anywhere- 目前有 3 个工作模式：")]),t._v(" "),a("ul",[a("li",[t._v("Normal")]),t._v(" "),a("li",[t._v("Root")]),t._v(" "),a("li",[t._v("Shizuku")])]),t._v(" "),a("h3",{attrs:{id:"_1-normal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-normal"}},[t._v("#")]),t._v(" 1.Normal")]),t._v(" "),a("p",[t._v("此模式无需任何运行时权限，通过"),a("a",{attrs:{href:"https://en.m.wikipedia.org/wiki/Uniform_Resource_Identifier",target:"_blank",rel:"noopener noreferrer"}},[t._v(" URL Scheme 协议"),a("OutboundLink")],1),t._v("打开特定页面，也可以通过 Intent 打开 Exported 页面。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("优点：无需任何运行时权限，可打开指定界面。\n"),a("a",{attrs:{href:"anywhere://url?param1=alipays://platformapi/startapp?appId=60000002&type=0"}},[t._v("像这样")]),t._v(" "),a("a",{attrs:{href:"anywhere://url?param1=orpheus://song/478127&type=0"}},[t._v("像这样")]),t._v("\n或者\n"),a("a",{attrs:{href:"anywhere://url?param1=coolmarket://www.coolapk.com/feed/271681&type=0"}},[t._v("像这样")])])]),t._v(" "),a("li",[a("p",[t._v("缺点：需要应用支持；不支持所有页面。")])])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guide/URL-Scheme-Usage.html"}},[t._v("使用方法")])],1),t._v(" "),a("h3",{attrs:{id:"_2-root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-root"}},[t._v("#")]),t._v(" 2.Root")]),t._v(" "),a("p",[t._v("Root 模式通过使用 ADB 指令打开指定的页面(Activity)。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("优点：可以打开任何 "),a("strong",[t._v("Activity")]),t._v(" 页面。\n"),a("a",{attrs:{href:"anywhere://url?param1=com.android.settings&param2=.wifi.WifiSettings&type=1"}},[t._v("像这样")]),t._v("\n或者\n"),a("a",{attrs:{href:"anywhere://url?param1=tv.danmaku.bili&param2=.MainActivityV2&type=1"}},[t._v("像这样")])])]),t._v(" "),a("li",[a("p",[t._v("缺点：暂时不支持打开 "),a("strong",[t._v("Fragment")]),t._v("；")])])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guide/Root-Mode-Usage.html"}},[t._v("使用方法")])],1),t._v(" "),a("h3",{attrs:{id:"_3-shizuku"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-shizuku"}},[t._v("#")]),t._v(" 3.Shizuku")]),t._v(" "),a("p",[t._v("Shizuku 模式可以通过使用 "),a("a",{attrs:{href:"https://www.coolapk.com/apk/moe.shizuku.privileged.api",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shizuku Manager"),a("OutboundLink")],1),t._v(" 实现无需授予本程序 Root 权限获得与 Root 模式相同的功能。")]),t._v(" "),a("ul",[a("li",[t._v("优点：无需授予 Root 权限实现 Root 模式功能。")]),t._v(" "),a("li",[t._v("缺点：需要额外下载 Shizuku Manager，Shizuku 需要 Root 模式激活。")])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guide/Shizuku-Mode-Usage.html"}},[t._v("使用方法")])],1),t._v(" "),a("h2",{attrs:{id:"添加方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加方式"}},[t._v("#")]),t._v(" 添加方式")]),t._v(" "),a("p",[t._v("目前有如下几种 Anywhere- 添加方式：")]),t._v(" "),a("ul",[a("li",[t._v("URL Scheme")]),t._v(" "),a("li",[t._v("活动列表")]),t._v(" "),a("li",[t._v("扫码合集")]),t._v(" "),a("li",[t._v("Collector")]),t._v(" "),a("li",[t._v("高级卡片")]),t._v(" "),a("li",[t._v("其他应用分享至 Anywhere-")])]),t._v(" "),a("p",[t._v("它们分别适用于不用的场景。"),a("RouterLink",{attrs:{to:"/guide/Adding-Approach.html"}},[t._v("查看详情")])],1),t._v(" "),a("h2",{attrs:{id:"添加-intent-extras"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-intent-extras"}},[t._v("#")]),t._v(" 添加 Intent Extras")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guide/Put-Intent-Extras.html"}},[t._v("使用方法")])],1),t._v(" "),a("h2",{attrs:{id:"备份与恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份与恢复"}},[t._v("#")]),t._v(" 备份与恢复")]),t._v(" "),a("p",[t._v("Anywhere- 提供基础的备份与恢复功能，在 "),a("strong",[t._v("设置 - 备份和恢复")]),t._v(" 页面即可进行操作。")]),t._v(" "),a("h3",{attrs:{id:"_1-备份和分享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-备份和分享"}},[t._v("#")]),t._v(" 1.备份和分享")]),t._v(" "),a("h4",{attrs:{id:"_1-1-备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-备份"}},[t._v("#")]),t._v(" 1.1 备份")]),t._v(" "),a("p",[t._v("通过 Document API，Anywhere- 无需读写权限即可完成备份。点击"),a("strong",[t._v("创建新的备份文件")]),t._v("即可打开"),a("strong",[t._v("文档")]),t._v("程序，选择保存位置，备份所有的 Anywhere-。")]),t._v(" "),a("h4",{attrs:{id:"_1-2-分享配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-分享配置"}},[t._v("#")]),t._v(" 1.2 分享配置")]),t._v(" "),a("p",[t._v("点击"),a("strong",[t._v("分享配置")]),t._v("选项，Anywhere- 会生成一串加密数据。此数据包含所有的 Anywhere-，将其复制后即可分享给其他人。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("strong",[t._v("图片卡片")]),t._v("和"),a("strong",[t._v("文件卡片")]),t._v(" 不会被备份。")])]),t._v(" "),a("h4",{attrs:{id:"_1-3-云备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-云备份"}},[t._v("#")]),t._v(" 1.3 云备份")]),t._v(" "),a("p",[t._v("Anywhere- 支持使用 WebDAV 协议备份数据。前往 "),a("strong",[t._v("设置 - 备份和恢复")]),t._v(" 页面来设置云备份账号。以坚果云为例，"),a("strong",[t._v("WebDAV 域名")]),t._v(" 一栏填写 "),a("code",[t._v("https://dav.jianguoyun.com/dav/")]),t._v("，"),a("strong",[t._v("WebDAV 用户名")]),t._v(" 一栏填写你的用户名，"),a("strong",[t._v("WebDAV 密码")]),t._v(" 一栏则根据服务提供商的要求填写。例如坚果云需要在设置中申请应用密码并填写。当一切数据都填写正确后，点击"),a("strong",[t._v("立即备份")]),t._v(" 即可立即触发备份。您也可以开启 "),a("strong",[t._v("自动备份")]),t._v("，应用将在卡片有任何改动的情况下，在应用返回退出或者在强行退出应用后下次一重启时自动备份数据。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("strong",[t._v("WebDAV 域名")]),t._v(' 必须以 "/" 结尾。')])]),t._v(" "),a("h3",{attrs:{id:"_2-恢复和应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-恢复和应用"}},[t._v("#")]),t._v(" 2.恢复和应用")]),t._v(" "),a("h4",{attrs:{id:"_2-1-恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-恢复"}},[t._v("#")]),t._v(" 2.1 恢复")]),t._v(" "),a("p",[t._v("点击"),a("strong",[t._v("从存储文件中恢复")]),t._v("选项即可打开"),a("strong",[t._v("文档")]),t._v("程序，选择备份的 *"),a("strong",[t._v(".awbackups")]),t._v(" 文件，App 提示备份成功后即恢复完成。")]),t._v(" "),a("h4",{attrs:{id:"_2-2-应用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-应用配置"}},[t._v("#")]),t._v(" 2.2 应用配置")]),t._v(" "),a("p",[t._v("点击"),a("strong",[t._v("应用配置")]),t._v("选项，粘贴其他人分享的数据串，点击"),a("strong",[t._v("确定")]),t._v("，即可应用配置。")]),t._v(" "),a("h2",{attrs:{id:"anywhere-将要做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anywhere-将要做什么"}},[t._v("#")]),t._v(" Anywhere- 将要做什么")]),t._v(" "),a("ul",[a("li",[t._v("Intent 拦截插件")]),t._v(" "),a("li",[t._v("自定义 Page")]),t._v(" "),a("li",[t._v("Workflow")]),t._v(" "),a("li",[t._v("指纹锁")]),t._v(" "),a("li",[t._v("...")])])])}),[],!1,null,null,null);a.default=_.exports}}]);