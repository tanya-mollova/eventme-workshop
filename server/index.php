<?php
/**
 * This example shows sending a message using a local sendmail binary.
 */

require 'phpmailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;
// Set PHPMailer to use the sendmail transport
$mail->isSendmail();
$mail->IsHTML(true);

$mail_reservation_status = "";
$mail_subscribe_status = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if (isset($_POST['reservation'])) {
    // Set your information here
    $title      = 'Мейл';
    $mail_from    = $_POST['email'];
    $mail_replay  = $_POST['email'];
    $mail_to      = 'zeropartners2018@gmail.com';
    $subject    = 'Резервация';
    $phone     = $_POST['phone'];
    $people      = $_POST['people'];
    $date    = $_POST['date'];
    $time    = $_POST['time'];
    $mail_body    = $phone .'<br/>'.
              $people.'<br/>'.
              $date.'<br/>'.
              $time.'<br/>';

    //Set who the message is to be sent from
    $mail->setFrom($mail_from, $title);
    //Set an alternative reply-to address
    $mail->addReplyTo($mail_replay, $title);
    //Set who the message is to be sent to
    $mail->addAddress($mail_to, 'John Doe');
    //Set the subject line
    $mail->Subject = $subject;
    //Set the body
    $mail->Body = $mail_body;
    if ( !$mail->send() ) {
      $mail_reservation_status = "<br><p class='text-warning'>Mailer Error: " . $mail->ErrorInfo.'</p>';
    } else {
      $mail_reservation_status = "<br><p class='text-success'>Mail Sent Successfully. Thank you!</p>";
    }
  }
  if (isset($_POST['mail-subscribe'])) {
    $title      = 'MailScrible From Website';
    $mail_subscribe  = $_POST['mail-subscribe'];
    $mail_to      = 'yourmail@gmail.com';
    $subject    = 'Mail Subscribe from Website';
    $mail_body    = 'Email Subscribe from website: ' . $mail_subscribe .'<br/>';
    //Set who the message is to be sent to
    $mail->addAddress($mail_to, 'John Doe');
    //Set the subject line
    $mail->Subject = $subject;
    //Set the body
    $mail->Body = $mail_body;
    if ( !$mail->send() ) {
      $mail_subscribe_status = "<br><p class='text-warning'>Mailer Error: " . $mail->ErrorInfo .' </p>';
    } else {
      $mail_subscribe_status = "<br><p class='text-success'>Mail Sent Successfully. Thank you!</p>";
    }
  }
}
?>
<!DOCTYPE html>
<html lang="en" itemscope itemtype="http://schema.org/WebPage">
<?php include "components/head_scripts.php" ?>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NGHKMNT"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div id="pagewrap" class="pagewrap">
    <div id="html-content" class="wrapper-content">
        <?php include "components/header.php" ?>
        <div class="owl-carousel">
