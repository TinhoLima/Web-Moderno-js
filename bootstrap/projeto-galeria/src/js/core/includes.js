// import $ from 'jquery'

// function loadIncludes(parent) {
//     // se o parent não for encontrado, busque no corpo todo.
//     if (!parent) parent = 'body'
//     $(parent).find('[wm-include]').each(function(i, e) {
//         const url = $(e).attr('wm-include')
//         $.ajax({
//             url,
//             success(data) {
//                 $(e).html(data)
//                 $(e).removeAttr('wm-include')

//                 loadIncludes(e)
//             }
//         })
//     })
// }

// loadIncludes()

import $ from 'jquery';

function loadIncludes(parent) {
  // Se o parent não for encontrado, busque em todo o corpo.
  if (!parent) parent = 'body';
  $(parent).find('[wm-include]').each(function (i, e) {
    const url = $(e).attr('wm-include');
    $.ajax({
      url,
      success: function (data) {
        $(e).html(data);
        $(e).removeAttr('wm-include');

        loadIncludes(e);
      },
      error: function (error) {
        console.log('Ocorreu um erro ao carregar o arquivo:', error);
      }
    });
  });
}

$(document).ready(function () {
  loadIncludes();
});