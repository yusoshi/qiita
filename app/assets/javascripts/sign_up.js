$(function() {
  // メールアドレスでサインアップできるフォームを作成
  $('.upper-content__right__options__mail-address__link').on('click', function(e) {
    e.preventDefault();

    $('.upper-content__right__login-form').remove();
    $('.upper-content__rignt__options').remove();

    var upperContentRight = $('.upper-content__right');

    var form = $("<form class='new_user' id='new_user' action='/users' accept-charset='UTF-8' method='post'>");
    form.append("<input name='utf-8' type='hidden' value='✓'")
    form.append("<div class='form-group'>" + "<input placeholder='ユーザ名' class='form-control' type='text' name='user[name]' id='user_name'>");
    form.append("<div class='form-group'>" + "<input placeholder='メールアドレス' class='form-control' type='text' name='user[email]' id='user_email'>");
    form.append("<div class='form-group'>" + "<input placeholder='パスワード' class='form-control' type='password' name='user[password]' id='user_password'>");
    form.append("<div class='terms-of-service-caution'>" + "<a href=''>利用規約</a>" + "に同意の上、「利用規約に同意して登録」ボタンを押してください。");

    var textRight = $("<div class='text-right'>");
    textRight.append("<div class='btn btn-link cancel' data-turbolinks='false'>キャンセル</div>");
    textRight.append("<input type='submit' name='commit' value='利用規約に同意して登録' class='btn btn-primary'>");

    form.append(textRight);

    upperContentRight.prepend(form);
  })

  // キャンセルされたら戻す
  $(document).on('click','.cancel', function() {
    location.reload();
  })

  // メールアドレスでのサインアップを非同期通信で行う
  // $('new_user').on('submit', function(e) {
  //   e.preventDefault();

  //   $.ajax({
  //     type: 'POST',
  //     // 続き頼む
  //   })
  // })
})
