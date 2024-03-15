function changeColors() {
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // lijst met kleuren
    var randomBackgroundColor = colors[Math.floor(Math.random() * colors.length)]; // willekeurige achtergrondkleur
    var randomTextColor = colors[Math.floor(Math.random() * colors.length)]; // willekeurige tekstkleur
    
    document.body.style.backgroundColor = randomBackgroundColor; // stel achtergrondkleur in
    document.body.style.color = randomTextColor; // stel tekstkleur in
    document.getElementById('title').style.color = randomTextColor; // stel tekstkleur van de titel in
}
