import { webAppData } from "./services/webApp";
import { cybersecurityData } from "./services/cybersecurity";
import { digitalForensicsData } from "./services/digitalForensics";
import { bpoData } from "./services/bpo";
import { analyticsData } from "./services/analytics";
import { marketingData } from "./services/marketing";
import { ServiceCategory } from "./services/types";
export type { ServiceCategory };

export const servicesData: Record<string, ServiceCategory> = {
  "web-app-development": webAppData,
  "cybersecurity": cybersecurityData,
  "digital-forensics": digitalForensicsData,
  "bpo": bpoData,
  "analytics": analyticsData,
  "marketing": marketingData,
};
