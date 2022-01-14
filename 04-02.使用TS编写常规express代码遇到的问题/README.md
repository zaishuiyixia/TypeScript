### bodyParser中间件
bodyParser中间件用来解析http请求体，用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理。是express默认使用的中间件之一。
新版的express中不包含bodyparser，需要我们单独安装bodyparser。

除了bodyParser.json 与 bodyParser.urlencoded 的解析功能，bodyParser还支持对text、raw的解析。
bodyParser.json是用来解析json数据格式的。bodyParser.urlencoded则是用来解析我们通常的form表单提交的数据，也就是请求头中包含这样的信息： Content-Type: application/x-www-form-urlencoded。

常见的四种Content-Type类型：
- application/x-www-form-urlencoded 常见的form提交
- multipart/form-data 文件提交
- application/json 提交json格式的数据
- text/xml 提交xml格式的数据