import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  styles: [`
    .layout{
      display:grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 18px;
      align-items: start;
    }
    @media (max-width: 980px){ .layout{ grid-template-columns: 1fr; } }
  `],
  template: `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <h2>About</h2>
          <p class="muted">A practical, modern approach to building software that’s easy to operate and easy to extend.</p>
        </div>

        <div class="layout">
          <div class="card">
            <h3>About Techcomp Consultants</h3>
            <p class="muted">
              Techcomp Consultants is a software development firm focused on building practical, modern systems.
              The goal is simple: deliver solutions that are maintainable, scalable, and aligned to business outcomes.
            </p>
            <p class="muted">
              Typical engagements include modernization, integrations, cloud deployments, and full-stack delivery using
              .NET, Azure, Angular, and TypeScript.
            </p>
          </div>

          <aside class="card">
            <h3>Core focus areas</h3>
            <ul class="bullets">
              <li>Architecture & solution design</li>
              <li>API + system integrations</li>
              <li>Cloud delivery on Azure</li>
              <li>Angular front-ends</li>
              <li>Automation & CI/CD</li>
            </ul>

            <div class="card-divider"></div>

            <p class="muted small">Want a quick fit-check? Send a short description of your project and stack.</p>
            <a class="btn btn-small" routerLink="/contact">Contact</a>
          </aside>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}