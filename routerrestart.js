

ajax({ url: 'http://192.168.1.1/' }, function (a) {
    var $ = document.getElementById;
    simply.title("test headline!");

    function fill(a) {
        for (var k in a) {
            $('[name="' + k + '"]').val(a[k]);
        }
    }

    array_example = { "password": "0411183942" };
    fill(array_example);

    document.forms[0].checkform();
    //document.getElementById('elementID').click();
    
});

/*

*/