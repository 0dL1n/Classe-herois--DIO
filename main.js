class herois {
    //construtor
    constructor(nome,idade,classe){
        this.classe = classe;
        this.nome = nome;
        this.idade = idade;
    }

    //metodo atacar
    atacar(){
        let classe = this.classe, ataque;
        switch(this.classe){
            case 'mago':
                ataque = 'magia';
                console.log(`o ${classe} atacou usando ${ataque}`)  
                break;
            case 'guerreiro':
                ataque = 'espada';
                console.log(`o ${classe} atacou usando ${ataque}`)
                break;
            case 'monge':
                ataque = 'artes marciais';
                console.log(`o ${classe} atacou usando ${ataque}`)
                break;
            case 'ninja':
                ataque = 'shuriken';
                console.log(`o ${classe} atacou usando ${ataque}`)
                break;
        }
    }
}

const heroi1 = new herois('Ivan',24, 'mago');
const heroi2 = new herois('Joâo',33, 'guerreiro');
const heroi3 = new herois('Maria',27, 'ninja');
const heroi4 = new herois('Isa',17, 'monge');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
