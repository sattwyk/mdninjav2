package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

func HealthCheck(c *fiber.Ctx) error {
	return c.SendString("OK")
}

func main() {
	app := fiber.New()

	app.Get("/healthCheck", HealthCheck)

	fmt.Println("Hello, World!")

	log.Fatal(app.Listen(":3000"))
}
