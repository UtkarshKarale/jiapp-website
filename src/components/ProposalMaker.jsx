import { useState, useEffect, useMemo } from "react";

/* ───────── Content ───────── */
const T = {
  en: {
    title: "Website Development Proposal",
    tag: "Modern, fast, and high-converting web solutions tailored for your business growth.",
    prepFor: "Prepared for", rep: "Your JiApp representative", date: "Date", no: "Proposal no.",
    intro: "Before anything else, we meet 1-on-1 on a day you are available to understand your business goals. We then design and launch a fast, modern website with custom domain, SSL security, business email, live chat, and SEO, AEO & GEO optimization.",
    get: "What you get", plans: "Plans", rec: "Recommended", once: "One-time plan fee | GST included",
    talk: "Let's talk", custom: "Custom quote, tailored to your scope",
    steps: "How we get you started", need: "What we need from you", why: "Why JiApp Solutions",
    s: [["1-on-1 meeting", "We meet on a day you are available to discuss your needs."],
        ["Confirm & share", "Pick your plan and share the brand details listed here."],
        ["Payment", "Pay using the official details shared by our team."],
        ["Go live", "Review your site and go live in {d} days with full ownership."]],
    w: [["Modern & fast stack", "High-speed architecture & CDN performance"], ["SEO + AEO + GEO", "Google & AI search ready"],
        ["100% ownership", "Domain, code & email rights"], ["Direct support", "Phone & WhatsApp help"]],
    pay: "Payment details are shared by your JiApp representative after our 1-on-1 meeting. Please pay only to the official account shared by our team. Ownership of domain, SSL, hosting and email credentials is handed over on completion.",
    valid: "Valid for {v} days from the date above.", notes: "Notes", sales: "Sales & support",
    get_l: ["Modern, clean UI/UX responsive website", "SEO, AEO & GEO search optimization", "Custom domain (.in / .com) & free SSL certificate", "Business email setup (hello@domain & Zoho Mail)", "Tawk.to live chat & WhatsApp integration", "1-on-1 consultation, direct support & 100% ownership"],
    need_l: ["Business name, logo & brand color preferences", "Preferred domain name (.in or .com)", "Brief company profile & services/products list", "Business phone, WhatsApp, email & address", "Desired custom email prefixes (e.g. hello@, info@)", "Photos, portfolio items, or reference links"],
  },
  mr: {
    title: "वेबसाईट डिझाईन आणि डेव्हलपमेंट प्रस्ताव",
    tag: "तुमच्या व्यवसायाच्या वाढीसाठी आधुनिक, जलद आणि परिणामकारक वेब सोल्यूशन्स.",
    prepFor: "ग्राहक", rep: "जीॲप प्रतिनिधी", date: "दिनांक", no: "प्रस्ताव क्र.",
    intro: "सर्वप्रथम, तुमच्या सोयीच्या दिवशी आपण १-ऑन-१ भेटून तुमची व्यवसायाची उद्दिष्टे समजून घेतो. त्यानंतर कस्टम डोमेन, SSL सुरक्षा, बिझनेस ईमेल, लाईव्ह चॅट आणि SEO, AEO व GEO ऑप्टिमायझेशनसह जलद, आधुनिक वेबसाईट डिझाईन करून लाईव्ह करतो.",
    get: "तुम्हाला काय मिळेल", plans: "योजना", rec: "शिफारसीत", once: "एकदाच प्लॅन फी | जीएसटी समाविष्ट",
    talk: "चर्चा करूया", custom: "तुमच्या गरजेनुसार सानुकूलित दर",
    steps: "कामाची सुरुवात कशी होईल", need: "तुमच्याकडून काय आवश्यक आहे", why: "जीॲप सोल्यूशन्स का निवडावे?",
    s: [["१-ऑन-१ मिटिंग", "तुमच्या सोयीच्या दिवशी भेटून गरजा समजून घेतो."],
        ["निश्चिती व माहिती शेअर", "प्लॅन निवडा आणि ब्रँडची माहिती शेअर करा."],
        ["पेमेंट", "आमच्या टीमने दिलेल्या अधिकृत तपशिलानुसार पेमेंट करा."],
        ["वेबसाईट लाईव्ह", "वेबसाईट तपासा आणि {d} दिवसांत पूर्ण मालकीसह लाईव्ह व्हा."]],
    w: [["आधुनिक आणि जलद तंत्रज्ञान", "उच्च-वेग रचना आणि CDN परफॉर्मन्स"], ["SEO + AEO + GEO", "गूगल आणि AI शोधासाठी सज्ज"],
        ["१००% मालकी", "डोमेन, कोड आणि ईमेलचे संपूर्ण अधिकार"], ["थेट सहकार्य", "फोन आणि व्हॉट्सॲपद्वारे त्वरित मदत"]],
    pay: "पेमेंटचे तपशील १-ऑन-१ मिटिंगनंतर जीॲप प्रतिनिधी देतील. कृपया फक्त आमच्या टीमने दिलेल्या अधिकृत खात्यावरच पेमेंट करा. काम पूर्ण झाल्यावर डोमेन, SSL, होस्टिंग आणि ईमेल क्रेडेन्शियल्सची पूर्ण मालकी तुमच्याकडे सोपवली जाईल.",
    valid: "वरील दिनांकापासून {v} दिवस वैध.", notes: "टीप", sales: "सेल्स आणि सपोर्ट",
    get_l: ["आधुनिक, स्वच्छ UI/UX रिस्पॉन्सिव्ह वेबसाईट", "SEO, AEO आणि GEO सर्च ऑप्टिमायझेशन", "कस्टम डोमेन (.in / .com) आणि मोफत SSL प्रमाणपत्र", "व्यावसायिक ईमेल सेटअप (hello@domain आणि Zoho Mail)", "Tawk.to लाईव्ह चॅट आणि व्हॉट्सॲप एकत्रीकरण", "१-ऑन-१ सल्लामसलत, थेट सपोर्ट आणि १००% मालकी"],
    need_l: ["व्यवसायाचे नाव, लोगो आणि ब्रँड रंगांची पसंती", "पसंतीचे डोमेन नाव (.in किंवा .com)", "कंपनीची थोडक्यात माहिती आणि सेवा/उत्पादनांची यादी", "व्यवसाय फोन, व्हॉट्सॲप, ईमेल आणि पत्ता", "हवे असलेले कस्टम ईमेल प्रीफिक्स (उदा. hello@, info@)", "फोटो, पोर्टफोलिओ किंवा संदर्भासाठी लिंक्स"],
  },
};

