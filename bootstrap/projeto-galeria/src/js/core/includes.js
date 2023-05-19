import $ from 'jquery'

function loadIncludes(parents) {
    // se o parent não for encontrado, busque no corpo todo.
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadIncludes(e)
            }
        })
    })
}

loadIncludes()