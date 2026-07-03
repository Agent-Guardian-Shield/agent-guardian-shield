import { IAgentScanner } from "../interfaces/IAgentScanner";

export class AntigravityScanner implements IAgentScanner {
  agentName = "Antigravity";

  scanConfig(): boolean {
    // MVP: return true (no risk for now, simulation)
    return true; 
  }

  scanWorkspace(): boolean {
    // MVP: return true (no risk for now, simulation)
    return true;
  }
}
