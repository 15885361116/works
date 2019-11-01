export default function loadCart(codeArr){
    // 展示购物车商品
    $.ajax({
        url: 'data/goods.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (json){
            var results = '';
            $.each(codeArr,function (index,code){
                $.each(json,function (index,item){
                    if (code == item.code) {
                        results += '<li code="'+item.code+'"><img src="'+item.imgurl+'" alt=""><h3>'+item.title+'</h3><p>'+item.price+'</p><span>删除</span></li>';
                    }
                })
            });
            $('.list').html(results);
        }
    });
}