<?
//function pre($var)
//{
//    echo "<pre>";
//    print_r($var);
//    echo "</pre>";
//}
$call = trim(strip_tags($_REQUEST['call']));
if (!empty($call)) {
    $mail = "abramov.ganzo@yandex.ru"; //Почта куда отправляем
    $subject = "Форма обратной связи"; // Тема письма
    $text = "
        На сайте оставили заявку на обратный звонок
        Телефон: $call
    "; // Текст письма
    if (mail($mail, $subject, $text)) {
        echo json_encode(array(
                             'command' => 'true',
                             'message' => '<a href="https://vk.com/akiolla" target="_blank"><img src="http://zoo.dmgug.ru/wp-content/uploads/2020/12/form-vk.png"></a>',
                         ));
    } else {
        echo json_encode(array(
                             'command' => 'false',
                             'message' => 'Отправка не удалась, попробуйте позже!',
                         ));
    }
}else{
    echo json_encode(array(
                         'command' => 'false',
                         'message' => 'Не заполнены обязательные поля!',
                     ));
}