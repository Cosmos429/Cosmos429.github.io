// Gestion panier en JS
let panier = [];
let total = 0;

function ajouter(nom, prix) {
    panier.push({nom, prix});
    total += prix;
    mettreAJour();
}

function mettreAJour() {
    document.getElementById('count').innerText = panier.length;
    document.getElementById('total').innerText = total;
    
    let liste = document.getElementById('liste-panier');
    liste.innerHTML = '';
    panier.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nom} - ${item.prix} FCFA`;
        liste.appendChild(li);
    });
    if(panier.length === 0) liste.innerHTML = '<li>Panier vide</li>';
}

function filtrer(categorie) {
    document.querySelectorAll('.carte').forEach(carte => {
        if(categorie === 'tout' || carte.dataset.cat === categorie) {
            carte.style.display = 'block';
        } else {
            carte.style.display = 'none';
        }
    });
}

function commander() {
    if(panier.length === 0) { alert('Ton panier est vide !'); return; }
    let message = "Bonjour, je veux commander :\n" + panier.map(p=>`- ${p.nom}`).join('\n') + `\nTotal: ${total} FCFA`;
    let url = "https://wa.me/22899349282?text=" + encodeURIComponent(message);
    window.open(url, '_blank'); // Ouvre WhatsApp
}