# NodeJS-CrearTablaMultiplicar


Se manejan 2 comandos:
- crear: permite crear un archivo txt con los valores de la tabla de multiplicar segun la base escogida.
(se usa paquete node "FileSystem")
- listar: permite listar la tabla de multiplicar en consola (para los colores se usa paquete node "colors")

Se tienen 2 atributos:
- base: la base con la cual se quiere hacer las multiplicaciones.
- limite: limite multiplicando.

Como ejecutarla:
En linea de comando realizar estos comandos:
- node app listar --base 5 --limite=10
- node app crear --base 3 --limite=30

Correr npm install