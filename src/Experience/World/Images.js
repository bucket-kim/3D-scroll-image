import * as THREE from "three";
import Experience from "../Experience";
import imageVertex from "../Shaders/plane/vertex.glsl";
import imageFragment from "../Shaders/plane/fragment.glsl";

export default class Images {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.sizes = this.experience.sizes;

    this.speed = 0;
    this.position = 0;
    this.rounded = 0;
    this.block = document.querySelector("#block");
    this.wrap = document.getElementById("wrap");

    this.elems = [...document.querySelectorAll(".n")];
    // this.images = [...document.querySelectorAll("img")];

    window.addEventListener("wheel", (e) => {
      // console.log(e);
      this.speed += e.deltaY * 0.0003;
    });

    this.objs = Array(5).fill({ dist: 0 });

    this.setImages();
  }

  setImages() {
    this.images = Object.values(this.resources.items);

    this.plane = {};
    this.plane.geometry = new THREE.PlaneGeometry(1, 1, 10, 10);
    this.plane.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivaties: enable",
      },
      uniforms: {
        uTexture: {
          value: null,
        },
        uTime: {
          value: 0,
        },
      },
      vertexShader: imageVertex,
      fragmentShader: imageFragment,
      side: THREE.DoubleSide,
    });
    // this.scene.add(this.plane.mesh);

    this.images.forEach((img, i) => {
      this.mat = this.plane.material.clone();
      this.mat.uniforms.uTexture.value = img;
      this.mat.uniforms.uTexture.value.needsUpdate = true;

      let mesh = new THREE.Mesh(this.plane.geometry, this.mat);
      mesh.position.y = i * 1.2;

      this.scene.add(mesh);
    });
  }

  update() {
    this.position += this.speed;
    this.speed *= 0.8;
    this.objs.forEach((obj, i) => {
      obj.dist = Math.min(Math.abs(this.position - i), 1);
      obj.dist = 1 - obj.dist ** 2;
      this.elems[i].style.transform = `scale(${1 + 0.4 * obj.dist})`;
    });
    this.rounded = Math.round(this.position);
    let diff = this.rounded - this.position;
    this.position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.025;
    this.wrap.style.transform = `translate(0, ${-this.position * 100 + 50}px)`;
  }
}
