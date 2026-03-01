import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  styles: [`
.site-header{
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(11,16,32,0.65);
  border-bottom: 1px solid var(--border);
}

/* ⬇️ Make the header taller and allow children to stretch */
.header-inner{
  display:flex;
  justify-content: space-between;
  align-items: stretch;     /* important */
  min-height: 96px;         /* increase header height */
  padding: 14px 0;
  gap: 16px;
}

/* brand block can sit naturally in the top/center */
.brand{
  display:flex;
  align-items: center;
}

/* logo + tagline stacked */
.brand-stack{
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;  /* centers brand within header height */
  gap: 6px;
}

/* ⬇️ Increase logo height */
.logo-wrap{
  height: 64px;             /* increase logo size */
  display: inline-flex;
  align-items: center;
}
.logo-img{
  height: 100%;
  width: auto;
  max-width: 280px;
  object-fit: contain;
  display:block;
  transform: scale(1.12);   /* optional bump */
  transform-origin: left center;
}

/* tagline under logo */
.tag{
  font-size: 12px;
  color: var(--muted);
  line-height: 1.2;
}

/* ⬇️ Nav pinned to the bottom of the header */
nav{
  display:flex;
  align-items: flex-end;    /* bottom align within stretched header */
}

nav ul{
  display:flex;
  list-style:none;
  padding:0;
  margin:0;
  gap:18px;
  align-items: center;
}

nav a{ color: rgba(255,255,255,0.86); font-weight: 600; }
nav a:hover{ color: rgba(255,255,255,1); }

.active{
  color: rgba(255,255,255,1);
  text-decoration: underline;
  text-decoration-color: rgba(255,255,255,0.5);
}

/* mobile tweak */
@media (max-width: 760px){
  .header-inner{ min-height: 84px; }
  .tag{ display:none; }
  nav ul{ gap: 12px; }
}
`],
  template: `
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" routerLink="/">
      <div class="brand-stack">
        <span class="logo-wrap">
          <img src="/assets/images/techcomp-logo.png"
               alt="Techcomp Consultants logo"
               class="logo-img" />
        </span>
        <div class="tag">Software Development • Integration • Workflow Automation</div>
      </div>
    </a>

    <nav aria-label="Primary">
      <ul>
        <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
        <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        <li><a routerLink="/contact" class="btn btn-small" routerLinkActive="active">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
  `,
})
export class HeaderComponent {}