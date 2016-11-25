ajax({ url: 'http://192.168.1.1/' }, function (a) {
    var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
    simply.title(headline);
});

/*
function fill(a) {
    for (var k in a) {
        $('[name="' + k + '"]').val(a[k]);
    }
}

array_example = { "password": "0411183942" };

fill(array_example);
*/