function adicionarNumero(numero){
    operaçaoAtual+=numero;
    atualizarTela(operaçaoAtual);
}

function adicionarOperaçao(operaçao){
   if(operaçaoAtual!==''){
    operador=operaçao;
    operaçaoAtual+=operaçao
    atualizarTela(operaçaoAtual);
   }
}

function calcular()
{
{
    try{
        resultado=eval(operaçaoAtual);
        atualizarTela(resultado);
        operaçaoAtual=resultado.toString();
    } catch(e) {
        atualizarTela('erro');
        operaçaoAtual='';
    }
    }
}

function limpar()
{
    operaçaoAtual=''
    operador=''
    resultado=0;
    atualizarTela(0);
}

function atualizarTela(valor)
{
    document.getElementById('resultado').innerHTML=valor;
}
