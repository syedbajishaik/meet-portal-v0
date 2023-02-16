jQuery.noConflict();
(function ($) {
    let titleHt = $('.bc_employee_list--title');
    let searchEmpFormHt = $('.search_employee_form-in-employee_list-in-aside');
    let navigationSectionHt = $('.navigation-section');
    $('.lc_aside .emp-ulist').css({ 'height': `calc(100vh - ${titleHt.outerHeight(true) + searchEmpFormHt.outerHeight(true) + navigationSectionHt.outerHeight(true) + 16}px)` });

    $('.emp-ulist li.iemployee').on('click', function(){
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    });

    $(document).on('click', '.custom-radio-group label.radio-label', function (event) {
        $(this).siblings().removeClass('checked');
        $(this).addClass('checked');
    });

    $(document).on('click', '.inrow-comment .show-lessORmore', function (event) {
        $(this).closest('.inrow-comment').find('.commentext').toggleClass('only-lines-1');
        if ($(this).closest('.inrow-comment').find('.commentext').hasClass('only-lines-1')) {
            $(this).find('span').text('Show more')
            $(this).find('i').toggleClass('fa-angles-up fa-angles-down')
        } else {
            $(this).find('span').text('Show less')
            $(this).find('i').toggleClass('fa-angles-up fa-angles-down')
        }

    });

    $('.star-rating-block .star-input').on('click', function (event) {
        let starsParent = $(this).closest('.star-rating-block');
        let currentIndex = $(this).index();
        if(currentIndex == 0 || currentIndex == 2 || currentIndex == 4){
            $(this).siblings().removeClass('active');
            for (let i = currentIndex; i >= 0; i--) {
                starsParent.children().eq(i).addClass('active');
            }
        }
    });
    $('.star-rating-block-js_edit i').on('click', function (event) {
        $(this).toggleClass('fa-pen-to-square fa-paper-plane');
        $(this).parent().prev().toggleClass('disabled');
    });

    $('.bc_nav_profile--dropdown_btn').on('click', function (event) {
        $(this).closest('.bc_nav_profile').find('.bc_nav_profile--dropdown').toggleClass('active');
        $(this).closest('.bc_nav_profile').find('.bc_nav_profile--dropdown').hasClass('active') ? 
        $('.bc_nav_profile--dropdown_btn').attr('aria-expanded', 'true') : 
        $('.bc_nav_profile--dropdown_btn').attr('aria-expanded', 'false');
    });
})(jQuery)