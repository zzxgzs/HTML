//单选框
$(function(){
    $('input:radio').click(function(){
        var domName = $(this).attr('name');
        var $radio = $(this);
        if ($radio.data('waschecked') == true){
            $radio.prop('checked', false);
            $("input:radio[name='" + domName + "']").data('waschecked',false);
        } else {
            $radio.prop('checked', true);
            $("input:radio[name='" + domName + "']").data('waschecked',false);
            $radio.data('waschecked', true);
        }
    });
});