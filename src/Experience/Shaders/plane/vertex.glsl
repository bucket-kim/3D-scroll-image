varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;

void main() {

  vec3 pos = position;

  pos.y += sin(uTime * 0.5) * 0.05;

  vUv.y -= sin(uTime * 0.5) * 10.;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vUv = uv;
}