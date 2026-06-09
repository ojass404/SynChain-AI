// SupplyHub - Complete Frontend Application for app

// ─── DUMMY DATA ───
const DATA = {
  user: {
    name: "Rahul Sharma",
    email: "rahul@techprocure.in",
    company: "TechProcure Solutions Pvt Ltd",
    gst: "27AABCT3518Q1ZV",
    avatar: "RS",
    plan: "Growth",
    trustScore: 87,
    city: "Mumbai",
    state: "Maharashtra"
  },

  stats: {
    suppliers: 1284,
    savings: "₹4.2L",
    negotiations: 47,
    avgReduction: "18%",
    activeDeals: 12
  },

  products: [
    { id:1, name:"Stainless Steel Sheet 304 Grade", supplier:"Mehta Metals Pvt Ltd", price:185, market:220, moq:"50 Kg", rating:4.8, delivery:"3-5 days", img:"🔩", category:"Metals", verified:true, trust:94, location:"Mumbai" },
    { id:2, name:"Industrial HDPE Pipe 110mm", supplier:"Polymer Industries", price:2200, market:2650, moq:"100 Pcs", rating:4.6, delivery:"5-7 days", img:"🔧", category:"Pipes", verified:true, trust:88, location:"Gujarat" },
    { id:3, name:"Cotton Yarn Count 40s", supplier:"Shree Textiles", price:320, market:380, moq:"500 Kg", rating:4.7, delivery:"4-6 days", img:"🧵", category:"Textiles", verified:true, trust:91, location:"Surat" },
    { id:4, name:"Hydraulic Hose Assembly 1/2 inch", supplier:"Precision Hydraulics", price:890, market:1050, moq:"25 Pcs", rating:4.5, delivery:"2-4 days", img:"⚙️", category:"Industrial", verified:false, trust:72, location:"Pune" },
    { id:5, name:"LED Driver 60W Waterproof", supplier:"ElectroPower India", price:450, market:580, moq:"100 Pcs", rating:4.9, delivery:"1-3 days", img:"💡", category:"Electronics", verified:true, trust:96, location:"Delhi" },
    { id:6, name:"Polypropylene Granules PP-H", supplier:"Rathi Polymers Ltd", price:88, market:105, moq:"1000 Kg", rating:4.4, delivery:"7-10 days", img:"🧪", category:"Chemicals", verified:true, trust:85, location:"Chennai" },
    { id:7, name:"Aluminium Extrusion Profile T-Slot", supplier:"Alumex Industries", price:295, market:350, moq:"200 Kg", rating:4.7, delivery:"3-5 days", img:"📦", category:"Metals", verified:true, trust:93, location:"Ahmedabad" },
    { id:8, name:"Industrial Gloves Nitrile 9 inch", supplier:"SafeWork Equip Co", price:25, market:32, moq:"1000 Pcs", rating:4.3, delivery:"2-4 days", img:"🧤", category:"Safety", verified:false, trust:68, location:"Rajkot" },
  ],

  suppliers: [
    { id:1, name:"Mehta Metals Pvt Ltd", category:"Steel & Metals", rating:4.9, deals:234, trust:97, gst:"27AABCM4521Z1ZK", years:12, city:"Mumbai", products:85, badge:true, successRate:96 },
    { id:2, name:"Polymer Industries Ltd", category:"Plastics & Polymers", rating:4.7, deals:156, trust:92, gst:"24AABCP7823Q1ZX", years:8, city:"Gujarat", products:42, badge:true, successRate:91 },
    { id:3, name:"Shree Textiles Corporation", category:"Textiles & Fabrics", rating:4.8, deals:312, trust:95, gst:"24AABCS5412R1ZD", years:15, city:"Surat", products:128, badge:true, successRate:94 },
    { id:4, name:"ElectroPower India", category:"Electronics & Lighting", rating:4.9, deals:189, trust:98, gst:"07AABCE9823H1ZB", years:6, city:"Delhi", products:67, badge:true, successRate:97 },
    { id:5, name:"Precision Hydraulics", category:"Industrial Equipment", rating:4.5, deals:78, trust:75, gst:"27AABCP3218M1ZA", years:4, city:"Pune", products:34, badge:false, successRate:82 },
    { id:6, name:"Rathi Polymers Ltd", category:"Chemicals & Polymers", rating:4.6, deals:201, trust:88, gst:"33AABCR8412N1ZF", years:10, city:"Chennai", products:56, badge:true, successRate:89 },
  ],

  negotiations: [
    { id:1, product:"SS Sheet 304 Grade", supplier:"Mehta Metals", status:"live", startPrice:220, currentOffer:195, targetPrice:185, aiSuggested:188, probability:78, savings:"₹14,750", mode:"ai" },
    { id:2, product:"HDPE Pipe 110mm", supplier:"Polymer Industries", status:"completed", startPrice:2650, finalPrice:2180, savings:"₹47,000", mode:"manual" },
    { id:3, product:"Cotton Yarn 40s", supplier:"Shree Textiles", status:"pending", startPrice:380, currentOffer:340, targetPrice:320, aiSuggested:328, probability:65, savings:"₹30,000", mode:"ai" },
    { id:4, product:"LED Driver 60W", supplier:"ElectroPower", status:"rejected", startPrice:580, mode:"manual" },
  ],

  deals: [
    { id:1, product:"SS Sheet 304 Grade", supplier:"Mehta Metals", qty:"500 Kg", value:"₹92,500", status:"active", delivery:"Jun 15, 2025", payment:"Advance 30%" },
    { id:2, product:"HDPE Pipe 110mm", supplier:"Polymer Industries", qty:"1000 Pcs", value:"₹2,18,000", status:"completed", delivery:"May 28, 2025", payment:"Net 30" },
    { id:3, product:"Cotton Yarn 40s", supplier:"Shree Textiles", qty:"2000 Kg", value:"₹6,40,000", status:"pending", delivery:"Jun 22, 2025", payment:"LC" },
  ],

  aiFeatures: [
    { id:"pricing", name:"SME Pricing Engine", icon:"💰", desc:"AI-powered fair price benchmarking", status:"active" },
    { id:"sourcing", name:"AI Supplier Sourcing", icon:"🔍", desc:"Intelligent supplier discovery", status:"active" },
    { id:"negotiation", name:"Auto Negotiation Agent", icon:"🤝", desc:"Autonomous price negotiation", status:"active" },
    { id:"gst", name:"GST Verification AI", icon:"✅", desc:"Instant GST validation & fraud check", status:"active" },
    { id:"fraud", name:"Fraud Detection AI", icon:"🛡️", desc:"Real-time supplier risk analysis", status:"active" },
    { id:"forecast", name:"Price Forecasting AI", icon:"📈", desc:"30-day price trend prediction", status:"beta" },
    { id:"voice", name:"Hinglish Voice Agent", icon:"🎙️", desc:"Voice-powered procurement", status:"beta" },
    { id:"whatsapp", name:"WhatsApp Agent", icon:"💬", desc:"Procurement via WhatsApp", status:"active" },
    { id:"visual", name:"Visual Product Search", icon:"👁️", desc:"Find products by photo", status:"beta" },
    { id:"memory", name:"Learning Memory System", icon:"🧠", desc:"AI that learns your preferences", status:"active" },
    { id:"scoring", name:"Supplier Scoring", icon:"⭐", desc:"Multi-dimensional supplier rating", status:"active" },
    { id:"quality", name:"Quality Detection AI", icon:"🔬", desc:"AI quality estimation from specs", status:"coming" },
  ],

  priceHistory: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    data: [210, 225, 218, 235, 228, 220]
  },

  chatMessages: [
    { role:"ai", text:"Namaste! 🙏 Main SupplyHub AI hoon. Aap kya procure karna chahte hain? Main best suppliers aur prices dhundh sakta hoon.", time:"10:00" },
    { role:"user", text:"Mujhe stainless steel sheets ki zaroorat hai, SS304, 50kg minimum order.", time:"10:01" },
    { role:"ai", text:"Got it! Searching verified suppliers for SS304 Stainless Steel Sheets with 50kg MOQ...", time:"10:01", loading:false },
    { role:"ai", text:"Found 12 verified suppliers. Best price: ₹185/kg by Mehta Metals Pvt Ltd (Trust Score: 97/100). Market average: ₹220/kg. You can save ₹17.5% by ordering today. Want me to initiate negotiations?", time:"10:02" },
  ],

  activities: [
    { text:"New quote received from Mehta Metals for SS Sheets", time:"2 min ago", color:"var(--primary)" },
    { text:"AI negotiation completed — saved ₹47,000", time:"15 min ago", color:"var(--success)" },
    { text:"GST verification completed for Polymer Industries", time:"1 hr ago", color:"var(--success)" },
    { text:"Price alert: HDPE Pipe prices dropped 8%", time:"2 hr ago", color:"var(--warning)" },
    { text:"New supplier match: ElectroPower India added", time:"3 hr ago", color:"var(--primary)" },
    { text:"Deal #2041 completed successfully", time:"Yesterday", color:"var(--success)" },
  ]
};

// ─── ROUTER ───
class Router {
  constructor() {
    this.routes = {};
    this.current = null;
  }

  register(name, renderFn) {
    this.routes[name] = renderFn;
  }

  navigate(name, params = {}) {
    this.current = name;
    this.params = params;
    this.render();
    window.scrollTo(0, 0);

    // Update active nav
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.page === name);
    });
  }

  render() {
    const fn = this.routes[this.current];
    if (!fn) return;

    const isLanding = this.current === 'landing' || this.current === 'auth';
    const appLayout = document.getElementById('app-layout');
    const landingLayout = document.getElementById('landing-layout');

    if (isLanding) {
      appLayout.style.display = 'none';
      landingLayout.style.display = 'block';
      landingLayout.innerHTML = fn(this.params);
    } else {
      appLayout.style.display = 'flex';
      landingLayout.style.display = 'none';
      document.getElementById('page-content').innerHTML = fn(this.params);
    }

    // Run post-render hooks
    setTimeout(() => {
      initCharts();
      initInteractions();
    }, 50);
  }
}

const router = new Router();

// ─── PAGES ───

