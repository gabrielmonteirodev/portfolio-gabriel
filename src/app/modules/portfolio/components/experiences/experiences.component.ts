import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiencies.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      "summary": {
        "strong": "Desenvolvedor Fullstack",
        "p": "Zello Tecnologia | Ago 2023 - Abr 2025"
      },
      "text": "<p>Durante meu período como Desenvolvedor Fullstack na Zello Tecnologia, concentrei meus esforços na criação de interfaces ricas e responsivas utilizando Ionic e Angular, com foco em experiência do usuário e performance em dispositivos móveis e web.</p> <p>No Back-end, atuei no desenvolvimento de APIs escaláveis com NestJS, promovendo uma arquitetura robusta e modular. Além disso, implementei automações de deploy e integração contínua com GitLab CI/CD, garantindo eficiência e qualidade no ciclo de entrega de software.</p> <p>Realizei o gerenciamento de bancos de dados relacionais com PostgreSQL e Oracle, aplicando boas práticas de modelagem e otimização de consultas. Também desenvolvi aplicações robustas com Java, contribuindo para soluções empresariais de alta confiabilidade. Minha atuação foi pautada pela entrega de soluções eficientes, sempre priorizando inovação, melhoria contínua e qualidade técnica.</p>"
    },
    {
      "summary": {
        "strong": "Suporte Técnico Remoto – Nível 1",
        "p": "Unic Solutions | Mar 2023 - Jul 2023"
      },
      "text": "<p>Durante meu período como Suporte Técnico N1 na Unic Solutions, atuei na configuração e manutenção do pacote Office, garantindo o pleno funcionamento das ferramentas de produtividade para os usuários.</p> <p>Realizei instalação e atualização de aplicações em estações de trabalho, seguindo os padrões de segurança e compliance da empresa. Também prestei suporte a impressoras e dispositivos periféricos, realizando diagnósticos e solucionando problemas de conectividade e impressão.</p> <p>Fui responsável pela abertura e acompanhamento de chamados técnicos, assegurando o registro e resolução eficiente das demandas dos usuários. Além disso, gerenciei contas e permissões no Active Directory (AD), incluindo criação, alteração e desativação de usuários. Meu atendimento sempre buscou agilidade, clareza na comunicação e eficácia na resolução de incidentes.</p>"
    },
    {
      "summary": {
        "strong": "Estagiário em Suporte Técnico",
        "p": "SNEWS - Automação para Telejornalismo | Abr 2022 - Mar 2023"
      },
      "text": "<p>Durante meu período como Estagiário em Suporte Técnico na SNEWS, atuei na manutenção preventiva e corretiva em estações de trabalho e servidores, garantindo a estabilidade do ambiente de TI.</p> <p>Prestei suporte técnico a aplicações internas desenvolvidas pela empresa, incluindo instalação, atualização e resolução de problemas. Também contribuí com a configuração básica de servidores Linux, assegurando o funcionamento de serviços essenciais da infraestrutura.</p> <p>Apoiei na configuração de rede local (LAN), realizando ajustes em roteadores, switches e endereçamento IP. Além disso, ofereci suporte interno a usuários, solucionando demandas relacionadas a hardware, software e conectividade, utilizando o Jira para controle e acompanhamento de tarefas, sempre priorizando organização e cumprimento de prazos.</p>"
    }
  ]);
}
