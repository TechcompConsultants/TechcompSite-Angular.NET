import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ContactModel = {
  name: string;
  email: string;
  company: string;
  message: string;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  styles: [`
    .grid{
      display:grid;
      grid-template-columns: 1fr 0.85fr;
      gap: 18px;
      align-items: start;
    }
    label{ display:grid; gap: 6px; margin-bottom: 12px; }
    label span{ font-weight: 700; font-size: 13px; color: rgba(255,255,255,0.85); }
    input, textarea{
      width: 100%;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border);
      border-radius: 14px;
      color: var(--text);
      padding: 12px 12px;
      font-size: 14px;
      outline: none;
    }
    input:focus, textarea:focus{
      border-color: rgba(255,255,255,0.28);
      background: rgba(255,255,255,0.06);
    }
    .actions{ display:flex; flex-direction: column; gap: 8px; margin-top: 6px; }
    @media (max-width: 980px){ .grid{ grid-template-columns: 1fr; } }
  `],
  template: `
    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <h2>Contact</h2>
          <p class="muted">Tell me what you’re building (or fixing). I’ll reply with next steps.</p>
        </div>

        <div class="grid">
          <form class="card" (ngSubmit)="submit()" #f="ngForm">
            <label>
              <span>Name</span>
              <input name="name" [(ngModel)]="model.name" required autocomplete="name" />
            </label>

            <label>
              <span>Email</span>
              <input name="email" [(ngModel)]="model.email" required type="email" autocomplete="email" />
            </label>

            <label>
              <span>Company (optional)</span>
              <input name="company" [(ngModel)]="model.company" autocomplete="organization" />
            </label>

            <label>
              <span>Message</span>
              <textarea name="message" [(ngModel)]="model.message" rows="5" required
                placeholder="What’s the goal, timeline, and current stack?"></textarea>
            </label>

            <div class="actions">
              <button class="btn" type="submit" [disabled]="f.invalid">Send</button>
              <div class="muted small">
                This uses your email client for now (no backend required).
              </div>
            </div>
          </form>

          <div class="card">
            <h3>Preferred details</h3>
            <ul class="bullets">
              <li>Current stack (.NET, Angular, Azure, etc.)</li>
              <li>Integrations or vendors involved</li>
              <li>Timeline and success criteria</li>
              <li>Any constraints (security, compliance, legacy)</li>
            </ul>

            <div class="card-divider"></div>

            <p class="muted">
              Email works too:
              <a class="link" [href]="'mailto:' + emailTo">{{ emailTo }}</a>
            </p>

            <p class="muted small">
              Update <code>emailTo</code> in <code>contact.component.ts</code> when ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  // TODO: set this to your real inbox for the domain
  emailTo = 'hello@yourdomain.com';

  model: ContactModel = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  submit(): void {
    const subject = encodeURIComponent(`Inquiry - Techcomp Consultants (${this.model.name.trim() || 'Website'})`);
    const bodyLines = [
      `Name: ${this.model.name}`,
      `Email: ${this.model.email}`,
      this.model.company ? `Company: ${this.model.company}` : '',
      '',
      'Message:',
      this.model.message,
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${this.emailTo}?subject=${subject}&body=${body}`;
  }
}