<script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous" defer></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"
    defer></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"
    defer></script>
<script src="js/owl.carousel.min.js" defer></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Now it's safe to use jQuery ($)

        $('.c-d-item').hover(function (e) {
            e.preventDefault();
            $('.c-d-item').removeClass('active'); // Simplified: no .each() needed here
            $(this).addClass('active');
        });

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
                // Use .off() before .on() to prevent multiple event bindings during resize
                tabs.find('a').off('click').on('click', function (event) {
                    event.preventDefault();
                    var target = $(this).attr('href'),
                        container = $(this).parents('.tabbed-content');

                    container.find('.tabs a').removeClass('active');
                    container.find('.item').removeClass('active');

                    $(this).addClass('active');
                    $(target).addClass('active');
                });
            } else {
                $('.item').off('click').on('click', function () {
                    var container = $(this).parents('.tabbed-content'),
                        currId = $(this).attr('id');

                    container.find('.tabs a').removeClass('active');
                    container.find('.item').removeClass('active');

                    $(this).addClass('active');
                    container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
                });
            }
        }
    });
</script>