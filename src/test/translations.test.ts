import { describe, expect, it } from "vitest";
import { translations } from "@/i18n/translations";

describe("currículo atual", () => {
  it("substitui o terceiro parágrafo do resumo em português", () => {
    const paragraph = translations.pt.summary.paragraphs[2];
    expect(paragraph).toContain("ERP multi-empresa em Laravel 11/PHP 8.3");
    expect(paragraph).toContain("Java 25 + Spring Boot 4");
    expect(paragraph).toContain("Arvyn");
    expect(paragraph).toContain("Claude Opus 5.5, Claude Fable e Grok");
  });

  it("atualiza a entrada atual da trajetória", () => {
    const current = translations.pt.timeline.items.at(-1);
    expect(current?.year).toBe("jun/2026 – Atual");
    expect(current?.title).toBe("ERP, Nova Plataforma de Rastreamento e Harness de IA");
    expect(current?.subtitle).toBe("BolTech Rastreadores — Full Stack / Backend");
    expect(current?.description).toContain("bolecode Itaú");
    expect(current?.description).toContain("Planner → Coder → checks → QA → Reviewer");
  });

  it("inclui os projetos profissionais novos no início", () => {
    const titles = translations.pt.projects.items.filter((item) => item.type === "professional").map((item) => item.title);
    expect(titles.slice(0, 6)).toEqual([
      "ERP BolTech — multi-empresa",
      "Módulo Financeiro — bolecode Itaú e cartão e.Rede",
      "Módulo de Suporte — atendimentos",
      "Nova Plataforma de Rastreamento (Boltech Platform)",
      "Arvyn — Harness de agentes de IA para desenvolvimento",
      "Infraestrutura e operação do servidor",
    ]);
  });

  it("acrescenta a categoria de desenvolvimento assistido por IA", () => {
    const names = translations.pt.skills.categories.map((category) => category.name);
    expect(names).toContain("Desenvolvimento assistido por IA");
    const ai = translations.pt.skills.categories.find((category) => category.name === "Desenvolvimento assistido por IA");
    expect(ai?.skills).toEqual([
      "Claude Code",
      "Cursor",
      "Claude Agent SDK",
      "MCP",
      "Claude Opus 5.5",
      "Claude Fable",
      "Grok",
      "Arvyn (harness próprio)",
    ]);
    const backend = translations.pt.skills.categories.find((category) => category.name === "Backend");
    expect(backend?.skills).toEqual(expect.arrayContaining(["Laravel 11", "PHP 8.3", "Java 25", "Spring Boot 4", "Sanctum"]));
  });

  it("aponta o download do PDF conforme o idioma", () => {
    expect(translations.pt.nav.resumeHref).toBe("/curriculo-wellington-alves.pdf");
    expect(translations.en.nav.resumeHref).toBe("/resume-wellington-alves.pdf");
    expect(translations.en.timeline.items.at(-1)?.year).toBe("Jun/2026 – Present");
  });
});
