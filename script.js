function calcular(){
    let qtdDados = $("#qtdDados").val();
    let qtdFaces = $("#qtdFaces").val();
    let maior = 0;
    let soma = 0;
    let resultado;

    $("tbody").text("");
    for(let i = 1; i <= qtdDados; i++){
        resultado = Math.floor(Math.random() * qtdFaces + 1); 
        soma += resultado;
        if(maior < resultado){
            maior = resultado;
        }
        $("tbody").append(`
        <tr>
            <td>${i}</td>
            <td>${resultado}</td>
        </tr>
        `);
    }

    $(".row").attr("hidden",false);
    $("#soma").text(soma);
    $("#maior").text(maior);
}