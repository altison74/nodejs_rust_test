use node_bindgen::derive::node_bindgen;

#[node_bindgen]
pub fn fibonacci(x: i64) -> i64 {
    if x <= 2 {
        return 1;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}


