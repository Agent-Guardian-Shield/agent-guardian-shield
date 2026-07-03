import { IAgentScanner } from "../interfaces/IAgentScanner";

export class CursorScanner implements IAgentScanner {
  agentName = "Cursor";

  scanConfig(): boolean {
    // MVP: return false (simulating a found risk for testing exit code)
    return false;
  }

  scanWorkspace(): boolean {
    return true;
  }
}
