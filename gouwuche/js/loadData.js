export default function loadList(){
    // 加载商品列表的数据
    $.ajax({
        url: 'data/goods.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json){
            var results = '';
            $.each(json,function (index,item){
                results += '<div class="goods" code="'+item.code+'"><img src="'+item.imgurl+'" alt=""><p>'+item.price+'</p><h3>'+item.title+'</h3><div>加入购物车</div></div>';
            });
            $('.content').html(results);
        }
    });
}