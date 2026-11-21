export interface ServiceTranslatedBlock {
  name: string;
  pillarTitle: string;
  heroHeadline: string;
  heroSummary: string;
  typicalTimeline: string;
  idealFor: string[];
  deliverables: Array<{ title: string; detail: string }>;
  processSteps: Array<{ step: string; title: string; detail: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export interface GuideTranslatedBlock {
  topic: string;
  readTime: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  sections: Array<{ heading: string; body: string }>;
}

export const CY_TECH_ENTRY_COPY: Record<
  string,
  { role: string; rationale: string }
> = {
  'TypeScript 5 & JavaScript': {
    role: 'Prif Iaith Gwe ac API',
    rationale:
      'Diogelwch math amser-cydgrynhoi ar draws apiau gwe cymhleth, dangosfyrddau a phyrth archebu.',
  },
  'PHP 8.4 (Strict WordPress)': {
    role: 'CMS Menter ac Ategion',
    rationale:
      'Modiwlau pwrpasol glân wedi’u rheoli gan Composer heb faich adeiladwyr tudalennau trwm.',
  },
  'Python 3.12 (FastAPI)': {
    role: 'Piblinellau AI ac Awtomeiddio',
    rationale:
      'Rheolaeth LLM ochr-gweinydd, dosrannu dogfennau a llwybro data sy’n cydymffurfio â GDPR y DU.',
  },
  'PostgreSQL & MySQL 8': {
    role: 'Data Perthynol ac HPOS',
    rationale:
      'Optimeiddio ymholiadau â mynegeion fel bod catalogau WooCommerce a phyrth yn aros yn gyflym.',
  },
  'React 19, Next.js & Vite': {
    role: 'Pensaernïaeth Ap a Statig Modern',
    rationale:
      'Bwndeli parod ar gyfer yr edge a thrawsnewidiadau rhyngwyneb glân heb unrhyw sifft cynllun.',
  },
  'WordPress Block Themes': {
    role: 'Peirianneg Gutenberg Bwrpasol',
    rationale:
      'Yn rhoi golygu tudalennau syml i dimau marchnata’r DU gyda theipograffeg brand wedi’i chloi.',
  },
  'Tailwind CSS v4 & Design Tokens': {
    role: 'Systemau Dylunio Cyfleustodau',
    rationale:
      'Tâl CSS lleiaf posibl, cymarebau cyferbyniad llym a chitiau cydrannau cyson.',
  },
  'Semantic HTML5 & WAI-ARIA': {
    role: 'Cydymffurfiaeth WCAG 2.2 AA',
    rationale:
      'Llywio bysellfwrdd llawn, tirnodau darllenydd sgrin a dilysu ffurflenni hygyrch.',
  },
  'Schema.org JSON-LD Graphs': {
    role: 'Marcio Endidau a Chynigion',
    rationale:
      'Yn cysylltu eich lleoliadau yn y DU, prisiau GBP, cwestiynau a gwasanaethau ar gyfer canlyniadau cyfoethog.',
  },
  '/llms.txt & Crawler Control': {
    role: 'Parodrwydd Chwilio AI',
    rationale:
      'Cyfarwyddebau penodol ar gyfer OAI-SearchBot, Googlebot, PerplexityBot a ClaudeBot.',
  },
  'Grounded RAG & Server Proxies': {
    role: 'Offer AI Heb Rithweledigaethau',
    rationale:
      'Allweddi API preifat ar y backend wedi’u seilio’n llym ar eich dogfennaeth ddilys yn y DU.',
  },
  'n8n, Make & Signed Webhooks': {
    role: 'Awtomeiddio Prosesau Busnes',
    rationale:
      'Yn cysylltu ffurflenni, HubSpot/CRM, Slack a Xero gyda phwyntiau cymeradwyo dynol.',
  },
  'Cloudflare Workers & Edge CDN': {
    role: 'Diogelwch Edge Byd-eang a WAF',
    rationale:
      'Llwybro Anycast ar draws nodau edge Llundain a’r DU gydag amddiffyniad DDoS a bot.',
  },
  'GitHub Actions CI/CD': {
    role: 'Gatiau Adeiladu a Lingo Awtomataidd',
    rationale:
      'Mae pob diweddariad yn cael ei grynhoi, ei wirio a’i gyflwyno’n lân heb risg FTP.',
  },
  '20i, Krystal UK & AWS London': {
    role: 'Preswyliad Data y DU (eu-west-2)',
    rationale:
      'Cynnal Prydeinig cyflym ynghyd â chopïau wrth gefn wedi’u hamgryptio bob dydd yn y DU/AEE.',
  },
  'Server 301 & DNS Governance': {
    role: 'Trawsnewidiadau Heb Amser Segur',
    rationale:
      'Yn cadw awdurdod hanesyddol Google UK a chofnodion DNS Nominet .co.uk wrth newid.',
  },
  'WooCommerce HPOS Architecture': {
    role: 'Manwerthu Cyfaint Uchel y DU',
    rationale:
      'Tablau archebion pwrpasol, hidlo AJAX ar unwaith a llifoedd talu symudol syml.',
  },
  'Stripe, Apple Pay & Klarna': {
    role: 'Taliadau SCA / 3D Secure',
    rationale:
      'Taliadau symudol un-tap cyflym wedi’u tiwnio ar gyfer bancio’r DU a Strong Customer Authentication.',
  },
  'Xero, QuickBooks UK & HubSpot': {
    role: 'Cydamseru CRM a Chyllid',
    rationale:
      'Cydamseru anfonebau, cwsmeriaid a phriodoli ymholiadau dwy ffordd gyda chiwiau ailgynnig.',
  },
  'Royal Mail & DPD Shipping APIs': {
    role: 'Rheolau Cod Post ac Anfon',
    rationale:
      'Chwilio cod post byw yn y DU, haenau negesydd wedi’u tracio a rhesymeg TAW safonol/sero.',
  },
};

export const CY_CARE_LIMIT_COPY: Record<
  string,
  Array<{ label: string; value: string }>
> = {
  essential: [
    { label: 'Copïau Wrth Gefn', value: 'Dyddiol (cadw am 30 diwrnod)' },
    { label: 'Llywodraethiant Craidd', value: 'Wythnosol ar lwyfan y DU' },
    { label: 'Monitro Argaeledd', value: 'Bob 5 munud' },
    { label: 'Amser Uwch Beiriannydd', value: '1 awr / mis wedi’i chynnwys' },
    { label: 'Adfer Meddalwedd Faleisus', value: 'Cyfradd flaenoriaeth' },
  ],
  growth: [
    { label: 'Copïau Wrth Gefn', value: 'Dwywaith y dydd (60 diwrnod)' },
    { label: 'Llywodraethiant Craidd', value: 'Wythnosol + gwiriad QA gweledol' },
    { label: 'Monitro Argaeledd', value: 'Bob 1 munud' },
    { label: 'Amser Uwch Beiriannydd', value: '3 awr / mis wedi’u cynnwys' },
    { label: 'Adfer Meddalwedd Faleisus', value: 'Wedi’i gynnwys heb dâl ychwanegol' },
  ],
  scale: [
    { label: 'Copïau Wrth Gefn', value: 'DB bob awr + ffeiliau dyddiol (90 diwrnod)' },
    { label: 'Llywodraethiant Craidd', value: 'Bob pythefnos + cymeradwyaeth' },
    { label: 'Monitro Argaeledd', value: '30 eiliad + rhybuddion talu' },
    { label: 'Amser Uwch Beiriannydd', value: '6 awr / mis wedi’u cynnwys' },
    { label: 'SLA Digwyddiad Blaenoriaeth', value: 'Ymateb o dan 30 munud' },
  ],
};

export const CY_GUIDES_COPY: Record<string, GuideTranslatedBlock> = {
  'geo-ai-search-uk': {
    topic: 'GEO a Chwilio AI',
    readTime: '5 munud i’w ddarllen',
    publishedAt: 'Tachwedd 2026',
    title: 'Sut Mae Sefydliadau Prydeinig yn Ennill Dyfyniadau yn ChatGPT, Gemini a Claude',
    excerpt:
      'Pam mae ailadrodd allweddeiriau hen ffasiwn yn methu mewn chwilio cynhyrchiol—a sut mae schema endid, llms.txt a data masnachol strwythuredig yn ennill dyfyniadau awdurdodol.',
    sections: [
      {
        heading: 'O Ddeg Dolen Las i Ddyfyniadau Endid Gwiriedig',
        body: 'Mae peiriannau ateb AI yn llunio argymhellion o endidau strwythuredig yn hytrach na sloganau marchnata. Mae cyhoeddi ffioedd GBP tryloyw, ardal wasanaeth y DU a chanlyniadau gwiriedig yn galluogi ChatGPT, Gemini a Claude i ddyfynnu eich ymarfer yn gywir.',
      },
      {
        heading: 'Gosod Schema.org JSON-LD ac /llms.txt',
        body: 'Mae paru ProfessionalService a FAQPage JSON-LD â mynegai /llms.txt wedi’i guradu yn sicrhau bod cropianwyr fel OAI-SearchBot, PerplexityBot a Googlebot yn darllen eich union alluoedd heb amwysedd.',
      },
    ],
  },
  'ai-automation-uk-smes': {
    topic: 'Awtomeiddio AI',
    readTime: '6 munud i’w ddarllen',
    publishedAt: 'Tachwedd 2026',
    title: 'Awtomeiddio Prosesau Busnes AI Cydymffurfiol o dan Lywodraethiant GDPR y DU',
    excerpt:
      'Unwch ymholiadau gwefan, dyfynbrisiau, cofnodion CRM a chymryd cleientiaid yn ddiogel heb unrhyw hyfforddiant modelau allanol.',
    sections: [
      {
        heading: 'Targedu Tagfeydd Gweinyddol Ffrithiant Uchel',
        body: 'Daw’r enillion gweithredol mwyaf dibynadwy o awtomeiddio gweinyddiaeth ailadroddus: dosbarthu ymholiadau sy’n dod i mewn, cydamseru cofnodion cleientiaid i Xero neu HubSpot, a llunio briffiau cwmpasu strwythuredig.',
      },
      {
        heading: 'Cadw Llywodraethiant Dynol a Sofraniaeth Data',
        body: 'Mae awtomeiddiadau da yn prosesu data masnachol ar draws pwyntiau terfyn y DU/AEE yn unig gyda chofnodion archwilio na ellir eu newid a chymeradwyaeth partner cyn anfon allan.',
      },
    ],
  },
  'ecommerce-speed-core-web-vitals': {
    topic: 'Gwe ac E-fasnach',
    readTime: '4 munud i’w ddarllen',
    publishedAt: 'Hydref 2026',
    title: 'Cyflawni Largest Contentful Paint o dan 1.2s ar Siopau Manwerthu y DU',
    excerpt:
      'Storfa edge ymarferol, mynegeio cronfeydd data perthynol a disgyblaeth llwyth sy’n codi cyfraddau trosi talu symudol yn sylweddol.',
    sections: [
      {
        heading: 'Dilëwch Faich Pensaernïol Cyn Lansio',
        body: 'Mae adeiladwyr gweledol trwm ac ymholiadau heb fynegeion yn arafu desgiau talu symudol ar rwydweithiau 4G a 5G y DU. Mae themâu Gutenberg pwrpasol ysgafn ynghyd â storfa edge yn cadw ymateb ar unwaith.',
      },
      {
        heading: 'Diogelwch Ecwiti Organig Gyda Rheolau 301',
        body: 'Pryd bynnag y byddwch yn ailblatfformio parth manwerthu yn y DU, mapiwch bob llwybr cynnyrch a chategori hanesyddol yn uniongyrchol drwy ailgyfeiriadau 301 lefel-gweinydd.',
      },
    ],
  },
};

export const CY_SERVICE_PAGES_COPY: Record<string, ServiceTranslatedBlock> = {
  'website-development': {
    name: 'Datblygu Gwefannau',
    pillarTitle: '01. Gwe, E-fasnach a Pheirianneg Bwrpasol',
    heroHeadline: 'Datblygu gwefannau pwrpasol yn y DU ar gyfer cyflymder, eglurder ac ymholiadau.',
    heroSummary:
      'Rydym yn dylunio ac yn peiriannu gwefannau WordPress cyflym a chymwysiadau gwe modern wedi’u teilwra ar gyfer prynwyr y DU—gan ddileu adeiladwyr tudalennau araf ac ategion diangen.',
    typicalTimeline: '2 – 4 wythnos',
    idealFor: [
      'Busnesau gwasanaeth y DU sy’n disodli gwefan hen neu araf',
      'Cwmnïau sy’n ailadeiladu safle .co.uk coll neu wedi torri o’r dechrau',
      'Timau sydd angen rheolaeth olygu lân heb ddibynnu ar ddatblygwr',
      'Sefydliadau sy’n gofyn am Core Web Vitals llym a chydymffurfiaeth hygyrchedd',
    ],
    deliverables: [
      {
        title: 'Pensaernïaeth Blociau Bwrpasol',
        detail:
          'HTML semantig ysgafn gydag adrannau tudalen y gellir eu hailddefnyddio yn lle adeiladwyr trwm.',
      },
      {
        title: 'Cynlluniau Ymatebol Symudol-Gyntaf',
        detail:
          'Wedi’u profi ar draws dyfeisiau iOS, Android a bwrdd gwaith ar rwydweithiau 4G/5G y DU.',
      },
      {
        title: 'Cydymffurfiaeth GDPR a PECR y DU',
        detail:
          'Ffurflenni ymholi preifatrwydd, caniatâd cwcis gronynnog a thrin data glân.',
      },
      {
        title: 'SEO Technegol ac Amddiffyniad 301',
        detail:
          'Schema.org JSON-LD, mapiau safle XML ac ailgyfeiriadau 301 lefel-gweinydd.',
      },
      {
        title: 'Copïau Wrth Gefn Awtomataidd',
        detail:
          'Copïau cwmwl y DU/AEE wedi’u hamgryptio bob dydd ac amgylchedd llwyfannu cyn lansio.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Pensaernïaeth a Fframiau Gwifren',
        detail: 'Mapiwn daith prynwr y DU, hierarchaeth tudalennau a strwythur URL.',
      },
      {
        step: '02.',
        title: 'Adeiladu Llwyfannu a Thiwning Cyflymder',
        detail: 'Cod glân ar weinydd llwyfannu’r DU o dan 1.2s Largest Contentful Paint.',
      },
      {
        step: '03.',
        title: 'Rhyddhau Heb Amser Segur',
        detail: 'Newid DNS rheoledig, gwirio SSL, Search Console a hyfforddiant tîm.',
      },
    ],
    faqs: [
      {
        question: 'Ar ba blatfformau rydych chi’n adeiladu gwefannau?',
        answer:
          'Rydym yn adeiladu’n bennaf ar WordPress ysgafn (themâu bloc Gutenberg pwrpasol) yn ogystal â React/TypeScript a Next.js yn dibynnu ar lif gwaith eich tîm.',
      },
      {
        question: 'Allwch chi gyd-fynd â’n strwythur URL .co.uk presennol?',
        answer:
          'Gallwn. Archwiliwn bob tudalen Google UK a gedwir y llwybrau neu osod ailgyfeiriadau 301 fel na chollir traffig organig.',
      },
      {
        question: 'Ydyn ni’n berchen ar 100% o’r cod, y parth a’r cynnwys?',
        answer:
          'Ydynt. Mae popeth wedi’i leoli o dan eich cyfrifon cofrestru a chynnal eich hun yn y DU heb unrhyw gloi i mewn.',
      },
    ],
  },
  'ecommerce-website-development': {
    name: 'Datblygu Gwefannau E-fasnach',
    pillarTitle: '01. Gwe, E-fasnach a Pheirianneg Bwrpasol',
    heroHeadline: 'Siopau e-fasnach trawsnewid uchel y DU ar gyfer talu symudol cyflym.',
    heroSummary:
      'O siopau WooCommerce pwrpasol i lwyfannau manwerthu wedi’u ffurfweddu ar gyfer GBP (£), rheolau TAW y DU, Stripe/Apple Pay ac anfon Royal Mail neu DPD.',
    typicalTimeline: '3 – 6 wythnos',
    idealFor: [
      'Brandiau manwerthu’r DU sy’n tyfu y tu hwnt i dempledi WooCommerce araf',
      'Cyflenwyr B2B sydd angen prisio masnach neu anfonebu TAW',
      'Masnachwyr sy’n mudo o hen blatfformau heb golli URLs cynnyrch',
      'Siopau sy’n ceisio lleihau gadael basgedi ar ddyfeisiau symudol',
    ],
    deliverables: [
      {
        title: 'Llif Talu Syml y DU',
        detail: 'Chwilio cod post, Apple Pay / Google Pay / Stripe a llai o ffrithiant.',
      },
      {
        title: 'Rheolau TAW y DU a Negesyddion',
        detail: 'Cyfrifo TAW safonol/sero ac integreiddio parthau Royal Mail, DPD neu DHL.',
      },
      {
        title: 'Schema Cynnyrch a Ffrydiau',
        detail: 'Marcio Product JSON-LD ar gyfer Google Shopping a pheiriannau chwilio AI.',
      },
      {
        title: 'Tiwnio Cyflymder Basged a DB',
        detail: 'Optimeiddio WooCommerce HPOS fel bod hidlo catalogau yn aros ar unwaith.',
      },
      {
        title: 'Cydamseru Cyfrifeg a Stoc',
        detail: 'Cydamseru amser-real dewisol gyda Xero, QuickBooks UK neu systemau warws.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Archwiliad Catalog a Talu',
        detail: 'Mapiwn briodweddau cynnyrch, haenau cludo, TAW a mudo archebion.',
      },
      {
        step: '02.',
        title: 'Siop ac Integreiddio Taliadau',
        detail: 'Templedi cynnyrch pwrpasol, drôr basged a phyrth talu wedi’u profi.',
      },
      {
        step: '03.',
        title: 'QA Llif Archebion a Lansio',
        detail: 'Prawf prynu o’r dechrau i’r diwedd a monitro lansio byw.',
      },
    ],
    faqs: [
      {
        question: 'Allwch chi fudo ein harchebion, cwsmeriaid ac URLs presennol?',
        answer:
          'Gallwn. Mudiwn gyfrifon, hanes archebion a llwybrau cynnyrch yn lân gydag ailgyfeiriadau 301 wedi’u gwirio.',
      },
      {
        question: 'Pa byrth talu yn y DU ydych chi’n eu hintegreiddio?',
        answer:
          'Rydym yn cefnogi Stripe, PayPal Commerce, Klarna, Apple Pay, Google Pay a GoCardless Direct Debit.',
      },
      {
        question: 'Sut ydych chi’n cadw WooCommerce yn gyflym wrth dyfu?',
        answer:
          'Galluogwn High-Performance Order Storage (HPOS), tiwnio mynegeion MySQL ac ychwanegu storfa edge.',
      },
    ],
  },
  'custom-web-solutions-integrations': {
    name: 'Datrysiadau Gwe Bwrpasol ac Integreiddiadau',
    pillarTitle: '01. Gwe, E-fasnach a Pheirianneg Bwrpasol',
    heroHeadline: 'Cymwysiadau gwe pwrpasol, pyrth cleientiaid ac integreiddiadau API glân.',
    heroSummary:
      'Pan nad yw ategion cyffredinol yn ddigon, rydym yn peiriannu dangosfyrddau pwrpasol, llifoedd archebu a chysylltiadau dwy-ffordd dibynadwy â Xero, HubSpot a Stripe.',
    typicalTimeline: '2 – 6 wythnos',
    idealFor: [
      'Busnesau sy’n cysylltu taenlenni ac offer SaaS datgysylltiedig',
      'Asiantaethau neu glinigau sydd angen pyrth archebu neu gleientiaid',
      'Cwmnïau sydd angen cydamseru diogel rhwng gwefan a CRM/ERP',
      'Timau sy’n disodli hen ategion pwrpasol bregus',
    ],
    deliverables: [
      {
        title: 'Canolwedd API a Webhooks',
        detail: 'Cysylltwyr gwydn gyda chiwiau ailgynnig a chofnodi gwallau glân.',
      },
      {
        title: 'Pyrth Cleientiaid ac Aelodau',
        detail: 'Pyrth dilysiedig ar gyfer rhannu dogfennau, anfonebu a thracio prosiectau.',
      },
      {
        title: 'Cyfrifianellau a Pheiriannau Dyfynnu',
        detail: 'Cyflunwyr prisio pwrpasol wedi’u teilwra i’ch gwasanaethau yn y DU.',
      },
      {
        title: 'Cydamseru CRM a Chyfrifeg',
        detail: 'Integreiddio uniongyrchol â HubSpot, Pipedrive, Salesforce, Xero a Calendly.',
      },
      {
        title: 'Caledu Diogelwch OWASP',
        detail: 'Dilysu mewnbwn, ymholiadau paramedroli a storfa allweddi API diogel.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Mapio Systemau a Data',
        detail: 'Dogfennwn sgema data, ffiniau dilysu ac achosion ymylol.',
      },
      {
        step: '02.',
        title: 'Peirianneg Modiwlar a Phrofion',
        detail: 'Modiwlau TypeScript neu PHP glân wedi’u profi yn erbyn APIs blwch tywod.',
      },
      {
        step: '03.',
        title: 'Cyflwyno wedi’i Fonitro',
        detail: 'Rhyddhau gyda gwiriadau iechyd awtomataidd a dogfennaeth dîm.',
      },
    ],
    faqs: [
      {
        question: 'Allwch chi integreiddio meddalwedd bwrpasol gyda’n gwefan WordPress?',
        answer:
          'Gallwn. Adeiladwn ategion glân neu wasanaethau API headless sy’n cyfathrebu’n ddiogel heb arafu’r wefan.',
      },
      {
        question: 'Beth sy’n digwydd os bydd API trydydd parti yn mynd i lawr?',
        answer:
          'Dyluniwn integreiddiadau gyda chiwiau a rhesymeg ailgynnig fel na chollir unrhyw ymholiad nac archeb.',
      },
      {
        question: 'Ydych chi’n darparu dogfennaeth dechnegol ar ôl lansio?',
        answer:
          'Ydyn. Mae pob integreiddiad yn cynnwys nodiadau pensaernïaeth a chefnogaeth drosglwyddo.',
      },
    ],
  },
  'ai-powered-website-development': {
    name: 'Datblygu Gwefannau wedi’u Pweru gan AI',
    pillarTitle: '01. Gwe, E-fasnach a Pheirianneg Bwrpasol',
    heroHeadline: 'Galluoedd gwefan AI pwrpasol sy’n cymhwyso galw masnachol.',
    heroSummary:
      'Ewch y tu hwnt i declynnau sgwrsio cyffredinol. Rydym yn peiriannu chwilio gwybodaeth wedi’i seilio ar ffeithiau, diagnosteg ryngweithiol ac offer dyfynnu strwythuredig.',
    typicalTimeline: '2 – 5 wythnos',
    idealFor: [
      'Cwmnïau gwasanaeth gyda chynigion cymhleth eisiau argymhellion dan arweiniad',
      'Safleoedd llawn cynnwys sydd angen chwilio iaith naturiol semantig',
      'Brandiau e-fasnach sy’n cynnig cynorthwywyr ffit cynnyrch',
      'Timau eisiau galluoedd AI heb ddatgelu allweddi API na rhithweledigaethau',
    ],
    deliverables: [
      {
        title: 'Chwilio Gwybodaeth wedi’i Seilio',
        detail: 'Chwilio a chynorthwywyr C&A wedi’u seilio’n llym ar eich gwasanaethau dilys.',
      },
      {
        title: 'Offer Cymhwyso a Chwmpasu',
        detail: 'Cyfrifianellau clyfar sy’n troi ymwelwyr yn ymholiadau strwythuredig manwl.',
      },
      {
        title: 'Pensaernïaeth API Ochr-Gweinydd',
        detail: 'Procsis backend diogel gyda therfynau cyfradd a chapiau cost.',
      },
      {
        title: 'Rheolaethau Data GDPR y DU',
        detail: 'Prosesu sero-gadw neu gydymffurfiol â’r DU/UE gyda datgeliad clir.',
      },
      {
        title: 'UX Cyflym Heb Flocio',
        detail: 'Llwytho blaengar fel nad yw nodweddion AI byth yn arafu Core Web Vitals.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Dewis Achos Defnydd ac ROI',
        detail: 'Nodwn lle mae AI yn lleihau ffrithiant go iawn i’ch prynwyr.',
      },
      {
        step: '02.',
        title: 'Adeiladu Canllawiau a Diogelwch',
        detail: 'Allbynnau strwythuredig llym a seilio ffeithiol ar eich catalog.',
      },
      {
        step: '03.',
        title: 'Monitro Trosi a Chostau',
        detail: 'Lansio byw gyda gwiriadau latency ac olrhain ansawdd ymholiadau.',
      },
    ],
    faqs: [
      {
        question: 'A fydd nodweddion AI yn arafu ein gwefan neu’n effeithio ar SEO?',
        answer:
          'Na. Mae cynnwys craidd yn aros yn HTML statig neu wedi’i rendro ar y gweinydd wrth i bwyntiau AI lwytho’n asyncronaidd.',
      },
      {
        question: 'Sut ydych chi’n atal AI rhag dyfeisio prisiau anghywir?',
        answer:
          'Seiliwn ymatebion yn llym yn erbyn eich data strwythuredig gwiriedig gyda dilysiad.',
      },
      {
        question: 'A yw allweddi API yn cael eu cadw’n ddiogel?',
        answer:
          'Ydynt. Mae pob galwad model yn rhedeg ar y gweinydd yn unig—byth yn JavaScript y porwr.',
      },
    ],
  },
  'branding-brand-identity': {
    name: 'Brandio a Hunaniaeth Brand',
    pillarTitle: '04. Strategaeth Brand a Thwf Masnachol',
    heroHeadline: 'Systemau hunaniaeth brand nodedig i ennyn ymddiriedaeth ym marchnad y DU.',
    heroSummary:
      'Rydym yn crefftio hunaniaeth weledol gydlynol, systemau teipograffeg, paletau lliw a chanllawiau brand digidol sy’n gwneud i fusnesau’r DU edrych yn sefydledig a chredadwy.',
    typicalTimeline: '2 – 3 wythnos',
    idealFor: [
      'Cwmnïau newydd ac asiantaethau uchelgeisiol yn y DU yn lansio prif barth',
      'Sefydliadau sefydledig yn ailfrandio ar ôl twf neu uno',
      'Cwmnïau y mae eu logo a’u gwefan yn anghyson ar draws sianeli',
      'Timau cynnyrch sydd angen tocynnau dylunio parod ar gyfer peirianneg',
    ],
    deliverables: [
      {
        title: 'Swît Logo Cynradd ac Eilaidd',
        detail: 'Marciau fector manwl SVG, PNG a phrint ar gyfer cefndiroedd golau a thywyll.',
      },
      {
        title: 'System Teipograffeg a Lliwiau',
        detail: 'Parau ffont trwyddedig a phaletau wedi’u gwirio i safon WCAG AA.',
      },
      {
        title: 'Canllawiau Brand Digidol',
        detail: 'Dogfennaeth lywodraethiant ar gyfer bylchu, tôn olygyddol ac eiconograffeg.',
      },
      {
        title: 'Templedi Cymdeithasol a Chynigion',
        detail: 'Cardiau rhannu OpenGraph cydlynol, baneri LinkedIn ac asedau tendr.',
      },
      {
        title: 'Integreiddio Peirianneg Uniongyrchol',
        detail: 'Tocynnau brand yn barod ar gyfer Tailwind CSS neu WordPress pwrpasol.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Lleoliad a Meincnodi Cyfoedion',
        detail: 'Archwiliwn arweinwyr sector y DU fel bod eich hunaniaeth yn sefyll allan.',
      },
      {
        step: '02.',
        title: 'Cyfeiriad Cysyniad a Mireinio',
        detail: 'Llwybrau hunaniaeth wedi’u mireinio o amgylch awdurdod teipograffig ac eglurder.',
      },
      {
        step: '03.',
        title: 'Trosglwyddo’r Swît Hunaniaeth Llawn',
        detail: 'Pecyn fector, tocynnau gwe a chanllawiau cyflawn yn barod i’w lansio.',
      },
    ],
    faqs: [
      {
        question: 'Allwch chi adnewyddu ein brand ac adeiladu’r wefan newydd gyda’n gilydd?',
        answer:
          'Gallwn—mae cyfuno Brandio a Datblygu Gwefan yn dileu ffrithiant ac yn cyflymu’r lansiad 2–3 wythnos.',
      },
      {
        question: 'Pa fformatau ffeil rydyn ni’n eu derbyn?',
        answer:
          'Byddwch yn derbyn ffeiliau SVG, EPS/PDF ar gyfer print, eiconau gwe, asedau cymdeithasol a chanllaw arddull.',
      },
      {
        question: 'Ydych chi’n profi lliwiau ar gyfer hygyrchedd?',
        answer:
          'Ydyn. Gwirir pob cyfuniad lliw testun a botwm yn erbyn cymarebau cyferbyniad WCAG AA.',
      },
    ],
  },
  'search-engine-optimisation': {
    name: 'Optimeiddio Peiriannau Chwilio (SEO)',
    pillarTitle: '02. Awdurdod SEO, GEO a Chwilio AI',
    heroHeadline: 'SEO technegol a rhanbarthol y DU i luosogi ymholiadau organig cymwys.',
    heroSummary:
      'Heb fetrigau ofer na chynlluniau dolenni artiffisial. Datryswn bensaernïaeth cropian, Core Web Vitals, signalau rhanbarthol y DU a thudalennau masnachol.',
    typicalTimeline: 'Parhaus · Sbrint archwilio 30-diwrnod',
    idealFor: [
      'Sefydliadau’r DU sy’n adfer safleoedd ar ôl mudo parth .co.uk',
      'Ymarferion sy’n cystadlu yn Llundain, Manceinion, Birmingham neu’r DU gyfan',
      'Catalogau e-fasnach gyda chategorïau heb eu mynegeio neu URLs dyblyg',
      'Timau arweinyddiaeth sy’n gofyn am adroddiadau masnachol atebol',
    ],
    deliverables: [
      {
        title: 'Archwiliad Technegol a Chropian Llawn',
        detail: 'Datrys gwallau 404, cadwyni ailgyfeirio, tagiau canonaidd a mapiau XML.',
      },
      {
        title: 'Pensaernïaeth Ranbarthol y DU',
        detail: 'hreflang en-GB, LocalBusiness JSON-LD a thudalennau lleoliad heb sbam.',
      },
      {
        title: 'Mapio Tudalennau Bwriad Masnachol',
        detail: 'Cysylltu termau chwilio gwerth uchel yn uniongyrchol â thudalennau pwrpasol.',
      },
      {
        title: 'Peirianneg Core Web Vitals',
        detail: 'Atgyweiriadau peirianneg uniongyrchol ar gyfer LCP, INP a CLS.',
      },
      {
        title: 'Adroddiadau Canlyniadau Gweithredol',
        detail: 'Priodoli misol tryloyw o argraffiadau’r DU, safleoedd ac ymholiadau.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Archwiliad Technegol a Search Console',
        detail: 'Nodi rhwystrau mynegeio ac enillion safle cyflym yn y DU.',
      },
      {
        step: '02.',
        title: 'Gosod Ar-Dudalen a Schema',
        detail: 'Mae ein peirianwyr yn diweddaru penawdau, mapiau 301 a JSON-LD yn uniongyrchol.',
      },
      {
        step: '03.',
        title: 'Ehangu Awdurdod a Briffiau',
        detail: 'Ehangu canllawiau ymarfer y DU a thracio trosi yn fisol.',
      },
    ],
    faqs: [
      {
        question: 'Allwch chi adfer safleoedd os collon ni ein hen safle .co.uk?',
        answer:
          'Gallwn. Archwiliwn Google Search Console ac archifau i adfer llwybrau a gosod ailgyfeiriadau 301.',
      },
      {
        question: 'Ydych chi’n gweithredu’r atgyweiriadau technegol yn fewnol?',
        answer:
          'Ydyn. Mae ein huwch beirianwyr yn gosod Schema, tiwnio cyflymder a rheolau ailgyfeirio’n uniongyrchol.',
      },
      {
        question: 'Pa mor gyflym y gwelir canlyniadau SEO mesuradwy yn y DU?',
        answer:
          'Mae enillion cropian a chyflymder yn aml yn dangos o fewn 2–4 wythnos, tra bod awdurdod allweddeiriau’n tyfu dros 3–6 mis.',
      },
    ],
  },
  'generative-engine-optimisation': {
    name: 'Optimeiddio Peiriannau Cynhyrchiol (GEO)',
    pillarTitle: '02. Awdurdod SEO, GEO a Chwilio AI',
    heroHeadline: 'Optimeiddio Peiriannau Cynhyrchiol ar gyfer Google AI Overviews a pheiriannau ateb.',
    heroSummary:
      'Mae ymddygiad chwilio wedi symud o ddolenni i atebion wedi’u syntheseiddio. Rydym yn strwythuro eich gwasanaethau, endidau a phrawf fel bod peiriannau AI yn dyfynnu eich brand yn gyntaf.',
    typicalTimeline: 'Sbrint cychwynnol 2 – 4 wythnos',
    idealFor: [
      'Ymarferion B2B y DU sy’n colli gwelededd organig i Google AI Overviews',
      'Asiantaethau a thimau SaaS sydd eisiau adnabyddiaeth endid awdurdodol',
      'Busnesau’n lansio safleoedd newydd sydd angen pensaernïaeth AI o’r diwrnod cyntaf',
      'Brandiau gyda chanlyniadau cryf wedi’u cuddio mewn rhyddiaith heb strwythur',
    ],
    deliverables: [
      {
        title: 'Marcio Endid a Graff Gwybodaeth',
        detail: 'ProfessionalService, OfferCatalog a FAQPage JSON-LD yn cysylltu eich brand.',
      },
      {
        title: 'Strwythuro Cynnwys Ateb-Gyntaf',
        detail: 'Adrannau C&A clir a metrigau GBP gwiriedig ar gyfer echdynnu di-amwysedd.',
      },
      {
        title: 'HTML wedi’i Rag-Rendro',
        detail: 'Sicrhau bod pob cropiwr cynhyrchiol yn darllen 100% o’ch tudalen heb JavaScript.',
      },
      {
        title: 'Cyfagosrwydd Prawf i Honni',
        detail: 'Paru pob honiad gyda astudiaethau achos y DU a phrisio tryloyw.',
      },
      {
        title: 'Meincnodi Dyfyniadau GEO',
        detail: 'Olrhain sut mae eich brand yn cael ei ddisgrifio mewn anogwyr prynu’r DU.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Archwiliad Gwelededd Endid ac Anogwr',
        detail: 'Profi sut mae peiriannau cynhyrchiol yn ateb ymholiadau yn eich marchnad.',
      },
      {
        step: '02.',
        title: 'Ailstrwythuro Schema a Chynnwys',
        detail: 'Ailadeiladu tudalennau gyda semanteg HTML lân a blociau prawf ffeithiol.',
      },
      {
        step: '03.',
        title: 'Gwirio Aml-Beiriant',
        detail: 'Gwirio mynediad cropianwyr a monitro twf dyfyniadau o fis i fis.',
      },
    ],
    faqs: [
      {
        question: 'Sut mae GEO yn wahanol i SEO traddodiadol?',
        answer:
          'Mae SEO traddodiadol yn canolbwyntio ar ddolenni; mae GEO yn strwythuro ffeithiau, endidau a Schema fel bod AI yn dyfynnu eich cwmni mewn atebion.',
      },
      {
        question: 'A yw GEO hefyd yn helpu safleoedd Google UK craidd?',
        answer:
          'Ydy—mae HTML semantig glân, cyflymder a strwythurau C&A clir yn cryfhau Search Console yn uniongyrchol.',
      },
      {
        question: 'Pam mae HTML wedi’i rag-rendro yn bwysig ar gyfer GEO?',
        answer:
          'Nid yw llawer o gropianwyr AI yn gweithredu JavaScript trwm; mae HTML statig yn gwarantu mynegeio llawn.',
      },
    ],
  },
  'ai-search-optimisation': {
    name: 'Optimeiddio Chwilio AI ar gyfer ChatGPT, Gemini a Claude',
    pillarTitle: '02. Awdurdod SEO, GEO a Chwilio AI',
    heroHeadline: 'Cael eich argymell gan ChatGPT, Google Gemini a Claude ar gyfer ymholiadau’r DU.',
    heroSummary:
      'Pan fydd penderfynwyr y DU yn gofyn i ChatGPT, Gemini neu Claude am ddarparwr dibynadwy, mae eich ôl troed technegol yn penderfynu a ydych chi’n cael eich dyfynnu.',
    typicalTimeline: '2 – 3 wythnos i’w sefydlu',
    idealFor: [
      'Cwmnïau’r DU sydd eisiau ymholiadau o ChatGPT Search, Perplexity a Gemini',
      'Cwmnïau sydd ar goll neu wedi’u camddisgrifio gan gynorthwywyr AI',
      'Ymgynghoriaethau, clinigau ac asiantaethau arbenigol gwerth uchel',
      'Busnesau sydd eisiau llywodraethiant cropian tryloyw drwy robots.txt ac llms.txt',
    ],
    deliverables: [
      {
        title: 'Mynegai /llms.txt ac /llms-full.txt',
        detail: 'Crynodeb Markdown awdurdodol yn egluro gwasanaethau, rhanbarthau’r DU a phrisiau.',
      },
      {
        title: 'Llywodraethiant Cropianwyr AI (robots.txt)',
        detail: 'Rheolau caniatáu clir ar gyfer OAI-SearchBot, Googlebot, PerplexityBot a ClaudeBot.',
      },
      {
        title: 'Cysondeb Endid Traws-Gwe',
        detail: 'Alinio ffeithiau brand ar draws gwefan, LinkedIn a Companies House.',
      },
      {
        title: 'Tudalennau Gwasanaeth Canonaidd',
        detail: 'URLs unigol i bob gwasanaeth fel y gall AI gysylltu’n uniongyrchol.',
      },
      {
        title: 'Profi Cywirdeb Anogwyr',
        detail: 'Profi cyn ac ar ôl ar draws anogwyr masnachol yn ChatGPT, Gemini a Claude.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Meincnod Dyfyniadau AI Presennol',
        detail: 'Archwilio dyfyniadau brand a chystadleuwyr ar draws ChatGPT, Gemini a Claude.',
      },
      {
        step: '02.',
        title: 'llms.txt, Schema a Thudalennau Pwrpasol',
        detail: 'Cyhoeddi manylebau peiriant-ddarllenadwy a tudalennau glanio canonaidd.',
      },
      {
        step: '03.',
        title: 'Ail-brofi ac Adeiladu Awdurdod',
        detail: 'Gwirio mynegeio ac ehangu canllawiau ffeithiol sy’n ennill dyfyniadau parhaus.',
      },
    ],
    faqs: [
      {
        question: 'Beth yw /llms.txt a pham mae’n bwysig?',
        answer:
          'Ffeil Markdown strwythuredig yng ngwraidd eich parth yw /llms.txt sy’n rhoi crynodeb clir o’ch busnes a gwasanaethau i gynorthwywyr AI.',
      },
      {
        question: 'Allwch chi rwystro hyfforddiant AI wrth ymddangos mewn chwilio AI?',
        answer:
          'Gallwn. Gallwn ffurfweddu robots.txt i wahaniaethu rhwng botiau chwilio (OAI-SearchBot) a chropianwyr hyfforddiant.',
      },
      {
        question: 'Pam creu tudalennau pwrpasol ar gyfer pob gwasanaeth?',
        answer:
          'Mae’n well gan beiriannau chwilio AI gysylltu â thudalennau penodol sy’n ateb un pwnc yn drwyadl.',
      },
    ],
  },
  'digital-marketing-online-growth': {
    name: 'Marchnata Digidol a Thwf Ar-lein',
    pillarTitle: '04. Strategaeth Brand a Thwf Masnachol',
    heroHeadline: 'Twf digidol masnachol atebol yn canolbwyntio ar biblinell y DU.',
    heroSummary:
      'Parwn bensaernïaeth glanio gyflym ag optimeiddio chwilio a throsi fel bod pob punt a fuddsoddir yn dod â phiblinell y DU mesuradwy.',
    typicalTimeline: 'Sbrintiau twf misol',
    idealFor: [
      'Sefydliadau’r DU yn lansio prif blatfform sydd angen piblinell ar unwaith',
      'Ymarferion gyda thraffig nad yw’n troi’n ymgynghoriadau wedi’u harchebu',
      'Cwmnïau B2B yn ehangu ar draws Llundain, Manceinion, Caeredin neu’r DU',
      'Manwerthwyr sy’n ceisio gwerth archeb uwch a chadw cwsmeriaid',
    ],
    deliverables: [
      {
        title: 'Pensaernïaeth Ymgyrch Bwrpasol',
        detail: 'Tudalennau trosi cyflym wedi’u peiriannu o amgylch bwriad chwilio masnachol.',
      },
      {
        title: 'Optimeiddio Cyfradd Trosi (CRO)',
        detail: 'Archwilio ffrithiant ffurflenni, prisio GBP clir a gosod prawf strategol.',
      },
      {
        title: 'Priodoli Cydymffurfiol â PECR',
        detail: 'Olrhain GA4 modd caniatâd ac ochr-gweinydd yn unol â chanllawiau ICO y DU.',
      },
      {
        title: 'Llifoedd Dilyn Strwythuredig',
        detail: 'Cydnabod awtomataidd sy’n troi ymholiadau’n ymgynghoriadau.',
      },
      {
        title: 'Adroddiadau ROI Gweithredol',
        detail: 'Adroddiadau misol clir ar gost fesul ymholiad, cyfradd trosi a sianel.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Archwiliad Twndis a Throsi',
        detail: 'Nodi lle mae rhagolygon y DU yn gadael rhwng cyrraedd ac archebu.',
      },
      {
        step: '02.',
        title: 'Gosod Tudalen Glanio a Phriodoli',
        detail: 'Rhyddhau tudalennau ymgyrch pwrpasol gydag integreiddio CRM.',
      },
      {
        step: '03.',
        title: 'Profi a Graddio Ailadroddol',
        detail: 'Mireinio cynnig a sianeli bob mis ar sail ansawdd ymholiadau go iawn.',
      },
    ],
    faqs: [
      {
        question: 'Ydych chi’n gweithio ar gadwyr misol hyblyg heb gloi i mewn?',
        answer:
          'Ydyn. Mae ein rhaglenni twf yn rhedeg ar delerau misol tryloyw gyda darpariaethau clir.',
      },
      {
        question: 'Ydy’ch peirianwyr yn adeiladu’r tudalennau glanio yn uniongyrchol?',
        answer:
          'Ydynt—oherwydd bod ein strategwyr yn gweithio gyda pheirianwyr, rydym yn profi A/B yn fewnol.',
      },
      {
        question: 'A yw olrhain dadansoddeg yn cydymffurfio â deddfwriaeth cwcis y DU?',
        answer:
          'Ydy. Gosodwn olrhain sy’n ymwybodol o ganiatâd ac sy’n cydymffurfio â GDPR ac ICO PECR.',
      },
    ],
  },
  'ai-automation-business-process-automation': {
    name: 'Awtomeiddio AI ac Awtomeiddio Prosesau Busnes',
    pillarTitle: '03. Awtomeiddio AI a Gweithrediadau Busnes',
    heroHeadline: 'Awtomeiddio AI a phrosesau busnes sy’n adennill oriau ar draws gweithrediadau’r DU.',
    heroSummary:
      'Unwch ymholiadau gwefan, gohebiaeth, cofnodion CRM a systemau cyfrifeg gyda llifoedd archwiliadwy—gan ddileu mewnbynnu data â llaw tra’n cadw goruchwyliaeth ddynol a GDPR y DU.',
    typicalTimeline: '1 – 3 wythnos',
    idealFor: [
      'Timau’r DU sy’n ail-deipio ymholiadau gwefan i daenlenni neu CRM â llaw',
      'Ymarferion sy’n treulio oriau yn drafftio cynigion, nodiadau neu friffiau',
      'Gweithrediadau e-fasnach yn awtomeiddio rhybuddion stoc ac anfonebu Xero',
      'Ymgynghoriaethau sy’n graddio trwybwn heb gyflogi staff gweinyddol ychwanegol',
    ],
    deliverables: [
      {
        title: 'Brysbennu a Llwybro Ymholiadau Deallus',
        detail: 'Dosbarthu ymholiadau’n awtomatig a llwybro materion blaenoriaeth i’r partner cywir.',
      },
      {
        title: 'Cydamseru CRM, E-bost a Chyfrifeg',
        detail: 'Llifoedd dibynadwy’n uno eich gwefan, Microsoft 365/Google Workspace, HubSpot a Xero.',
      },
      {
        title: 'Drafftio Cynigion a Briffiau Awtomataidd',
        detail: 'Trosi holiaduron cleientiaid yn friffiau cwmpasu a chynigion drafft parod.',
      },
      {
        title: 'Rhybuddion Eithriad a Gatiau Cymeradwyo Dynol',
        detail: 'Mae pob cyfathrebiad allanol yn cynnwys cymeradwyaeth partner dewisol.',
      },
      {
        title: 'Preifatrwydd a Lleihau Data',
        detail: 'Tystysgrifau wedi’u hamgryptio, prosesu yn y DU/AEE a dim hyfforddiant ar eich data.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Mapio Tagfeydd Gweithredol',
        detail: 'Nodi’r prosesau gyda’r arbedion amser wythnosol uchaf.',
      },
      {
        step: '02.',
        title: 'Adeiladu, Diogelwch a Phrawf Blwch Tywod',
        detail: 'Dilysiad sgema llym, hysbysiadau wrth gefn a gwirio prawf sych.',
      },
      {
        step: '03.',
        title: 'Cyflwyno Rheoledig a Throsglwyddo',
        detail: 'Lansio byw gyda monitro iechyd a dogfennaeth gryno i’ch staff.',
      },
    ],
    faqs: [
      {
        question: 'Pa fframweithiau awtomeiddio ac APIs ydych chi’n eu peiriannu?',
        answer:
          'Adeiladwn ficro-wasanaethau Node.js a TypeScript pwrpasol ynghyd â Make, n8n, Zapier a webhooks REST.',
      },
      {
        question: 'A fydd ein data cleientiaid cyfrinachol yn hyfforddi modelau AI cyhoeddus?',
        answer:
          'Na. Ffurfweddwn haenau API masnachol gyda gwarantau dim hyfforddiant data a GDPR y DU.',
      },
      {
        question: 'Beth os daw cam awtomataidd ar draws mewnbwn annisgwyl?',
        answer:
          'Adeiladwn ddilysiad clir a rhybuddion Slack/e-bost fel bod eich tîm yn gwybod ar unwaith.',
      },
    ],
  },
};
