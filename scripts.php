
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
    crossorigin="anonymous"></script>
<script src="js/owl.carousel.min.js"></script>
<script>
    $('.c-d-item').hover(function (e) {
        e.preventDefault();
        $('.c-d-item').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active')
    })
    tabControl();


    var resizeTimer;
    $(window).on('resize', function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            tabControl();
        }, 250);
    });

    function tabControl() {
        var tabs = $('.tabbed-content').find('.tabs');
        if (tabs.is(':visible')) {
            tabs.find('a').on('click', function (event) {
                event.preventDefault();
                var target = $(this).attr('href'),
                    tabs = $(this).parents('.tabs'),
                    buttons = tabs.find('a'),
                    item = tabs.parents('.tabbed-content').find('.item');
                buttons.removeClass('active');
                item.removeClass('active');
                $(this).addClass('active');
                $(target).addClass('active');
            });
        } else {
            $('.item').on('click', function () {
                var container = $(this).parents('.tabbed-content'),
                    currId = $(this).attr('id'),
                    items = container.find('.item');
                container.find('.tabs a').removeClass('active');
                items.removeClass('active');
                $(this).addClass('active');
                container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
            });
        }
    }
</script>