$(document).ready(function() {
    $(".phone__input").mask("+7(999) 999-99-99");
});

$('form.ajax').submit(function() {
    var $this = $(this),
        data = $this.serialize(),
        action = $this.attr('action'),
        btn = $this.find('[type="submit"]')
    btn.attr('disabled', 'disabled')
    var submit = $.ajax({
        url: action,
        data: data,
        success: function(json) {
            var answer = $.parseJSON(json)
            if (answer.command == 'true') {
                Swal.fire({
                    title: 'Спасибо! Ожидайте звонка. <br>В течении 5 минут я свяжусь с Вами, <br>а пока можете подписаться на нашу группу ВКонтакте',
                    html: answer.message,
                    showCancelButton: true,
                    cancelButtonText: '+',
                    showConfirmButton: false,
                    showLoaderOnConfirm: true,
                    preConfirm: () => {},
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ошибка',
                    text: answer.message,
                    showCancelButton: true,
                    cancelButtonText: '+',
                    showConfirmButton: false,
                    showLoaderOnConfirm: true,
                    preConfirm: () => {},
                })
                btn.removeAttr('disabled')
            }
        },
    })

    return false
});

$('.portfolio__list').owlCarousel({
    loop:true,
    margin:19,
    nav:false,
    navText: ['<span class="arrow-left"><img src="images/arrow-left.svg" /></span>','<span class="arrow-right"><img src="images/arrow-right.svg" /></span>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.product-slider').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    navText: ['<span class="arrow-left"><img src="images/arrow-left.svg" /></span>','<span class="arrow-right"><img src="images/arrow-right.svg" /></span>'],
    items:1
})