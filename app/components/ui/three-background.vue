<script setup>
import * as THREE from 'three'

const canvasRef = ref(null)

let renderer, scene, camera, animationId
let particles, shapes = []
let mouseX = 0, mouseY = 0
let targetX = 0, targetY = 0
let scrollY = 0
let running = true
let reducedMotion = false
let themeObserver = null

const PARTICLE_COUNT = 900

const PALETTES = {
    dark: ['#6366f1', '#a855f7', '#818cf8', '#ffffff'],
    light: ['#4f46e5', '#9333ea', '#6366f1', '#7c3aed'],
}

function fillParticleColors(colors, isLight) {
    const palette = PALETTES[isLight ? 'light' : 'dark'].map(c => new THREE.Color(c))
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const color = palette[i % palette.length]
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
    }
}

function applyTheme(isLight) {
    if (!scene) return
    scene.fog.color.set(isLight ? '#f3f4fa' : '#06060f')
    if (particles) {
        particles.material.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending
        particles.material.opacity = isLight ? 0.55 : 0.7
        particles.material.needsUpdate = true
        fillParticleColors(particles.geometry.attributes.color.array, isLight)
        particles.geometry.attributes.color.needsUpdate = true
    }
}

function createParticles() {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)

    const palette = [
        new THREE.Color('#6366f1'), // indigo
        new THREE.Color('#a855f7'), // purple
        new THREE.Color('#818cf8'), // light indigo
        new THREE.Color('#ffffff'),
    ]

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 60
        positions[i * 3 + 1] = (Math.random() - 0.5) * 60
        positions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 5

        const color = palette[Math.floor(Math.random() * palette.length)]
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    })

    particles = new THREE.Points(geometry, material)
    scene.add(particles)
}

function createShapes() {
    const configs = [
        { geo: new THREE.IcosahedronGeometry(2.2, 0), pos: [10, 4, -8], color: '#6366f1', speed: 0.28 },
        { geo: new THREE.OctahedronGeometry(1.6, 0), pos: [-11, -3, -10], color: '#a855f7', speed: 0.35 },
        { geo: new THREE.TorusGeometry(1.8, 0.5, 8, 24), pos: [-8, 6, -14], color: '#818cf8', speed: 0.22 },
        { geo: new THREE.TetrahedronGeometry(1.3, 0), pos: [8, -6, -6], color: '#c084fc', speed: 0.4 },
        { geo: new THREE.IcosahedronGeometry(1.1, 0), pos: [0, 8, -16], color: '#6366f1', speed: 0.3 },
    ]

    for (const cfg of configs) {
        const material = new THREE.MeshBasicMaterial({
            color: cfg.color,
            wireframe: true,
            transparent: true,
            opacity: 0.28,
        })
        const mesh = new THREE.Mesh(cfg.geo, material)
        mesh.position.set(...cfg.pos)
        mesh.userData.speed = cfg.speed
        mesh.userData.baseY = cfg.pos[1]
        mesh.userData.phase = Math.random() * Math.PI * 2
        shapes.push(mesh)
        scene.add(mesh)
    }
}

function animate(time) {
    animationId = requestAnimationFrame(animate)
    if (!running) return

    const t = time * 0.001

    targetX += (mouseX - targetX) * 0.04
    targetY += (mouseY - targetY) * 0.04

    if (!reducedMotion) {
        const scrollT = scrollY * 0.001

        if (particles) {
            particles.rotation.y = t * 0.02 + targetX * 0.12 + scrollT * 0.35
            particles.rotation.x = targetY * 0.08 + scrollT * 0.12
        }

        for (const mesh of shapes) {
            const { speed, baseY, phase } = mesh.userData
            mesh.rotation.x = t * speed * 0.5 + scrollT * speed * 1.6
            mesh.rotation.y = t * speed + scrollT * speed * 2.2
            mesh.position.y = baseY + Math.sin(t * 0.5 + phase) * 0.8 + Math.sin(scrollT + phase) * 1.2
        }
    }

    camera.position.x = targetX * 1.4
    camera.position.y = -targetY * 1.4 - scrollY * 0.0015
    camera.position.z = 14 - Math.min(scrollY * 0.0012, 4)
    camera.lookAt(0, -scrollY * 0.0015, -8)

    renderer.render(scene, camera)
}

function onMouseMove(e) {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1
    mouseY = (e.clientY / window.innerHeight) * 2 - 1
}

function onScroll() {
    scrollY = window.scrollY
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function onVisibility() {
    running = !document.hidden
}

onMounted(() => {
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2('#06060f', 0.028)

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 14

    renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.value,
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)

    createParticles()
    createShapes()

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)

    // React to light/dark toggle on <html>
    applyTheme(document.documentElement.classList.contains('light'))
    themeObserver = new MutationObserver(() => {
        applyTheme(document.documentElement.classList.contains('light'))
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    animationId = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
    themeObserver?.disconnect()
    cancelAnimationFrame(animationId)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)

    scene?.traverse((obj) => {
        obj.geometry?.dispose()
        obj.material?.dispose()
    })
    renderer?.dispose()
})
</script>

<template>
    <canvas ref="canvasRef" class="fixed inset-0 w-full h-full pointer-events-none" aria-hidden="true"></canvas>
</template>
