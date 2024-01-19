document.addEventListener('DOMContentLoaded', () => {
    fetch('../ejemplo.xml') // Reemplaza 'ejemplo.xml' con la ruta correcta de tu archivo XML
      .then(response => response.text())
      .then(xmlText => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        const cardContainer = document.getElementById('card-container');
        const itemNodes = xmlDoc.getElementsByTagName('item');

        for (let i = 0; i < itemNodes.length; i++) {
          const itemNode = itemNodes[i];
          const title = itemNode.querySelector('title').textContent;
          const description = itemNode.querySelector('description').textContent;
          const imagen = itemNode.querySelector('imagen').textContent;

          // Crear una tarjeta y añadirla al contenedor
          const card = document.createElement('div');
          card.classList.add('col-12', 'rounded', 'row', 'm-2');

          card.innerHTML = `
            <div class="col-6 bg-dark d-flex justify-content-center">
              <img src="${imagen}" alt="imagen card" width="250" height="100">
            </div>
            <div class="col-6 bg-primary">
              <h1>${title}</h1>
              <p>${description}</p>
            </div>
          `;

          cardContainer.appendChild(card);
        }
      })
      .catch(error => console.error('Error al cargar el archivo XML:', error));
  });