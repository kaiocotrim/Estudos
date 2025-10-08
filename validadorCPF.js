function validarCpf(cpf) {

    // limpar CPF (Remover Pontos e traço)
    cpf = cpf.replace(/\D/g, '');

    // tamanho 
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // calcular o primeiro Dig

    let soma = 0;

    for(let i = 0 ; i < 9 ; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }

    let resto = soma % 11;

    let digito1 = resto < 2 ? 0 : 11 - resto;

    // calcular o segundo Dig

    soma = 0;

    for(let i = 0 ; i < 10 ; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }

    resto = soma % 11;

    let digito2 = resto < 2 ? 0 : 11 - resto;

    // Comparar os dígitos calculados com os do CPF

      return digito1 === parseInt(cpf[9]) && digito2 === parseInt(cpf[10]);

}


console.log(validarCpf("544.512.588-20"))