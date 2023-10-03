const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight);
document
  .querySelector(".scene-container")
  .appendChild(renderer.domElement);

// Crear una esfera para la galería 3D
const geometry = new THREE.SphereGeometry(5, 44, 44);
const material = new THREE.MeshBasicMaterial({
 // color: 0x0088ff,
 color: 0xde43ba,
  wireframe: true,
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Crear un objeto de texto 3D usando la fuente predeterminada
const textOptions = {
  size: 0.6,
  height: 0.01, // Ajusta la altura para que las palabras sobresalgan
};

const loader = new THREE.FontLoader();
loader.load(
  "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
  function (font) {
    const words = [
      "WordPress",
      "Python",
      "SEM",
      "HTML",
      "CSS",
      "SEO",
      "MongoDB",
      "PostgreSQL",
      "Svelte",
      "SvelteKit",
      "Node.js",
      "Kotlin",
      "SpringBoot",
      "Gradle",
      "JavaScript",
    ];

    const interval = 1000; // Intervalo de tiempo entre la aparición de palabras (1 segundo)

    words.forEach((word, index) => {
      setTimeout(() => {
        const textGeometry = new THREE.TextGeometry(word, {
          font: font,
          ...textOptions,
        });

        const textMaterial = new THREE.MeshBasicMaterial({
          color: 0xde43ba,
        });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        textMesh.scale.set(1.0, 1.0, 1.0);
        const angle = (Math.PI * 2 * index) / words.length;
        const distanceFromCenter = (2 * Math.PI * 12.5) / words.length;
        const radius = 7;

        // Ajusta la posición Z para que las palabras sobresalgan
        textMesh.position.set(
          Math.cos(angle) * distanceFromCenter,
          Math.sin(angle) * distanceFromCenter,
          2 + index * 0.1 // Ajusta la posición Z
        );

        scene.add(textMesh);
      }, index * interval);
    });

    camera.position.z = 11;

    function animateSphere() {
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
      requestAnimationFrame(animateSphere);
    }

    animateSphere();
  }
);