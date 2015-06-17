var Validator = {

  isValidEmail:function(email) {
    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
  },

  isMatch:function(target, match) {
    return ($(target).val() === $(match).val());
  }

}

function showMessage(text, type){
  // bootstrap alert
  $('#message').html('<div class="alert alert-'+type+'">'+text+'</div>');
}

function clearMessage(){
  $('#message').html('');
}

$(function(){  
  // the code in here will run when the page is ready
  // this will output the url in a span tag
  $('#location').text(window.location);
  // check email
  $('[name=email]').change(function(){
    if(Validator.isValidEmail($(event.target).val())) {
      // valid email
      $(event.target).parent().removeClass('has-error').addClass('has-success');
      clearMessage();
    } else {
      // invalid email
      $(event.target).parent().removeClass('has-success').addClass('has-error');
    }
  });

  // check if email2 matches email
  $('[name=email2]').change(function(){
    if(Validator.isMatch('[name=email]', '[name=email2]')){
      // it's a match
      $(event.target).parent().removeClass('has-error').addClass('has-success');
      clearMessage();
    } else {
      // it's not a match
      $(event.target).parent().removeClass('has-success').addClass('has-error');
      showMessage('Your emails must match.', 'danger');
    }
  });

  // we won't submit 
  $('form').submit(function(){
    if(!Validator.isValidEmail($('[name=email]').val())) return false;
    if(!Validator.isMatch('[name=email]', '[name=email2]')) return false;
    if(!Validator.isValidUsername($('[name=username]').val())) return false;
    return true;
  });


});