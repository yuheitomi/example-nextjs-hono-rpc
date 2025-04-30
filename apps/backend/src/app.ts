import { Hono } from "hono";

export const app = new Hono<{ Bindings: Env }>().get("/message", (c) => {
	return c.text("Hello Hono!");
});
