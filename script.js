$(document).ready(function() {
    var envelope = $('#amor');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    
    // Função para abrir o envelope
    function open() {
        console.log('Abrindo envelope');
        if (!envelope.hasClass('open')) {
            envelope.addClass('open').removeClass('close');
        }
    }
    
    // Função para fechar o envelope
    function close() {
        console.log('Fechando envelope');
        if (!envelope.hasClass('close')) {
            envelope.addClass('close').removeClass('open');
        }
    }
    
    // Atribui os eventos aos botões
    btn_open.on('click', function() {
        console.log('Botão Open clicado');
        open();
    });
    
    btn_reset.on('click', function() {
        console.log('Botão Reset clicado');
        close();
    });

    
});

$(document).ready(function() {
    setTimeout(function() {
        $('.reset').addClass('show-button');
    }, 500); // 2000 milissegundos = 2 segundos
}); 