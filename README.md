# hello-wasm

参照: https://developer.mozilla.org/ja/docs/WebAssembly/Rust_to_wasm

# development

```sh
git clone https://github.com/notakaos/hello-wasm

# build rust code and generate wasm
cd hello-wasm
cargo install wasm-pack
bin/build

# serve site
cd site
npm install
npm run serve
open http://localhost:8080
```

# License

MIT/Apache-2.0
