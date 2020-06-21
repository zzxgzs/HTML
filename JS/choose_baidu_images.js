function choose_baidu_images() {
    var modify = document.getElementById("title");
    modify.innerHTML = "百度图片搜索";
    //修改div里面的内容
    var modify = document.getElementById('search_interface');
    modify.innerHTML = '<span>搜索内容：</span><input id = "search_content_box" class="btn btn-light" name="browser" type = "text" style = "width: 400px;height: 25px;"/>\n<br/>\n<br/>\n<span>图片宽度：</span><input data-placement="top" title="在此输入图片的宽度，仅支持大于1的整数，其他文本无效" id = "images_width" class="btn btn-light" name="browser" type = "text" style = "width: 150px;height: 25px;"/>\n<span>图片高度：</span><input data-placement="top" title="在此输入图片的高度，仅支持大于1的整数，其他文本无效" id = "images_height" class="btn btn-light" name="browser" type = "text" style = "width: 150px;height: 25px;"/>\n<br/>\n<label>\n<input id="gif" type="checkbox"/>\n仅搜索动图\n</label>\n<br/>\n<br/>\n<input id = "start_searching" class="btn btn-primary" name="browser" type = "button" value ="百度图片搜索" onclick = "return baidu_images_search();"/>';
    //弹出消息
    var modify = document.getElementById('message');
    modify.innerHTML = document.getElementById('message').innerHTML + '<div class="alert alert-info alert-dismissible fade show">\n<button type="button" class="close" data-dismiss="alert">&times;</button>\n<strong>消息!</strong> 已切换到百度图片搜索！\n</div>';
}