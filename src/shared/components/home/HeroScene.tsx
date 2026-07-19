"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT_DESKTOP = 4500;
const PARTICLE_COUNT_MOBILE = 1800;
const PARTICLE_BREAKPOINT_PX = 640;
const FIELD_SIZE = 32;
const FIELD_HALF = FIELD_SIZE / 2;
const DRIFT_SPEED = 0.6;
const CUBE_BOUNDS = 2.4;
const CUBE_FOLLOW_LERP = 0.06;

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 8;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const particleCount = window.innerWidth < PARTICLE_BREAKPOINT_PX ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 1] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 2] = (Math.random() - 0.5) * FIELD_SIZE;
      velocities[i * 3] = (Math.random() - 0.5) * DRIFT_SPEED;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * DRIFT_SPEED;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * DRIFT_SPEED;
    }
    const particleGeometry = new THREE.BufferGeometry();
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    particleGeometry.setAttribute("position", positionAttribute);
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x9dd7ff,
      size: 0.024,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const startTime = performance.now();
    const getElapsedSeconds = () => (performance.now() - startTime) / 1000;

    // A medium interactive wireframe cube that wanders the hero on its own
    // and eases toward wherever the visitor clicks or taps.
    let cubeTargetX = -3.2;
    let cubeTargetY = -2;
    let nextWanderAtSeconds = 3;

    const pickWanderTarget = () => {
      const x =
        Math.random() < 0.5
          ? THREE.MathUtils.randFloat(-CUBE_BOUNDS, -1.4)
          : THREE.MathUtils.randFloat(1.4, CUBE_BOUNDS);
      const y = THREE.MathUtils.randFloat(-CUBE_BOUNDS, CUBE_BOUNDS);
      cubeTargetX = x;
      cubeTargetY = y;
    };

    const cubeGroup = new THREE.Group();
    const cubeGeometry = new THREE.BoxGeometry(1.1, 1.1, 1.1);
    const cubeEdgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
    const cubeEdgesMaterial = new THREE.LineBasicMaterial({ color: 0x6a98ff, transparent: true, opacity: 0.7 });
    const cubeEdges = new THREE.LineSegments(cubeEdgesGeometry, cubeEdgesMaterial);
    cubeGroup.add(cubeEdges);
    cubeGroup.position.set(cubeTargetX, cubeTargetY, -1.5);
    scene.add(cubeGroup);

    const raycaster = new THREE.Raycaster();
    const pointerNdc = new THREE.Vector2();
    const followPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 1.5);

    const handlePointerDown = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerNdc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointerNdc, camera);
      const intersection = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(followPlane, intersection)) {
        cubeTargetX = THREE.MathUtils.clamp(intersection.x, -CUBE_BOUNDS, CUBE_BOUNDS);
        cubeTargetY = THREE.MathUtils.clamp(intersection.y, -CUBE_BOUNDS, CUBE_BOUNDS);
        nextWanderAtSeconds = getElapsedSeconds() + THREE.MathUtils.randFloat(3, 5);
      }
    };
    renderer.domElement.addEventListener("pointerdown", handlePointerDown);

    const wrapCoordinate = (value: number) => {
      if (value > FIELD_HALF) return -FIELD_HALF;
      if (value < -FIELD_HALF) return FIELD_HALF;
      return value;
    };

    let previousTime = startTime;
    let animationId: number;
    const animate = () => {
      const now = performance.now();
      const deltaSeconds = Math.min((now - previousTime) / 1000, 0.1);
      const elapsedSeconds = (now - startTime) / 1000;
      previousTime = now;

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        positions[ix] = wrapCoordinate(positions[ix] + velocities[ix] * deltaSeconds);
        positions[ix + 1] = wrapCoordinate(positions[ix + 1] + velocities[ix + 1] * deltaSeconds);
        positions[ix + 2] = wrapCoordinate(positions[ix + 2] + velocities[ix + 2] * deltaSeconds);
      }
      positionAttribute.needsUpdate = true;

      particles.rotation.y += 0.0004;

      if (elapsedSeconds > nextWanderAtSeconds) {
        pickWanderTarget();
        nextWanderAtSeconds = elapsedSeconds + THREE.MathUtils.randFloat(3, 5);
      }

      cubeGroup.rotation.x += 0.006;
      cubeGroup.rotation.y += 0.009;
      const bobOffset = Math.sin(elapsedSeconds * 0.8) * 0.15;
      cubeGroup.position.x = THREE.MathUtils.lerp(cubeGroup.position.x, cubeTargetX, CUBE_FOLLOW_LERP);
      cubeGroup.position.y = THREE.MathUtils.lerp(cubeGroup.position.y, cubeTargetY + bobOffset, CUBE_FOLLOW_LERP);

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      particleGeometry.dispose();
      particleMaterial.dispose();
      cubeGeometry.dispose();
      cubeEdgesGeometry.dispose();
      cubeEdgesMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden />;
}
