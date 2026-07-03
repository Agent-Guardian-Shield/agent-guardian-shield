#!/usr/bin/env node
import { Command } from "commander";
import chalk = require("chalk");
import { AntigravityScanner } from "./scanners/AntigravityScanner";
import { CursorScanner } from "./scanners/CursorScanner";
import { IAgentScanner } from "./interfaces/IAgentScanner";

const program = new Command();

program
  .name("agent-guardian-shield")
  .description("Enterprise AI Agent Security Scanner")
  .version("1.0.0");

program
  .command("scan")
  .description("Sistemdeki tüm ajanların konfigürasyonlarını tara")
  .action(() => {
    console.log(chalk.cyan.bold(`
  =========================================
      🛡️  AGENT GUARDIAN SHIELD v1.0.0
         Enterprise Security Scanner
  =========================================
`));
    console.log(chalk.blue("[i] Güvenlik taraması başlatılıyor...\n"));

    const scanners: IAgentScanner[] = [
      new AntigravityScanner(),
      new CursorScanner()
    ];

    let riskFound = false;

    for (const scanner of scanners) {
      console.log(chalk.gray(`  -> ${scanner.agentName} taranıyor...`));
      
      const configSafe = scanner.scanConfig();
      const workspaceSafe = scanner.scanWorkspace();

      if (!configSafe || !workspaceSafe) {
        console.log(chalk.red.bold(`  [✘] ${scanner.agentName} için güvenlik riski tespit edildi!`));
        riskFound = true;
      } else {
        console.log(chalk.green.bold(`  [✓] ${scanner.agentName} güvenli.`));
      }
      console.log();
    }

    if (riskFound) {
      console.log(chalk.red.bold("\n🚨 Tarama tamamlandı: Sistemde güvenlik riskleri bulundu. (Exit Code 1)"));
      process.exit(1);
    } else {
      console.log(chalk.green.bold("\n✅ Tarama tamamlandı: Sistem güvenli görünüyor."));
      process.exit(0);
    }
  });

program.parse(process.argv);
