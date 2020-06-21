function choose_baidu_information() {
    //修改标题
    var modify = document.getElementById("title");
    modify.innerHTML = "百度资讯搜索";
    //插入完整HTML标签
    var modify = document.getElementById('search_interface');
    modify.innerHTML = '<input id = "search_content_box" class="btn btn-light" placeholder="搜索内容" name="browser" type = "text" style = "width: 400px;height: 25px;"/>\n<br/>\n<br/>\n<span>搜索顺序：</span><select id = "choose_sequence" class="btn btn-primary">\n<option value="1" selected>按焦点排序</option>\n<option value="4">按时间排序</option>\n</select>\n<br/>\n<br/>\n<span>搜索范围：</span><select id = "choose_range" class="btn btn-primary">\n<option value="0" selected>全部资讯</option>\n<option value="1">媒体网站</option>\n<option value="2">百家号</option>\n</select>\n<br/>\n<br/>\n<input id = "start_searching" class="btn btn-primary" name="browser" type = "button" value ="百度资讯搜索" onclick = "return baidu_information_search();"/>';
    //弹出消息
    var modify = document.getElementById('message');
    modify.innerHTML = document.getElementById('message').innerHTML + '<div class="alert alert-info alert-dismissible fade show">\n<button type="button" class="close" data-dismiss="alert">&times;</button>\n<strong>消息!</strong> 已切换到百度资讯搜索！\n</div>';
}