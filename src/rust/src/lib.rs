use wasm_bindgen::prelude::*;

mod math;

#[wasm_bindgen]
pub fn wasm_return(value: f64) -> f64 {
    return value;
}
