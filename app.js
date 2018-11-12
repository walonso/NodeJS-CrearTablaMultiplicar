const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

/// Comandos para correr en consola y ver la documentacion usando yargs.
//node app listar --limite=20 --base 50
//node app listar --help

///de esta forma traemos otros js. (pero debio estar export desde el archivo original)
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//let base = 1;
//console - log(module);
//El modulo esta disponisble en toda la app (agregar hay los objetos de manera global)


//Con process se pueden ver varias variables del entorno, quien lo ejecuta y demas informacion el proceso.
//console.log(process);

//con process.argv, se ven los argumentos que esta pasando,
//por defecto siempre pasa 2, donde esta node y donde esta la carpeta

//* lo que vamos a hacer es leer la base desde la consola, se escribira esto: node app --base=5,
//eso significa que el parametro que queremos es el 2 (--base=5, pero queremos el numero (5))

/*
//console.log(process.argv);
let argv2 = process.argv;
//let parametro = parametros[2];
//console.log(parametro);
//let base = parametro.split('=')[1];

console.log(argv);
console.log(argv.base);
console.log(argv.limite);
//console.log(argv2);
*/

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`archivo creado ${archivo}`))
            .catch((e) => console.log(e))
            //console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
}


//console.log(multiplicar);