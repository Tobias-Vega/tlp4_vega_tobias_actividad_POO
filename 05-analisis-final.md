## Análisis final (teórico)

- Las diferencias que encuentro entre usar funciones contructoras con prototype con respecto a las clases son principalmente en la sixtaxis, ya que en la primera posee una sintaxis antigua y extensiva, mientras que con las clases son más limpias y modernas. La ventaja de usar funciones constructoras con prototype es que se puede comprender de mejor manera como funciona los prototipos de JS y la desventaja es su sintaxis extensa. En el caso de las clases la ventaja que tiene es que es más facil de leer ya que agrupa constructores, métodos y propiedades en un solo bloque.

- Las ventajas de usar getters y setters es el encapusalimento que posee al permtir controlar el acceso a las distintas propiedades dentro de un objeto. Por otro lado, se pueden realizar validaciones o transformar los datos antes de poder devolverlos en el caso de los getters o asignarlos para los setters.

- Los problemas que pueden surgir al modoficar prototipos nativos como String es que si no se tiene un cuidado al hacerlo, se pueden sobrescribir sus métodos y perder las funcionalidades que posee causando errores al utilizarlo, esto también afecta en el rendimiento en la optimización del motor de JS.

- La diferencia que encuentro entre asignar ese método directamente al prototype y usar el Object.assign es que al hacerlo de manera directa se copia una referencia del método de personPrototype al prototype de la funcion constructora, en cambio al usar el Objecto.assign se copia todas las propiedades que posea el personPrototype hacia el prototype de la funcion constructora.