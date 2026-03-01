import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  styles: [`
    footer{
      padding: 22px 0;
      border-top: 1px solid var(--border);
      background: rgba(11,16,32,0.65);
    }
    .inner{
      display:grid;
      grid-template-columns: 1fr auto auto;
      gap: 14px;
      align-items:center;
    }
    .brand{ font-weight: 800; }
    .links{ display:flex; gap:12px; }
    .links a{ color: rgba(255,255,255,0.82); }
    .links a:hover{ color: rgba(255,255,255,1); }

    @media (max-width: 980px){
      .inner{ grid-template-columns: 1fr; }
    }
  `],
  template: `
    <footer>
      <div class="container inner">
        <div>
          <div class="brand">Techcomp Consultants</div>
          <div class="muted small">Software Development • Integration • Automation</div>
        </div>

        <div class="links">
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div class="muted small">© {{ year }} Techcomp Consultants. All rights reserved.</div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}