const PLANS = [
  { id: "launch", price: 6000, en: ["Launch", ["1-year .in domain & free SSL certificate", "Modern, clean UI/UX responsive website", "SEO, AEO & GEO search optimization", "1 inbound email (hello@domain.in) & hosting"]],
    mr: ["लाँच", ["१ वर्षाचे .in डोमेन आणि मोफत SSL", "आधुनिक, स्वच्छ UI/UX रिस्पॉन्सिव्ह वेबसाईट", "SEO, AEO आणि GEO ऑप्टिमायझेशन", "१ इनबॉऊंड ईमेल (hello@domain.in) आणि होस्टिंग"]] },
  { id: "growth", price: 10000, en: ["Growth", ["Everything in Launch", "2 custom business emails (hello@, info@)", "1 Tawk.to live chat widget", "Search Console, Analytics, Maps & priority support"]],
    mr: ["ग्रोथ", ["लाँच प्लॅनमधील सर्व गोष्टी", "२ कस्टम बिझनेस ईमेल्स (hello@, info@)", "१ Tawk.to लाईव्ह चॅट विजेट", "सर्च कन्सोल, ॲनालिटिक्स, मॅप्स आणि प्राधान्य सपोर्ट"]] },
  { id: "business", price: 20000, en: ["Business", ["Everything in Growth", "Dynamic website with Admin CMS panel", "Payment gateway, CRM & API integrations", "5 Zoho Mail mailboxes & dedicated support"]],
    mr: ["बिझनेस", ["ग्रोथ प्लॅनमधील सर्व गोष्टी", "ॲडमिन CMS पॅनेलसह डायनॅमिक वेबसाईट", "पेमेंट गेटवे, CRM आणि API एकत्रीकरण", "५ Zoho Mail मेलबॉक्सेस आणि समर्पित सपोर्ट"]] },
  { id: "custom", price: null, en: ["Custom", ["1-on-1 requirement discovery & custom scope", "Custom web apps, portals & workflows", ".com or .in domain & free cloud hosting", "Custom mailboxes, cloud & SLA support"]],
    mr: ["कस्टम", ["१-ऑन-१ गरज शोध आणि कस्टम स्कोप", "कस्टम वेब ॲप्स, पोर्टल्स आणि वर्कफ्लो", ".com किंवा .in डोमेन आणि मोफत क्लाउड होस्टिंग", "कस्टम मेलबॉक्सेस, क्लाउड आणि SLA सपोर्ट"]] },
];

const today = () => new Date().toISOString().slice(0, 10);
const mrDigits = (s) => String(s).replace(/[0-9]/g, (d) => "०१२३४५६७८९"[d]);
const MON = { en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], mr: ["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर"] };
const fmtDate = (iso, l) => { const [y, m, d] = iso.split("-"); const s = l === "mr" ? `${+d} ${MON.mr[m - 1]} ${y}` : `${d} ${MON.en[m - 1]} ${y}`; return l === "mr" ? mrDigits(s) : s; };
const num = (n, l) => { const s = Number(n).toLocaleString("en-IN"); return l === "mr" ? mrDigits(s) : s; };

