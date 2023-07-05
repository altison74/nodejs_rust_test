use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(x: i32) -> i32 {
    if x <= 2 {
        return 1;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}
