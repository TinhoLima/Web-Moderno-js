import $ from 'jquery'

function loadIncludes(parents) {
    // se o parent não for encontrado, busque no corpo todo.
    if (!parent) parent = 'body'
    $(parent).find('[teste]').each(function(i, e) {
        const url = $(e).attr('teste')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('teste')

                loadIncludes(e)
            }
        })
    })
}

loadIncludes()