// LANDING PAGE
router.register('landing', () => `
  <nav class="landing-nav">
    <div style="display:flex;align-items:center;gap:10px;">
      <div class="logo-icon">S</div>
      <span class="logo-text">Supply<span>Hub</span></span>
    </div>
    <div style="display:flex;gap:28px;align-items:center;">
      <a href="#" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;" onclick="router.navigate('landing')">Product</a>
      <a href="#pricing-section" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;" onclick="event.preventDefault();const el=document.getElementById('pricing-section');if(el){el.scrollIntoView({behavior:'smooth'});}">Pricing</a>
      <a href="#" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing-suppliers')">Suppliers</a>
      <a href="#" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing-enterprise')">Enterprise</a>
    </div>
    <div style="display:flex;gap:12px;align-items:center;">
      <button class="btn btn-ghost" onclick="router.navigate('auth')">Sign In</button>
      <button class="btn btn-gradient" onclick="router.navigate('auth')">Start Free →</button>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-content animate-fadeInUp">
      <div class="hero-eyebrow">
        <span style="width:6px;height:6px;background:var(--success);border-radius:50%;display:inline-block;"></span>
        AI-Powered Procurement Platform
      </div>
      <h1>Find Suppliers, Negotiate Better &amp; Procure <span>Smarter With AI</span></h1>
      <p class="hero-sub">SupplyHub automates sourcing, supplier verification, negotiations and procurement for Indian businesses — saving up to 30% on every purchase.</p>
      <div class="hero-actions">
        <button class="btn btn-gradient btn-xl" onclick="router.navigate('auth')">Start Free — No Credit Card</button>
        <button class="btn btn-secondary btn-xl" onclick="showDemo()">▶ Watch Demo</button>
      </div>
      <div class="hero-stats">
        <div>
          <div class="hero-stat-value">12,400+</div>
          <div class="hero-stat-label">Verified Suppliers</div>
        </div>
        <div>
          <div class="hero-stat-value">₹48 Cr+</div>
          <div class="hero-stat-label">Savings Generated</div>
        </div>
        <div>
          <div class="hero-stat-value">3.2 Lakh</div>
          <div class="hero-stat-label">Deals Closed</div>
        </div>
        <div>
          <div class="hero-stat-value">18.5%</div>
          <div class="hero-stat-label">Avg Price Reduction</div>
        </div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="floating-cards">
        <div class="f-card animate-fadeInUp delay-1">
          <div style="font-size:11px;color:var(--text-secondary);font-weight:600;margin-bottom:8px;">🤖 AI FOUND</div>
          <div style="font-weight:700;font-size:14px;margin-bottom:4px;">Mehta Metals</div>
          <div style="font-size:13px;color:var(--success);font-weight:600;">₹185/kg • Saves 16%</div>
          <div class="badge badge-success" style="margin-top:8px;font-size:10px;">✓ GST Verified</div>
        </div>
        <div class="f-card animate-fadeInUp delay-2">
          <div style="font-size:11px;color:var(--text-secondary);font-weight:600;margin-bottom:6px;">📊 PRICE INTEL</div>
          <div style="font-weight:700;font-size:13px;margin-bottom:2px;">SS Sheet 304</div>
          <div class="mini-chart" style="height:36px;">
            ${[40,55,48,70,62,80,75].map((h,i)=>`<div class="mini-bar ${i===6?'active':''}" style="height:${h}%;"></div>`).join('')}
          </div>
          <div style="font-size:11px;color:var(--success);margin-top:4px;font-weight:600;">↓ Buy now • Price rising</div>
        </div>
        <div class="f-card animate-fadeInUp delay-3">
          <div style="font-size:11px;color:var(--text-secondary);font-weight:600;margin-bottom:6px;">🤝 NEGOTIATION</div>
          <div style="font-size:13px;font-weight:600;margin-bottom:4px;">AI saved ₹47,000</div>
          <div class="progress-bar" style="margin:4px 0;"><div class="progress-fill success" style="width:78%;"></div></div>
          <div style="font-size:11px;color:var(--text-secondary);">Success rate 94%</div>
        </div>
        <div class="f-card animate-fadeInUp delay-4">
          <div style="font-size:11px;color:var(--success);font-weight:600;margin-bottom:6px;">✅ VERIFIED</div>
          <div style="font-weight:700;font-size:14px;">Polymer Industries</div>
          <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Trust Score: 92/100</div>
          <div style="font-size:12px;color:var(--text-secondary);">156 successful deals</div>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section style="padding:80px 48px;background:var(--card);">
    <div style="text-align:center;margin-bottom:60px;">
      <div class="hero-eyebrow" style="margin:0 auto 16px;">Simple 4-Step Process</div>
      <h2 style="font-family:var(--font-display);font-size:40px;font-weight:800;letter-spacing:-1px;color:var(--text);">How SupplyHub Works</h2>
      <p style="font-size:16px;color:var(--text-secondary);margin-top:12px;max-width:480px;margin-left:auto;margin-right:auto;">From search to deal in minutes. Our AI handles the heavy lifting.</p>
    </div>
    <div class="grid-4" style="max-width:1100px;margin:0 auto;">
      ${[
        {n:'01',icon:'🔍',title:'Search Product',desc:'Type, speak, or upload a photo of what you need. Our AI understands your intent instantly.'},
        {n:'02',icon:'✅',title:'Find Verified Suppliers',desc:'AI scans 12,000+ verified suppliers and ranks them by trust score, price, and delivery time.'},
        {n:'03',icon:'🤝',title:'Negotiate With AI',desc:'Set your target price and let our AI agent negotiate on your behalf, 24/7.'},
        {n:'04',icon:'🎉',title:'Close The Deal',desc:'Sign digitally, track delivery, and manage payments — all in one place.'},
      ].map(s => `
        <div style="text-align:center;padding:32px 20px;" class="animate-fadeInUp">
          <div style="font-size:48px;margin-bottom:16px;">${s.icon}</div>
          <div style="font-size:12px;font-weight:800;color:var(--primary);letter-spacing:2px;margin-bottom:8px;">STEP ${s.n}</div>
          <h3 style="font-family:var(--font-display);font-size:20px;font-weight:700;margin-bottom:8px;color:var(--text);">${s.title}</h3>
          <p style="font-size:14px;color:var(--text-secondary);line-height:1.6;">${s.desc}</p>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- FEATURES -->
  <section style="padding:80px 48px;background:var(--bg);">
    <div style="text-align:center;margin-bottom:60px;">
      <h2 style="font-family:var(--font-display);font-size:40px;font-weight:800;letter-spacing:-1px;color:var(--text);">AI-Powered Features</h2>
      <p style="font-size:16px;color:var(--text-secondary);margin-top:12px;">15+ AI agents working 24/7 to optimize your procurement</p>
    </div>
    <div class="grid-4" style="max-width:1100px;margin:0 auto;">
      ${DATA.aiFeatures.slice(0,8).map(f => `
        <div class="ai-feature-card">
          <div style="font-size:32px;margin-bottom:12px;">${f.icon}</div>
          <h3 style="font-family:var(--font-display);font-size:16px;font-weight:700;color:var(--text);margin-bottom:6px;">${f.name}</h3>
          <p style="font-size:13px;color:var(--text-secondary);">${f.desc}</p>
          <div class="badge badge-${f.status==='active'?'success':f.status==='beta'?'warning':'gray'}" style="margin-top:12px;">
            ${f.status==='active'?'✓ Live':f.status==='beta'?'⚡ Beta':'Soon'}
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- PRICING -->
  <section id="pricing-section" style="padding:80px 48px;background:var(--card);">
    <div style="text-align:center;margin-bottom:60px;">
      <h2 style="font-family:var(--font-display);font-size:40px;font-weight:800;letter-spacing:-1px;color:var(--text);">Simple, Transparent Pricing</h2>
      <p style="font-size:16px;color:var(--text-secondary);margin-top:12px;">Start free, scale as you grow</p>
      <div class="tabs" style="margin:20px auto 0;justify-content:center;">
        <div class="tab active">Monthly</div>
        <div class="tab" onclick="togglePricing(this)">Yearly <span style="color:var(--success);font-size:11px;">-20%</span></div>
      </div>
    </div>
    <div class="grid-3" style="max-width:900px;margin:0 auto;align-items:start;">
      <div class="pricing-card">
        <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text-secondary);margin-bottom:12px;">Starter</div>
        <div class="pricing-price">₹0<span class="pricing-period">/mo</span></div>
        <p style="font-size:13px;color:var(--text-secondary);margin:12px 0 20px;">Perfect for individuals and small teams getting started with procurement.</p>
        <button class="btn btn-secondary w-full" style="margin-bottom:24px;" onclick="router.navigate('auth')">Get Started Free</button>
        ${['5 RFQs per month','Basic supplier search','Manual negotiations','Email support','GST lookup (10/mo)'].map(f=>`<div class="pricing-feature"><span class="check-icon">✓</span>${f}</div>`).join('')}
        ${['AI negotiations','Price forecasting','Priority support'].map(f=>`<div class="pricing-feature" style="opacity:0.5;"><span class="x-icon">✗</span>${f}</div>`).join('')}
      </div>
      <div class="pricing-card popular">
        <div class="popular-badge">Most Popular</div>
        <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--primary);margin-bottom:12px;">Growth</div>
        <div class="pricing-price">₹4,999<span class="pricing-period">/mo</span></div>
        <p style="font-size:13px;color:var(--text-secondary);margin:12px 0 20px;">For SMEs that want to automate procurement and save on every purchase.</p>
        <button class="btn btn-gradient w-full" style="margin-bottom:24px;" onclick="router.navigate('auth')">Start 14-Day Free Trial</button>
        ${['Unlimited RFQs','AI supplier sourcing','AI negotiation agent','GST verification (unlimited)','Price forecasting','WhatsApp agent','Priority email support','Analytics dashboard'].map(f=>`<div class="pricing-feature"><span class="check-icon">✓</span>${f}</div>`).join('')}
      </div>
      <div class="pricing-card">
        <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text-secondary);margin-bottom:12px;">Enterprise</div>
        <div class="pricing-price">Custom</div>
        <p style="font-size:13px;color:var(--text-secondary);margin:12px 0 20px;">For large procurement teams and enterprises with custom requirements.</p>
        <button class="btn btn-secondary w-full" style="margin-bottom:24px;">Talk to Sales</button>
        ${['Everything in Growth','Dedicated AI agent','Custom integrations','ERP sync (SAP/Oracle)','Dedicated account manager','SLA guarantee','On-premise option','Audit & compliance reports'].map(f=>`<div class="pricing-feature"><span class="check-icon">✓</span>${f}</div>`).join('')}
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer style="padding:48px;background:var(--text);color:rgba(255,255,255,0.6);">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div class="logo-icon">S</div>
          <span style="font-family:var(--font-display);font-weight:800;font-size:18px;color:white;">SupplyHub</span>
        </div>
        <div style="font-size:13px;">Source Smarter. Negotiate Faster.</div>
      </div>
      <div style="display:flex;gap:32px;font-size:13px;">
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;">Product</a>
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;">Privacy</a>
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;">Terms</a>
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;">Contact</a>
      </div>
      <div style="font-size:12px;">© 2025 SupplyHub Technologies Pvt Ltd. Made with ❤️ in India</div>
    </div>
  </footer>
`);


// LANDING - SUPPLIERS PAGE
router.register('landing-suppliers', () => `
  <nav class="landing-nav">
    <div style="display:flex;align-items:center;gap:10px;">
      <div class="logo-icon">S</div>
      <span class="logo-text">Supply<span>Hub</span></span>
    </div>
    <div style="display:flex;gap:28px;align-items:center;">
      <a href="#" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing')">Product</a>
      <a href="#" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing');setTimeout(()=>document.getElementById('pricing-section')?.scrollIntoView({behavior:'smooth'}),100)">Pricing</a>
      <a href="#" style="font-size:14px;font-weight:500;color:var(--primary);font-weight:700;text-decoration:none;" onclick="event.preventDefault();router.navigate('landing-suppliers')">Suppliers</a>
      <a href="#" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing-enterprise')">Enterprise</a>
    </div>
    <div style="display:flex;gap:12px;align-items:center;">
      <button class="btn btn-ghost" onclick="router.navigate('auth')">Sign In</button>
      <button class="btn btn-gradient" onclick="router.navigate('auth')">Start Free →</button>
    </div>
  </nav>

  <!-- HERO -->
  <section style="padding:100px 48px 80px;background:linear-gradient(180deg,var(--bg) 0%,var(--card) 100%);text-align:center;">
    <div style="max-width:760px;margin:0 auto;" class="animate-fadeInUp">
      <div class="hero-eyebrow" style="margin:0 auto 24px;display:inline-flex;">
        <span style="width:6px;height:6px;background:var(--success);border-radius:50%;display:inline-block;margin-right:8px;"></span>
        12,400+ Verified Suppliers Across India
      </div>
      <h1 style="font-family:var(--font-display);font-size:clamp(36px,5vw,64px);font-weight:800;line-height:1.1;letter-spacing:-2px;color:var(--text);margin-bottom:20px;">
        Find the right supplier<br/>
        <span style="background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;">before your competitors do</span>
      </h1>
      <p style="font-size:18px;color:var(--text-secondary);line-height:1.7;margin-bottom:36px;max-width:580px;margin-left:auto;margin-right:auto;">
        SupplyHub gives you access to India's largest database of GST-verified B2B suppliers — ranked by AI trust score, deal history, and real buyer reviews.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:48px;">
        <button class="btn btn-gradient btn-xl" onclick="router.navigate('auth')">Browse Suppliers Free →</button>
        <button class="btn btn-secondary btn-xl" onclick="router.navigate('auth')">Post a Requirement</button>
      </div>
      <!-- Stats bar -->
      <div style="display:flex;gap:0;justify-content:center;border:1px solid var(--border);border-radius:var(--radius-xl);overflow:hidden;background:var(--bg);max-width:680px;margin:0 auto;">
        ${[
          {val:'12,400+', label:'Verified Suppliers'},
          {val:'200+',    label:'Product Categories'},
          {val:'97%',     label:'GST Verified'},
          {val:'₹48 Cr+', label:'Deals Facilitated'},
        ].map((s,i)=>`
          <div style="flex:1;padding:20px 16px;text-align:center;${i>0?'border-left:1px solid var(--border);':''}">
            <div style="font-family:var(--font-display);font-size:22px;font-weight:800;color:var(--text);letter-spacing:-0.5px;">${s.val}</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- WHAT IS IT -->
  <section style="padding:80px 48px;background:var(--bg);">
    <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;">
      <div class="animate-fadeInUp">
        <div class="hero-eyebrow" style="margin-bottom:20px;display:inline-flex;">What is SupplyHub Supplier Directory?</div>
        <h2 style="font-family:var(--font-display);font-size:clamp(28px,3vw,42px);font-weight:800;letter-spacing:-1px;color:var(--text);margin-bottom:16px;">India's smartest B2B supplier database</h2>
        <p style="font-size:16px;color:var(--text-secondary);line-height:1.7;margin-bottom:16px;">
          The Supplier Directory is a curated, AI-ranked database of 12,400+ manufacturers, traders, and distributors across India — all GST-verified and fraud-checked before listing.
        </p>
        <p style="font-size:16px;color:var(--text-secondary);line-height:1.7;">
          Unlike generic directories, SupplyHub scores every supplier on payment history, delivery track record, product quality, and buyer reviews — so you always know who to trust.
        </p>
      </div>
      <div class="animate-fadeInUp delay-2" style="display:flex;flex-direction:column;gap:16px;">
        ${[
          {icon:'🔍', title:'AI-ranked results', desc:'Suppliers sorted by Trust Score, not who paid for placement.'},
          {icon:'✅', title:'GST verified in real-time', desc:'GSTIN cross-checked against MCA and GST portal instantly.'},
          {icon:'🛡️', title:'Fraud-detection AI', desc:'Every supplier scanned against 50,000+ known fraud patterns.'},
          {icon:'⭐', title:'Real buyer reviews', desc:'Only genuine reviews from verified transactions on SupplyHub.'},
        ].map(f=>`
          <div style="display:flex;gap:16px;padding:20px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius-xl);">
            <div style="font-size:28px;flex-shrink:0;">${f.icon}</div>
            <div>
              <div style="font-weight:700;font-size:15px;color:var(--text);margin-bottom:4px;">${f.title}</div>
              <div style="font-size:14px;color:var(--text-secondary);line-height:1.5;">${f.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- FEATURES GRID -->
  <section style="padding:80px 48px;background:var(--card);">
    <div style="max-width:1100px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:56px;">
        <h2 style="font-family:var(--font-display);font-size:40px;font-weight:800;letter-spacing:-1px;color:var(--text);">Features in Supplier Directory</h2>
        <p style="font-size:16px;color:var(--text-secondary);margin-top:12px;">Everything you need to source confidently — built into one screen</p>
      </div>
      <div class="grid-3">
        ${[
          {icon:'🤖', title:'AI Trust Score', desc:'Every supplier gets a 0–100 trust score computed from GST data, deal history, fraud signals, and buyer sentiment.', tag:'Live'},
          {icon:'📊', title:'Price Benchmarking', desc:'See the market average, lowest verified price, and AI price forecast for any product category — before you even contact a supplier.', tag:'Live'},
          {icon:'🔎', title:'Advanced Filters', desc:'Filter by category, city, trust score, MOQ, delivery time, GST status, years in business, and more.', tag:'Live'},
          {icon:'📋', title:'Instant RFQ', desc:'Send a Request for Quote to multiple suppliers in one click. No email chains, no back-and-forth.', tag:'Live'},
          {icon:'🤝', title:'AI Negotiation', desc:'Let SupplyHub\'s AI agent negotiate price on your behalf — automatically, 24/7, with a target price you set.', tag:'Live'},
          {icon:'💬', title:'WhatsApp Connect', desc:'Contact any supplier directly on WhatsApp with one tap. Pre-filled message templates included.', tag:'Live'},
          {icon:'📍', title:'Regional Pricing', desc:'Compare prices across Mumbai, Gujarat, Delhi NCR, Chennai, and 20+ other procurement hubs.', tag:'Live'},
          {icon:'🧾', title:'GST & PAN Lookup', desc:'Verify any GSTIN or PAN instantly. Full legal name, address, business type, and registration date.', tag:'Live'},
          {icon:'📈', title:'Supplier Analytics', desc:'See a supplier\'s deal volume, success rate, average delivery time, and repeat buyer rate over 12 months.', tag:'Beta'},
        ].map(f=>`
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-xl);padding:28px;transition:var(--transition);" onmouseenter="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-lg)';this.style.borderColor='var(--primary)'" onmouseleave="this.style.transform='';this.style.boxShadow='';this.style.borderColor='var(--border)'">
            <div style="font-size:36px;margin-bottom:14px;">${f.icon}</div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <h3 style="font-family:var(--font-display);font-size:16px;font-weight:700;color:var(--text);">${f.title}</h3>
              <span class="badge badge-${f.tag==='Live'?'success':'warning'}" style="font-size:10px;padding:2px 8px;">${f.tag}</span>
            </div>
            <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;">${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- TOP SUPPLIERS LIVE PREVIEW -->
  <section style="padding:80px 48px;background:var(--bg);">
    <div style="max-width:1100px;margin:0 auto;">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:40px;flex-wrap:wrap;gap:16px;">
        <div>
          <h2 style="font-family:var(--font-display);font-size:36px;font-weight:800;letter-spacing:-1px;color:var(--text);">Top Verified Suppliers</h2>
          <p style="font-size:15px;color:var(--text-secondary);margin-top:8px;">Ranked by AI Trust Score • Updated daily</p>
        </div>
        <button class="btn btn-gradient" onclick="router.navigate('auth')">View All 12,400+ →</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${DATA.suppliers.map((s,i)=>`
          <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-xl);padding:20px 24px;display:flex;align-items:center;gap:16px;transition:var(--transition);cursor:pointer;" onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shadow)';this.style.borderColor='var(--primary)'" onmouseleave="this.style.transform='';this.style.boxShadow='';this.style.borderColor='var(--border)'" onclick="router.navigate('auth')">
            <div style="width:12px;height:12px;border-radius:50%;background:${i<3?'var(--success)':i<5?'var(--primary)':'var(--border)'};flex-shrink:0;"></div>
            <div style="width:48px;height:48px;border-radius:var(--radius);background:linear-gradient(135deg,hsl(${i*40+200},70%,45%),hsl(${i*40+240},70%,55%));display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:18px;font-family:var(--font-display);flex-shrink:0;">${s.name.charAt(0)}</div>
            <div style="flex:1;min-width:0;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;flex-wrap:wrap;">
                <span style="font-weight:700;font-size:15px;color:var(--text);">${s.name}</span>
                ${s.badge?'<span class="badge badge-success" style="font-size:10px;padding:2px 8px;">✓ GST Verified</span>':'<span class="badge badge-warning" style="font-size:10px;padding:2px 8px;">Pending</span>'}
              </div>
              <div style="font-size:13px;color:var(--text-secondary);">${s.category} &nbsp;•&nbsp; ${s.city} &nbsp;•&nbsp; ${s.years} yrs in business &nbsp;•&nbsp; ${s.deals} deals closed</div>
            </div>
            <div style="display:flex;gap:24px;align-items:center;flex-shrink:0;flex-wrap:wrap;">
              <div style="text-align:center;">
                <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px;">Products</div>
                <div style="font-weight:700;font-size:14px;color:var(--text);">${s.products}</div>
              </div>
              <div style="text-align:center;">
                <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px;">Success</div>
                <div style="font-weight:700;font-size:14px;color:var(--success);">${s.successRate}%</div>
              </div>
              <div style="text-align:center;">
                <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px;">Trust Score</div>
                <div style="font-family:var(--font-display);font-size:22px;font-weight:800;color:${s.trust>=90?'var(--success)':'var(--primary)'};">${s.trust}</div>
              </div>
              <button class="btn btn-gradient btn-sm" onclick="event.stopPropagation();router.navigate('auth')">Connect →</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- PERKS -->
  <section style="padding:80px 48px;background:var(--card);">
    <div style="max-width:1100px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:56px;">
        <h2 style="font-family:var(--font-display);font-size:40px;font-weight:800;letter-spacing:-1px;color:var(--text);">Why buyers trust SupplyHub suppliers</h2>
        <p style="font-size:16px;color:var(--text-secondary);margin-top:12px;">Trust Score is the most honest signal of supplier quality. Here's how it's built.</p>
      </div>
      <div class="grid-4">
        ${[
          {icon:'🧾', title:'GST + PAN Verified',     desc:'Real-time check against MCA, GST portal, and Income Tax database.'},
          {icon:'📦', title:'Minimum 5 Deals',         desc:'Only suppliers with 5+ completed transactions on SupplyHub stay listed.'},
          {icon:'⭐', title:'4.0+ Average Rating',      desc:'Minimum 4.0 buyer rating required. Drops below? Auto-suspended.'},
          {icon:'🛡️', title:'Fraud Database Check',    desc:'Scanned against 50,000+ known fraud supplier patterns every 24 hrs.'},
          {icon:'📍', title:'Address Verified',         desc:'Physical address confirmed via GST registration and field checks.'},
          {icon:'💳', title:'No Payment Defaults',      desc:'Payment dispute history checked. Zero tolerance for buyer fraud.'},
          {icon:'📝', title:'Legal Status Clean',       desc:'Court case and lien checks via public legal databases.'},
          {icon:'🔄', title:'Updated Daily',            desc:'Trust Score recalculates every night with latest deal and review data.'},
        ].map(p=>`
          <div style="display:flex;flex-direction:column;align-items:flex-start;padding:24px;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-xl);">
            <div style="font-size:32px;margin-bottom:12px;">${p.icon}</div>
            <div style="font-weight:700;font-size:14px;color:var(--text);margin-bottom:6px;">${p.title}</div>
            <div style="font-size:13px;color:var(--text-secondary);line-height:1.5;">${p.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CATEGORIES -->
  <section style="padding:80px 48px;background:var(--bg);">
    <div style="max-width:1100px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:48px;">
        <h2 style="font-family:var(--font-display);font-size:36px;font-weight:800;letter-spacing:-1px;color:var(--text);">Browse by Category</h2>
        <p style="font-size:16px;color:var(--text-secondary);margin-top:8px;">Find verified suppliers across every industry</p>
      </div>
      <div class="grid-4">
        ${[
          {icon:'🔩', name:'Metals & Steel',        count:'1,840 suppliers'},
          {icon:'🧵', name:'Textiles & Fabrics',     count:'2,110 suppliers'},
          {icon:'🧪', name:'Chemicals',              count:'980 suppliers'},
          {icon:'💡', name:'Electronics',            count:'1,320 suppliers'},
          {icon:'🔧', name:'Industrial Equipment',   count:'760 suppliers'},
          {icon:'📦', name:'Packaging',              count:'640 suppliers'},
          {icon:'🧤', name:'Safety & PPE',           count:'420 suppliers'},
          {icon:'🏗️', name:'Construction',           count:'890 suppliers'},
        ].map(c=>`
          <div onclick="router.navigate('auth')" style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-xl);padding:24px 20px;cursor:pointer;transition:var(--transition);text-align:center;" onmouseenter="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-lg)';this.style.borderColor='var(--primary)'" onmouseleave="this.style.transform='';this.style.boxShadow='';this.style.borderColor='var(--border)'">
            <div style="font-size:36px;margin-bottom:12px;">${c.icon}</div>
            <div style="font-weight:700;font-size:14px;color:var(--text);margin-bottom:4px;">${c.name}</div>
            <div style="font-size:12px;color:var(--text-secondary);">${c.count}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section style="padding:80px 48px;background:linear-gradient(135deg,var(--primary),#0040CC);text-align:center;">
    <div style="max-width:600px;margin:0 auto;" class="animate-fadeInUp">
      <h2 style="font-family:var(--font-display);font-size:40px;font-weight:800;letter-spacing:-1px;color:white;margin-bottom:16px;">Start finding suppliers today</h2>
      <p style="font-size:16px;color:rgba(255,255,255,0.8);line-height:1.7;margin-bottom:36px;">Free forever. No credit card. Access 12,400+ verified suppliers instantly.</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-xl" style="background:white;color:var(--primary);font-weight:700;" onclick="router.navigate('auth')">Browse Suppliers Free →</button>
        <button class="btn btn-xl" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);" onclick="router.navigate('auth')">Post a Requirement</button>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer style="padding:48px;background:var(--text);color:rgba(255,255,255,0.6);">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div class="logo-icon">S</div>
          <span style="font-family:var(--font-display);font-weight:800;font-size:18px;color:white;">SupplyHub</span>
        </div>
        <div style="font-size:13px;">Source Smarter. Negotiate Faster.</div>
      </div>
      <div style="display:flex;gap:32px;font-size:13px;">
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing')">Product</a>
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing')">Privacy</a>
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing')">Terms</a>
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing')">Contact</a>
      </div>
    </div>
    <div style="font-size:12px;margin-top:24px;">© 2025 SupplyHub Technologies Pvt Ltd. Made with ❤️ in India</div>
  </footer>
`);


// LANDING - ENTERPRISE PAGE
router.register('landing-enterprise', () => `
  <nav class="landing-nav">
    <div style="display:flex;align-items:center;gap:10px;">
      <div class="logo-icon">S</div>
      <span class="logo-text">Supply<span>Hub</span></span>
    </div>
    <div style="display:flex;gap:28px;align-items:center;">
      <a href="#" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing')">Product</a>
      <a href="#" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing');setTimeout(()=>document.getElementById('pricing-section')?.scrollIntoView({behavior:'smooth'}),100)">Pricing</a>
      <a href="#" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing-suppliers')">Suppliers</a>
      <a href="#" style="font-size:14px;font-weight:500;color:var(--primary);font-weight:700;text-decoration:none;" onclick="event.preventDefault();router.navigate('landing-enterprise')">Enterprise</a>
    </div>
    <div style="display:flex;gap:12px;align-items:center;">
      <button class="btn btn-ghost" onclick="router.navigate('auth')">Sign In</button>
      <button class="btn btn-gradient" onclick="router.navigate('auth')">Talk to Sales →</button>
    </div>
  </nav>

  <!-- HERO -->
  <section style="padding:100px 48px 80px;background:linear-gradient(160deg,#0D1117 0%,#0a1628 60%,#0D1117 100%);position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 25% 60%,rgba(0,87,255,0.14),transparent 55%),radial-gradient(ellipse at 75% 30%,rgba(0,200,180,0.08),transparent 50%);pointer-events:none;"></div>
    <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;position:relative;z-index:1;">
      <div class="animate-fadeInUp">
        <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(0,87,255,0.15);border:1px solid rgba(0,87,255,0.3);border-radius:var(--radius-full);padding:6px 14px;font-size:12px;font-weight:600;color:#5B9BFF;margin-bottom:24px;">
          <span style="width:6px;height:6px;background:#5B9BFF;border-radius:50%;display:inline-block;"></span>
          Enterprise Procurement Platform
        </div>
        <h1 style="font-family:var(--font-display);font-size:clamp(32px,4vw,58px);font-weight:800;line-height:1.1;letter-spacing:-2px;color:white;margin-bottom:20px;">
          Procurement at<br/>
          <span style="background:linear-gradient(135deg,#5B9BFF,#00C2FF);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;">Enterprise Scale</span>
        </h1>
        <p style="font-size:17px;color:rgba(255,255,255,0.65);line-height:1.75;margin-bottom:36px;">Built for large procurement teams. ERP integrations, dedicated AI agents, custom approval workflows, and SLA-backed uptime. Trusted by 500+ enterprises across India.</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn btn-gradient btn-xl" onclick="router.navigate('auth')">Request a Demo →</button>
          <button class="btn btn-xl" style="background:rgba(255,255,255,0.08);color:white;border:1px solid rgba(255,255,255,0.2);" onclick="router.navigate('auth')">Talk to Sales</button>
        </div>
        <div style="display:flex;gap:32px;margin-top:40px;padding-top:32px;border-top:1px solid rgba(255,255,255,0.1);flex-wrap:wrap;">
          ${[{val:'500+',label:'Enterprise Clients'},{val:'₹500 Cr+',label:'Procurement Managed'},{val:'99.9%',label:'SLA Uptime'},{val:'24/7',label:'Dedicated Support'}].map(s=>`
            <div>
              <div style="font-family:var(--font-display);font-size:24px;font-weight:800;color:white;letter-spacing:-0.5px;">${s.val}</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.45);margin-top:2px;">${s.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <!-- Live dashboard preview panel -->
      <div class="animate-fadeInUp delay-2" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:var(--radius-2xl);padding:28px;backdrop-filter:blur(12px);">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
          <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:1px;">Enterprise Dashboard</div>
          <div style="display:flex;gap:6px;">
            <div style="width:8px;height:8px;border-radius:50%;background:#FF5F57;"></div>
            <div style="width:8px;height:8px;border-radius:50%;background:#FFBD2E;"></div>
            <div style="width:8px;height:8px;border-radius:50%;background:#28CA41;"></div>
          </div>
        </div>
        ${[
          {label:'Active Suppliers',     val:'4,820',   trend:'↑ 12% this month',  up:true},
          {label:'Monthly Savings',      val:'₹1.2 Cr', trend:'↑ 34% vs last month',up:true},
          {label:'Pending Negotiations', val:'142',     trend:'AI handling 89',     up:true},
          {label:'Avg Price Reduction',  val:'21.4%',   trend:'↑ 3.1% improvement', up:true},
          {label:'ERP Sync Status',      val:'Live',    trend:'SAP • Oracle • Tally',up:true},
          {label:'SLA Uptime',           val:'99.97%',  trend:'Last 90 days',       up:true},
        ].map(k=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07);">
            <span style="font-size:13px;color:rgba(255,255,255,0.55);">${k.label}</span>
            <div style="text-align:right;">
              <div style="font-weight:700;color:white;font-size:14px;">${k.val}</div>
              <div style="font-size:11px;color:#5DDE9B;">${k.trend}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- WHAT IS IT -->
  <section style="padding:80px 48px;background:var(--bg);">
    <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;">
      <div class="animate-fadeInUp">
        <div class="hero-eyebrow" style="margin-bottom:20px;display:inline-flex;">What is SupplyHub Enterprise?</div>
        <h2 style="font-family:var(--font-display);font-size:clamp(28px,3vw,42px);font-weight:800;letter-spacing:-1px;color:var(--text);margin-bottom:16px;">The procurement OS for large teams</h2>
        <p style="font-size:16px;color:var(--text-secondary);line-height:1.7;margin-bottom:16px;">
          SupplyHub Enterprise is a full-stack procurement platform built for companies managing ₹10 Cr+ in annual procurement. It replaces spreadsheets, email chains, and fragmented tools with a single AI-powered command center.
        </p>
        <p style="font-size:16px;color:var(--text-secondary);line-height:1.7;">
          From supplier discovery to deal closure — with ERP sync, custom workflows, multi-user roles, and a dedicated AI agent trained on your procurement data.
        </p>
        <button class="btn btn-gradient" style="margin-top:24px;" onclick="router.navigate('auth')">See Enterprise in Action →</button>
      </div>
      <div class="animate-fadeInUp delay-2" style="display:flex;flex-direction:column;gap:16px;">
        ${[
          {icon:'🔗', title:'ERP Integration',         desc:'Plug into SAP, Oracle, Microsoft Dynamics, and Tally. Zero manual data entry.'},
          {icon:'🤖', title:'Private AI Agent',         desc:'A dedicated AI trained exclusively on your data, suppliers, and preferences.'},
          {icon:'👥', title:'Multi-User Workflows',     desc:'Role-based access, spend limits, approval chains, and full audit trails.'},
          {icon:'📊', title:'Board-Level Reporting',    desc:'Custom dashboards and automated reports delivered to any stakeholder.'},
        ].map(f=>`
          <div style="display:flex;gap:16px;padding:20px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius-xl);">
            <div style="font-size:28px;flex-shrink:0;">${f.icon}</div>
            <div>
              <div style="font-weight:700;font-size:15px;color:var(--text);margin-bottom:4px;">${f.title}</div>
              <div style="font-size:14px;color:var(--text-secondary);line-height:1.5;">${f.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- FEATURES GRID -->
  <section style="padding:80px 48px;background:var(--card);">
    <div style="max-width:1100px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:56px;">
        <h2 style="font-family:var(--font-display);font-size:40px;font-weight:800;letter-spacing:-1px;color:var(--text);">Everything in Enterprise</h2>
        <p style="font-size:16px;color:var(--text-secondary);margin-top:12px;">Built for procurement teams that can't afford mistakes</p>
      </div>
      <div class="grid-3">
        ${[
          {icon:'🔗', title:'ERP Sync',              desc:'Real-time two-way sync with SAP S/4HANA, Oracle Fusion, Tally Prime, and Microsoft Dynamics 365.',tag:'Live'},
          {icon:'🤖', title:'Dedicated AI Agent',    desc:'Private AI model fine-tuned on your purchase history. Gets smarter with every deal you close.',tag:'Live'},
          {icon:'👥', title:'Role-Based Access',     desc:'Unlimited users with custom roles — Viewer, Requester, Approver, Admin. Full granular control.',tag:'Live'},
          {icon:'✅', title:'Approval Workflows',    desc:'Multi-level approval chains with spend thresholds, auto-escalation, and mobile approvals.',tag:'Live'},
          {icon:'📊', title:'Custom Dashboards',     desc:'Build and schedule any report. Category spend, savings attribution, supplier performance, and more.',tag:'Live'},
          {icon:'🛡️', title:'Enterprise Security',  desc:'SOC 2 Type II, ISO 27001, AES-256 encryption, SSO (Okta/Azure AD), and data residency in India.',tag:'Live'},
          {icon:'📞', title:'Dedicated CSM',         desc:'Named Customer Success Manager for onboarding, training, and quarterly business reviews.',tag:'Live'},
          {icon:'⚡', title:'4-Hour SLA',            desc:'Guaranteed 4-hour response on critical issues. 99.9% uptime SLA with financial penalties.',tag:'Live'},
          {icon:'🏢', title:'On-Premise Option',     desc:'Deploy SupplyHub entirely within your own infrastructure for maximum data sovereignty.',tag:'Available'},
          {icon:'📋', title:'Compliance Reports',    desc:'Auto-generated audit trails, vendor compliance reports, and GST reconciliation for finance teams.',tag:'Live'},
          {icon:'🔄', title:'Custom Integrations',   desc:'REST API + webhooks for any internal tool. Custom connectors built by our engineering team.',tag:'Live'},
          {icon:'🧠', title:'AI Model Training',     desc:'Train the AI on your preferred suppliers, blacklists, category rules, and negotiation strategies.',tag:'Beta'},
        ].map(f=>`
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-xl);padding:28px;transition:var(--transition);" onmouseenter="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-lg)';this.style.borderColor='var(--primary)'" onmouseleave="this.style.transform='';this.style.boxShadow='';this.style.borderColor='var(--border)'">
            <div style="font-size:36px;margin-bottom:14px;">${f.icon}</div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <h3 style="font-family:var(--font-display);font-size:16px;font-weight:700;color:var(--text);">${f.title}</h3>
              <span class="badge badge-${f.tag==='Live'?'success':f.tag==='Beta'?'warning':'primary'}" style="font-size:10px;padding:2px 8px;">${f.tag}</span>
            </div>
            <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;">${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- VS GROWTH COMPARISON -->
  <section style="padding:80px 48px;background:var(--bg);">
    <div style="max-width:900px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:48px;">
        <h2 style="font-family:var(--font-display);font-size:36px;font-weight:800;letter-spacing:-1px;color:var(--text);">Growth vs Enterprise</h2>
        <p style="font-size:16px;color:var(--text-secondary);margin-top:8px;">See what's included at each plan</p>
      </div>
      <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-xl);overflow:hidden;">
        <div style="display:grid;grid-template-columns:2fr 1fr 1fr;background:var(--bg);padding:16px 24px;border-bottom:1px solid var(--border);">
          <div style="font-size:13px;font-weight:700;color:var(--text-secondary);">Feature</div>
          <div style="font-size:13px;font-weight:700;color:var(--text);text-align:center;">Growth</div>
          <div style="font-size:13px;font-weight:700;color:var(--primary);text-align:center;">Enterprise</div>
        </div>
        ${[
          ['Supplier Directory Access',      '✓','✓'],
          ['AI Negotiation Agent',           '✓','✓'],
          ['Price Forecasting',              '✓','✓'],
          ['GST Verification',               'Unlimited','Unlimited'],
          ['Users',                          'Up to 5','Unlimited'],
          ['ERP Integration',                '✗','✓'],
          ['Dedicated AI Agent',             '✗','✓'],
          ['Approval Workflows',             '✗','✓'],
          ['Custom Dashboards',              '✗','✓'],
          ['On-Premise Deployment',          '✗','✓'],
          ['Dedicated Account Manager',      '✗','✓'],
          ['SLA Guarantee',                  '✗','99.9%'],
          ['AI Model Training',              '✗','✓'],
          ['Audit & Compliance Reports',     '✗','✓'],
        ].map((row,i)=>`
          <div style="display:grid;grid-template-columns:2fr 1fr 1fr;padding:14px 24px;border-bottom:1px solid var(--border);background:${i%2===0?'var(--card)':'var(--bg)'};">
            <div style="font-size:14px;color:var(--text);">${row[0]}</div>
            <div style="font-size:14px;text-align:center;color:${row[1]==='✗'?'var(--text-secondary)':'var(--success)'};">${row[1]}</div>
            <div style="font-size:14px;text-align:center;color:${row[2]==='✗'?'var(--text-secondary)':'var(--primary)'};">${row[2]}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <section style="padding:80px 48px;background:var(--card);">
    <div style="max-width:840px;margin:0 auto;text-align:center;">
      <h2 style="font-family:var(--font-display);font-size:40px;font-weight:800;letter-spacing:-1px;color:var(--text);margin-bottom:16px;">Enterprise Pricing</h2>
      <p style="font-size:16px;color:var(--text-secondary);margin-bottom:48px;">Custom pricing based on team size, transaction volume, and integrations. Most enterprises see full ROI within 60 days.</p>
      <div style="background:var(--bg);border:2px solid var(--primary);border-radius:var(--radius-2xl);padding:48px;text-align:left;position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;right:0;background:var(--primary);color:white;font-size:11px;font-weight:700;padding:6px 16px;border-radius:0 0 0 var(--radius-lg);letter-spacing:1px;text-transform:uppercase;">Most Powerful</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
          <div>
            <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--primary);margin-bottom:12px;">Enterprise Plan</div>
            <div style="font-family:var(--font-display);font-size:48px;font-weight:800;color:var(--text);letter-spacing:-2px;line-height:1;">Custom</div>
            <p style="font-size:14px;color:var(--text-secondary);margin:12px 0 8px;">Starting from <strong>₹25,000/mo</strong> for teams of 10+</p>
            <p style="font-size:13px;color:var(--text-secondary);margin-bottom:28px;">Volume discounts for ₹50 Cr+ annual procurement. Annual billing saves 20%.</p>
            <button class="btn btn-gradient btn-lg" style="width:100%;margin-bottom:12px;" onclick="router.navigate('auth')">Talk to Sales →</button>
            <button class="btn btn-secondary btn-lg" style="width:100%;" onclick="router.navigate('auth')">Request a Demo</button>
          </div>
          <div>
            <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:16px;text-transform:uppercase;letter-spacing:1px;">Everything included</div>
            ${['All features in Growth plan','Dedicated AI procurement agent','ERP integration (SAP / Oracle / Tally)','Unlimited users & custom roles','Multi-level approval workflows','Named Customer Success Manager','99.9% uptime SLA guarantee','On-premise deployment option','Custom AI model training','Audit & compliance reports','REST API + custom integrations','Quarterly business reviews'].map(f=>`
              <div style="display:flex;align-items:center;gap:10px;padding:7px 0;font-size:14px;border-bottom:1px solid var(--border);">
                <span style="color:var(--success);font-weight:700;flex-shrink:0;">✓</span>${f}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SOCIAL PROOF -->
  <section style="padding:80px 48px;background:var(--bg);">
    <div style="max-width:1100px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:48px;">
        <h2 style="font-family:var(--font-display);font-size:36px;font-weight:800;letter-spacing:-1px;color:var(--text);">Trusted by procurement teams across India</h2>
      </div>
      <div class="grid-3">
        ${[
          {quote:'SupplyHub replaced our entire procurement stack. SAP integration worked out of the box and we saved ₹1.8 Cr in the first quarter.',name:'Rajesh Nair',role:'VP Procurement, Tata AutoComp',avatar:'RN'},
          {quote:'The dedicated AI agent learned our supplier preferences in 2 weeks. Now it negotiates better than our senior buyers.',name:'Priya Menon',role:'CPO, Infosys BPM',avatar:'PM'},
          {quote:'Approval workflows and audit trails cut our compliance audit time from 2 weeks to 2 days. Genuinely transformative.',name:'Amit Sharma',role:'Head of Procurement, JSW Steel',avatar:'AS'},
        ].map(t=>`
          <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-xl);padding:28px;display:flex;flex-direction:column;gap:20px;">
            <div style="font-size:32px;color:var(--primary);font-family:Georgia,serif;line-height:1;">"</div>
            <p style="font-size:15px;color:var(--text);line-height:1.7;flex:1;">${t.quote}</p>
            <div style="display:flex;align-items:center;gap:12px;padding-top:16px;border-top:1px solid var(--border);">
              <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--secondary));display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:13px;flex-shrink:0;">${t.avatar}</div>
              <div>
                <div style="font-weight:700;font-size:14px;color:var(--text);">${t.name}</div>
                <div style="font-size:12px;color:var(--text-secondary);">${t.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section style="padding:80px 48px;background:linear-gradient(135deg,#0D1117,#0a1e3d);text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(0,87,255,0.12),transparent 60%);pointer-events:none;"></div>
    <div style="max-width:600px;margin:0 auto;position:relative;z-index:1;" class="animate-fadeInUp">
      <h2 style="font-family:var(--font-display);font-size:40px;font-weight:800;letter-spacing:-1px;color:white;margin-bottom:16px;">Ready to transform your procurement?</h2>
      <p style="font-size:16px;color:rgba(255,255,255,0.65);line-height:1.7;margin-bottom:36px;">Book a 30-minute demo with our enterprise team. We'll show you exactly how SupplyHub fits your procurement stack.</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-gradient btn-xl" onclick="router.navigate('auth')">Book a Demo →</button>
        <button class="btn btn-xl" style="background:rgba(255,255,255,0.08);color:white;border:1px solid rgba(255,255,255,0.2);" onclick="router.navigate('auth')">Talk to Sales</button>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer style="padding:48px;background:var(--text);color:rgba(255,255,255,0.6);">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div class="logo-icon">S</div>
          <span style="font-family:var(--font-display);font-weight:800;font-size:18px;color:white;">SupplyHub</span>
        </div>
        <div style="font-size:13px;">Source Smarter. Negotiate Faster.</div>
      </div>
      <div style="display:flex;gap:32px;font-size:13px;">
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing')">Product</a>
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing')">Privacy</a>
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing')">Terms</a>
        <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;" onclick="event.preventDefault();router.navigate('landing')">Contact</a>
      </div>
    </div>
    <div style="font-size:12px;margin-top:24px;">© 2025 SupplyHub Technologies Pvt Ltd. Made with ❤️ in India</div>
  </footer>
`);

// AUTH PAGE
router.register('auth', () => `
  <div class="auth-page">
    <div class="auth-left">
      <div style="position:relative;z-index:1;text-align:center;max-width:400px;">
        <div style="display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:48px;">
          <div class="logo-icon" style="width:44px;height:44px;font-size:20px;">S</div>
          <span style="font-family:var(--font-display);font-weight:800;font-size:22px;color:white;">SupplyHub</span>
        </div>
        <h2 style="font-family:var(--font-display);font-size:32px;font-weight:800;color:white;letter-spacing:-1px;margin-bottom:16px;">"Source Smarter. Negotiate Faster."</h2>
        <p style="font-size:15px;color:rgba(255,255,255,0.7);line-height:1.7;margin-bottom:40px;">Join 50,000+ businesses that use SupplyHub to automate procurement and save lakhs every month.</p>
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${[
            {icon:'✅',text:'12,400+ Verified Suppliers across India'},
            {icon:'🤖',text:'AI negotiates on your behalf 24/7'},
            {icon:'💰',text:'Average 18.5% savings on every purchase'},
            {icon:'🔒',text:'GST verified & fraud-protected marketplace'},
          ].map(i=>`<div style="display:flex;align-items:center;gap:12px;text-align:left;"><span style="font-size:20px;">${i.icon}</span><span style="font-size:14px;color:rgba(255,255,255,0.85);">${i.text}</span></div>`).join('')}
        </div>
      </div>
    </div>

    <div class="auth-right">
      <div class="auth-form">
        <div style="margin-bottom:32px;">
          <h2 style="font-family:var(--font-display);font-size:28px;font-weight:800;color:var(--text);margin-bottom:6px;">Create your account</h2>
          <p style="font-size:14px;color:var(--text-secondary);">Already have an account? <a href="#" style="color:var(--primary);font-weight:600;" onclick="showLogin()">Sign in</a></p>
        </div>

        <div id="auth-form-content">
          <button class="btn btn-secondary w-full" style="gap:10px;margin-bottom:20px;" onclick="handleGoogleAuth()">
            <svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/><path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/></svg>
            Continue with Google
          </button>

          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
            <div style="flex:1;height:1px;background:var(--border);"></div>
            <span style="font-size:12px;color:var(--text-secondary);">or sign up with email</span>
            <div style="flex:1;height:1px;background:var(--border);"></div>
          </div>

          <div class="grid-2" style="gap:16px;">
            <div class="form-group" style="margin-bottom:0;">
              <label class="form-label">First Name</label>
              <input type="text" class="form-input" placeholder="Rahul">
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <label class="form-label">Last Name</label>
              <input type="text" class="form-input" placeholder="Sharma">
            </div>
          </div>
          <div class="form-group" style="margin-top:16px;">
            <label class="form-label">Business Email</label>
            <input type="email" class="form-input" placeholder="rahul@company.com">
          </div>
          <div class="form-group">
            <label class="form-label">Company Name</label>
            <input type="text" class="form-input" placeholder="TechProcure Solutions Pvt Ltd">
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number</label>
            <div class="input-group">
              <span class="input-icon" style="left:14px;font-size:14px;">🇮🇳</span>
              <input type="tel" class="form-input" style="padding-left:44px;" placeholder="+91 98765 43210">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" placeholder="Min 8 characters">
          </div>
          <button class="btn btn-gradient w-full btn-lg" onclick="handleSignup()" style="margin-top:8px;">
            Create Account — It's Free
          </button>
          <p style="font-size:12px;color:var(--text-secondary);text-align:center;margin-top:16px;">By signing up, you agree to our <a href="#" style="color:var(--primary);">Terms of Service</a> and <a href="#" style="color:var(--primary);">Privacy Policy</a></p>
        </div>

        <div id="otp-form" class="hidden">
          <div style="text-align:center;margin-bottom:28px;">
            <div style="font-size:48px;margin-bottom:12px;">📱</div>
            <h3 style="font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--text);margin-bottom:6px;">Verify your phone</h3>
            <p style="font-size:14px;color:var(--text-secondary);">Enter the 6-digit OTP sent to +91 98765 43210</p>
          </div>
          <div style="display:flex;gap:12px;justify-content:center;margin-bottom:24px;">
            ${[0,1,2,3,4,5].map(i=>`<input type="text" maxlength="1" style="width:52px;height:60px;text-align:center;font-size:24px;font-weight:700;border:2px solid var(--border);border-radius:var(--radius-lg);font-family:var(--font-display);color:var(--text);background:var(--card);outline:none;transition:var(--transition);" oninput="handleOTPInput(this,${i})" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'">`).join('')}
          </div>
          <button class="btn btn-gradient w-full btn-lg" onclick="handleOTPVerify()">Verify OTP</button>
          <p style="text-align:center;margin-top:16px;font-size:13px;color:var(--text-secondary);">Didn't receive? <a href="#" style="color:var(--primary);font-weight:600;">Resend in 30s</a></p>
        </div>
      </div>
    </div>
  </div>
`);

// DASHBOARD
router.register('dashboard', () => `
  <div class="page-header animate-fadeInUp">
    <div>
      <div class="page-title">Good morning, Rahul 👋</div>
      <div class="page-subtitle">Here's what's happening with your procurement today</div>
    </div>
    <div style="display:flex;gap:12px;">
      <button class="btn btn-secondary" onclick="router.navigate('search')">🔍 Search Products</button>
      <button class="btn btn-gradient" onclick="showNewRFQ()">+ New RFQ</button>
    </div>
  </div>

  <!-- AI Insights Banner -->
  <div class="insights-bar animate-fadeInUp delay-1" style="margin-bottom:24px;">
    <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
      <span style="font-size:16px;">🤖</span>
      <span style="font-size:13px;font-weight:700;opacity:0.9;">AI INSIGHT</span>
    </div>
    <div class="insights-divider"></div>
    <div class="insight-item">
      <span class="insight-label">Steel Prices</span>
      <span class="insight-value" style="color:#FFE066;">↑ Rising +4.2%</span>
    </div>
    <div class="insights-divider"></div>
    <div class="insight-item">
      <span class="insight-label">Best Buy Now</span>
      <span class="insight-value">HDPE Pipes</span>
    </div>
    <div class="insights-divider"></div>
    <div class="insight-item">
      <span class="insight-label">Pending Negotiations</span>
      <span class="insight-value">3 Active</span>
    </div>
    <div class="insights-divider"></div>
    <div class="insight-item">
      <span class="insight-label">Potential Savings Today</span>
      <span class="insight-value" style="color:#5DDE9B;">₹82,000+</span>
    </div>
    <div class="insights-divider"></div>
    <div class="insight-item">
      <span class="insight-label">AI Status</span>
      <span class="insight-value"><span class="ai-status-dot"></span>All Systems Active</span>
    </div>
    <button class="btn btn-secondary btn-sm" style="margin-left:auto;flex-shrink:0;background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.2);color:white;" onclick="router.navigate('analytics')">View Analytics →</button>
  </div>

  <!-- Stats Grid -->
  <div class="grid-4 animate-fadeInUp delay-2" style="margin-bottom:24px;">
    <div class="stat-card primary">
      <div class="stat-icon primary">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
      </div>
      <div class="stat-value">1,284</div>
      <div class="stat-label">Verified Suppliers</div>
      <div class="stat-change up">↑ +24 this week</div>
    </div>
    <div class="stat-card success">
      <div class="stat-icon success">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <div class="stat-value">₹4.2L</div>
      <div class="stat-label">Total Savings</div>
      <div class="stat-change up">↑ +₹82K this month</div>
    </div>
    <div class="stat-card warning">
      <div class="stat-icon warning">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
      </div>
      <div class="stat-value">47</div>
      <div class="stat-label">Negotiations Done</div>
      <div class="stat-change up">↑ +12 this month</div>
    </div>
    <div class="stat-card purple">
      <div class="stat-icon purple">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
      </div>
      <div class="stat-value">18.5%</div>
      <div class="stat-label">Avg Price Reduction</div>
      <div class="stat-change up">↑ +2.1% improvement</div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 320px;gap:20px;margin-bottom:24px;">
    <!-- Recent Deals -->
    <div class="card animate-fadeInUp delay-3">
      <div class="card-header">
        <div class="card-title">Active Deals</div>
        <button class="btn btn-ghost btn-sm" onclick="router.navigate('deals')">View All →</button>
      </div>
      <div class="table-container" style="border:none;border-radius:0;">
        <table>
          <thead><tr><th>Product</th><th>Supplier</th><th>Value</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            ${DATA.deals.map(d => `
              <tr>
                <td><div style="font-weight:600;">${d.product}</div><div style="font-size:12px;color:var(--text-secondary);">${d.qty}</div></td>
                <td style="font-size:13px;">${d.supplier}</td>
                <td><strong>${d.value}</strong></td>
                <td><span class="badge badge-${d.status==='active'?'primary':d.status==='completed'?'success':'warning'}">${d.status}</span></td>
                <td><button class="btn btn-secondary btn-sm" onclick="router.navigate('deals')">View</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Activity Feed -->
    <div class="card animate-fadeInUp delay-4">
      <div class="card-header">
        <div class="card-title">Activity Feed</div>
        <span class="badge badge-primary">Live</span>
      </div>
      <div class="card-body" style="padding:16px;">
        ${DATA.activities.map(a => `
          <div class="activity-item">
            <div class="activity-dot" style="background:${a.color};"></div>
            <div style="flex:1;">
              <div style="font-size:13px;color:var(--text);line-height:1.4;">${a.text}</div>
              <div class="activity-time">${a.time}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- Trending Products -->
  <div class="animate-fadeInUp" style="margin-bottom:24px;">
    <div class="section-header">
      <div>
        <div class="section-title">AI Recommended Products</div>
        <div class="section-subtitle">Based on your purchase history and market trends</div>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="router.navigate('search')">See All →</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
      ${DATA.products.slice(0,4).map(p => renderProductCard(p)).join('')}
    </div>
  </div>

  <!-- Quick Search -->
  <div class="card animate-fadeInUp" style="padding:24px;">
    <div style="display:flex;align-items:center;gap:20px;">
      <div style="flex:1;">
        <div class="card-title" style="margin-bottom:4px;">Quick Search</div>
        <p style="font-size:13px;color:var(--text-secondary);">Search 5 lakh+ products from verified suppliers</p>
      </div>
      <div class="search-bar-large" style="flex:2;max-width:480px;">
        <input type="text" placeholder="Search products, categories, suppliers..." onkeypress="if(event.key==='Enter'){router.navigate('search')}">
        <div class="search-bar-actions">
          <button class="btn btn-secondary btn-sm" title="Voice Search">🎙️</button>
          <button class="btn btn-secondary btn-sm" title="Visual Search" onclick="router.navigate('visual-search')">📷</button>
          <button class="btn btn-gradient btn-sm" onclick="router.navigate('search')">Search</button>
        </div>
      </div>
    </div>
  </div>
`);

// SEARCH PAGE
router.register('search', () => `
  <div class="page-header animate-fadeInUp">
    <div>
      <div class="page-title">Product Search</div>
      <div class="page-subtitle">Search from 5 lakh+ products by 12,400+ verified suppliers</div>
    </div>
  </div>

  <!-- Search Hero -->
  <div class="search-hero animate-fadeInUp delay-1">
    <div style="position:relative;z-index:1;">
      <h2 style="font-family:var(--font-display);font-size:28px;font-weight:800;color:white;margin-bottom:6px;letter-spacing:-0.5px;">What are you looking for?</h2>
      <p style="color:rgba(255,255,255,0.7);font-size:14px;margin-bottom:20px;">Text search, voice search, or upload a product image</p>
      <div class="search-bar-large">
        <span style="padding-left:16px;color:var(--text-secondary);font-size:18px;">🔍</span>
        <input type="text" id="main-search" placeholder="e.g. Stainless Steel Sheet 304, 2mm thickness..." style="flex:1;">
        <div class="search-bar-actions">
          <button class="btn btn-secondary btn-sm" onclick="handleVoiceSearch()" title="Voice Search">🎙️ Voice</button>
          <button class="btn btn-secondary btn-sm" onclick="router.navigate('visual-search')" title="Visual Search">📷 Image</button>
          <button class="btn btn-gradient" onclick="handleSearch()">Search Products</button>
        </div>
      </div>
      <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;">
        <span style="font-size:12px;color:rgba(255,255,255,0.6);">Trending:</span>
        ${['SS 304 Sheet','HDPE Pipe','Cotton Yarn','LED Driver','Ball Bearing','PP Granules'].map(t=>`<span class="tag" style="background:rgba(255,255,255,0.15);border-color:rgba(255,255,255,0.2);color:rgba(255,255,255,0.9);" onclick="document.getElementById('main-search').value='${t}';handleSearch()">${t}</span>`).join('')}
      </div>
    </div>
  </div>

  <!-- AI Insights Bar -->
  <div class="insights-bar animate-fadeInUp delay-2" style="margin-bottom:20px;">
    <div style="font-size:13px;font-weight:700;opacity:0.8;flex-shrink:0;">📊 MARKET INTEL</div>
    <div class="insights-divider"></div>
    <div class="insight-item"><span class="insight-label">Avg Market Price</span><span class="insight-value">₹220/kg</span></div>
    <div class="insights-divider"></div>
    <div class="insight-item"><span class="insight-label">Lowest Verified</span><span class="insight-value" style="color:#5DDE9B;">₹185/kg</span></div>
    <div class="insights-divider"></div>
    <div class="insight-item"><span class="insight-label">Highest Quoted</span><span class="insight-value" style="color:#FFE066;">₹265/kg</span></div>
    <div class="insights-divider"></div>
    <div class="insight-item"><span class="insight-label">Price Trend</span><span class="insight-value" style="color:#FF9B9B;">↑ Rising +4.2%</span></div>
    <div class="insights-divider"></div>
    <div class="insight-item"><span class="insight-label">Total Suppliers</span><span class="insight-value">48 Found</span></div>
    <div class="insights-divider"></div>
    <div class="insight-item"><span class="insight-label">AI Recommendation</span><span class="insight-value" style="color:#5DDE9B;">Buy Now</span></div>
  </div>

  <div style="display:flex;gap:20px;">
    <!-- Filter Sidebar -->
    <div class="filter-sidebar animate-fadeInUp delay-2">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <span style="font-weight:700;font-size:14px;">Filters</span>
        <button class="btn btn-ghost btn-sm" style="font-size:12px;color:var(--primary);">Reset All</button>
      </div>

      <div class="filter-group">
        <div class="filter-group-label">Price Range</div>
        <div style="display:flex;gap:8px;">
          <input type="number" class="form-input" style="padding:8px;" placeholder="Min">
          <input type="number" class="form-input" style="padding:8px;" placeholder="Max">
        </div>
      </div>

      <div class="filter-group">
        <div class="filter-group-label">Supplier Rating</div>
        ${['4.5+ ⭐','4.0+ ⭐','3.5+ ⭐'].map((r,i)=>`
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;padding:4px 0;cursor:pointer;">
            <input type="radio" name="rating" ${i===0?'checked':''}> ${r}
          </label>`).join('')}
      </div>

      <div class="filter-group">
        <div class="filter-group-label">Supplier Type</div>
        ${['✅ Verified Only','All Suppliers'].map((r,i)=>`
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;padding:4px 0;cursor:pointer;">
            <input type="radio" name="stype" ${i===0?'checked':''}> ${r}
          </label>`).join('')}
      </div>

      <div class="filter-group">
        <div class="filter-group-label">Location</div>
        ${['Maharashtra','Gujarat','Delhi NCR','Tamil Nadu','Karnataka'].map(l=>`
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;padding:4px 0;cursor:pointer;">
            <input type="checkbox"> ${l}
          </label>`).join('')}
      </div>

      <div class="filter-group">
        <div class="filter-group-label">Category</div>
        ${['Metals','Textiles','Electronics','Chemicals','Industrial','Safety'].map(c=>`
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;padding:4px 0;cursor:pointer;">
            <input type="checkbox"> ${c}
          </label>`).join('')}
      </div>

      <div class="filter-group">
        <div class="filter-group-label">Delivery Time</div>
        ${['1-3 days','3-7 days','7-14 days','14+ days'].map(d=>`
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;padding:4px 0;cursor:pointer;">
            <input type="checkbox"> ${d}
          </label>`).join('')}
      </div>

      <button class="btn btn-gradient w-full btn-sm">Apply Filters</button>
    </div>

    <!-- Results -->
    <div style="flex:1;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div style="font-size:14px;color:var(--text-secondary);">Showing <strong style="color:var(--text);">8 results</strong> — sorted by AI Recommendation</div>
        <div style="display:flex;gap:8px;align-items:center;">
          <select class="form-select" style="width:auto;padding:8px 12px;font-size:13px;">
            <option>Sort: AI Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
            <option>Trust Score</option>
          </select>
          <div style="display:flex;gap:4px;background:var(--bg);padding:4px;border-radius:var(--radius);border:1px solid var(--border);">
            <button class="icon-btn" style="width:32px;height:32px;border-radius:var(--radius-sm);" title="Grid View">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z"/></svg>
            </button>
            <button class="icon-btn" style="width:32px;height:32px;border-radius:var(--radius-sm);" title="List View">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div class="grid-auto animate-fadeInUp delay-3">
        ${DATA.products.map(p => renderProductCard(p)).join('')}
      </div>
    </div>
  </div>
`);

// SUPPLIERS PAGE
router.register('suppliers', () => `
  <div class="page-header animate-fadeInUp">
    <div>
      <div class="page-title">Supplier Directory</div>
      <div class="page-subtitle">12,400+ verified suppliers across India</div>
    </div>
    <button class="btn btn-gradient" onclick="showAddSupplier()">+ Add Supplier</button>
  </div>

  <div class="card animate-fadeInUp delay-1" style="padding:20px;margin-bottom:20px;">
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <div class="search-global" style="max-width:320px;">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Search suppliers...">
      </div>
      ${['All','Verified','Premium','New'].map((t,i)=>`<div class="tab ${i===1?'active':''}" style="padding:9px 16px;">${t}</div>`).join('')}
      <select class="form-select" style="width:auto;padding:9px 14px;font-size:13px;margin-left:auto;">
        <option>All Industries</option>
        <option>Metals & Steel</option>
        <option>Textiles</option>
        <option>Electronics</option>
        <option>Chemicals</option>
      </select>
      <select class="form-select" style="width:auto;padding:9px 14px;font-size:13px;">
        <option>All Locations</option>
        <option>Mumbai</option>
        <option>Gujarat</option>
        <option>Delhi</option>
      </select>
      <select class="form-select" style="width:auto;padding:9px 14px;font-size:13px;">
        <option>Trust Score: All</option>
        <option>90-100</option>
        <option>80-90</option>
        <option>70-80</option>
      </select>
    </div>
  </div>

  <div style="display:flex;flex-direction:column;gap:16px;">
    ${DATA.suppliers.map((s,i) => `
      <div class="supplier-card animate-fadeInUp delay-${(i%4)+1}" onclick="router.navigate('supplier-detail', {id:${s.id}})">
        <div class="supplier-avatar" style="background:linear-gradient(135deg,hsl(${i*40+200},70%,45%),hsl(${i*40+240},70%,55%));">
          ${s.name.charAt(0)}
        </div>
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
            <div style="font-weight:700;font-size:15px;">${s.name}</div>
            ${s.badge ? '<div class="verified-badge">✓ Verified</div>' : '<div class="badge badge-warning">⏳ Pending</div>'}
          </div>
          <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px;">${s.category} • ${s.city}</div>
          <div style="display:flex;gap:16px;flex-wrap:wrap;">
            <span class="product-meta-item">⭐ ${s.rating} Rating</span>
            <span class="product-meta-item">🤝 ${s.deals} Deals</span>
            <span class="product-meta-item">📦 ${s.products} Products</span>
            <span class="product-meta-item">🏢 ${s.years} Years in Business</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:12px;">
          <div>
            <div style="text-align:right;font-size:11px;color:var(--text-secondary);margin-bottom:4px;">Trust Score</div>
            <div style="text-align:right;">
              <span style="font-family:var(--font-display);font-size:24px;font-weight:800;color:${s.trust>90?'var(--success)':s.trust>80?'var(--primary)':'var(--warning)'};">${s.trust}</span>
              <span style="font-size:12px;color:var(--text-secondary);">/100</span>
            </div>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation();handleContact(${s.id})">Contact</button>
            <button class="btn btn-gradient btn-sm" onclick="event.stopPropagation();router.navigate('negotiations')">Negotiate</button>
          </div>
        </div>
      </div>
    `).join('')}
  </div>
`);

// SUPPLIER DETAIL
router.register('supplier-detail', (params) => {
  const s = DATA.suppliers.find(x=>x.id===(params?.id||1)) || DATA.suppliers[0];
  return `
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;" class="animate-fadeInUp">
    <button class="btn btn-ghost btn-sm" onclick="router.navigate('suppliers')">← Back to Suppliers</button>
    <span style="color:var(--text-secondary);">/</span>
    <span style="font-size:14px;color:var(--text-secondary);">${s.name}</span>
  </div>

  <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;">
    <div>
      <!-- Supplier Header -->
      <div class="card animate-fadeInUp" style="padding:28px;margin-bottom:20px;">
        <div style="display:flex;gap:20px;align-items:flex-start;">
          <div class="supplier-avatar" style="width:80px;height:80px;font-size:32px;border-radius:var(--radius-lg);">${s.name.charAt(0)}</div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
              <h1 style="font-family:var(--font-display);font-size:24px;font-weight:800;color:var(--text);">${s.name}</h1>
              ${s.badge ? '<div class="verified-badge" style="font-size:13px;padding:5px 12px;">✓ Verified Supplier</div>' : ''}
            </div>
            <div style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;">${s.category} • ${s.city}, India</div>
            <div style="display:flex;gap:20px;flex-wrap:wrap;">
              <div><div style="font-size:12px;color:var(--text-secondary);">GSTIN</div><div style="font-size:13px;font-weight:600;">${s.gst}</div></div>
              <div><div style="font-size:12px;color:var(--text-secondary);">Years</div><div style="font-size:13px;font-weight:600;">${s.years} years</div></div>
              <div><div style="font-size:12px;color:var(--text-secondary);">Rating</div><div style="font-size:13px;font-weight:600;">⭐ ${s.rating}/5</div></div>
              <div><div style="font-size:12px;color:var(--text-secondary);">Success Rate</div><div style="font-size:13px;font-weight:600;color:var(--success);">${s.successRate}%</div></div>
            </div>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn btn-secondary">📩 Send RFQ</button>
            <button class="btn btn-gradient" onclick="router.navigate('negotiations')">🤖 Start Negotiation</button>
          </div>
        </div>
      </div>

      <!-- Verification Status -->
      <div class="card animate-fadeInUp delay-1" style="margin-bottom:20px;">
        <div class="card-header">
          <div class="card-title">Verified Badge Requirements</div>
          <div class="badge badge-success">✓ All Requirements Met</div>
        </div>
        <div class="card-body">
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;">
            ${[
              {label:'GST Verified',done:true,icon:'✅'},
              {label:'5+ Completed Deals',done:true,icon:'✅'},
              {label:'Positive Buyer Reviews',done:true,icon:'✅'},
              {label:'Fraud Score < Threshold',done:s.trust>80,icon:s.trust>80?'✅':'❌'},
            ].map(r=>`
              <div style="display:flex;align-items:center;gap:10px;padding:12px;background:var(--${r.done?'success':'danger'}-10);border-radius:var(--radius);border:1px solid rgba(${r.done?'20,184,106':'240,68,56'},0.2);">
                <span style="font-size:18px;">${r.icon}</span>
                <span style="font-size:13px;font-weight:600;color:var(--${r.done?'success':'danger'});">${r.label}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Products -->
      <div class="card animate-fadeInUp delay-2">
        <div class="card-header">
          <div class="card-title">Products (${s.products})</div>
          <button class="btn btn-ghost btn-sm">View All →</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:20px;">
          ${DATA.products.slice(0,3).map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div style="display:flex;flex-direction:column;gap:16px;">
      <!-- Trust Score -->
      <div class="card animate-fadeInUp delay-1" style="padding:24px;text-align:center;">
        <div style="font-size:13px;font-weight:700;color:var(--text-secondary);margin-bottom:12px;">TRUST SCORE</div>
        <div style="font-family:var(--font-display);font-size:56px;font-weight:900;color:${s.trust>90?'var(--success)':'var(--primary)'};letter-spacing:-2px;">${s.trust}</div>
        <div style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;">/100 • ${s.trust>90?'Excellent':s.trust>80?'Good':'Fair'}</div>
        <div class="trust-meter">
          ${[
            {label:'Payment History',val:95},
            {label:'Delivery Track',val:92},
            {label:'Product Quality',val:88},
            {label:'Communication',val:90},
            {label:'GST Compliance',val:100},
          ].map(t=>`
            <div class="trust-bar">
              <span class="trust-bar-label">${t.label}</span>
              <div class="trust-bar-track"><div class="trust-bar-fill" style="width:${t.val}%;"></div></div>
              <span class="trust-bar-val">${t.val}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Stats -->
      <div class="card animate-fadeInUp delay-2" style="padding:20px;">
        <div class="card-title" style="margin-bottom:16px;">Performance</div>
        ${[
          {label:'Total Deals',val:s.deals,icon:'🤝'},
          {label:'Success Rate',val:s.successRate+'%',icon:'📈'},
          {label:'Total Products',val:s.products,icon:'📦'},
          {label:'Avg Response',val:'2 hrs',icon:'⚡'},
        ].map(m=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);">
            <span style="font-size:13px;color:var(--text-secondary);">${m.icon} ${m.label}</span>
            <span style="font-weight:700;font-size:14px;">${m.val}</span>
          </div>
        `).join('')}
      </div>

      <!-- Quick Contact -->
      <div class="card animate-fadeInUp delay-3" style="padding:20px;background:linear-gradient(135deg,var(--primary-10),var(--secondary-10));border-color:var(--primary-20);">
        <div class="card-title" style="margin-bottom:4px;color:var(--primary);">🚀 Quick Contact</div>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px;">Send an instant enquiry or start a WhatsApp conversation</p>
        <button class="btn btn-gradient w-full btn-sm" style="margin-bottom:8px;" onclick="showToast('RFQ sent to ${s.name}!','success')">Send RFQ</button>
        <button class="btn btn-secondary w-full btn-sm" style="gap:6px;" onclick="showWhatsApp()">
          <span style="color:#25D366;">💬</span> WhatsApp
        </button>
      </div>
    </div>
  </div>
`});

// NEGOTIATIONS PAGE
router.register('negotiations', () => `
  <div class="page-header animate-fadeInUp">
    <div>
      <div class="page-title">Negotiation Center</div>
      <div class="page-subtitle">AI-powered negotiations that save you money</div>
    </div>
    <button class="btn btn-gradient" onclick="showNewNegotiation()">+ New Negotiation</button>
  </div>

  <!-- Stats -->
  <div class="grid-4 animate-fadeInUp delay-1" style="margin-bottom:24px;">
    ${[
      {label:'Total Savings',val:'₹4.2L',icon:'💰',color:'success'},
      {label:'Success Rate',val:'94%',icon:'🎯',color:'primary'},
      {label:'Live Negotiations',val:'3',icon:'⚡',color:'warning'},
      {label:'Avg Time Saved',val:'2.3 hrs',icon:'⏱️',color:'purple'},
    ].map(s=>`
      <div class="stat-card ${s.color}">
        <div class="stat-icon ${s.color}">${s.icon}</div>
        <div class="stat-value">${s.val}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('')}
  </div>

  <!-- Negotiations List + Live Panel -->
  <div style="display:grid;grid-template-columns:1fr 380px;gap:20px;">
    <div>
      <div class="tabs animate-fadeInUp delay-2" style="margin-bottom:16px;">
        <div class="tab active">All</div>
        <div class="tab">Live <span class="nav-badge" style="background:var(--warning);margin-left:4px;">3</span></div>
        <div class="tab">Completed</div>
        <div class="tab">Rejected</div>
      </div>

      <div style="display:flex;flex-direction:column;gap:12px;">
        ${DATA.negotiations.map((n,i) => `
          <div class="card animate-fadeInUp delay-${i+1}" style="padding:20px;cursor:pointer;transition:var(--transition-slow);" onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shadow)'" onmouseleave="this.style.transform='';this.style.boxShadow=''">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px;">
              <div>
                <div style="font-weight:700;font-size:15px;margin-bottom:2px;">${n.product}</div>
                <div style="font-size:13px;color:var(--text-secondary);">${n.supplier}</div>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                ${n.mode==='ai'?'<div class="badge badge-primary">🤖 AI Mode</div>':'<div class="badge badge-gray">👤 Manual</div>'}
                <div class="badge badge-${n.status==='live'?'warning':n.status==='completed'?'success':n.status==='pending'?'primary':'danger'}">${n.status}</div>
              </div>
            </div>
            ${n.status!=='rejected' ? `
              <div class="offer-track">
                <div class="offer-row">
                  <span class="offer-label" style="color:var(--danger);">Supplier</span>
                  <div class="offer-bar"><div class="progress-fill" style="width:${n.startPrice/(n.startPrice*1.2)*100}%;background:linear-gradient(90deg,var(--danger),#FF8E8E);"></div></div>
                  <span class="offer-val" style="color:var(--danger);">₹${n.startPrice}</span>
                </div>
                <div class="offer-row">
                  <span class="offer-label" style="color:var(--primary);">Current</span>
                  <div class="offer-bar"><div class="progress-fill" style="width:${(n.currentOffer||n.finalPrice||n.startPrice)/(n.startPrice*1.2)*100}%;"></div></div>
                  <span class="offer-val" style="color:var(--primary);">₹${n.currentOffer||n.finalPrice||n.startPrice}</span>
                </div>
                ${n.aiSuggested?`
                <div class="offer-row">
                  <span class="offer-label" style="color:var(--success);">AI Suggests</span>
                  <div class="offer-bar"><div class="progress-fill success" style="width:${n.aiSuggested/(n.startPrice*1.2)*100}%;"></div></div>
                  <span class="offer-val" style="color:var(--success);">₹${n.aiSuggested}</span>
                </div>`:''}
                ${n.targetPrice?`
                <div class="offer-row">
                  <span class="offer-label" style="color:var(--text-secondary);">Your Target</span>
                  <div class="offer-bar"><div class="progress-fill warning" style="width:${n.targetPrice/(n.startPrice*1.2)*100}%;"></div></div>
                  <span class="offer-val" style="color:var(--text-secondary);">₹${n.targetPrice}</span>
                </div>`:''}
              </div>
              ${n.probability?`
              <div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;padding-top:12px;border-top:1px solid var(--border);">
                <div>
                  <div style="font-size:12px;color:var(--text-secondary);margin-bottom:4px;">Success Probability</div>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div class="progress-bar" style="width:120px;"><div class="progress-fill success" style="width:${n.probability}%;"></div></div>
                    <span style="font-weight:700;color:var(--success);">${n.probability}%</span>
                  </div>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:12px;color:var(--text-secondary);">Potential Savings</div>
                  <div style="font-weight:700;color:var(--success);">${n.savings||'₹'+((n.startPrice-(n.targetPrice||n.aiSuggested||0))*10).toLocaleString()}</div>
                </div>
                <button class="btn btn-gradient btn-sm" onclick="showNegotiationChat()">View Live →</button>
              </div>`:''}
            ` : '<div style="text-align:center;color:var(--danger);font-size:13px;padding:8px 0;">❌ Negotiation rejected — supplier did not meet terms</div>'}
          </div>
        `).join('')}
      </div>
    </div>

    <!-- AI Agent Panel -->
    <div class="card animate-fadeInUp delay-2" style="height:fit-content;position:sticky;top:calc(var(--topbar-height)+20px);">
      <div class="card-header" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark));">
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="width:32px;height:32px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;">🤖</div>
          <div>
            <div style="font-weight:700;color:white;font-size:14px;">AI Negotiation Agent</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.7);"><span class="ai-status-dot"></span>Active & Learning</div>
          </div>
        </div>
        <div class="badge" style="background:rgba(255,255,255,0.2);color:white;border:none;">v2.4</div>
      </div>
      <div class="card-body">
        <div style="margin-bottom:16px;">
          <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;">AI PERFORMANCE TODAY</div>
          ${[
            {label:'Negotiations Started',val:5},
            {label:'Deals Closed',val:3},
            {label:'Total Savings',val:'₹82K'},
            {label:'Avg Reduction',val:'19.2%'},
          ].map(m=>`
            <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:13px;">
              <span style="color:var(--text-secondary);">${m.label}</span>
              <span style="font-weight:700;color:var(--primary);">${m.val}</span>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-gradient w-full" onclick="showNewNegotiation()" style="margin-bottom:8px;">🤖 Let AI Negotiate</button>
        <button class="btn btn-secondary w-full" onclick="showManualNegotiation()">💬 Negotiate Myself</button>
      </div>
    </div>
  </div>
`);

// ANALYTICS
router.register('analytics', () => `
  <div class="page-header animate-fadeInUp">
    <div>
      <div class="page-title">Analytics & Insights</div>
      <div class="page-subtitle">Comprehensive procurement intelligence dashboard</div>
    </div>
    <div style="display:flex;gap:8px;">
      <select class="form-select" style="width:auto;">
        <option>Last 30 Days</option>
        <option>Last 90 Days</option>
        <option>This Year</option>
      </select>
      <button class="btn btn-secondary">📥 Export</button>
    </div>
  </div>

  <!-- KPI Grid -->
  <div class="kpi-grid animate-fadeInUp delay-1">
    ${[
      {label:'Total Spend',val:'₹48.2L',change:'+12%',up:false,icon:'💳',color:'primary'},
      {label:'Total Savings',val:'₹4.2L',change:'+34%',up:true,icon:'💰',color:'success'},
      {label:'Active Suppliers',val:'1,284',change:'+8%',up:true,icon:'🏢',color:'primary'},
      {label:'Avg Price Reduction',val:'18.5%',change:'+2.1%',up:true,icon:'📉',color:'success'},
      {label:'Deals Closed',val:'47',change:'+28%',up:true,icon:'🤝',color:'warning'},
      {label:'Negotiation Success',val:'94%',change:'+4%',up:true,icon:'🎯',color:'purple'},
    ].map(k=>`
      <div class="stat-card ${k.color}">
        <div class="stat-icon ${k.color}">${k.icon}</div>
        <div class="stat-value">${k.val}</div>
        <div class="stat-label">${k.label}</div>
        <div class="stat-change ${k.up?'up':'down'}">${k.up?'↑':'↓'} ${k.change}</div>
      </div>
    `).join('')}
  </div>

  <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px;margin-bottom:20px;">
    <!-- Spend Chart -->
    <div class="chart-container animate-fadeInUp delay-2">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
        <div>
          <div class="card-title">Monthly Spend & Savings</div>
          <div style="font-size:13px;color:var(--text-secondary);">Last 6 months</div>
        </div>
        <div class="tabs"><div class="tab active">Spend</div><div class="tab">Savings</div></div>
      </div>
      <canvas id="spendChart" height="200"></canvas>
    </div>

    <!-- Category Breakdown -->
    <div class="chart-container animate-fadeInUp delay-3">
      <div class="card-title" style="margin-bottom:16px;">Spend by Category</div>
      <canvas id="categoryChart" height="200"></canvas>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
    <!-- Supplier Performance -->
    <div class="card animate-fadeInUp delay-3">
      <div class="card-header">
        <div class="card-title">Top Suppliers by Value</div>
      </div>
      <div class="card-body" style="padding:0;">
        <table style="width:100%;">
          <thead><tr><th>Supplier</th><th>Value</th><th>Savings</th><th>Rating</th></tr></thead>
          <tbody>
            ${DATA.suppliers.slice(0,5).map((s,i) => `
              <tr>
                <td><div style="font-weight:600;font-size:13px;">${s.name.split(' ').slice(0,2).join(' ')}</div></td>
                <td style="font-size:13px;">₹${(Math.random()*10+2).toFixed(1)}L</td>
                <td style="color:var(--success);font-weight:600;font-size:13px;">₹${(Math.random()*50+10).toFixed(0)}K</td>
                <td><span class="badge badge-success">⭐ ${s.rating}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Negotiation Performance -->
    <div class="card animate-fadeInUp delay-4">
      <div class="card-header">
        <div class="card-title">AI Negotiation Performance</div>
      </div>
      <div class="card-body">
        <canvas id="negotiationChart" height="180"></canvas>
        <div style="display:flex;gap:16px;margin-top:16px;flex-wrap:wrap;">
          <div><div style="font-size:12px;color:var(--text-secondary);">AI Won</div><div style="font-weight:800;font-size:18px;color:var(--success);">32</div></div>
          <div><div style="font-size:12px;color:var(--text-secondary);">Manual Won</div><div style="font-weight:800;font-size:18px;color:var(--primary);">15</div></div>
          <div><div style="font-size:12px;color:var(--text-secondary);">Avg AI Saving</div><div style="font-weight:800;font-size:18px;color:var(--success);">22.4%</div></div>
        </div>
      </div>
    </div>
  </div>
`);

// PRICE INTELLIGENCE
router.register('price-intelligence', () => `
  <div class="page-header animate-fadeInUp">
    <div>
      <div class="page-title">Price Intelligence</div>
      <div class="page-subtitle">AI-powered market pricing and demand forecasting</div>
    </div>
    <button class="btn btn-gradient" onclick="showToast('Generating price report...','info')">📊 Generate Report</button>
  </div>

  <!-- Product selector -->
  <div class="card animate-fadeInUp delay-1" style="padding:20px;margin-bottom:20px;">
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
      <div class="search-global" style="max-width:300px;"><span class="search-icon">🔍</span><input type="text" placeholder="Search product for price intel..."></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        ${['SS Sheet 304','HDPE Pipe 110mm','Cotton Yarn 40s','LED Driver 60W'].map((p,i)=>`<div class="tag ${i===0?'active':''}" onclick="document.querySelectorAll('.tag').forEach(t=>t.classList.remove('active'));this.classList.add('active')">${p}</div>`).join('')}
      </div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px;margin-bottom:20px;">
    <!-- Main Price Chart -->
    <div class="chart-container animate-fadeInUp delay-2">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
        <div>
          <div class="card-title">SS Sheet 304 — Price Trend</div>
          <div style="font-size:13px;color:var(--text-secondary);">Historical + 30-day AI forecast</div>
        </div>
        <div style="display:flex;gap:8px;">
          <div class="badge badge-primary">📈 Forecast</div>
          <div class="badge badge-success">Buy Signal: Strong</div>
        </div>
      </div>
      <canvas id="priceChart" height="220"></canvas>
      <div style="display:flex;gap:20px;margin-top:16px;padding-top:16px;border-top:1px solid var(--border);">
        <div><div style="font-size:12px;color:var(--text-secondary);">Current Price</div><div style="font-weight:800;font-size:20px;">₹220/kg</div></div>
        <div><div style="font-size:12px;color:var(--text-secondary);">30D Forecast</div><div style="font-weight:800;font-size:20px;color:var(--danger);">₹238/kg ↑</div></div>
        <div><div style="font-size:12px;color:var(--text-secondary);">Best Price</div><div style="font-weight:800;font-size:20px;color:var(--success);">₹185/kg</div></div>
        <div><div style="font-size:12px;color:var(--text-secondary);">Volatility</div><div style="font-weight:800;font-size:20px;color:var(--warning);">Medium</div></div>
      </div>
    </div>

    <!-- AI Recommendations -->
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div class="card animate-fadeInUp delay-3" style="padding:20px;background:linear-gradient(135deg,var(--success-10),rgba(20,184,106,0.05));border-color:rgba(20,184,106,0.3);">
        <div style="font-size:12px;font-weight:700;color:var(--success);margin-bottom:8px;">🤖 AI RECOMMENDATION</div>
        <div style="font-weight:700;font-size:16px;margin-bottom:6px;">Buy Now — Price Rising</div>
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.5;">Steel prices are forecasted to rise 8% in the next 30 days. Current market price of ₹220/kg is at a 6-month low. Recommend bulk order of 500+ kg for maximum savings.</p>
        <button class="btn btn-success btn-sm" style="margin-top:12px;" onclick="router.navigate('search')">Start Sourcing →</button>
      </div>

      <div class="card animate-fadeInUp delay-4" style="padding:20px;">
        <div class="card-title" style="margin-bottom:12px;">Regional Pricing</div>
        ${[
          {city:'Mumbai',price:'₹185-195/kg',trend:'↑'},
          {city:'Gujarat',price:'₹178-188/kg',trend:'→'},
          {city:'Delhi NCR',price:'₹192-205/kg',trend:'↑'},
          {city:'Chennai',price:'₹198-212/kg',trend:'↓'},
        ].map(r=>`
          <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:13px;">
            <span>${r.city}</span>
            <span style="font-weight:600;">${r.price}</span>
            <span style="color:${r.trend==='↑'?'var(--danger)':r.trend==='↓'?'var(--success)':'var(--warning)'};">${r.trend}</span>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- Demand Forecast -->
  <div class="card animate-fadeInUp" style="padding:24px;margin-bottom:20px;">
    <div class="card-title" style="margin-bottom:16px;">Demand Forecast — Next 30 Days</div>
    <canvas id="demandChart" height="120"></canvas>
  </div>
`);

// AI ASSISTANT
router.register('ai-assistant', () => `
  <div style="display:grid;grid-template-columns:260px 1fr;gap:0;height:calc(100vh - var(--topbar-height) - 56px);">
    <!-- Chat History Sidebar -->
    <div style="background:var(--card);border-right:1px solid var(--border);display:flex;flex-direction:column;border-radius:var(--radius-xl) 0 0 var(--radius-xl);overflow:hidden;">
      <div style="padding:16px;border-bottom:1px solid var(--border);">
        <button class="btn btn-gradient w-full btn-sm" onclick="clearChat()">+ New Chat</button>
      </div>
      <div style="padding:12px;flex:1;overflow-y:auto;">
        <div style="font-size:11px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">Today</div>
        ${['SS Sheet supplier search','HDPE pipe price comparison','Negotiate with Mehta Metals','Cotton yarn market analysis'].map((c,i)=>`
          <div style="padding:10px 12px;border-radius:var(--radius);cursor:pointer;font-size:13px;color:var(--text-secondary);margin-bottom:4px;transition:var(--transition);${i===0?'background:var(--primary-10);color:var(--primary);font-weight:600;':''}" onmouseenter="if(${i!==0})this.style.background='var(--bg)'" onmouseleave="if(${i!==0})this.style.background=''">
            ${c}
          </div>
        `).join('')}
        <div style="font-size:11px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px;margin:12px 0 8px;">Yesterday</div>
        ${['Fraud check on supplier','RFQ generation for Q2','Price alert setup'].map(c=>`
          <div style="padding:10px 12px;border-radius:var(--radius);cursor:pointer;font-size:13px;color:var(--text-secondary);margin-bottom:4px;transition:var(--transition);" onmouseenter="this.style.background='var(--bg)'" onmouseleave="this.style.background=''">
            ${c}
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Main Chat Area -->
    <div class="card" style="border-radius:0 var(--radius-xl) var(--radius-xl) 0;display:flex;flex-direction:column;overflow:hidden;border-left:none;">
      <!-- Chat Header -->
      <div style="padding:16px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,var(--primary-10),var(--secondary-10));">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:40px;height:40px;background:linear-gradient(135deg,var(--primary),var(--secondary));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;">🤖</div>
          <div>
            <div style="font-weight:700;font-size:15px;">SupplyHub AI Assistant</div>
            <div style="font-size:12px;color:var(--text-secondary);"><span class="ai-status-dot"></span>Online • Procurement Expert</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <div class="badge badge-primary">Hindi ✓</div>
          <div class="badge badge-success">GST Access ✓</div>
          <div class="badge badge-purple">Price Intel ✓</div>
        </div>
      </div>

      <!-- Messages -->
      <div class="chat-messages" id="chat-messages">
        ${DATA.chatMessages.map(m => `
          <div class="chat-message ${m.role}">
            <div class="message-avatar ${m.role}">${m.role==='ai'?'🤖':'RS'}</div>
            <div>
              <div class="message-bubble">${m.text}</div>
              <div style="font-size:11px;color:var(--text-secondary);margin-top:4px;${m.role==='user'?'text-align:right;':''}">${m.time}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Suggested Prompts -->
      <div style="padding:12px 20px;border-top:1px solid var(--border);background:var(--bg);">
        <div style="font-size:11px;font-weight:600;color:var(--text-secondary);margin-bottom:8px;">SUGGESTED PROMPTS</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${[
            '🔍 Find suppliers for ball bearings',
            '📈 Price forecast for copper wire',
            '🤝 Generate RFQ template',
            '✅ Verify GST: 27AABCT3518Q1ZV',
            '💰 Compare prices for HDPE pipes',
          ].map(p=>`<div class="tag" onclick="sendAIMessage('${p.replace(/'/g,"\\'")}',this)">${p}</div>`).join('')}
        </div>
      </div>

      <!-- Input -->
      <div class="chat-input-area">
        <button class="icon-btn" title="Voice input" onclick="handleVoiceSearch()">🎙️</button>
        <input type="text" class="chat-input" id="ai-input" placeholder="Ask anything about procurement, suppliers, prices..." onkeypress="if(event.key==='Enter')sendAIMessage()">
        <button class="btn btn-gradient btn-sm" onclick="sendAIMessage()">Send →</button>
      </div>
    </div>
  </div>
`);

// PROFILE PAGE
router.register('profile', () => `
  <div class="page-header animate-fadeInUp">
    <div class="page-title">Profile & Settings</div>
    <button class="btn btn-gradient" onclick="showToast('Profile saved!','success')">Save Changes</button>
  </div>

  <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;">
    <div>
      <!-- User Details -->
      <div class="card animate-fadeInUp delay-1" style="margin-bottom:20px;">
        <div class="card-header">
          <div class="card-title">Personal Information</div>
          <div class="verified-badge">✓ Account Verified</div>
        </div>
        <div class="card-body">
          <div style="display:flex;align-items:center;gap:20px;margin-bottom:24px;">
            <div style="position:relative;">
              <div style="width:80px;height:80px;background:linear-gradient(135deg,var(--primary),var(--purple));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:800;color:white;">${DATA.user.avatar}</div>
              <div class="online-dot"></div>
            </div>
            <div>
              <div style="font-weight:700;font-size:18px;">${DATA.user.name}</div>
              <div style="font-size:13px;color:var(--text-secondary);">${DATA.user.email}</div>
              <button class="btn btn-secondary btn-sm" style="margin-top:8px;">Change Photo</button>
            </div>
          </div>
          <div class="grid-2">
            <div class="form-group"><label class="form-label">First Name</label><input class="form-input" value="Rahul"></div>
            <div class="form-group"><label class="form-label">Last Name</label><input class="form-input" value="Sharma"></div>
            <div class="form-group"><label class="form-label">Email</label><input class="form-input" value="${DATA.user.email}"></div>
            <div class="form-group"><label class="form-label">Phone</label><input class="form-input" value="+91 98765 43210"></div>
            <div class="form-group"><label class="form-label">City</label><input class="form-input" value="${DATA.user.city}"></div>
            <div class="form-group"><label class="form-label">State</label><input class="form-input" value="${DATA.user.state}"></div>
          </div>
        </div>
      </div>

      <!-- Company & GST -->
      <div class="card animate-fadeInUp delay-2">
        <div class="card-header">
          <div class="card-title">Company & GST Verification</div>
        </div>
        <div class="card-body">
          <div class="form-group"><label class="form-label">Company Name</label><input class="form-input" value="${DATA.user.company}"></div>
          <div class="form-group">
            <label class="form-label">GST Number</label>
            <div style="display:flex;gap:8px;">
              <input class="form-input" id="gst-input" value="${DATA.user.gst}" style="font-family:monospace;font-weight:600;letter-spacing:1px;">
              <button class="btn btn-primary" onclick="verifyGST()">Verify GST</button>
            </div>
          </div>

          <!-- GST Verified State -->
          <div id="gst-result" style="background:var(--success-10);border:1px solid rgba(20,184,106,0.3);border-radius:var(--radius-lg);padding:20px;margin-top:16px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
              <span style="font-size:20px;">✅</span>
              <div style="font-weight:700;color:var(--success);">GST Verified Successfully</div>
            </div>
            <div class="grid-2" style="gap:12px;">
              ${[
                {label:'Legal Name',val:'TechProcure Solutions Pvt Ltd'},
                {label:'Address',val:'Andheri East, Mumbai - 400069'},
                {label:'State',val:'Maharashtra (State Code: 27)'},
                {label:'Business Type',val:'Private Limited Company'},
                {label:'GST Status',val:'✅ Active & Regular'},
                {label:'Registration Date',val:'April 12, 2019'},
              ].map(f=>`
                <div>
                  <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px;">${f.label}</div>
                  <div style="font-size:13px;font-weight:600;">${f.val}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div style="display:flex;flex-direction:column;gap:16px;">
      <!-- Trust Score -->
      <div class="card animate-fadeInUp delay-1" style="padding:24px;text-align:center;">
        <div style="font-size:13px;font-weight:700;color:var(--text-secondary);margin-bottom:12px;">YOUR TRUST SCORE</div>
        <div style="font-family:var(--font-display);font-size:64px;font-weight:900;color:var(--primary);letter-spacing:-3px;">${DATA.user.trustScore}</div>
        <div style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;">/100 • Good Standing</div>
        <div class="progress-bar" style="margin-bottom:8px;"><div class="progress-fill" style="width:${DATA.user.trustScore}%;"></div></div>
        <div style="font-size:12px;color:var(--text-secondary);">13 points to reach "Excellent"</div>
      </div>

      <!-- Plan -->
      <div class="card animate-fadeInUp delay-2" style="padding:20px;background:linear-gradient(135deg,var(--primary-10),var(--secondary-10));border-color:var(--primary-20);">
        <div style="font-size:11px;font-weight:700;color:var(--primary);margin-bottom:4px;">CURRENT PLAN</div>
        <div style="font-size:24px;font-weight:800;color:var(--text);margin-bottom:8px;">${DATA.user.plan}</div>
        <div style="font-size:13px;color:var(--text-secondary);margin-bottom:16px;">Renews on July 1, 2025</div>
        <button class="btn btn-gradient w-full btn-sm" onclick="router.navigate('billing')">Upgrade to Enterprise</button>
      </div>

      <!-- Verification History -->
      <div class="card animate-fadeInUp delay-3" style="padding:20px;">
        <div class="card-title" style="margin-bottom:12px;">Verification History</div>
        ${[
          {action:'GST Verified',date:'Today, 10:24 AM',status:'success'},
          {action:'Phone Verified',date:'March 5, 2025',status:'success'},
          {action:'Email Verified',date:'March 5, 2025',status:'success'},
          {action:'PAN Verified',date:'March 4, 2025',status:'success'},
        ].map(v=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);font-size:12px;">
            <span>✅ ${v.action}</span>
            <span style="color:var(--text-secondary);">${v.date}</span>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`);

// DEALS
router.register('deals', () => `
  <div class="page-header animate-fadeInUp">
    <div>
      <div class="page-title">Deal Management</div>
      <div class="page-subtitle">Track and manage all your procurement deals</div>
    </div>
    <button class="btn btn-gradient">+ Create Deal</button>
  </div>

  <div class="tabs animate-fadeInUp delay-1" style="margin-bottom:20px;">
    <div class="tab active">All Deals</div>
    <div class="tab">Active <span class="nav-badge">3</span></div>
    <div class="tab">Pending <span class="nav-badge orange">5</span></div>
    <div class="tab">Completed <span class="nav-badge green">39</span></div>
    <div class="tab">Cancelled</div>
  </div>

  <div class="table-container animate-fadeInUp delay-2">
    <table>
      <thead>
        <tr><th>Deal</th><th>Supplier</th><th>Quantity</th><th>Value</th><th>Status</th><th>Delivery</th><th>Payment</th><th>Action</th></tr>
      </thead>
      <tbody>
        ${[...DATA.deals, ...DATA.deals.map(d=>({...d,id:d.id+3,status:['completed','pending','active'][Math.floor(Math.random()*3)]}))]
          .map(d => `
          <tr>
            <td>
              <div style="font-weight:600;">${d.product}</div>
              <div style="font-size:11px;color:var(--text-secondary);">Deal #${1000+d.id}</div>
            </td>
            <td style="font-size:13px;">${d.supplier}</td>
            <td style="font-size:13px;">${d.qty}</td>
            <td><strong>${d.value}</strong></td>
            <td><span class="badge badge-${d.status==='active'?'primary':d.status==='completed'?'success':d.status==='pending'?'warning':'danger'}">${d.status}</span></td>
            <td style="font-size:12px;">${d.delivery}</td>
            <td style="font-size:12px;">${d.payment}</td>
            <td>
              <div style="display:flex;gap:6px;">
                <button class="btn btn-secondary btn-sm">View</button>
                <button class="btn btn-ghost btn-sm">📄</button>
              </div>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
`);

// VISUAL SEARCH
router.register('visual-search', () => `
  <div class="page-header animate-fadeInUp">
    <div>
      <div class="page-title">Visual Product Search</div>
      <div class="page-subtitle">Upload a product image and AI will find matching suppliers</div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
    <!-- Upload Zone -->
    <div class="animate-fadeInUp delay-1">
      <div class="upload-zone" id="upload-zone" onclick="triggerUpload()">
        <div class="upload-icon">📷</div>
        <h3 style="font-family:var(--font-display);font-weight:700;font-size:18px;margin-bottom:8px;">Drop product image here</h3>
        <p style="color:var(--text-secondary);font-size:14px;margin-bottom:16px;">or click to browse files</p>
        <button class="btn btn-primary">Choose Image</button>
        <p style="font-size:12px;color:var(--text-secondary);margin-top:12px;">Supports: JPG, PNG, WEBP • Max 10MB</p>
        <input type="file" id="file-input" accept="image/*" style="display:none;" onchange="handleImageUpload(event)">
      </div>

      <div style="margin-top:16px;">
        <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:8px;">TRY A SAMPLE IMAGE</div>
        <div style="display:flex;gap:10px;">
          ${['🔩 Steel Part','⚙️ Gear','🧵 Fabric','💡 LED','🔧 Fitting'].map(s=>`
            <div class="tag" onclick="simulateVisualSearch('${s}')" style="flex-direction:column;gap:4px;padding:12px;text-align:center;min-width:60px;">
              <span style="font-size:20px;">${s.split(' ')[0]}</span>
              <span>${s.split(' ')[1]}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- AI Analysis Results -->
    <div id="visual-results" class="animate-fadeInUp delay-2">
      <div class="card" style="padding:24px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <span style="font-size:24px;">🔍</span>
          <div>
            <div style="font-weight:700;font-size:16px;">AI Analysis Ready</div>
            <div style="font-size:13px;color:var(--text-secondary);">Upload an image to start AI analysis</div>
          </div>
        </div>
        <div style="background:var(--bg);border-radius:var(--radius-lg);padding:20px;text-align:center;">
          <div style="font-size:48px;margin-bottom:12px;">🤖</div>
          <div style="font-size:14px;color:var(--text-secondary);">AI will detect product category, material, grade, quality estimate and find matching suppliers with best prices</div>
        </div>

        <div style="margin-top:20px;">
          <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:12px;">AI CAPABILITIES</div>
          ${[
            {icon:'🎯',text:'Product detection & classification'},
            {icon:'🏭',text:'Material & grade identification'},
            {icon:'⭐',text:'Quality estimation from visual'},
            {icon:'💰',text:'Instant price comparison'},
            {icon:'🏢',text:'Matching supplier discovery'},
          ].map(c=>`
            <div style="display:flex;align-items:center;gap:8px;padding:6px 0;font-size:13px;">
              <span>${c.icon}</span><span>${c.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>

  <!-- Analyzed State (initially hidden) -->
  <div id="analysis-results" class="hidden" style="margin-top:24px;">
    <div style="font-size:16px;font-weight:700;margin-bottom:16px;">🤖 AI Analysis Results</div>
    <div style="display:grid;grid-template-columns:1fr 2fr;gap:20px;">
      <div class="card" style="padding:20px;">
        <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:12px;">DETECTED PRODUCT</div>
        <div style="font-size:20px;margin-bottom:8px;">🔩</div>
        <div style="font-weight:700;font-size:16px;margin-bottom:4px;">Stainless Steel Hex Bolt</div>
        <div class="badge badge-success" style="margin-bottom:12px;">Confidence: 94.2%</div>
        ${[
          {label:'Material',val:'Stainless Steel 304'},
          {label:'Grade',val:'A2-70'},
          {label:'Category',val:'Fasteners > Bolts'},
          {label:'Quality Est.',val:'Premium Grade'},
          {label:'Size Range',val:'M8 to M24'},
        ].map(f=>`
          <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);font-size:12px;">
            <span style="color:var(--text-secondary);">${f.label}</span>
            <span style="font-weight:600;">${f.val}</span>
          </div>
        `).join('')}
      </div>
      <div>
        <div style="font-size:14px;font-weight:700;margin-bottom:12px;">Matching Products (12 found)</div>
        <div class="grid-auto">${DATA.products.slice(0,4).map(p=>renderProductCard(p)).join('')}</div>
      </div>
    </div>
  </div>
`);

// FRAUD DETECTION
router.register('fraud-detection', () => `
  <div class="page-header animate-fadeInUp">
    <div>
      <div class="page-title">Fraud Detection</div>
      <div class="page-subtitle">AI-powered supplier risk analysis and fraud prevention</div>
    </div>
    <button class="btn btn-gradient" onclick="showFraudCheck()">+ Check Supplier</button>
  </div>

  <div class="grid-3 animate-fadeInUp delay-1" style="margin-bottom:20px;">
    ${[
      {label:'Suppliers Checked',val:'1,284',icon:'🔍',color:'primary'},
      {label:'High Risk Flagged',val:'23',icon:'⚠️',color:'danger'},
      {label:'Fraud Prevented',val:'₹12.4L',icon:'🛡️',color:'success'},
    ].map(s=>`
      <div class="stat-card ${s.color}">
        <div class="stat-icon ${s.color}">${s.icon}</div>
        <div class="stat-value">${s.val}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('')}
  </div>

  <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;">
    <div class="card animate-fadeInUp delay-2">
      <div class="card-header">
        <div class="card-title">Supplier Risk Analysis</div>
        <input class="form-input" style="width:220px;" placeholder="Enter GSTIN or Supplier Name">
      </div>
      <div class="card-body">
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${DATA.suppliers.map((s,i) => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:16px;background:var(--bg);border-radius:var(--radius-lg);border:1px solid var(--border);">
              <div style="display:flex;align-items:center;gap:12px;">
                <div class="risk-score ${s.trust>90?'low':s.trust>75?'medium':'high'}">
                  <div class="risk-val">${100-s.trust+10}</div>
                  <div class="risk-label">Risk</div>
                </div>
                <div>
                  <div style="font-weight:600;font-size:14px;">${s.name}</div>
                  <div style="font-size:12px;color:var(--text-secondary);">${s.gst}</div>
                  <div style="font-size:12px;color:var(--text-secondary);">${s.city} • ${s.years} years old</div>
                </div>
              </div>
              <div style="text-align:right;">
                <div class="badge badge-${s.trust>90?'success':s.trust>75?'warning':'danger'}" style="margin-bottom:6px;">${s.trust>90?'✅ Low Risk':s.trust>75?'⚠️ Medium':'🚨 High Risk'}</div>
                <div style="font-size:12px;color:var(--text-secondary);">Trust: ${s.trust}/100</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:16px;">
      <div class="card animate-fadeInUp delay-3" style="padding:20px;">
        <div class="card-title" style="margin-bottom:12px;">Risk Factors Checked</div>
        ${[
          {label:'GST Validity',val:'Active',ok:true},
          {label:'Business Age',val:'8 years',ok:true},
          {label:'Review Sentiment',val:'Very Positive',ok:true},
          {label:'Payment History',val:'No Defaults',ok:true},
          {label:'Legal Status',val:'No Cases',ok:true},
          {label:'Address Verification',val:'Verified',ok:true},
          {label:'Director Background',val:'Clean',ok:true},
          {label:'Fraud Database',val:'Not Listed',ok:true},
        ].map(f=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--border);font-size:12px;">
            <span style="color:var(--text-secondary);">${f.label}</span>
            <span style="color:var(--${f.ok?'success':'danger'});font-weight:600;">${f.ok?'✓':''} ${f.val}</span>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`);

// BILLING
router.register('billing', () => `
  <div class="page-header animate-fadeInUp">
    <div>
      <div class="page-title">Billing & Subscription</div>
      <div class="page-subtitle">Manage your plan and payment methods</div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;">
    <div>
      <div class="card animate-fadeInUp delay-1" style="padding:24px;margin-bottom:20px;background:linear-gradient(135deg,var(--primary),#0040CC);color:white;">
        <div style="font-size:12px;opacity:0.7;margin-bottom:4px;">CURRENT PLAN</div>
        <div style="font-family:var(--font-display);font-size:32px;font-weight:800;margin-bottom:4px;">Growth Plan</div>
        <div style="opacity:0.8;margin-bottom:16px;">₹4,999/month • Renews July 1, 2025</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${['Unlimited RFQs','AI Negotiations','Price Forecasting','WhatsApp Agent','Priority Support'].map(f=>`
            <div class="badge" style="background:rgba(255,255,255,0.2);color:white;border:none;">✓ ${f}</div>
          `).join('')}
        </div>
      </div>

      <!-- Plans comparison -->
      <div class="grid-3 animate-fadeInUp delay-2">
        ${[
          {name:'Starter',price:'₹0',color:'gray'},
          {name:'Growth',price:'₹4,999',color:'primary',current:true},
          {name:'Enterprise',price:'Custom',color:'purple'},
        ].map(p=>`
          <div class="pricing-card ${p.current?'popular':''}">
            ${p.current?'<div class="popular-badge">Current Plan</div>':''}
            <div style="font-weight:700;color:var(--${p.color==='gray'?'text-secondary':p.color});margin-bottom:8px;">${p.name}</div>
            <div class="pricing-price">${p.price}<span class="pricing-period">${p.price==='Custom'?'':'/mo'}</span></div>
            <button class="btn btn-${p.current?'secondary':p.name==='Enterprise'?'secondary':'gradient'} w-full" style="margin-top:16px;">${p.current?'Current':'Upgrade'}</button>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:16px;">
      <div class="card animate-fadeInUp delay-1" style="padding:20px;">
        <div class="card-title" style="margin-bottom:16px;">Payment Method</div>
        <div style="background:linear-gradient(135deg,#1A1A2E,#16213E);border-radius:var(--radius-lg);padding:20px;color:white;margin-bottom:16px;">
          <div style="font-size:11px;opacity:0.6;margin-bottom:16px;">HDFC BUSINESS CARD</div>
          <div style="font-family:monospace;font-size:16px;letter-spacing:3px;margin-bottom:20px;">•••• •••• •••• 4532</div>
          <div style="display:flex;justify-content:space-between;font-size:12px;opacity:0.7;">
            <span>RAHUL SHARMA</span><span>09/27</span>
          </div>
        </div>
        <button class="btn btn-secondary w-full btn-sm">+ Add Payment Method</button>
      </div>

      <div class="card animate-fadeInUp delay-2" style="padding:20px;">
        <div class="card-title" style="margin-bottom:12px;">Invoice History</div>
        ${['Jun 2025','May 2025','Apr 2025','Mar 2025'].map(m=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px;">
            <div>
              <div style="font-weight:600;">${m}</div>
              <div style="font-size:12px;color:var(--text-secondary);">Growth Plan</div>
            </div>
            <div style="text-align:right;">
              <div style="font-weight:600;">₹4,999</div>
              <div class="badge badge-success" style="font-size:10px;">Paid</div>
            </div>
            <button class="btn btn-ghost btn-sm">📄</button>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`);

// ─── HELPER RENDERERS ───
function renderProductCard(p) {
  const savings = Math.round(((p.market - p.price) / p.market) * 100);
  return `
    <div class="product-card" onclick="showProductDetail(${p.id})">
      <div class="product-img">
        <span style="font-size:36px;">${p.img}</span>
      </div>
      <div class="product-card-body">
        <div class="product-name">${p.name}</div>
        <div class="product-supplier">
          <span>${p.supplier}</span>
          ${p.verified ? '<span class="verified-badge">✓</span>' : ''}
        </div>
        <div style="display:flex;align-items:flex-end;gap:8px;">
          <div class="product-price"><sup>₹</sup>${p.price}<small style="font-size:12px;font-weight:500;color:var(--text-secondary);">/kg</small></div>
        </div>
        <div style="display:flex;gap:8px;margin-top:2px;align-items:center;">
          <div class="market-price">Market: ₹${p.market}</div>
          <div class="price-diff">↓ Save ${savings}%</div>
        </div>
        <div class="product-meta">
          <div class="product-meta-item">📦 MOQ: ${p.moq}</div>
          <div class="product-meta-item">⭐ ${p.rating}</div>
          <div class="product-meta-item">🚚 ${p.delivery}</div>
        </div>
        <div style="display:flex;gap:6px;margin-top:10px;">
          <button class="btn btn-gradient btn-sm" style="flex:1;" onclick="event.stopPropagation();router.navigate('negotiations')">Negotiate</button>
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation();handleSave(${p.id})">♡</button>
        </div>
      </div>
    </div>
  `;
}

// ─── INTERACTIVE FUNCTIONS ───
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type==='success'?'✅':type==='error'?'❌':'ℹ️'}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; setTimeout(() => toast.remove(), 300); }, 3000);
}

function toggleDarkMode() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('theme-toggle').textContent = isDark ? '🌙' : '☀️';
  showToast(isDark ? 'Light mode enabled' : 'Dark mode enabled', 'info');
}

function handleSignup() {
  document.getElementById('auth-form-content').classList.add('hidden');
  document.getElementById('otp-form').classList.remove('hidden');
}

function handleOTPVerify() {
  showToast('Phone verified! Setting up your account...', 'success');
  setTimeout(() => router.navigate('dashboard'), 1000);
}

function handleOTPInput(input, index) {
  if (input.value.length === 1) {
    const next = document.querySelectorAll('#otp-form input')[index + 1];
    if (next) next.focus();
  }
}

function handleGoogleAuth() {
  showToast('Connecting to Google...', 'info');
  setTimeout(() => {
    showToast('Google login successful!', 'success');
    setTimeout(() => router.navigate('dashboard'), 800);
  }, 1200);
}

function showLogin() {
  showToast('Login mode', 'info');
}

function handleSearch() {
  router.navigate('search');
}

function handleVoiceSearch() {
  showToast('🎙️ Voice search activated — speak now...', 'info');
}

function verifyGST() {
  const gst = document.getElementById('gst-input')?.value;
  if (!gst) return showToast('Please enter a GST number', 'error');
  showToast('🔍 Verifying GST with government database...', 'info');
  setTimeout(() => {
    const result = document.getElementById('gst-result');
    if (result) { result.style.display = 'block'; result.classList.add('animate-scaleIn'); }
    showToast('✅ GST verified successfully!', 'success');
  }, 1500);
}

function handleSave(id) { showToast(`Product saved to wishlist!`, 'success'); }
function handleContact(id) { showToast(`Opening contact form for supplier ${id}...`, 'info'); }
function showAddSupplier() { showToast('Opening supplier onboarding form...', 'info'); }
function showNewRFQ() { showToast('New RFQ form opening...', 'info'); }
function showNewNegotiation() {
  document.getElementById('negotiation-modal')?.classList.remove('hidden');
}
function showManualNegotiation() { showToast('Opening manual negotiation chat...', 'info'); }
function showNegotiationChat() { router.navigate('negotiations'); }
function showFraudCheck() { showToast('Fraud check form opening...', 'info'); }
function clearChat() {
  const msgs = document.getElementById('chat-messages');
  if (msgs) {
    msgs.innerHTML = '<div class="chat-message ai"><div class="message-avatar ai">🤖</div><div><div class="message-bubble">Hello! New conversation started. How can I help you with procurement today? 🙏</div></div></div>';
  }
}
function showDemo() { showToast('Loading demo video...', 'info'); }
function showWhatsApp() {
  const panel = document.getElementById('whatsapp-panel');
  if (panel) { panel.classList.toggle('hidden'); }
  else { showToast('Opening WhatsApp Agent...', 'success'); }
}
function triggerUpload() { document.getElementById('file-input')?.click(); }
function handleImageUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  showToast('🤖 Analyzing image with AI...', 'info');
  setTimeout(() => {
    document.getElementById('analysis-results')?.classList.remove('hidden');
    showToast('✅ Product identified! Found 12 matching suppliers.', 'success');
  }, 2000);
}
function simulateVisualSearch(product) {
  showToast(`🔍 Searching for "${product}" suppliers...`, 'info');
  setTimeout(() => {
    document.getElementById('analysis-results')?.classList.remove('hidden');
    showToast(`✅ Found ${Math.floor(Math.random()*20+5)} matching suppliers!`, 'success');
  }, 1500);
}
function showProductDetail(id) {
  const p = DATA.products.find(x => x.id === id);
  if (!p) return;
  showToast(`Viewing ${p.name}...`, 'info');
}
function togglePricing(el) {
  el.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  showToast('Yearly pricing: Save 20%!', 'success');
}

function sendAIMessage(msg, tagEl) {
  if (tagEl) tagEl.classList.add('active');
  const input = document.getElementById('ai-input');
  const text = msg || input?.value;
  if (!text?.trim()) return;
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;

  const time = new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});

  // Add user message
  msgs.innerHTML += `
    <div class="chat-message user" style="animation:fadeInUp 0.3s ease;">
      <div class="message-avatar user">RS</div>
      <div>
        <div class="message-bubble">${text}</div>
        <div style="font-size:11px;color:var(--text-secondary);text-align:right;margin-top:4px;">${time}</div>
      </div>
    </div>
  `;

  // Add typing indicator
  const typingId = 'typing-' + Date.now();
  msgs.innerHTML += `
    <div class="chat-message ai" id="${typingId}">
      <div class="message-avatar ai">🤖</div>
      <div class="message-bubble" style="background:var(--bg);border:1px solid var(--border);">
        <span class="ai-status-dot" style="margin:0 2px;"></span>
        <span class="ai-status-dot" style="margin:0 2px;animation-delay:0.3s;"></span>
        <span class="ai-status-dot" style="margin:0 2px;animation-delay:0.6s;"></span>
      </div>
    </div>
  `;
  msgs.scrollTop = msgs.scrollHeight;
  if (input) input.value = '';

  // AI Response
  setTimeout(() => {
    const typing = document.getElementById(typingId);
    if (typing) typing.remove();
    const responses = [
      "Based on your query, I found 8 verified suppliers matching your requirements. The best option is Mehta Metals Pvt Ltd at ₹185/kg (18% below market rate). Shall I initiate a negotiation? 🤝",
      "Price analysis complete! Current market average is ₹220/kg. AI forecast shows prices will rise 8% in 30 days. I recommend buying now. Want me to find the best deals?",
      "I've generated an RFQ template for you. It includes standard terms, payment conditions, and quality specifications. Want me to send it to the top 3 suppliers?",
      "GST verification complete ✅. The GSTIN is valid and active. Company is registered in Maharashtra, business type: Private Limited. No fraud flags detected.",
      "Here are 5 price comparison results. Lowest quote: ₹178/kg from Polymer Industries. I can negotiate this further — typical AI negotiation saves additional 5-8%. Shall I proceed?",
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    msgs.innerHTML += `
      <div class="chat-message ai" style="animation:fadeInUp 0.3s ease;">
        <div class="message-avatar ai">🤖</div>
        <div>
          <div class="message-bubble">${randomResponse}</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px;">${time}</div>
        </div>
      </div>
    `;
    msgs.scrollTop = msgs.scrollHeight;
  }, 1500);
}

// ─── CHARTS ───
function initCharts() {
  const canvases = {
    spendChart: () => drawBarChart('spendChart', ['Jan','Feb','Mar','Apr','May','Jun'], [320000,480000,410000,590000,520000,680000], 'Spend (₹)'),
    categoryChart: () => drawPieChart('categoryChart'),
    priceChart: () => drawLineChart('priceChart'),
    demandChart: () => drawAreaChart('demandChart'),
    negotiationChart: () => drawDoughnutChart('negotiationChart'),
  };
  Object.entries(canvases).forEach(([id, fn]) => {
    if (document.getElementById(id)) fn();
  });
}

function drawBarChart(id, labels, data, label) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.offsetWidth; const h = canvas.height;
  canvas.width = w;
  ctx.clearRect(0,0,w,h);
  const max = Math.max(...data) * 1.2;
  const barW = (w - 80) / labels.length * 0.6;
  const gap = (w - 80) / labels.length;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#8B949E' : '#667085';
  const gridColor = isDark ? '#21262D' : '#E4E7EC';

  // Grid lines
  for (let i = 0; i <= 4; i++) {
    const y = 20 + (h - 60) * (1 - i/4);
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.setLineDash([4,4]);
    ctx.beginPath(); ctx.moveTo(60,y); ctx.lineTo(w-10,y); ctx.stroke();
    ctx.fillStyle = textColor; ctx.font = '10px Inter'; ctx.textAlign = 'right';
    ctx.fillText('₹'+(max*i/4/1000).toFixed(0)+'K', 55, y+3);
  }
  ctx.setLineDash([]);

  labels.forEach((label, i) => {
    const x = 70 + i * gap;
    const barH = (data[i] / max) * (h - 60);
    const y = h - 30 - barH;
    // Gradient bar
    const grad = ctx.createLinearGradient(0, y, 0, h-30);
    grad.addColorStop(0, '#0057FF');
    grad.addColorStop(1, '#00C2FF');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x - barW/2, y, barW, barH, [4,4,0,0]);
    ctx.fill();
    // Label
    ctx.fillStyle = textColor; ctx.font = '10px Inter'; ctx.textAlign = 'center';
    ctx.fillText(label, x, h-10);
  });
}

function drawLineChart(id) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.offsetWidth; const h = canvas.height;
  canvas.width = w;
  ctx.clearRect(0,0,w,h);

  const historical = [195, 210, 225, 218, 220, 215];
  const forecast = [null, null, null, null, 220, 225, 230, 235, 238];
  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];
  const all = [195, 210, 225, 218, 220, 215, 225, 230, 235];
  const max = 260; const min = 170;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#8B949E' : '#667085';
  const gridColor = isDark ? '#21262D' : '#E4E7EC';

  const getX = i => 50 + i * (w - 70) / (labels.length - 1);
  const getY = v => 20 + (1 - (v - min) / (max - min)) * (h - 50);

  // Grid
  for (let i = 0; i <= 4; i++) {
    const y = 20 + (h - 50) * i / 4;
    ctx.strokeStyle = gridColor; ctx.lineWidth = 1; ctx.setLineDash([4,4]);
    ctx.beginPath(); ctx.moveTo(50,y); ctx.lineTo(w-10,y); ctx.stroke();
    ctx.fillStyle = textColor; ctx.font = '10px Inter'; ctx.textAlign = 'right';
    ctx.fillText('₹'+(max - (max-min)*i/4).toFixed(0), 45, y+3);
  }
  ctx.setLineDash([]);

  // Historical line
  ctx.beginPath(); ctx.strokeStyle = '#0057FF'; ctx.lineWidth = 2.5;
  historical.forEach((v,i) => { const x=getX(i),y=getY(v); i===0?ctx.moveTo(x,y):ctx.lineTo(x,y); });
  ctx.stroke();

  // Forecast line (dashed)
  ctx.setLineDash([6,4]);
  ctx.strokeStyle = '#F04438'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(getX(4), getY(220));
  [225,230,235,238].forEach((v,i) => ctx.lineTo(getX(5+i), getY(v)));
  ctx.stroke();
  ctx.setLineDash([]);

  // Dots
  historical.forEach((v,i) => {
    ctx.fillStyle = '#0057FF';
    ctx.beginPath(); ctx.arc(getX(i), getY(v), 4, 0, Math.PI*2); ctx.fill();
  });

  // Labels
  labels.forEach((l,i) => {
    ctx.fillStyle = textColor; ctx.font = '10px Inter'; ctx.textAlign = 'center';
    ctx.fillText(l, getX(i), h-5);
  });

  // Legend
  ctx.fillStyle = '#0057FF'; ctx.beginPath(); ctx.roundRect(w-180, 10, 12, 3, 2); ctx.fill();
  ctx.fillStyle = textColor; ctx.font = '11px Inter'; ctx.textAlign = 'left';
  ctx.fillText('Historical', w-163, 16);
  ctx.strokeStyle = '#F04438'; ctx.lineWidth=2; ctx.setLineDash([4,3]);
  ctx.beginPath(); ctx.moveTo(w-90,13); ctx.lineTo(w-78,13); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = textColor; ctx.fillText('AI Forecast', w-73, 16);
}

function drawPieChart(id) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.offsetWidth; const h = canvas.height;
  canvas.width = w;
  ctx.clearRect(0,0,w,h);

  const data = [{label:'Metals',val:35,color:'#0057FF'},{label:'Textiles',val:22,color:'#00C2FF'},{label:'Electronics',val:18,color:'#14B86A'},{label:'Chemicals',val:15,color:'#FFB020'},{label:'Others',val:10,color:'#7C3AED'}];
  const cx = w/2 - 30, cy = h/2, r = Math.min(cx,cy) - 20;
  let start = -Math.PI/2;

  data.forEach(d => {
    const angle = (d.val / 100) * Math.PI * 2;
    ctx.fillStyle = d.color;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,r,start,start+angle); ctx.closePath(); ctx.fill();
    start += angle;
  });

  // Center hole
  ctx.fillStyle = document.documentElement.getAttribute('data-theme')==='dark' ? '#161B22' : '#FFFFFF';
  ctx.beginPath(); ctx.arc(cx,cy,r*0.55,0,Math.PI*2); ctx.fill();

  // Legend
  const lx = w - 90;
  data.forEach((d,i) => {
    const ly = 30 + i * 28;
    ctx.fillStyle = d.color;
    ctx.beginPath(); ctx.roundRect(lx, ly, 10, 10, 3); ctx.fill();
    ctx.fillStyle = document.documentElement.getAttribute('data-theme')==='dark' ? '#8B949E' : '#667085';
    ctx.font = '11px Inter'; ctx.textAlign = 'left';
    ctx.fillText(`${d.label} ${d.val}%`, lx+14, ly+9);
  });
}

function drawAreaChart(id) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.offsetWidth; const h = canvas.height;
  canvas.width = w;
  ctx.clearRect(0,0,w,h);

  const data = [40,55,48,70,62,80,75,88,72,95,85,100];
  const labels = ['Jun 1','','','Jun 8','','','Jun 15','','','Jun 22','','Jun 30'];
  const max = 120;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#8B949E' : '#667085';
  const gridColor = isDark ? '#21262D' : '#E4E7EC';

  const getX = i => 10 + i * (w - 20) / (data.length - 1);
  const getY = v => 10 + (1 - v / max) * (h - 30);

  // Area fill
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, 'rgba(0,87,255,0.25)');
  grad.addColorStop(1, 'rgba(0,87,255,0)');
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.moveTo(getX(0), getY(data[0]));
  data.forEach((v,i) => { if(i>0) ctx.lineTo(getX(i),getY(v)); });
  ctx.lineTo(getX(data.length-1), h-20);
  ctx.lineTo(getX(0), h-20);
  ctx.closePath(); ctx.fill();

  // Line
  ctx.beginPath(); ctx.strokeStyle='#0057FF'; ctx.lineWidth=2.5;
  data.forEach((v,i) => { i===0?ctx.moveTo(getX(i),getY(v)):ctx.lineTo(getX(i),getY(v)); });
  ctx.stroke();

  labels.forEach((l,i) => {
    if(l) {
      ctx.fillStyle=textColor; ctx.font='10px Inter'; ctx.textAlign='center';
      ctx.fillText(l, getX(i), h-5);
    }
  });
}

function drawDoughnutChart(id) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.offsetWidth; const h = canvas.height;
  canvas.width = w;
  ctx.clearRect(0,0,w,h);

  const data = [{val:32,color:'#14B86A',label:'AI Won'},{val:15,color:'#0057FF',label:'Manual Won'},{val:5,color:'#E4E7EC',label:'Lost'}];
  const total = data.reduce((a,b) => a+b.val, 0);
  const cx = 80, cy = h/2, r = Math.min(cx,cy) - 15;
  let start = -Math.PI/2;

  data.forEach(d => {
    const angle = (d.val / total) * Math.PI * 2;
    ctx.fillStyle = d.color;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,r,start,start+angle); ctx.closePath(); ctx.fill();
    start += angle;
  });

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  ctx.fillStyle = isDark ? '#161B22' : '#FFFFFF';
  ctx.beginPath(); ctx.arc(cx,cy,r*0.55,0,Math.PI*2); ctx.fill();

  ctx.fillStyle = '#14B86A'; ctx.font = 'bold 16px Plus Jakarta Sans'; ctx.textAlign='center';
  ctx.fillText('94%', cx, cy+4);
  ctx.fillStyle = document.documentElement.getAttribute('data-theme')==='dark' ? '#8B949E' : '#667085';
  ctx.font = '9px Inter';
  ctx.fillText('Win Rate', cx, cy+16);
}

// ─── INTERACTIONS ───
function initInteractions() {
  // Draggable upload zone
  const zone = document.getElementById('upload-zone');
  if (zone) {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag'));
    zone.addEventListener('drop', e => {
      e.preventDefault(); zone.classList.remove('drag');
      const file = e.dataTransfer.files[0];
      if (file) handleImageUpload({target:{files:[file]}});
    });
  }

  // Search input enter
  const mainSearch = document.getElementById('main-search');
  if (mainSearch) mainSearch.addEventListener('keypress', e => { if (e.key === 'Enter') handleSearch(); });
}

// ─── SIDEBAR & NAVIGATION ───
function buildSidebar() {
  const navItems = [
    { id: 'dashboard', icon: '🏠', label: 'Home' },
    { id: 'search', icon: '🔍', label: 'Search' },
    { id: 'suppliers', icon: '🏢', label: 'Suppliers' },
    { id: 'deals', icon: '📋', label: 'Deals', badge: '12' },
    { id: 'negotiations', icon: '🤝', label: 'Negotiations', badge: '3', badgeColor: 'orange' },
    { id: 'analytics', icon: '📊', label: 'Analytics' },
    { id: 'price-intelligence', icon: '💰', label: 'Price Intel' },
    { id: 'visual-search', icon: '📷', label: 'Visual Search', badge: 'New', badgeColor: 'green' },
    { id: 'ai-assistant', icon: '🤖', label: 'AI Assistant' },
    { id: 'fraud-detection', icon: '🛡️', label: 'Fraud Detection' },
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'billing', icon: '💳', label: 'Billing' },
  ];

  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  sidebar.innerHTML = `
    <div class="sidebar-logo">
      <div class="logo-icon">S</div>
      <div class="logo-text">Supply<span>Hub</span></div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Main</div>
      ${navItems.slice(0,8).map(item => `
        <a class="nav-item" data-page="${item.id}" onclick="router.navigate('${item.id}')" href="javascript:void(0)">
          <span style="font-size:16px;">${item.icon}</span>
          <span>${item.label}</span>
          ${item.badge ? `<span class="nav-badge ${item.badgeColor||''}">${item.badge}</span>` : ''}
        </a>
      `).join('')}
      <div class="nav-section-label" style="margin-top:8px;">Tools</div>
      ${navItems.slice(8).map(item => `
        <a class="nav-item" data-page="${item.id}" onclick="router.navigate('${item.id}')" href="javascript:void(0)">
          <span style="font-size:16px;">${item.icon}</span>
          <span>${item.label}</span>
          ${item.badge ? `<span class="nav-badge ${item.badgeColor||''}">${item.badge}</span>` : ''}
        </a>
      `).join('')}
    </nav>
    <div class="sidebar-footer">
      <div class="ai-status-card" onclick="router.navigate('ai-assistant')">
        <div style="font-size:12px;font-weight:700;color:var(--primary);margin-bottom:4px;">
          <span class="ai-status-dot"></span>AI Status: All Active
        </div>
        <div style="font-size:11px;color:var(--text-secondary);">15 agents running • 0 errors</div>
      </div>
    </div>
  `;
}

function buildTopbar() {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;
  topbar.innerHTML = `
    <button id="menu-toggle" class="icon-btn" onclick="toggleSidebar()" style="display:none;">☰</button>
    <div class="search-global">
      <span class="search-icon">
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      </span>
      <input type="text" placeholder="Search products, suppliers, deals..." onkeypress="if(event.key==='Enter'){router.navigate('search')}">
    </div>
    <div class="topbar-actions">
      <div class="ai-pill" onclick="router.navigate('ai-assistant')">
        <span style="font-size:14px;">🤖</span>
        <span>AI Active</span>
        <span class="ai-status-dot"></span>
      </div>
      <button id="theme-toggle" class="icon-btn" onclick="toggleDarkMode()" title="Toggle Dark Mode">🌙</button>
      <button class="icon-btn" title="Notifications">
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        <span class="notif-badge"></span>
      </button>
      <div class="user-avatar" onclick="router.navigate('profile')" title="${DATA.user.name}">${DATA.user.avatar}</div>
    </div>
  `;
}

function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
}

// ─── FLOATING WIDGETS ───
function buildFloatingWidgets() {
  const existingLeft = document.getElementById('float-left');
  const existingRight = document.getElementById('float-right');
  if (existingLeft) existingLeft.remove();
  if (existingRight) existingRight.remove();

  const floatLeft = document.createElement('div');
  floatLeft.id = 'float-left';
  floatLeft.className = 'float-widget float-widget-left';
  floatLeft.innerHTML = `
    <div id="ai-negotiation-panel" class="float-panel hidden">
      <div class="float-panel-header">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:20px;">🤖</span>
          <div>
            <div style="font-weight:700;font-size:14px;color:var(--primary);">AI Negotiation Agent</div>
            <div style="font-size:11px;color:var(--text-secondary);"><span class="ai-status-dot"></span>Ready to negotiate</div>
          </div>
        </div>
        <button class="icon-btn" onclick="document.getElementById('ai-negotiation-panel').classList.add('hidden')">✕</button>
      </div>
      <div class="card-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
          <button class="btn btn-gradient" onclick="router.navigate('negotiations')">🤖 AI Negotiates</button>
          <button class="btn btn-secondary" onclick="showManualNegotiation()">💬 Manual</button>
        </div>
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;">RECENT SAVINGS</div>
        ${DATA.negotiations.slice(0,2).map(n=>`
          <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);font-size:12px;">
            <span>${n.product.substring(0,20)}...</span>
            <span style="color:var(--success);font-weight:600;">${n.savings||'₹20K'}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:flex-start;gap:4px;">
      <div style="font-size:10px;font-weight:600;color:var(--text-secondary);background:var(--card);padding:3px 8px;border-radius:99px;border:1px solid var(--border);">AI Agent</div>
      <button class="float-btn ai-agent" onclick="document.getElementById('ai-negotiation-panel').classList.toggle('hidden')" title="AI Negotiation Agent">🤖</button>
    </div>
  `;

  const floatRight = document.createElement('div');
  floatRight.id = 'float-right';
  floatRight.className = 'float-widget float-widget-right';
  floatRight.innerHTML = `
    <div id="whatsapp-panel" class="float-panel hidden">
      <div class="float-panel-header" style="background:linear-gradient(135deg,#075E54,#128C7E);">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:20px;">💬</span>
          <div>
            <div style="font-weight:700;font-size:14px;color:white;">WhatsApp Agent</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.7);">Procurement via WhatsApp</div>
          </div>
        </div>
        <button class="icon-btn" style="color:white;" onclick="document.getElementById('whatsapp-panel').classList.add('hidden')">✕</button>
      </div>
      <div class="card-body">
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">Connect your WhatsApp to automate procurement workflows</p>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
          ${['📩 Send RFQ to suppliers','🔔 Get order updates','🤝 Negotiation alerts','📄 Document collection','⏰ Auto reminders'].map(f=>`
            <div style="font-size:13px;display:flex;align-items:center;gap:8px;">${f}</div>
          `).join('')}
        </div>
        <button class="btn w-full" style="background:#25D366;color:white;" onclick="showToast('Opening WhatsApp...','success')">
          Open WhatsApp Chat
        </button>
      </div>
    </div>
    <button class="float-btn whatsapp" onclick="showWhatsApp()" title="WhatsApp Agent">💬</button>
  `;

  document.body.appendChild(floatLeft);
  document.body.appendChild(floatRight);
}

// ─── INIT ───
window.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  buildTopbar();
  buildFloatingWidgets();

  // Toast container
  const toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  toastContainer.className = 'toast-container';
  document.body.appendChild(toastContainer);

  // Start on landing
  router.navigate('landing');

  // Keyboard shortcut for dark mode
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'd') { e.preventDefault(); toggleDarkMode(); }
    if (e.ctrlKey && e.key === 'k') { e.preventDefault(); document.querySelector('.search-global input')?.focus(); }
  });

  // Responsive menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  if (window.innerWidth <= 768 && menuToggle) menuToggle.style.display = 'flex';
  window.addEventListener('resize', () => {
    const toggle = document.getElementById('menu-toggle');
    if (toggle) toggle.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
  });
});

// Make router globally accessible
window.router = router;
window.showToast = showToast;
window.sendAIMessage = sendAIMessage;
window.handleVoiceSearch = handleVoiceSearch;
window.showWhatsApp = showWhatsApp;
