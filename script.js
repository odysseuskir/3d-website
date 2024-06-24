function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
}

function generateRandomPositions() {
    const positions = [];
    for (let i = 0; i < 5; i++) {
        const x = getRandomPosition(-100, 100);
        const z = getRandomPosition(-100, 100);
        positions.push(`${x.toFixed(2)} 2 ${z.toFixed(2)}`);
    }
    return positions;
}

document.addEventListener('DOMContentLoaded', () => {
    const positions = generateRandomPositions();
    document.getElementById('torus').setAttribute('position', positions[0]);
    document.getElementById('dodecahedron').setAttribute('position', positions[1]);
    document.getElementById('cone').setAttribute('position', positions[2]);
    document.getElementById('cylinder').setAttribute('position', positions[3]);
    document.getElementById('sphere').setAttribute('position', positions[4]);
});