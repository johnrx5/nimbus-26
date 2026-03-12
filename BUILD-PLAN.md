# NovaMed Providers Page v2 — Full Build Plan
## Approved by JJ: March 12, 2026

---

## Strategic Direction (from JJ)
1. **Landing destination** that tells the full NovaMed story
2. **Pain-point-first** messaging for different personas
3. **Guided workflow emphasis** — rare differentiator, show how platform adapts per clinic type
4. **Compliance leadership** — 2 decades in healthcare, we enforce partner compliance
5. **Three tiers** — similar to MyDose's product pillars
6. **"Get Started Free"** — basic signup → dashboard shell (no real tools) → schedule demo for full access
7. **Real product screenshots** — pulled from NovaMed dev dashboard (in /screenshots)
8. **Sub-agent** with Gemini can polish screenshots if needed

## Screenshots Captured (from NovaMed Admin Dev)
- `00-login.png` — Beautiful split-screen login (teal left, white right)
- `01-dashboard-overview.png` — Dashboard with $51K revenue, 249 clinics, 166 practitioners, revenue chart
- `02-clinics-list.png` — 256 clinics listed with org, email, phone, pagination
- `03-programs.png` — 7 branded programs (FocusForward™, AgeWell360™, ImmuneGuard™, etc.)
- `04-formulary.png` — 131 products with pricing, NDC, Semaglutide/Tirzepatide formulations
- `05-tiered-pricing.png` — 3 tiers: High Volume (10%/35%), Medium (15%/32%), Standard (20%/30%)
- `06-analytics.png` — Revenue $71K, 203 orders, $352 AOV, geographic distribution, top products

## Page Structure (15+ sections)

### 1. Hero
- Protocol-first headline
- Dashboard screenshot as hero image (01-dashboard-overview.png)
- "Get Started Free" primary CTA + "Schedule Demo" secondary
- Social proof bar: "256+ clinics | 37 states | NABP Accredited"

### 2. Product Pillars (3 expandable cards)
- **For Clinics** → NovaMed Platform (protocols, prescribing, fulfillment)
- **For Patients** → Patient Portal (tracking, refills, messaging)
- **For Pharmacies** → Lake Hills Pharmacy (vertical integration)

### 3. Pain Points — "The Current State"
- 4 expandable cards with detailed pain descriptions
- Same "X, not Y" framing as MyDose

### 4. What Makes NovaMed Different (5 differentiators)
- Protocol logic is native, not hacked
- Pharmacy is built in, not bolted on
- Compliance is automatic, not manual
- Teams, not solo providers
- Real-time pricing, not guesswork

### 5. Platform Features (9 expandable cards)
- Intake & Triage
- Protocol Design & Templates (screenshot: 03-programs.png)
- Formulary & Pricing (screenshot: 04-formulary.png)
- Prescribing & Pharmacy Integration
- Automated Billing & Finance
- Patient Communication
- Lab Results & Tracking
- Analytics Dashboard (screenshot: 06-analytics.png)
- Compliance & Audit Trails

### 6. Guided Workflows by Clinic Type (KEY DIFFERENTIATOR)
- Tab/toggle between 3 clinic archetypes:
  a) Med Spa / Aesthetic — weight loss, peptides, hormone protocols
  b) Chiropractic / Physical Medicine — wellness programs, collaborative care
  c) Physician Groups — complex multi-provider, multi-location protocols
- Each shows a DIFFERENT journey flow with different screenshots/emphasis
- Pull persona details from Notion

### 7. 9-Step Protocol Journey
- Interactive numbered timeline (like MyDose but better)
- Dual perspective: clinic view + patient view
- Real screenshots at each step

### 8. Three Tiers (Pricing/Plans)
- Explore (Free) → Dashboard shell, sample protocols, educational content
- Launch (Per-patient) → Full platform, prescribing, pharmacy fulfillment
- Scale (Enterprise) → Multi-location, analytics, custom integrations
- Screenshot: 05-tiered-pricing.png for credibility

### 9. Compliance & Authority Section
- "Built by a pharmacist with 20 years in compounding"
- JJ credentials: PharmD, FACA, Past President TPA
- NABP accredited, 37 state licenses, 503A/503B compliant
- "We don't just integrate with pharmacies. We ARE the pharmacy."

### 10. Trust — Medical Board
- Named leadership: Dr. Jobby John, Dr. Harris, Dr. Neal, Dr. Thoppil
- Stats: 256+ clinics, 37 states, $1M+ monthly volume, 131 compounds

### 11. Testimonials
- Dr. Karen Mitchell (existing)
- Dr. Ryan Jacobs (existing)

### 12. Anti-Personas — "Not Ideal For"
- Insurance-only primary care
- Solo practitioners with <10 patients (but: "if you're planning to scale...")

### 13. FAQ Accordion
- How is NovaMed different from my EMR?
- How does the pharmacy integration work?
- What compounds do you support?
- How does pricing work?
- Is NovaMed HIPAA compliant?
- Can I use my existing pharmacy?

### 14. Bottom CTA
- "Get Started Free" — signup to dashboard shell
- "Schedule a Demo" — sales conversation
- "Already have an account? Sign In"

## Design Notes
- Keep existing dark theme (bg-[#1A1816], cream/teal/terracotta)
- Astro + Tailwind v4
- Expandable cards use JS for accordion behavior
- Screenshots need to be optimized (WebP, lazy loaded)
- Scroll animations with data-animate, data-stagger

## Next Steps
1. Build the page structure (components)
2. Polish screenshots (crop, redact test data if needed)
3. Pull persona details from Notion
4. SOP: 5-pass review + preflight
5. Deploy to Vercel (need JJ auth)
