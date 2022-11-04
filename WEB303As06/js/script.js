$(document).ready(function(){
    $('.info-accordion').on('click','.accordion-control', function(e){
        if ($('.accordion-panel').show()){
            $('.accordion-panel').hide();
        }
        e.preventDefault();
        $(this)
            .next('.accordion-panel')
            .not(':animated')
            .slideToggle("fast");
    });
    $('.tab-list1').each(function(){
        let $this = $(this);
        let $tab = $this.find('li.active1');
        let $link = $tab.find('a');
        let $panel = $($link.attr('href'));

        $this.on('click', '.tab-control1', function(e){
            e.preventDefault();
            let $link = $(this);
            let id = this.hash;

            if (id && !$link.parent().is('.active1')) {
                $panel.removeClass('active1');
                $tab.removeClass('active1');
                $panel = $(id).addClass('active1');
                $tab = $link.parent().addClass('active1');
            }
        });
    });
    $('.tab-list2').each(function(){
        let $this = $(this);
        let $tab = $this.find('li.active2');
        let $link = $tab.find('a');
        let $panel = $($link.attr('href'));

        $this.on('click', '.tab-control2', function(e){
            e.preventDefault();
            let $link = $(this);
            let id = this.hash;

            if (id && !$link.parent().is('.active2')) {
                $panel.removeClass('active2');
                $tab.removeClass('active2');
                $panel = $(id).addClass('active2');
                $tab = $link.parent().addClass('active2');
            }
        });
    });
});