<!--                <div class="item">-->
<!--                    <div class="home-banner-1-new item-img"></div>-->
<!--                    --><?php //include "components/main-text-1.php" ?>
<!--                </div>-->
                <div class="item">
                    <div class="home-banner-2 item-img"></div>
                    <?php include "components/main-text.php" ?>
                </div>
                <div class="item">
                    <div class="home-banner-3 item-img"></div>
                    <?php include "components/main-text.php" ?>
                </div>
                <div class="item">
                    <div class="home-banner-4 item-img"></div>
                    <?php include "components/main-text.php" ?>
                </div>
        </div>

            <div class="page-content-wrapper">
                <section class="about-us-session padding-top-100 padding-bottom-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 colsm-12"><img src="assets/images/pages/home1.jpg" alt="" class="img img-responsive wow zoomIn"></div>
                            <div class="col-md-6 col-sm-12">
                                <div class="swin-sc swin-sc-title style-4 margin-bottom-20 margin-top-50">
                                    <p class="top-title"><span>За нас</span></p>
                                    <h3 class="title">Нашата история</h3>
                                </div>
                                <p class="des margin-bottom-20 text-center">Съчетанието от изискано и професионално обслужване на виско ниво, модерен интериор и уникална по своему кухня са елементите в ZERO BAR & GRILL, които със сигурност ни карат да бъдем горди членове на това кулинарно семейство.</p>
                                <div class="swin-btn-wrap center"><a href="about.php" class="swin-btn center form-submit btn-transparent"> <span>Научете повече</span></a></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="product-sesction-03-1 padding-top-100 padding-bottom-100"><img src="assets/images/product/product-decorate.jpg" alt="" class="img-responsive img-decorate">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-4"></div>
                            <div class="col-lg-6 col-md-8">
                                <div class="swin-sc swin-sc-title text-left light">
                                    <p class="top-title"><span>Препоръчано от нас</span></p>
                                    <h3 class="title">Специални предложения</h3>
                                </div>





                                Паеля с морски дарове
                                Шоколадов десерт Зеро

                                <div class="swin-sc swin-sc-product products-01 style-04 light swin-vetical-slider">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div data-height="200" class="products nav-slider">
                                                <div class="item product-01">
                                                    <div class="item-left"><img src="assets/images/product/gashi-drob.jpg" alt="" class="img img-responsive">
                                                        <div class="content-wrapper"><a class="title">Гъши дроб с хрупкава гофрета, гламбирани плодове, боровинков сос и перли от нар</a>
                                                            <div class="dot">.....................................................................</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item product-01">
                                                    <div class="item-left"><img src="assets/images/product/salata-zero.jpg" alt="" class="img img-responsive">
                                                        <div class="content-wrapper"><a class="title">Салата Зеро с микс салати, авокадо, чери домати, печени ядки и пармезан</a>
                                                            <div class="dot">.....................................................................</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item product-01">
                                                    <div class="item-left"><img src="assets/images/product/oktopod.jpg" alt="" class="img img-responsive">
                                                        <div class="content-wrapper"><a class="title">Октопод на плоча върху прясна паста с песто, чери и пармезан</a>
                                                            <div class="dot">.....................................................................</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item product-01">
                                                    <div class="item-left"><img src="assets/images/product/teleshko-karpacho.jpg" alt="" class="img img-responsive">
                                                        <div class="content-wrapper"><a class="title">Телешко карпачо с аромат на трюфел, бейби спанак, пармезан и балсамова редукция</a>
                                                            <div class="dot">.....................................................................</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item product-01">
                                                    <div class="item-left"><img src="assets/images/product/pateshko-magre.jpg" alt="" class="img img-responsive">
                                                        <div class="content-wrapper"><a class="title">Патешко магре на плча върху пюре от  печена тиква и сос от вишни</a>
                                                            <div class="dot">.....................................................................</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item product-01">
                                                    <div class="item-left"><img src="assets/images/product/stek-jaltoperest-ton.jpg" alt="" class="img img-responsive">
                                                        <div class="content-wrapper"><a class="title">Стек от жълтоперест тон на плоча с авокадо мус и чери домати</a>
                                                            <div class="dot">.....................................................................</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="product-sesction-01 padding-bottom-100 padding-top-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="swin-sc swin-sc-title">
                                    <p class="top-title"><span>Нашето меню</span></p>
                                    <h3 class="title">Кулинарни изкушения</h3>
                                </div>
                                <div class="swin-sc swin-sc-product products-01 style-02 woocommerce">
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div data-slide-toshow="5" class="cat-wrapper-02 main-slider col-md-8">
                                            <div class="item">
                                                <div class="cat-icons"><i class="icons swin-icon-pasta"></i>
                                                    <h5 class="cat-title">Обяд</h5>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="cat-icons"><i class="icons swin-icon-fish"></i>
                                                    <h5 class="cat-title">Вечеря</h5>
                                                </div>
                                            </div>
                                            <!-- <div class="item">
                                                <div class="cat-icons"><i class="icons swin-icon-meat"></i></div>
                                                <h5 class="cat-title">Суши</h5>
                                            </div> -->
                                            <div class="item">
                                                <div class="cat-icons"><i class="icons swin-icon-ice-cream"></i></div>
                                                <h5 class="cat-title">Десерти</h5>
                                            </div>
                                            <div class="item">
                                                <div class="cat-icons"><i class="icons swin-icon-dinner"></i></div>
                                                <h5 class="cat-title">Напитки</h5>
                                            </div>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <div class="row">
                                        <div class="nav-slider">
                                            <div class="tab-content">
                                                <div class="col-md-5 col-sm-12">
                                                    <div class="cat-wrapper">
                                                        <div class="item"><img src="assets/images/product/lunch.jpg" alt="" class="img img-responsive img-full"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-12">
                                                    <div class="products">
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Салата розов домат, печен пипер, краве сирене и маслинова паста</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Кюфтенца от киноа с топени сирена и млечен сос</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Ризото с пиле, тиквичка и сушен домат</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title"> Медени телешки кюфтета на BBQ с микс салати
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title"> Филе лаврак на BBQ с бейби спанак и чери домати
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-content">
                                                <div class="col-md-5 col-sm-12">
                                                    <div class="cat-wrapper">
                                                        <div class="item"><img src="assets/images/product/dinner.jpg" alt="" class="img img-responsive img-full"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-12">
                                                    <div class="products">
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Салата бурата с чери домати, прошуто крудо и сушен домат
</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Телешко карпачо с аромат на трюфел
</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Филе от сьомга със сотиран спанак и лимонов сос
</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Датски котлет Ландрас</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Ръмп стек от млечно телешко
</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="tab-content">
                                                <div class="col-md-5 col-sm-12">
                                                    <div class="cat-wrapper">
                                                        <div class="item"><img src="assets/images/product/sushi.jpg" alt="" class="img img-responsive img-full"></div>
                                                    </div>
                                                </div>

                                                <div class="col-md-7 col-sm-12">
                                                    <div class="products">
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Нигири скарида</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Урамаки краб</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Парадайс рол</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Сашими риба тон</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Зеро комбо</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <div class="tab-content">
                                                <div class="col-md-5 col-sm-12">
                                                    <div class="cat-wrapper">
                                                        <div class="item"><img src="assets/images/product/dessert.jpg" alt="" class="img img-responsive img-full"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-12">
                                                    <div class="products">
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Домашна бисквитена торта с нутела и маскарпоне</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Печен тиквен чийзкейк</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Лава кейк с течен център и ванилов сладолед
</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Панджиало с крем маскарпоне и пистачио</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Дубайски шоколадов десерт с кадаиф</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-content">
                                                <div class="col-md-5 col-sm-12">
                                                    <div class="cat-wrapper">
                                                        <div class="item"><img src="assets/images/product/drinks.jpg" alt="" class="img img-responsive img-full"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-sm-12">
                                                    <div class="products">
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Маргарита
</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Аперол шприц</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Ягодово мохито</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Домашна лимонада от бъз</h5>
                                                            </div>
                                                        </div>
                                                        <div class="item product-01">
                                                            <div class="item-left">
                                                                <h5 class="title">Сангрия</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section data-bottom-top="background-position: 50% 50px;" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -150px;" class="testimonial-section-01 padding-top-100 padding-bottom-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="swin-sc swin-sc-title">
                                    <p class="top-title"><span>Мнения за нас</span></p>
                                    <h3 class="title white-color">Какво казват нашите клиенти</h3>
                                </div>
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <div class="swin-sc swin-sc-testimonial style-1">
                                            <div class="main-slider flexslider">
                                                <div class="slides">
                                                    <div class="testi-item item"><i class="testi-icon fa fa-quote-left"></i>
                                                        <div class="testi-content">
                                                            <p>Благодарим ви, че тази година отново направихте нашето бизнес парти незабравимо. Кетъринга, обслужването и обстановката бяха невероятни!</p>
                                                        </div>
                                                    </div>
                                                    <div class="testi-item item"><i class="testi-icon fa fa-quote-left"></i>
                                                        <div class="testi-content">
                                                            <p>Благодарим ви, че ни помогнахте да отпразнуваме 60-ия рожден ден на татко снощи. Добрите семейни спомени ще останат завинаги. Всички се забавлявахме много, персоналът беше отличен, а храната вкусна.
                                                                Наздраве!</p>
                                                        </div>
                                                    </div>
                                                    <div class="testi-item item"><i class="testi-icon fa fa-quote-left"></i>
                                                        <div class="testi-content">
                                                            <p>Вчера бях на една от най-добрите вечери в моя живот. Обстановката на ресторанта ми хареса много, а кухнята  беше просто безупречна.</p>
                                                        </div>
                                                    </div>
                                                    <div class="testi-item item"><i class="testi-icon fa fa-quote-left"></i>
                                                        <div class="testi-content">
                                                            <p>Изключително впечатлени сме от вашия ресторант и нямаме търпение да покажем ZERO BAR & GRILL на приятелите ни, за да можем да споделим новото си любимо място с тях.
                                                                Всичко беше просто превъзходно!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-width="150" class="nav-slider">
                                                <ul class="slides list-inline">
                                                    <li class="swin-transition"><a href="javascript:void(0)" class="testimonial-nav-item"><img src="assets/images/testi/testi-1.jpg" alt="fooday" class="img img-responsive swin-transition"></a></li>
                                                    <li class="swin-transition"><a href="javascript:void(0)" class="testimonial-nav-item"><img src="assets/images/testi/testi-2.jpg" alt="fooday" class="img img-responsive swin-transition"></a></li>
                                                    <li class="swin-transition"><a href="javascript:void(0)" class="testimonial-nav-item"><img src="assets/images/testi/testi-3.jpg" alt="fooday" class="img img-responsive swin-transition"></a></li>
                                                    <li class="swin-transition"><a href="javascript:void(0)" class="testimonial-nav-item"><img src="assets/images/testi/testi-3.jpg" alt="fooday" class="img img-responsive swin-transition"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="reservation-section-02 padding-top-100 padding-bottom-100">
                    <div class="container"><img src="assets/images/background/home2-img-deco.png" alt="" class="img-deco img-responsive">
                        <div class="row">
                            <div class="col-md-6 left-wrapper">
                                <div class="form-dark-wrapper">
                                    <div class="swin-sc swin-sc-title style-3 light">
                                        <p class="title"><span>Направете резервация</span></p>
                                        <p class="subtitle">Можете да се свържете с нас директно на телефон: <span class="text-default"> +359 88 930 0888</span></p>
                                    </div>
                                    <div class="swin-sc swin-sc-contact-form dark mtl">
                                        <form>
                                            <div class="form-group">
                                                <div class="swin-btn-wrap center"><a href="tel:+359 88 930 0888" target="_blank" id="for_orders" class="swin-btn center form-submit"> <span>Резервирай сега</span></a></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="video-wrapper equal-height deco-abs">
                        <div class="swin-sc swin-sc-video">
                            <div class="play-wrap"><a href="https://www.youtube.com/watch?v=cDXIKrF73l4" class="play-btn swipebox"><i class="play-icon fa fa-play"></i></a></div>
                        </div>
                    </div>
                </section>
                <section class="service-section-02 padding-top-100 padding-bottom-100">
                    <div class="container">
                        <div class="swin-sc swin-sc-title">
                            <p class="top-title"><span>Какво предлагаме</span></p>
                            <h3 class="title">Винаги най-доброто за вас</h3>
                        </div>
                        <div class="swin-sc swin-sc-iconbox">
                            <div class="row">
                                <div class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="item icon-box-02 wow fadeInUpShort">
                                        <div class="wrapper-icon"><i class="icons swin-icon-dish"></i><span class="number">1</span></div>
                                        <h4 class="title">Резервации</h4>
                                        <div class="description">Направете резервация за вашата специална вечер.</div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-xs-12">
                                    <div data-wow-delay="0.5s" class="item icon-box-02 wow fadeInUpShort">
                                        <div class="wrapper-icon"><i class="icons swin-icon-dinner-2"></i><span class="number">2</span></div>
                                        <h4 class="title">Частни партита</h4>
                                        <div class="description">Точното място за вашето частно или фирмено парти.</div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-xs-12">
                                    <div data-wow-delay="1s" class="item icon-box-02 wow fadeInUpShort">
                                        <div class="wrapper-icon"><i class="icons swin-icon-browser"></i><span class="number">3</span></div>
                                        <h4 class="title">Събития</h4>
                                        <div class="description">Седмични гост-изпълнителни за добро настроение</div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-xs-12">
                                    <div data-wow-delay="1.5s" class="item icon-box-02 wow fadeInUpShort">
                                        <div class="wrapper-icon"><i class="icons swin-icon-ice-cream"></i><span class="number">4</span></div>
                                        <h4 class="title">Детски кът</h4>
                                        <div class="description">Ние ще забавляваме вашето малко дете.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="gallery-section-01 padding-top-50">
                    <div class="swin-sc swin-sc-title">
                        <p class="top-title"><span>Галерия</span></p>
                        <h3 class="title white-color line-height-20">Докоснете се до <br>ZERO BAR & GRILL</h3>
                    </div>
                    <div class="swin-sc swin-sc-isotope">
                        <div class="grid">
                            <div class="grid-sizer col-sm-1"></div>
                            <div class="grid-item col-sm-3 grid-item-h2">
                                <div class="grid-wrap-item"><a href="#" class="gallery-title title"></a><a href="assets/images/gallery/gallery-11.jpg" data-lightbox="image" class="view-lightbox swipebox">
                                        <i class="fa fa-search-plus"></i></a>
                                    <div class="img-wrap"><img src="assets/images/gallery/gallery-11.jpg" alt="" class="img img-responsive"></div>
                                </div>
                            </div>
                            <div class="grid-item col-sm-4 grid-item-h1">
                                <div class="grid-wrap-item"><a href="#" class="gallery-title title"></a>
                                    <a href="assets/images/gallery/gallery-22.jpg" data-lightbox="image" class="view-lightbox swipebox">
                                        <i class="fa fa-search-plus"></i>
                                    </a>
                                    <div class="img-wrap"><img src="assets/images/gallery/gallery-22.jpg" alt="" class="img img-responsive"></div>
                                </div>
                            </div>
                            <div class="grid-item col-sm-2 grid-item-h1">
                                <div class="grid-wrap-item"><a href="#" class="gallery-title title"></a><a href="assets/images/gallery/gallery-44.jpg" data-lightbox="image" class="view-lightbox swipebox"><i class="fa fa-search-plus"></i></a>
                                    <div class="img-wrap"><img src="assets/images/gallery/gallery-44.jpg" alt="" class="img img-responsive"></div>
                                </div>
                            </div>
                            <div class="grid-item col-sm-3 grid-item-h2">
                                <div class="grid-wrap-item"><a href="#" class="gallery-title title"></a><a href="assets/images/gallery/gallery-33.jpg" data-lightbox="image" class="view-lightbox swipebox"><i class="fa fa-search-plus"></i></a>
                                    <div class="img-wrap"><img src="assets/images/gallery/gallery-33.jpg" alt="" class="img img-responsive"></div>
                                </div>
                            </div>
                            <div class="grid-item col-sm-2 grid-item-h1">
                                <div class="grid-wrap-item"><a href="#" class="gallery-title title"></a><a href="assets/images/gallery/gallery-55.jpg" data-lightbox="image" class="view-lightbox swipebox"><i class="fa fa-search-plus"></i></a>
                                    <div class="img-wrap"><img src="assets/images/gallery/gallery-55.jpg" alt="" class="img img-responsive"></div>
                                </div>
                            </div>
                            <div class="grid-item col-sm-4 grid-item-h1">
                                <div class="grid-wrap-item"><a href="#" class="gallery-title title"></a><a href="assets/images/gallery/gallery-66.jpg" data-lightbox="image" class="view-lightbox swipebox"><i class="fa fa-search-plus"></i></a>
                                    <div class="img-wrap"><img src="assets/images/gallery/gallery-66.jpg" alt="" class="img img-responsive"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <?php include "components/footer.php" ?>
    </div>
