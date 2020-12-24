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