const INIT = {
  lang: "both", no: `JIA-PR-${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}${String(new Date().getDate()).padStart(2, "0")}`, date: today(),
  clientName: "", company: "", clientPhone: "", clientEmail: "",
  repName: "Utkarsh Karale", repPhone: "+91 90664 76969", repEmail: "utkarsh@jiapp.online", site: "jiapp.online", city: "Kolhapur, Maharashtra, India",
  days: "5–12", valid: "15", recommended: "growth", notes: "", showDemo: true, demos: "", showMaint: true, maint: "",
  plans: { launch: { on: true, price: 6000 }, growth: { on: true, price: 10000 }, business: { on: true, price: 20000 }, custom: { on: true, price: null } },
  lists: { en: { get: T.en.get_l.join("\n"), need: T.en.need_l.join("\n") }, mr: { get: T.mr.get_l.join("\n"), need: T.mr.need_l.join("\n") } },
};
const KEY = "jiapp-proposal-v1";

/* ───────── Proposal pages (A4, 4 per language) ───────── */
const TITLES = { en: ["Overview", "Scope", "Plans", "Process"], mr: ["आढावा", "व्याप्ती", "योजना", "कार्यपद्धती"] };
const DEMO = {
  en: { h: "See a demo", cap: "This is not the final design. Your website can look like these.", click: "Click here to see demo" },
  mr: { h: "डेमो वेबसाईट पहा", cap: "हे अंतिम डिझाईन नाही. तुमची वेबसाईट अशी असू शकते.", click: "डेमो पाहण्यासाठी येथे क्लिक करा" },
};
const MAINT = {
  en: { h: "Next-year maintenance", p: "After your first year, renewals and upkeep come up. We will go through the options and costs together in our 1-on-1 meeting, so nothing surprises you.", c: ["Domain renewal", "Hosting & SSL", "Business email", "Updates & support"], when: "To discuss", tbd: "In the 1-on-1 meeting", yr: "per year" },
  mr: { h: "पुढील वर्षाचे मेंटेनन्स", p: "पहिल्या वर्षानंतर रिन्यूअल आणि देखभाल लागते. पर्याय आणि खर्च आपण १-ऑन-१ मिटिंगमध्ये एकत्र पाहू, त्यामुळे नंतर कोणतीही अडचण येणार नाही.", c: ["डोमेन रिन्यूअल", "होस्टिंग आणि SSL", "बिझनेस ईमेल", "अपडेट्स आणि सपोर्ट"], when: "चर्चा", tbd: "१-ऑन-१ मिटिंगमध्ये", yr: "प्रति वर्ष" },
};
const norm = (u) => (u && !/^https?:\/\//i.test(u) ? "https://" + u : u);
function Shell({ l, d, n, children, cover }) {
  const total = 4;
  const p = (x) => (l === "mr" ? mrDigits(x) : x);
  return (
    <section className={`pm-page ${l === "mr" ? "mr" : ""} ${cover ? "cover" : ""}`}>
      {!cover && (
        <div className="pm-run">
          <span className="pm-brand"><span className="pm-logo">Ji</span>JiApp Solutions</span>
          <span>{TITLES[l][n - 1]}</span>
        </div>
      )}
      {children}
      <div className="pm-foot">
        <span>{d.no} · {d.site}</span>
        <span>{d.repPhone} · {d.repEmail}</span>
        <b>{p(n)} / {p(total)}</b>
      </div>
    </section>
  );
}

function Page({ l, d }) {
  const t = T[l];
  const lines = (s) => s.split("\n").map((x) => x.trim()).filter(Boolean);
  const plans = PLANS.filter((p) => d.plans[p.id].on);
  const p = (x) => (l === "mr" ? mrDigits(x) : x);
  const fill = (s) => s.replace("{d}", p(d.days)).replace("{v}", p(d.valid));
  const demoList = d.demos.split("\n").map((x) => x.trim()).filter(Boolean).map((x) => {
    const [a, b] = x.includes("|") ? x.split("|") : [null, x];
    const url = norm((b || "").trim());
    return { url, name: (a || "").trim() || url.replace(/^https?:\/\//, "") };
  });
  return (
    <>
      {/* 1 — Cover */}
      <Shell l={l} d={d} n={1} cover>
        <div className="pm-cov-top">
          <span className="pm-brand"><span className="pm-logo">Ji</span>JiApp Solutions<i>{d.site}</i></span>
          <h1>{t.title}</h1>
          <p>{t.tag}</p>
          <span className="pm-orb" />
        </div>
        <div className="pm-cov-body">
          <div className="pm-cols">
            <div><span className="lab">{t.prepFor}</span><b className="big">{d.clientName || "—"}</b>{d.company && <div>{d.company}</div>}<div className="mut">{[d.clientPhone, d.clientEmail].filter(Boolean).join(" · ")}</div></div>
            <div><span className="lab">{t.rep}</span><b className="big">{d.repName}</b><div>{d.repPhone}</div><div className="mut">{d.repEmail}</div></div>
          </div>
          <div className="pm-cols meta">
            <div><span className="lab">{t.no}</span><b>{d.no}</b></div>
            <div><span className="lab">{t.date}</span><b>{fmtDate(d.date, l)}</b></div>
          </div>
          <p className="pm-lead">{t.intro}</p>
          {d.showDemo && demoList.length > 0 && (
            <div className="pm-demo">
              <h3>{DEMO[l].h}</h3><p>{DEMO[l].cap}</p>
              <div className="pm-demo-l">{demoList.map((x, i) => <a key={i} href={x.url} target="_blank" rel="noreferrer"><b>{x.name}</b><span>{DEMO[l].click}</span></a>)}</div>
            </div>
          )}
        </div>
      </Shell>

      {/* 2 — Scope */}
      <Shell l={l} d={d} n={2}>
        <div className="pm-content">
          <h2>{t.get}</h2>
          <ul className="pm-check">{lines(d.lists[l].get).map((x, i) => <li key={i}>{x}</li>)}</ul>
          <h2>{t.need}</h2>
          <ul className="pm-check alt">{lines(d.lists[l].need).map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
      </Shell>

      {/* 3 — Plans */}
      <Shell l={l} d={d} n={3}>
        <div className="pm-content">
          <h2>{t.plans}</h2>
          <div className="pm-zig">
            {plans.map((pl, i) => {
              const price = d.plans[pl.id].price;
              const rec = d.recommended === pl.id;
              const tier = PLANS.findIndex((x) => x.id === pl.id) + 1;
              return (
                <article key={pl.id} className={`pm-card ${i % 2 ? "r" : "l"} ${rec ? "rec" : ""}`}>
                  <div className="pm-card-p">
                    {rec && <em>{t.rec}</em>}
                    <span className="pm-tier" aria-hidden="true">{[1, 2, 3, 4].map((n) => <i key={n} className={n <= tier ? "on" : ""} />)}</span>
                    <h3>{pl[l][0]}</h3>
                    <div className="pm-price">{price ? `₹${num(price, l)}` : t.talk}</div>
                    <small>{price ? t.once : t.custom}</small>
                  </div>
                  <ul className="pm-card-f">{pl[l][1].map((x, k) => <li key={k}>{x}</li>)}</ul>
                </article>
              );
            })}
          </div>
        </div>
      </Shell>

      {/* 4 — Process */}
      <Shell l={l} d={d} n={4}>
        <div className="pm-content">
          <h2>{t.steps}</h2>
          <ol className="pm-time">
            {t.s.map(([a, b], i) => <li key={i}><span>{p(i + 1)}</span><div><b>{a}</b><small>{fill(b)}</small></div></li>)}
          </ol>
          {d.showMaint && (
            <div className="pm-maint">
              <div className="pm-maint-ic">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" /></svg>
              </div>
              <div>
                <h3>{MAINT[l].h}</h3><p>{MAINT[l].p}</p>
                <div className="pm-chips">{MAINT[l].c.map((x, i) => <span key={i}>{x}</span>)}</div>
              </div>
              <div className="pm-maint-r"><span>{MAINT[l].when}</span><b>{d.maint ? `₹${num(d.maint, l)}` : MAINT[l].tbd}</b>{d.maint && <small>{MAINT[l].yr}</small>}</div>
            </div>
          )}
          <h2>{t.why}</h2>
          <div className="pm-why">{t.w.map(([a, b], i) => <div key={i}><b>{a}</b><small>{b}</small></div>)}</div>
          {d.notes.trim() && <div className="pm-note"><b>{t.notes}: </b>{d.notes}</div>}
          <p className="pm-pay">{t.pay} {fill(t.valid)}</p>
        </div>
      </Shell>

    </>
  );
}

/* ───────── Form Input Field ───────── */
function FormInput({ label, value, type = "text", ph, onChange }) {
  return (
    <label className="f">
      <span>{label}</span>
      <input type={type} value={value ?? ""} placeholder={ph} onChange={onChange} />
    </label>
  );
}

/* ───────── Tool ───────── */
export default function ProposalMaker() {
  const [d, setD] = useState(INIT);
  const [zoom, setZoom] = useState(0.8);
  useEffect(() => {
    try { const s = localStorage.getItem(KEY); if (s) setD((x) => ({ ...x, ...JSON.parse(s) })); } catch {}
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=DM+Sans:wght@400;500;700&family=Noto+Sans+Devanagari:wght@400;500;700;800&display=swap";
    document.head.appendChild(link);
  }, []);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch {} }, [d]);

  const set = (k) => (e) => setD((x) => ({ ...x, [k]: e.target.value }));
  const setPlan = (id, patch) => setD((x) => ({ ...x, plans: { ...x.plans, [id]: { ...x.plans[id], ...patch } } }));
  const setList = (l, k) => (e) => setD((x) => ({ ...x, lists: { ...x.lists, [l]: { ...x.lists[l], [k]: e.target.value } } }));
  const langs = useMemo(() => (d.lang === "both" ? ["en", "mr"] : [d.lang]), [d.lang]);

  const download = () => {
    const old = document.title;
    const name = `JiApp-Proposal-${d.no}${d.clientName ? "-" + d.clientName.replace(/\s+/g, "_") : ""}`;
    document.title = name;
    const back = () => { document.title = old; window.removeEventListener("afterprint", back); };
    window.addEventListener("afterprint", back);
    window.print();
  };
  const reset = () => { if (confirm("Reset all fields?")) setD(INIT); };

  return (
    <div className="pm-app">
      <style>{CSS}</style>

      <aside className="pm-panel">
        <div className="pm-top">
          <div><h2>Proposal maker</h2><p>Fill in the details. The preview updates as you type.</p></div>
        </div>

        <div className="pm-seg" role="tablist" aria-label="Language">
          {[["en", "English"], ["mr", "मराठी"], ["both", "English + मराठी"]].map(([v, n]) => (
            <button key={v} className={d.lang === v ? "on" : ""} onClick={() => setD((x) => ({ ...x, lang: v }))}>{n}</button>
          ))}
        </div>

        <fieldset><legend>Client</legend>
          <FormInput label="Client name" value={d.clientName} ph="e.g. Rahul Patil" onChange={set("clientName")} />
          <FormInput label="Business / company" value={d.company} ph="e.g. Patil Traders" onChange={set("company")} />
          <div className="row">
            <FormInput label="Phone" value={d.clientPhone} onChange={set("clientPhone")} />
            <FormInput label="Email" value={d.clientEmail} type="email" onChange={set("clientEmail")} />
          </div>
        </fieldset>

        <fieldset><legend>Proposal</legend>
          <div className="row">
            <FormInput label="Proposal no." value={d.no} onChange={set("no")} />
            <FormInput label="Date" value={d.date} type="date" onChange={set("date")} />
          </div>
          <div className="row">
            <FormInput label="Delivery (days)" value={d.days} onChange={set("days")} />
            <FormInput label="Valid for (days)" value={d.valid} onChange={set("valid")} />
          </div>
        </fieldset>

        <fieldset><legend>Plans to include</legend>
          {PLANS.map((p) => (
            <div className="plan-row" key={p.id}>
              <label className="chk"><input type="checkbox" checked={d.plans[p.id].on} onChange={(e) => setPlan(p.id, { on: e.target.checked })} />{p.en[0]}</label>
              {p.price !== null && (
                <span className="rs">₹<input type="number" value={d.plans[p.id].price ?? ""} onChange={(e) => setPlan(p.id, { price: Number(e.target.value) })} /></span>
              )}
              <label className="chk small"><input type="radio" name="rec" checked={d.recommended === p.id} onChange={() => setD((x) => ({ ...x, recommended: p.id }))} />Recommend</label>
            </div>
          ))}
        </fieldset>

        {langs.map((l) => (
          <fieldset key={l}><legend>{l === "en" ? "Lists (English), one per line" : "यादी (मराठी), प्रत्येक ओळीत एक"}</legend>
            <label className="f"><span>{T[l].get}</span><textarea rows={5} value={d.lists[l].get} onChange={setList(l, "get")} /></label>
            <label className="f"><span>{T[l].need}</span><textarea rows={5} value={d.lists[l].need} onChange={setList(l, "need")} /></label>
          </fieldset>
        ))}

        <fieldset><legend>Demo links (on cover page)</legend>
          <label className="chk"><input type="checkbox" checked={d.showDemo} onChange={(e) => setD((x) => ({ ...x, showDemo: e.target.checked }))} />Show “Click here to see demo”</label>
          <label className="f"><span>One per line: Name | link</span><textarea rows={3} value={d.demos} onChange={set("demos")} placeholder={"Marathi business site | https://demo1.example.com\nhttps://demo2.example.com"} /></label>
        </fieldset>

        <fieldset><legend>Next-year maintenance</legend>
          <label className="chk"><input type="checkbox" checked={d.showMaint} onChange={(e) => setD((x) => ({ ...x, showMaint: e.target.checked }))} />Show maintenance card</label>
          <FormInput label="Yearly fee, ₹ (optional, leave empty to discuss in meeting)" value={d.maint} type="number" onChange={set("maint")} />
        </fieldset>

        <fieldset><legend>Your details</legend>
          <div className="row">
            <FormInput label="Representative" value={d.repName} onChange={set("repName")} />
            <FormInput label="Phone / WhatsApp" value={d.repPhone} onChange={set("repPhone")} />
          </div>
          <div className="row">
            <FormInput label="Email" value={d.repEmail} onChange={set("repEmail")} />
            <FormInput label="Website" value={d.site} onChange={set("site")} />
          </div>
          <FormInput label="Location" value={d.city} onChange={set("city")} />
          <label className="f"><span>Extra note (optional)</span><textarea rows={2} value={d.notes} onChange={set("notes")} placeholder="e.g. 10% festival discount on Growth plan" /></label>
        </fieldset>

        <div className="pm-actions">
          <button className="primary" onClick={download}>Download PDF</button>
          <button className="ghost" onClick={reset}>Reset</button>
        </div>
        <p className="hint">In the print window, choose “Save as PDF”, paper A4, margins None, and turn on “Background graphics”.</p>
      </aside>

      <main className="pm-stage">
        <div className="pm-zoom"><span>Preview</span>
          <input type="range" min="0.4" max="1.1" step="0.05" value={zoom} onChange={(e) => setZoom(+e.target.value)} aria-label="Zoom" />
          <span>{Math.round(zoom * 100)}%</span></div>
        <div className="pm-sheet" style={{ "--z": zoom }}>
          {langs.map((l) => <Page key={l} l={l} d={d} />)}
        </div>
      </main>
    </div>
  );
}

/* ───────── Styles ───────── */
const CSS = `
.pm-app{--v:#6c47ff;--vd:#3b21b8;--ink:#1b1535;--soft:#f3f0ff;--line:#e4def8;--mut:#6b6788;
 display:grid;grid-template-columns:380px 1fr;min-height:100vh;background:#ece9f7;--hf:'Bricolage Grotesque','Noto Sans Devanagari',sans-serif;--bf:'DM Sans','Noto Sans Devanagari',system-ui,sans-serif;font-family:var(--bf);color:var(--ink)}
.pm-app *{box-sizing:border-box}
.pm-panel{background:#fff;border-right:1px solid var(--line);padding:20px;overflow:auto;height:100vh;position:sticky;top:0}
.pm-top h2{margin:0;font:800 22px var(--hf)}.pm-top p{margin:4px 0 16px;color:var(--mut);font-size:13px}
.pm-seg{display:flex;background:var(--soft);border-radius:10px;padding:3px;gap:3px;margin-bottom:14px}
.pm-seg button{flex:1;border:0;background:none;padding:8px 6px;border-radius:8px;font:600 12px inherit;font-family:inherit;color:var(--mut);cursor:pointer}
.pm-seg button.on{background:#fff;color:var(--vd);box-shadow:0 1px 4px #6c47ff30}
.pm-panel fieldset{border:0;padding:0;margin:0 0 16px;display:grid;gap:10px}
.pm-panel legend{font-weight:800;font-size:13px;padding:0;margin-bottom:8px;color:var(--vd)}
.f{display:grid;gap:4px;font-size:12px;color:var(--mut);font-weight:600}
.f input,.f textarea,.rs input{width:100%;border:1px solid var(--line);border-radius:8px;padding:8px 10px;font:500 13px inherit;font-family:inherit;color:var(--ink);background:#fff;resize:vertical}
.f input:focus,.f textarea:focus,.rs input:focus{outline:2px solid var(--v);outline-offset:0;border-color:var(--v)}
.row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.plan-row{display:grid;grid-template-columns:1fr 96px auto;gap:8px;align-items:center;font-size:13px}
.chk{display:flex;gap:6px;align-items:center;font-weight:600}.chk.small{font-size:11px;color:var(--mut)}
.rs{display:flex;align-items:center;gap:4px;color:var(--mut)}
.pm-actions{display:flex;gap:8px;position:sticky;bottom:-20px;background:#fff;padding:12px 0}
.pm-actions button{border-radius:10px;padding:12px 16px;font:700 14px inherit;font-family:inherit;cursor:pointer;border:1px solid var(--line)}
.pm-actions .primary{flex:1;background:var(--v);color:#fff;border-color:var(--v)}.pm-actions .primary:hover{background:var(--vd)}
.pm-actions .ghost{background:#fff;color:var(--ink)}
.hint{font-size:11px;color:var(--mut);margin:0}
.pm-stage{padding:20px;overflow:auto;height:100vh}
.pm-zoom{display:flex;gap:10px;align-items:center;font-size:12px;color:var(--mut);margin-bottom:12px;font-weight:600}
.pm-sheet{zoom:var(--z);display:flex;flex-direction:column;gap:24px;align-items:center}

/* A4 pages */
.pm-page{width:210mm;height:297mm;background:#fff;position:relative;overflow:hidden;box-shadow:0 10px 40px #2a1a7a26;font-size:11px;line-height:1.55;display:flex;flex-direction:column;color:var(--ink)}
.pm-page.mr{line-height:1.7}
.pm-page h1,.pm-page h2,.pm-page h3,.pm-price{font-family:var(--hf)}
.pm-run{display:flex;justify-content:space-between;align-items:center;padding:11mm 16mm 0;font-size:10px;color:var(--mut)}
.pm-brand{display:flex;align-items:center;gap:8px;font:700 12px var(--hf)}.pm-brand i{margin-left:auto;font:500 11px var(--bf);font-style:normal;opacity:.8}
.pm-logo{width:22px;height:22px;border-radius:6px;background:var(--v);color:#fff;display:grid;place-items:center;font:800 11px var(--hf)}
.pm-foot{margin-top:auto;padding:0 16mm 10mm;display:flex;gap:12px;justify-content:space-between;font-size:9px;color:var(--mut)}
.pm-foot:before{content:"";position:absolute;left:16mm;right:16mm;bottom:15mm;height:1px;background:var(--line)}
.pm-foot b{color:var(--vd)}
.pm-content{padding:14mm 16mm 0;display:flex;flex-direction:column;gap:6mm}
.pm-content h2{margin:0;font-size:24px;line-height:1.15;font-weight:800;letter-spacing:-.015em}
.pm-page.mr .pm-content h2{font-size:21px;line-height:1.4}

/* cover */
.pm-cov-top{background:var(--vd);color:#fff;padding:14mm 16mm;height:148mm;position:relative;overflow:hidden;display:flex;flex-direction:column}
.pm-cov-top .pm-logo{background:#fff;color:var(--v)}
.pm-cov-top h1{margin:auto 0 5mm;font-size:46px;line-height:1.05;font-weight:800;letter-spacing:-.025em;max-width:150mm;position:relative;z-index:1}
.pm-page.mr .pm-cov-top h1{font-size:34px;line-height:1.35}
.pm-cov-top p{margin:0;font-size:14px;max-width:125mm;opacity:.9;position:relative;z-index:1}
.pm-orb{position:absolute;right:-40mm;top:-30mm;width:130mm;height:130mm;border-radius:50%;background:radial-gradient(circle at 30% 30%,#9b83ff,#6c47ff 60%,#3b21b8)}
.pm-cov-body{padding:12mm 16mm 0;display:flex;flex-direction:column;gap:8mm}
.pm-cols{display:grid;grid-template-columns:1fr 1fr;gap:10mm}
.pm-cols .lab{display:block;font-size:10px;color:var(--v);font-weight:700;margin-bottom:1mm}
.pm-cols .big{font:700 17px var(--hf)}.pm-cols .mut{color:var(--mut)}
.pm-cols.meta{border-top:1px solid var(--line);padding-top:6mm}
.pm-lead{margin:0;font-size:12.5px;color:#3a3560;max-width:150mm}

/* scope */
.pm-check{list-style:none;margin:0;padding:0;display:grid;gap:3.4mm}
.pm-check li{padding:3.6mm 4mm 3.6mm 11mm;background:var(--soft);border-radius:10px;position:relative;font-size:12px}
.pm-check li:before{content:"";position:absolute;left:4mm;top:50%;width:5px;height:9px;border:solid var(--v);border-width:0 2px 2px 0;transform:translateY(-62%) rotate(45deg)}
.pm-check.alt li{background:#fff;border:1px solid var(--line)}

/* plans: staggered left / right cards */
.pm-zig{display:grid;gap:4.5mm}
.pm-card{width:85%;display:grid;grid-template-columns:50mm 1fr;border-radius:14px;overflow:hidden;background:#fff;border:1px solid var(--line);box-shadow:0 8px 22px #3b21b818}
.pm-card.l{justify-self:start}
.pm-card.r{justify-self:end;grid-template-columns:1fr 50mm}.pm-card.r .pm-card-p{order:2}
.pm-card-p{background:var(--soft);padding:5mm;display:flex;flex-direction:column;justify-content:center;gap:.6mm}
.pm-card-p h3{margin:2mm 0 0;font-size:17px;font-weight:700}
.pm-card-p small{font-size:9px;color:var(--mut);line-height:1.35}
.pm-card-p em{align-self:flex-start;background:#fff;color:var(--vd);font-style:normal;font-size:9px;font-weight:700;padding:1px 9px;border-radius:99px;margin-bottom:2mm}
.pm-tier{display:flex;gap:2px;align-items:flex-end;height:12px}
.pm-tier i{width:5px;border-radius:2px;background:#cfc6f5}
.pm-tier i:nth-child(1){height:5px}.pm-tier i:nth-child(2){height:7.5px}.pm-tier i:nth-child(3){height:10px}.pm-tier i:nth-child(4){height:12px}
.pm-tier i.on{background:var(--v)}
.pm-price{font-size:24px;font-weight:800;color:var(--vd);line-height:1.15}
.pm-card.rec{border:0;box-shadow:0 12px 30px #3b21b840}
.pm-card.rec .pm-card-p{background:linear-gradient(160deg,#3b21b8,#6c47ff);color:#fff}
.pm-card.rec .pm-price,.pm-card.rec .pm-card-p small{color:#fff}.pm-card.rec .pm-card-p small{opacity:.85}
.pm-card.rec .pm-tier i{background:#ffffff55}.pm-card.rec .pm-tier i.on{background:#fff}
.pm-card-f{list-style:none;margin:0;padding:5mm 6mm;display:grid;gap:1.8mm;align-content:center}
.pm-card-f li{padding-left:14px;position:relative;font-size:11px}
.pm-card-f li:before{content:"";position:absolute;left:0;top:.5em;width:5px;height:9px;border:solid var(--v);border-width:0 2px 2px 0;transform:translateY(-50%) rotate(45deg)}

/* process */
.pm-time{list-style:none;margin:0;padding:0 0 0 0;display:grid;gap:5mm;position:relative}
.pm-time li{display:flex;gap:5mm;align-items:flex-start;position:relative}
.pm-time li:not(:last-child):after{content:"";position:absolute;left:5.5mm;top:12mm;bottom:-6mm;width:1.5px;background:var(--line)}
.pm-time span{flex:none;width:11mm;height:11mm;border-radius:50%;background:var(--v);color:#fff;display:grid;place-items:center;font:700 13px var(--hf)}
.pm-time b{display:block;font:700 14px var(--hf)}.pm-time small{color:var(--mut);font-size:11px}
.pm-why{display:grid;grid-template-columns:repeat(4,1fr);gap:2.5mm}
.pm-why div{background:var(--soft);border-radius:10px;padding:3mm}.pm-why b{display:block;font:700 11.5px var(--hf);margin-bottom:.5mm}.pm-why small{color:var(--mut);font-size:9.5px;line-height:1.4;display:block}
.pm-note{background:#fff6dc;border-radius:10px;padding:3mm 4mm}
.pm-pay{margin:0;font-size:9.5px;color:var(--mut);border-top:1px solid var(--line);padding-top:4mm}

.pm-demo{border:1px solid var(--line);background:var(--soft);border-radius:12px;padding:5mm}
.pm-demo h3{margin:0 0 1mm;font:700 15px var(--hf)}.pm-demo p{margin:0 0 3mm;color:var(--mut);font-size:11px}
.pm-demo-l{display:grid;gap:2mm}
.pm-demo-l a{display:flex;justify-content:space-between;gap:8px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:8px;padding:3mm 4mm;text-decoration:none;color:var(--ink)}
.pm-demo-l span{color:var(--v);font-weight:700;text-decoration:underline;font-size:10.5px}
.pm-maint{display:grid;grid-template-columns:auto 1fr 38mm;gap:5mm;align-items:center;background:linear-gradient(135deg,#1b1535,#3b21b8);color:#fff;border-radius:14px;padding:5mm 6mm;box-shadow:0 10px 26px #3b21b838}
.pm-maint-ic{width:13mm;height:13mm;border-radius:50%;background:#ffffff22;display:grid;place-items:center}
.pm-maint h3{margin:0 0 1mm;font-size:15px;font-weight:700}.pm-maint p{margin:0 0 2.5mm;font-size:10.5px;opacity:.88}
.pm-chips{display:flex;flex-wrap:wrap;gap:1.5mm}.pm-chips span{background:#ffffff1f;border-radius:99px;padding:.4mm 2.6mm;font-size:9.5px}
.pm-maint-r{background:#fff;color:var(--vd);border-radius:10px;padding:3.5mm 3mm;text-align:center;display:grid;gap:.6mm}
.pm-maint-r span{font-size:9px;color:var(--mut)}.pm-maint-r b{font:800 14px var(--hf);line-height:1.25}.pm-maint-r small{font-size:9px;color:var(--mut)}
@media (max-width:900px){.pm-app{grid-template-columns:1fr}.pm-panel,.pm-stage{height:auto;position:static}}
@media print{
 @page{size:A4;margin:0}
 body *{visibility:hidden!important}
 .pm-sheet,.pm-sheet *{visibility:visible!important}
 .pm-sheet{position:absolute;left:0;top:0;zoom:1!important;gap:0}
 .pm-page{box-shadow:none;break-after:page;-webkit-print-color-adjust:exact;print-color-adjust:exact}
 .pm-page:last-child{break-after:auto}
}
`;
