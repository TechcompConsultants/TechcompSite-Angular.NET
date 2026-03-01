import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <h2>Services</h2>
          <p class="muted">Flexible engagement options: project delivery, modernization, or ongoing development support.</p>
        </div>

        <div class="grid cards-3">
          <article class="card">
            <h3>Application Development</h3>
            <p class="muted">
              Full-stack development focused on reliability and maintainability.
              Strong fit for enterprise workflows and line-of-business apps.
            </p>
            <ul class="bullets">
              <li>.NET APIs & services</li>
              <li>Angular + TypeScript front-ends</li>
              <li>Data access, performance, and reliability</li>
            </ul>
          </article>

          <article class="card">
            <h3>Integrations & APIs</h3>
            <p class="muted">Connect systems cleanly—internal services, vendor platforms, identity providers, and data pipelines.</p>
            <ul class="bullets">
              <li>REST/JSON, auth flows, and data contracts</li>
              <li>Third-party and legacy integrations</li>
              <li>Observability and error-handling patterns</li>
            </ul>
          </article>

          <article class="card">
            <h3>Cloud & Automation</h3>
            <p class="muted">Practical cloud implementations that reduce operational burden and speed delivery.</p>
            <ul class="bullets">
              <li>Azure hosting & deployment patterns</li>
              <li>CI/CD pipelines and environment strategy</li>
              <li>Automation to remove manual work</li>
            </ul>
          </article>
        </div>

        <div style="margin-top: 18px;">
          <a class="btn" routerLink="/contact">Contact</a>
          <a class="btn btn-ghost" routerLink="/">Back to home</a>
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {}