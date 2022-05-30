// O que é TS? 

// É um superset do JavaScript: Podendo adicionar novas features
// ao JavaScript. Basicamente => tipagem estática.

// Ele compila tudo para JavaScript e transforma o código TS para JS.

// Permite adoção gradual (arquivos .ts convivem com .js).



// É linguagem ou não é? - 

// Depende de pessoa pra pessoa, tem gente
// que define como linguagem e tem pessoas que não. A Microsoft 
// entende que sim, mas tem muitas pessoas que ainda não concordam.



// Por que usar TypeScript? 

// Ele evite resultado inesperados.
// exemplo:

const a = 1;
const b = 2;

function sum(a, b){
    return a + b
}

// Aqui temos uma soma de A + B
// porém, o JS pode entender que seja uma concatenação e não uma soma
// e assim daria um valor errado, invés de somar, iria juntar A e B.

sum (1, 2) // 3
sum ('1', '2' ) // 12! errado

// Pelo JS ser dinâmico, ele pode receber o que quiser, no TS, 
// dizemos o que é aquela variável e a chance de dar erro é muito menor.

// Ele nos avisa se estivermos fazendo algo de errado.

console.log( 4 / [] ) // errado;

// a "linha" vermelha abaixo das chaves (array), indicam que está faltando
// algo, ou que foi usado de forma errada.

let message: string = 'hello world'

// Funciona como uma espécie de documentação.

type Platform = 'Windows' | 'Mac OS' | 'Linux'
type Feature = 'Single Player' | 'Multiplayer' | 'Co-op'

interface GameDetails{
    id: string
    title: string
    description: string
    platforms: Platform[]
    features: Feature[]
}



// Desvantagens do TypeScript:

// Necessita ser compilado;
// Precisa de um aprendizado inicial dos tipos e boas práticas;
// Os erros nem sempre são claros ou então muito grandes;
// 