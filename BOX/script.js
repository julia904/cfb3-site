function submitForm(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var data = document.getElementById('data').value;
    var texto = "Olá, meu nome é " + nome + ". Quero agendar uma aula. Telefone: " + telefone + (data ? ". Data desejada: " + data : "");
    var url = "https://wa.me/5514997709326?text=" + encodeURIComponent(texto);
    window.open(url, "_blank");
}
