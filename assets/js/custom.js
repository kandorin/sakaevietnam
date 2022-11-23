$('#load_more').click(function () {
    var current_url = $(this).attr('data-url');
    var page = $(this).attr('data-page');
    var data_append = $(this).attr('data-append');

    $.ajax({
        url: current_url + '?page=' + page,
        type: 'GET',
        dataType: 'json',
        data: {}
    }).done(function (response) {

        if (response.load_more === false) {
            $('#load_more').remove();
        } else {
            $('#load_more').attr('data-page', parseInt(page) + 1);
        }

        if ($('.lastItem').length > 0) {
            $('html, body').animate({ scrollTop: $(".lastItem").offset().top }, 'fast');
        }
        $(data_append).find('article').removeClass('lastItem');
        $(data_append).append(response.html);
    });
});

$(document).ready(function () {
    $('.js_filter_project').click(function (e) {
        e.preventDefault();
        $(this).closest('form').submit();
    });
});