const helloWasmJs = import("./node_modules/@notakaos/hello-wasm/hello_wasm.js")

helloWasmJs.then(helloWasm => {
    const el = document.querySelector('[data-action=greet]')
    el.addEventListener('click', () => {
        helloWasm.greet('WebAssembly')
    })
})