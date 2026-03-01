import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  styles: [`
    .hero{
      padding: 64px 0 24px 0;
      position: relative;
      overflow: hidden;
    }
    .hero-inner{
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 24px;
      align-items: stretch;
    }
    h1{
      font-size: clamp(36px, 4vw, 54px);
      line-height: 1.05;
      margin: 14px 0 14px 0;
      letter-spacing: -0.8px;
    }
    .lead{
      font-size: 18px;
      color: rgba(255,255,255,0.82);
      max-width: 62ch;
      margin: 0 0 18px 0;
    }
    .pill{
      display: inline-flex;
      padding: 8px 12px;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.82);
      font-weight: 600;
      font-size: 13px;
      margin: 0;
    }
    .cta{ display:flex; gap:12px; flex-wrap:wrap; margin-top: 18px; }
    .badges{ display:flex; gap:8px; flex-wrap:wrap; margin-top: 18px; }

    .card-title{ margin: 0 0 10px 0; font-size: 18px; }
    .metrics{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .metric{
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 10px;
    }
    .metric-value{ font-weight: 900; }
    .metric-label{ font-size: 12px; color: var(--faint); margin-top: 2px; }

    .hero-bg{
      position: absolute;
      inset: -120px -120px auto -120px;
      height: 420px;
      background: radial-gradient(600px 260px at 40% 30%, rgba(77,140,255,0.22), transparent 60%),
                  radial-gradient(500px 240px at 70% 60%, rgba(64,255,217,0.14), transparent 60%);
      pointer-events: none;
    }

    @media (max-width: 980px){
      .hero-inner{ grid-template-columns: 1fr; }
      .metrics{ grid-template-columns: 1fr; }
    }
  `],
  template: `
    <section class="hero">
      <div class="container hero-inner">
        <div>
          <p class="pill">Remote U.S. • Available for contract or project-based work</p>
          <h1>Build, modernize, and integrate software systems that scale.</h1>
          <p class="lead">
            Techcomp Consultants helps teams ship reliable applications and integrations using
            <strong>.NET</strong>, <strong>Azure</strong>, <strong>Angular</strong>, <strong>TypeScript</strong>, APIs, and automation.
          </p>

          <div class="cta">
            <a class="btn" routerLink="/contact">Start a conversation</a>
            <a class="btn btn-ghost" routerLink="/services">See services</a>
          </div>

          <div class="badges" aria-label="Core technologies">
            <span class="badge">.NET</span>
            <span class="badge">Azure</span>
            <span class="badge">Angular</span>
            <span class="badge">TypeScript</span>
            <span class="badge">REST APIs</span>
            <span class="badge">CI/CD</span>
          </div>
        </div>

        <div class="card" role="region" aria-label="Quick summary">
          <h2 class="card-title">What you can expect</h2>
          <ul class="checklist">
            <li>Clear discovery & requirements mapping</li>
            <li>Architecture you can implement and maintain</li>
            <li>Incremental delivery with measurable progress</li>
            <li>Clean documentation and handoff-ready code</li>
          </ul>

          <div class="card-divider"></div>

          <div class="metrics">
            <div class="metric">
              <div class="metric-value">Fast</div>
              <div class="metric-label">time-to-value</div>
            </div>
            <div class="metric">
              <div class="metric-value">Stable</div>
              <div class="metric-label">systems</div>
            </div>
            <div class="metric">
              <div class="metric-value">Secure</div>
              <div class="metric-label">by design</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-bg" aria-hidden="true"></div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <h2>Quick snapshot</h2>
          <p class="muted">A clean starting point today, and an easy path to a full .NET + Angular platform on Azure.</p>
        </div>

        <div class="grid cards-3">
          <div class="card">
            <h3>Modern web apps</h3>
            <p class="muted">Angular + TypeScript front ends with maintainable UI patterns.</p>
          </div>
          <div class="card">
            <h3>APIs & integrations</h3>
            <p class="muted">REST APIs, auth flows, and vendor integrations that are reliable and observable.</p>
          </div>
          <div class="card">
            <h3>Azure delivery</h3>
            <p class="muted">Practical hosting, CI/CD, and environment strategy that reduces operational drag.</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {}