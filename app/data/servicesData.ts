import { webAppData } from "./services/webApp";
import { cybersecurityData } from "./services/cybersecurity";
import { digitalForensicsData } from "./services/digitalForensics";
import { bpoData } from "./services/bpo";
import { analyticsData } from "./services/analytics";
import { marketingData } from "./services/marketing";
import { customSoftwareData } from "./services/customSoftware";
import { dataAnnotationData } from "./services/dataAnnotation";
import { trainingData } from "./services/training";
import { talentAcquisitionData } from "./services/talentAcquisition";
import { ServiceCategory } from "./services/types";
export type { ServiceCategory };

export const servicesData: Record<string, ServiceCategory> = {
  "web-app-development": webAppData,
  "cybersecurity": cybersecurityData,
  "digital-forensics": digitalForensicsData,
  "bpo": bpoData,
  "analytics": analyticsData,
  "marketing": marketingData,
  "custom-software": customSoftwareData,
  "data-annotation": dataAnnotationData,
  "training": trainingData,
  "talent-acquisition": talentAcquisitionData,
};
