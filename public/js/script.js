var bpMedium=1024;
function menu(){
    $(document).on('click', '.select', function(e){
        e.preventDefault();
        $(this).parents('.nav').toggleClass('active');
        $('body').css('cursor','pointer');
    });
    $(document).click(function(event) {
        if ($(event.target).closest(".box-menu").length) return;
        $(".box-menu .nav").removeClass("active");
        $('body').css('cursor','default');
    });

    $(document).on('click', '.nav-sub a', function(event) {
        $(".box-menu .nav").removeClass("active");
        $("body").scrollTop(0);
        event.stopPropagation();
    });

    $(document).on('click', '.date a', function(event) {
        $(".info").animate({ scrollTop: "0" }, 300);
    });

    $(document).on('click', '.info a', function(event) {
        $(".panel-scroll").animate({ scrollTop: "0" }, 300);
    });
}
function control(){
    $(document).on('click', '.control', function(){
        $('.clear-all').addClass('active');
    });
}
function animate() {
    $('body').addClass('animate');
    setTimeout(function () {
        $('body').removeClass('animate');
    }, 700);
}
function scrollFixedOverflow(){
    $('body').addClass('overflow');
    setTimeout(function () {
        $('body').removeClass('overflow');
    }, 500);
}
function cls(){
    var windowWidth=$(window).width();
    if(windowWidth<=bpMedium){
        $('body').removeClass('open');
    }
    else{
        $('body').addClass('open');
    }
}
function filter(){
    $(document).on('click', '.filter', function(e){
        if($('body').hasClass("animate")==false){
            $('.filter-nav').toggleClass('active');
            $(this).parents('header').toggleClass('hide');
            animate();
            scrollFixedOverflow();
        }
    });
}
function filterChecked(){
    $(document).on('click', '.filter-nav label', function(e){
        var n = $( ".filter-nav input:checked" ).length;
        if(n>0){
            $('.filter').addClass('active');
        }
        else{
            $('.filter').removeClass('active');
        }
    });
}
function clearAllFilter(){
    $(document).on('click', '.filter-nav .clear-all', function(e){
        $('.filter-nav').find('input:checkbox').removeAttr('checked');
        var n = $( ".filter-nav input:checked" ).length;
        if(n>0){
            $('.filter').addClass('active');
        }
        else{
            $('.filter').removeClass('active');
        }
    });
}
function selectAll(selector,selector1){
    $(document).on('click', selector, function(e){
        var status = $(selector).prop("checked");
        if(status==true){
            $(this).parents(selector1).find('input[type=checkbox]').prop({
                checked: true
            });
        }
        else{
            $(this).parents(selector1).find('input[type=checkbox]').prop({
                checked: false
            });
        }
    });
}
function back(){
    $(document).on('click', '.arrow-back', function(){
        $(this).parents('.active').removeClass('active');
        $('header').removeClass('hide');
        $('body').removeClass('overflow');
        $('.clear-all').removeClass('active');
        animate();
        scrollFixedOverflow();
    });
}
function desc(){
    $(document).on('click', '.events-info li .box-item,.speakers-info li a,.nav-info a', function(e) {
        animate();
        scrollFixedOverflow();
    });
}
function search(){
    $(document).on('click', '.header .icon-search', function(){
        $(this).parents('.header').addClass('active');
    });
}
function share(){
    $(document).on('click','.share-icon',function(e){
        e.preventDefault();
        $(this).parents('.nav-share').toggleClass('active');
        $('body').css('cursor','pointer');
    });
    $(document).click(function(event) {
        if ($(event.target).closest(".nav-share").length) return;
        $(".nav-share").removeClass("active");
        $('body').css('cursor','default');
    });
}
function leftNavigation(){
    $(document).on('click', '.hamburger-box',function(e){
        e.preventDefault();
        if($('body').hasClass("animate")==false){
            $('body').toggleClass('open');
            animate();
        }
    });
    $(document).on('click','.over',function(e){
        e.preventDefault();
        if($('body').hasClass("animate")==false){
            $('body').toggleClass('open');
            animate();
        }
    });
    $(document).on('click', '.left-navigation a', function(e) {
        e.preventDefault();
        var windowWidth=$(window).width();
        if(windowWidth<=bpMedium){
            $('body').removeClass('open');
            animate();
        }
    });
}
$(document).ready(function() {
    leftNavigation();
    cls();
    search();
    back();
    desc();
    control();
    menu();
    share();
    filter();
    filterChecked();
    clearAllFilter();
    selectAll('.check-all-filter input','.filter-nav');
    $(window).load(function() {
        setTimeout(function() {
            $('.load').remove('.load');
        }, 600);
    });
    $(window).resize(function(){
        cls();
    });
});
