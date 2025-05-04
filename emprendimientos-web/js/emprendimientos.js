document.addEventListener("DOMContentLoaded", () => {
    fetch("data/emprendimientos.json")
      .then(res => res.json())
      .then(data => mostrarEmprendimientos(data))
      .catch(err => console.error("Error cargando emprendimientos:", err));
  });
  
  function mostrarEmprendimientos(lista) {
    const contenedor = document.getElementById("emprendimientos-lista");
  
    lista.forEach(item => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "card";
      tarjeta.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}" />
        <h3>${item.nombre}</h3>
        <p>${item.descripcion}</p>
      `;
      tarjeta.addEventListener("click", () => {
        // Al hacer clic se puede guardar en localStorage o query y redirigir
        localStorage.setItem("emprendimientoActual", JSON.stringify(item));
        window.location.href = "detalle.html";
      });
      contenedor.appendChild(tarjeta);
    });
  }
  