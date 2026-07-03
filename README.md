# 🛡️ Agent Guardian Shield

> **Enterprise Security Scanner for Autonomous AI Agents**

Modern AI coding agents (like Cursor, Cline, AutoGPT, and Antigravity) are revolutionizing software development. However, their ability to execute terminal commands, modify configurations, and write to file systems introduces significant security risks—including unauthorized remote code execution (RCE) and hidden persistence scripts.

**Agent Guardian Shield** is a CLI-based DevSecOps tool designed to audit, monitor, and secure the configurations and workspaces of your AI agents. 

*(Currently in MVP v1.0.0)*

---

## 🚀 Quick Start (No Installation Required)

You can run the scanner instantly via `npx`:

```bash
npx agent-guardian-shield scan
```

### Global Installation

To install the tool globally on your system:

```bash
npm install -g agent-guardian-shield
```

Then run the scanner anywhere:

```bash
agent-guardian-shield scan
```

---

## 🎯 Features (v1.0.0 MVP)

- **Plug-and-Play Scanning:** Easily extensible architecture supporting multiple agent scanners.
- **Agent Configuration Auditing:** Checks configuration files for dangerous settings (e.g., `require_human_approval: false`).
- **CI/CD Ready:** Exits with `Code 1` when a vulnerability is found, making it easy to integrate into your automated security pipelines.

### Supported Agents in MVP:
- **Antigravity** (Simulated Security Check)
- **Cursor** (Simulated Risk Detection)

---

## 💻 Example Output

```text
  =========================================
      🛡️  AGENT GUARDIAN SHIELD v1.0.0
         Enterprise Security Scanner
  =========================================

[i] Güvenlik taraması başlatılıyor...

  -> Antigravity taranıyor...
  [✓] Antigravity güvenli.

  -> Cursor taranıyor...
  [✘] Cursor için güvenlik riski tespit edildi!


🚨 Tarama tamamlandı: Sistemde güvenlik riskleri bulundu. (Exit Code 1)
```

---

## 🤝 Contributing

We welcome contributions! To build the project locally:

1. Clone the repository
2. Run `npm install`
3. Compile with `npm run build`
4. Test locally with `node dist/index.js scan`

## 📄 License

ISC License - Securing the future of AI-assisted development.
