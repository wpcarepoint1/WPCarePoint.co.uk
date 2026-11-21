export type LossScenarioId =
  | 'domain-expired'
  | 'hosting-lost'
  | 'wordpress-broken'
  | 'hacked-compromised'
  | 'migration-accident';

export interface DnsDiagnostics {
  status: 'resolved' | 'nxdomain' | 'error';
  aRecords: string[];
  aaaaRecords: string[];
  nsRecords: string[];
  mxRecords: { exchange: string; priority: number }[];
  txtRecords: string[];
  error?: string;
}

export interface RdapDiagnostics {
  status: 'found' | 'not-found' | 'error';
  registrar?: string;
  statuses: string[];
  registeredAt?: string;
  expiresAt?: string;
  updatedAt?: string;
  nameservers: string[];
  rdapUrl?: string;
  error?: string;
}

export interface HttpDiagnostics {
  status: 'reachable' | 'http-error' | 'unreachable';
  httpCode?: number;
  finalUrl?: string;
  serverHeader?: string;
  contentType?: string;
  title?: string;
  isWordPressHint?: boolean;
  responseTimeMs?: number;
  error?: string;
}

export interface WaybackSnapshot {
  url: string;
  timestamp: string;
  formattedDate: string;
  archiveUrl: string;
  mimeType: string;
  statusCode: string;
}

export interface WaybackDiagnostics {
  status: 'archived' | 'none' | 'error';
  closestSnapshotUrl?: string;
  closestTimestamp?: string;
  closestFormattedDate?: string;
  pages: WaybackSnapshot[];
  error?: string;
}

export interface DomainDiagnosticReport {
  domain: string;
  checkedAt: string;
  recommendedScenario: LossScenarioId;
  summaryHeadline: string;
  summaryDetail: string;
  dns: DnsDiagnostics;
  rdap: RdapDiagnostics;
  http: HttpDiagnostics;
  wayback: WaybackDiagnostics;
}

export interface PlaybookStep {
  id: string;
  title: string;
  detail: string;
  priority: 'Immediate' | 'Recovery' | 'Prevention';
  estimatedMinutes: number;
  command?: string;
  commandLabel?: string;
  externalUrl?: string;
  externalLabel?: string;
}

export interface LossScenarioPlaybook {
  id: LossScenarioId;
  label: string;
  shortDescription: string;
  symptoms: string[];
  recoveryChance: string;
  steps: PlaybookStep[];
}

export interface RedirectRuleItem {
  id: string;
  oldPath: string;
  newPath: string;
  action: 'restore' | 'redirect' | 'drop';
  sourceTimestamp?: string;
  archiveUrl?: string;
}

export interface ExtractedWaybackContent {
  archiveUrl: string;
  title: string;
  metaDescription: string;
  headings: string[];
  paragraphs: string[];
  imageUrls: string[];
}
