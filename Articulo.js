export default class Articulo {
  constructor(objCons) {
    this._codigo = objCons.codigo;
    this._nombre = objCons.nombre;
    this._precio = objCons.precio;
    this._cantidad = objCons.cantidad;
    this._descripcion = objCons.descripcion;
    this._siguiente = null;
    this._anterior = null;
  }
  get siguiente() {
    return this._siguiente;
  }

  set siguiente(nuevoSiguiente) {
    this._siguiente = nuevoSiguiente;
  }

  get anterior(){
    return this._anterior;
  }
  
  set anterior(nuevoAnterior) {
    this._anterior = nuevoAnterior;
  }

  get codigo() {
    return this._codigo;
  }

  set codigo(nuevoCodigo) {
    this._codigo = nuevoCodigo;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(nuevoPrecio) {
    this._precio = nuevoPrecio;
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(nuevoCantidad) {
    this._cantidad = nuevoCantidad;
  }
  
  get descripcion() {
    return this._descripcion;
  }    

  set descripcion(nuevoDescripcion) {
    this._descripcion = nuevoDescripcion;
  }

  toString(){        
    return "Codigo del articulo: "+ this._codigo +" Nombre del articulo: "+ this._nombre +" Prescio del articulo: "+
    this._precio +" Cantidad de articulos: "+ this._cantidad +" Descripción de articulo: "+this._descripcion + this._siguiente;
  }

  /*toString() {
    return `${this._codigo}, ${this._nombre}, ${this._precio}, ${this._cantidad}, ${this._descripcion}, ${this._siguiente}`
  }*/
}