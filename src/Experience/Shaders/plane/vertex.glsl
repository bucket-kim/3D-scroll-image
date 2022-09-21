varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;

float PI = 3.141592653589793238;

void main() {

  vec3 pos = position;

  pos.y += sin(PI * uv.x) * 0.01;

  pos.y += sin(uTime * 1.5) * 0.01;

  vUv.y -= sin(uTime * 2.) * 0.5;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vUv = uv;
}