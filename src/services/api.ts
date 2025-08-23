import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8001",
});

export async function getProducts() {
  const { data } = await client("/products");

  return data;
}

export async function getProductById(id: string | number) {
  const { data } = await client(`/products/${id}`);

  return data;
}

export async function login(username: string, password: string) {
  const { data } = await client({
    method: "POST",
    url: "/login",
    data: { username, password },
  });

  return data;
}
