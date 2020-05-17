const INITIAL_VALUE = "0";
const OPER_SUMA = '+';
const OPER_RESTA = '-';
const OPER_DIVISION = '/';
const OPER_MULTIPLICACION = '*';
const OPER_NONE = null;

const calculadora = {
  memoria : 0,
  ultimoOperador: OPER_NONE,
  pantalla : INITIAL_VALUE,
  guardarEnMemoria : function (nuevoValor){
    calculadora.memoria = parseInt(nuevoValor, 10);
  },
  btnSuma: function() {
    this.ultimoOperador = OPER_SUMA;
    this.guardarEnMemoria(this.pantalla);
    this.limpiar();
  },
  btnResta: function() {
    this.ultimoOperador = OPER_RESTA;
    this.guardarEnMemoria(this.pantalla);
    this.limpiar();
  }, 
  btnProducto: function() {
    this.ultimoOperador = OPER_MULTIPLICACION;
    this.guardarEnMemoria(this.pantalla);
    this.limpiar();
  },
  btnDivision: function() {
    this.ultimoOperador = OPER_DIVISION;
    this.guardarEnMemoria(this.pantalla);
    this.limpiar();
  },
  sumar: function() {
    return this.memoria + parseInt(this.pantalla, 10);
  },
  restar: function (){
    return this.memoria - parseInt(this.pantalla, 10);
  },
  multiplicar: function (){
    return this.memoria * parseInt(this.pantalla, 10);
  },
  dividir: function (){
    return this.memoria / parseInt(this.pantalla, 10);
  },
  

  calcularResultado: function() {
    let resultado;
    switch(this.ultimoOperador) {
      case OPER_SUMA:
        resultado = this.sumar();
        break;
      case OPER_RESTA:
        resultado = this.restar();
        break;
      case OPER_MULTIPLICACION:
        resultado = this.multiplicar();
        break;
      case OPER_DIVISION:
        resultado = this.dividir();
        break;
    }
    
    this.pantalla = resultado.toString();
  },
  limpiar : function() {
    this.pantalla = INITIAL_VALUE
  },
  escribir : function(numero) {
    if (this.pantalla === INITIAL_VALUE){
      this.pantalla = numero
    }else {
      this.pantalla =this.pantalla + numero
    }  
  },
  procesar : function(tecla) {
    switch (tecla){
      case "+":
        this.btnSuma()
        break
      case "-":
        this.btnResta()
        break
      case "*":
        this.btnProducto()
        break
      case "/":
        this.btnDivision()
        break
      case "C":
        this.limpiar()
        break
      case "=":
        this.calcularResultado()
        break
      default:
        this.escribir(tecla)
        break   
    }
    console.log('pantalla:', this.pantalla);
  },
}

calculadora.procesar('1');
calculadora.procesar('2');
calculadora.procesar('3');
calculadora.procesar('/');
calculadora.procesar('2');
calculadora.procesar('=');
