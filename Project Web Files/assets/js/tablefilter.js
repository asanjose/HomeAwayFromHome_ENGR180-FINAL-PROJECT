$(document).ready(function () {
        $('select.ddlFilterTableRow').bind('change', function () {
            $('select.ddlFilterTableRow').attr('disabled', 'disabled');
           $('#tableRegisterKids').find('.Row').hide();
            var critriaAttribute = '';

            $('select.ddlFilterTableRow').each(function () {
                if ($(this).val() != '0') {
                    critriaAttribute += '[data-' + $(this).data('attribute') + '="' + $(this).val() + '"]';
                }
            });

            $('#tableRegisterKids').find('.Row' + critriaAttribute).show();
            $('#headerCount').html($('table#tableRegisterKids tr.Row:visible').length + ' Registered Kids');
            $('select.ddlFilterTableRow').removeAttr('disabled');
        });
    });