<?php include "components/loader.php" ?>
<?php include "components/more_scripts.php" ?>
<?php include "components/owl_scripts.php" ?>

<!-- jQuery-->
<script src="assets/vendors/jquery-1.10.2.min.js"></script>
<script src="assets/owlcarousel/owl.carousel.js"></script>

<!-- Vendors-->
<script src="assets/vendors/flexslider/jquery.flexslider-min.js"></script>
<script src="assets/vendors/swipebox/js/jquery.swipebox.min.js"></script>
<script src="assets/vendors/slick/slick.min.js"></script>
<script src="assets/vendors/isotope/isotope.pkgd.min.js"></script>
<script src="assets/vendors/jquery-countTo/jquery.countTo.min.js"></script>
<script src="assets/vendors/jquery-appear/jquery.appear.min.js"></script>
<script src="assets/vendors/parallax/parallax.min.js"></script>
<script src="assets/vendors/gmaps/gmaps.min.js"></script>
<script src="assets/vendors/audiojs/audio.min.js"></script>
<script src="assets/vendors/vide/jquery.vide.min.js"></script>
<script src="assets/vendors/pageloading/js/svgLoader.min.js"></script>
<script src="assets/vendors/pageloading/js/classie.min.js"></script>
<script src="assets/vendors/pageloading/sidebartransition/js/sidebarEffects.min.js"></script>
<script src="assets/vendors/nicescroll/jquery.nicescroll.min.js"></script>
<script src="assets/vendors/wowjs/wow.min.js"></script>
<script src="assets/vendors/skrollr.min.js"></script>
<script src="assets/vendors/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>
<!-- Own script-->
<script src="assets/js/layout.js"></script>
<script src="assets/js/elements.js"></script>
<script src="assets/js/widget.js"></script>
<!-- Include js plugin -->
<script>
  $(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1,
      loop: true,
      nav:false,
      navText: [
        "<span><i class='fa fa-3x fa-chevron-left'></i></span>",
        "<span><i class='fa fa-3x fa-chevron-right'></i></span>"
      ],
      dots: false,
      lazyLoad:true,
      lazyLoadEager: 1,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplaySpeed: 2300,
    });
  })
</script>

</body>
</html>


<style>
    #for_orders:focus {
        color: white;
    }
    #for_orders:hover {
        color: white;
    }
</style>