export default function addEvent(){
    // 点击加入购物车
    // localStorage -> goods : '{"code":['abc1','abc4','abc6']}'
    $('.content').on('click','.goods div',function (){
        // 获取点击商品的编号
        var code = $(this).parent().attr('code');

        // 获取本地存储数据（数组）
        if (localStorage.getItem('goods')) {
            var codeArr = JSON.parse( localStorage.getItem('goods') ).code;
        } else {
            var codeArr = [];
        }

        codeArr.push(code);//添加数据

        var jsonStr = JSON.stringify( {"code": codeArr} );//对象转成 json 字符串

        // 更新本地存储数据
        localStorage.setItem('goods',jsonStr);

        alert('成功加入购物车！');
    })
}