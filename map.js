// Setear las coordenadas al centroide para mostrar Uruguay
let map = L.map('map').setView([-32.883935, -56.168045], 6);

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);