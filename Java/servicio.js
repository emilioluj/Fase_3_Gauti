var myService = 0;
//intenta colocando 1 ó 0 en lugar de true / false
if (myService) {
  var siSer = document.getElementById('servicio');
  siSer.className = 'st';
} else {
  var noSer = document.getElementById('servicio');
  noSer.className = 'sh';
}