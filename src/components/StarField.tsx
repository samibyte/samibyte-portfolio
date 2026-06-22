"use client";

/**
 * StarField.tsx
 *
 * Persistent Three.js star field background that renders behind all content.
 * Features:
 *  - 7000 star particles with 3D depth layers
 *  - Mouse-driven parallax acceleration
 *  - Scroll-velocity warp-speed effect
 *  - Color mix: white/light-blue with occasional matrix-green tinted stars
 *  - Pauses rendering when tab is hidden for performance
 */

import { useEffect, useRef } from "react";
import * as THREE from "three";

// ---- Configuration ----
const STAR_COUNT = 7000;
const FIELD_DEPTH = 2000;
const FIELD_SPREAD = 1600;
const BASE_DRIFT_SPEED = 0.25;
const MOUSE_INFLUENCE = 0.25;
const SCROLL_WARP_FACTOR = 0.12;
const RETURN_DAMPING = 0.94;

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    // ---- Mutable state ----
    const mouse = { x: 0, y: 0 };
    const velocity = { x: 0, y: 0 };
    let scrollVelocity = 0;
    let lastScroll = window.scrollY;
    let isVisible = true;
    let frameId: number;

    // ---- Scene Setup ----
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      FIELD_DEPTH * 2
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ---- Create Stars ----
    const positions = new Float32Array(STAR_COUNT * 3);
    const colors = new Float32Array(STAR_COUNT * 3);
    const baseDepths = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * FIELD_SPREAD;
      positions[i3 + 1] = (Math.random() - 0.5) * FIELD_SPREAD;
      positions[i3 + 2] = (Math.random() - 0.5) * FIELD_DEPTH;

      baseDepths[i] = Math.random();

      const isGreen = Math.random() < 0.12;
      if (isGreen) {
        colors[i3] = 0.15 + Math.random() * 0.2;
        colors[i3 + 1] = 0.7 + Math.random() * 0.3;
        colors[i3 + 2] = 0.15 + Math.random() * 0.15;
      } else {
        const brightness = 0.55 + Math.random() * 0.45;
        const blueShift = Math.random() * 0.18;
        colors[i3] = brightness - blueShift;
        colors[i3 + 1] = brightness;
        colors[i3 + 2] = brightness + blueShift;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const generateStarTexture = (): THREE.CanvasTexture => {
      const size = 64;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;

      const gradient = ctx.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.3)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const starTexture = generateStarTexture();

    const material = new THREE.PointsMaterial({
      size: 2.2,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ---- Animation Loop ----
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      velocity.x += (mouse.x * MOUSE_INFLUENCE - velocity.x) * 0.04;
      velocity.y += (mouse.y * MOUSE_INFLUENCE - velocity.y) * 0.04;

      scrollVelocity *= RETURN_DAMPING;

      const scrollBoost = 1 + Math.abs(scrollVelocity) * SCROLL_WARP_FACTOR;
      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < STAR_COUNT; i++) {
        const i3 = i * 3;
        const depthSpeed = 0.3 + baseDepths[i] * 0.7;

        posArray[i3 + 2] += BASE_DRIFT_SPEED * depthSpeed * scrollBoost;
        posArray[i3] += velocity.x * depthSpeed;
        posArray[i3 + 1] -= velocity.y * depthSpeed;

        if (posArray[i3 + 2] > FIELD_DEPTH / 2) {
          posArray[i3 + 2] = -FIELD_DEPTH / 2;
          posArray[i3] = (Math.random() - 0.5) * FIELD_SPREAD;
          posArray[i3 + 1] = (Math.random() - 0.5) * FIELD_SPREAD;
        }

        if (posArray[i3 + 2] < -FIELD_DEPTH / 2) {
          posArray[i3 + 2] = FIELD_DEPTH / 2;
        }

        if (Math.abs(posArray[i3]) > FIELD_SPREAD) {
          posArray[i3] = (Math.random() - 0.5) * FIELD_SPREAD;
        }
        if (Math.abs(posArray[i3 + 1]) > FIELD_SPREAD) {
          posArray[i3 + 1] = (Math.random() - 0.5) * FIELD_SPREAD;
        }
      }

      posAttr.needsUpdate = true;

      points.rotation.y += 0.00008;
      points.rotation.x += 0.00003;

      renderer.render(scene, camera);
    };

    animate();

    // ---- Event Handlers ----
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onScroll = () => {
      const currentScroll = window.scrollY;
      scrollVelocity = currentScroll - lastScroll;
      lastScroll = currentScroll;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onVisibility = () => {
      isVisible = !document.hidden;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      starTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
};

export default StarField;

