import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="min-h-screen bg-gray-50 max-w-lg mx-auto">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
    :host {
      font-family: Arial, Helvetica, sans-serif;
    }
  `,
  ],
})
export class AppComponent {
  title = "NutriAI"
}

