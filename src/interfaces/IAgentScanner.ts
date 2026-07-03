export interface IAgentScanner {
  agentName: string;
  scanConfig(): boolean;
  scanWorkspace(): boolean;
}
