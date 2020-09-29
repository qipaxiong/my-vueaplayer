<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: 黄鹏举
 * @Date: 2020-09-26 23:24:10
 * @LastEditors: Seven
 * @LastEditTime: 2020-09-30 00:28:20
-->
# my-vuedplayer

## Project setup
```bash
npm install my-vuedplayer -S
```
## dplayer 详情地址

http://dplayer.js.org/zh/

## dplayer 基本参数

参数(options)
DPlayer 有丰富的参数可以自定义你的播放器实例

名称	默认值	描述
container	document.querySelector('.dplayer')	播放器容器元素
live	false	开启直播模式, 见#直播
autoplay	false	视频自动播放
theme	'#b7daff'	主题色
loop	false	视频循环播放
lang	navigator.language.toLowerCase()	可选值: 'en', 'zh-cn', 'zh-tw'
screenshot	false	开启截图，如果开启，视频和视频封面需要允许跨域
hotkey	true	开启热键，支持快进、快退、音量控制、播放暂停
airplay	true	在 Safari 中开启 AirPlay
preload	'auto'	视频预加载，可选值: 'none', 'metadata', 'auto'
volume	0.7	默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
playbackSpeed	[0.5, 0.75, 1, 1.25, 1.5, 2]	可选的播放速率，可以设置成自定义的数组
logo	-	在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置
apiBackend	-	自定义获取和发送弹幕行为，见#直播
video	-	视频信息
video.quality	-	见#清晰度切换
video.defaultQuality	-	见#清晰度切换
video.url	-	视频链接
video.pic	-	视频封面
video.thumbnails	-	视频缩略图，可以使用 DPlayer-thumbnails 生成
video.type	'auto'	可选值: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或其他自定义类型, 见#MSE 支持
video.customType	-	自定义类型, 见#MSE 支持
subtitle	-	外挂字幕
subtitle.url	required	字幕链接
subtitle.type	'webvtt'	字幕类型，可选值: 'webvtt', 'ass'，目前只支持 webvtt
subtitle.fontSize	'20px'	字幕字号
subtitle.bottom	'40px'	字幕距离播放器底部的距离，取值形如: '10px' '10%'
subtitle.color	'#fff'	字幕颜色
danmaku	-	显示弹幕
danmaku.id	required	弹幕池 id，必须唯一
danmaku.api	required	见#弹幕接口
danmaku.token	-	弹幕后端验证 token
danmaku.maximum	-	弹幕最大数量
danmaku.addition	-	额外外挂弹幕，见#bilibili 弹幕
danmaku.user	'DIYgod'	弹幕用户名
danmaku.bottom	-	弹幕距离播放器底部的距离，防止遮挡字幕，取值形如: '10px' '10%'
danmaku.unlimited	false	海量弹幕模式，即使重叠也展示全部弹幕，请注意播放器会记忆用户设置，用户手动设置后即失效
contextmenu	[]	自定义右键菜单
highlight	[]	自定义进度条提示点
mutex	true	互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器