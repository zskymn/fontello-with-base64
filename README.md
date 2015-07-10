# 简介
将[fontello_rails_converter](https://github.com/railslove/fontello_rails_converter)生成的fontello.css和fonts打包成一个单独的css文件，font文件用其base64编码代替

# 使用方法
1. 创建rails应用
    ```sh
    rails new rails_app_name
    ```
2. fontello_rails_converter初始化
    1. 进入rails应用目录
    2. 按照[fontello_rails_converter#initial-usage](https://github.com/railslove/fontello_rails_converter#initial-usage)方法初始        化
3. 使用fontello-with-base64
    ```sh
    $ git clone https://github.com/zskymn/fontello-with-base64.git
    $ cd fontello-with-base64
    $ npm install
    $ grunt build
    ```
