
$('button').click(function(){
    let tabID = $(this).data('location');
    $('button').removeClass('active');
    $(this).addClass('active');
    $('.tab-pane').removeClass('active');
    $('[data-location-content="' + tabID + '"]').addClass('active')
})