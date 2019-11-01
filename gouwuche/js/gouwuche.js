import loadCart from './loadCart.js';
import removeGoods from './removeGoods.js';
    
if (localStorage.getItem('goods')) {
    // 本地存储中的商品编码数组
    var codeArr = JSON.parse(localStorage.getItem('goods')).code;
    if (codeArr.length > 0) {//有数据
        // 加载展示购物车商品
        loadCart(codeArr);

        // 删除购物车商品
        removeGoods(codeArr);

    } else {
        $('.list').html('<li class="tips">您的购物车空空如也！</li>');
    }
} else {
    console.log('没有数据');
    $('.list').html('<li class="tips">您的购物车空空如也！</li>');
}


