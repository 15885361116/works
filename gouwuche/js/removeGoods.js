export default function removeGoods(codeArr){
    // 删除购物车商品
    $('.list').on('click','li span',function (){
        var code = $(this).parent().attr('code');//点击元素对应的商品编号

        $.each(codeArr,function (index,val){
            if (code == val) {
                codeArr.splice(index,1);//删除本地数据
            }
        })

        // 同步本地存储中的数据
        var jsonStr = JSON.stringify({"code":codeArr});

        // 存到本地
        localStorage.setItem('goods',jsonStr);

        // splice(index,1);

        $(this).parent().remove();//删除页面对应的节点
        alert('成功移除商品!');
        
        if (codeArr.length <= 0) {
            $('.list').html('<li class="tips">您的购物车空空如也！</li>');
        }
    })
}