// Données de démonstration pour le Sales Agent
export interface DemoScenario {
  id: string;
  question: string;
  response: string;
  typing?: boolean;
}

export const demoDataFr = {
  scenarios: [
    {
      id: "analyze-call",
      question: "Analyse mon dernier appel de vente",
      response: `J'ai analysé votre dernier appel Fathom du 12 décembre 2025 avec Acme Corp (45 minutes).

**🎯 Points clés identifiés:**

• **Prospect qualifié**: Budget confirmé de 50K€, décision dans 3 semaines
• **Pain points majeurs**: Processus manuel de gestion des leads (3h/jour perdues), taux de conversion faible (12%)
• **Objection principale**: Préoccupation sur le temps d'implémentation et la courbe d'apprentissage

**💡 Insights:**

1. Le prospect a mentionné "automatisation" 7 fois - signal fort d'intérêt
2. Question technique sur l'API à 32:15 = intérêt technique validé
3. Ton positif tout au long de l'appel (score: 8.5/10)

**✅ Actions recommandées:**

1. Envoyer une démo personnalisée sur l'automatisation des leads dans les 24h
2. Préparer un plan d'implémentation en 2 phases (quick wins + déploiement complet)
3. Partager un case study d'onboarding rapide (2 semaines)
4. Follow-up call dans 5 jours pour adresser les questions techniques

**📊 Prochaines étapes:**
Meeting de closing prévu le 19 décembre - probabilité de closing: 75%`,
    },
    {
      id: "pain-points",
      question: "Quels sont les pain points récurrents de mes prospects?",
      response: `Après analyse de vos 15 derniers appels Fathom, voici les pain points les plus fréquents:

**🔥 Top 3 Pain Points (par fréquence):**

**1. Perte de temps sur tâches manuelles (73% des appels)**
• Moyenne: 3-5 heures/jour perdues
• Processus mentionnés: saisie manuelle, copier-coller, mise à jour CRM
• Citation type: "On passe plus de temps à faire de l'admin qu'à vendre"

**2. Manque de visibilité sur le pipeline (60% des appels)**
• Difficulté à prioriser les leads
• Pas de vision temps réel
• Reporting manuel et chronophage
• Citation type: "On ne sait jamais où on en est vraiment"

**3. Faible taux de conversion (53% des appels)**
• Moyenne actuelle: 10-15%
• Manque de suivi structuré
• Leads qui "refroidissent"
• Citation type: "On perd des deals qu'on aurait dû closer"

**💡 Pattern intéressant:**
Les prospects qui mentionnent les 3 pain points ont un taux de closing de 85% vs 45% pour les autres.

**🎯 Recommandation:**
Créer 3 pitchs adaptés à chaque pain point pour qualifier plus vite et personnaliser votre approche.`,
    },
    {
      id: "follow-up",
      question: "Génère un email de follow-up personnalisé",
      response: `Voici un email de follow-up basé sur votre dernier appel avec Acme Corp:

---

**Objet:** Suite à notre échange - Plan d'implémentation Acme Corp

---

Bonjour [Prénom],

Merci pour notre échange de 45 minutes ce matin. J'ai particulièrement apprécié votre transparence sur vos défis actuels.

**Récap de vos priorités:**
• Automatiser la gestion des leads (vous gagnez 3h/jour)
• Améliorer le taux de conversion de 12% à 20%+
• Déploiement rapide avec votre équipe de 8 AEs

**Ce que je vous envoie aujourd'hui:**

1. **Démo vidéo personnalisée** (7 min) qui montre exactement comment automatiser votre workflow actuel
2. **Plan d'implémentation en 2 phases:**
   - Phase 1 (Semaine 1-2): Quick wins + formation équipe
   - Phase 2 (Semaine 3-4): Déploiement complet
3. **Case study TechCorp**: Ils ont réduit leur onboarding de 6 à 2 semaines (contexte similaire au vôtre)

**Prochaine étape:**
Call technique le [date] à [heure] avec notre Head of Product pour répondre à vos questions sur l'API et les intégrations Salesforce?

Hâte d'avancer ensemble sur ce projet!

Paul-Antoine

---

**📊 Stats email:**
Taux d'ouverture attendu: 78% | Taux de réponse: 65%
Meilleur moment d'envoi: Demain 9h30`,
    },
    {
      id: "compare-calls",
      question: "Compare mes 3 derniers appels et donne-moi des insights",
      response: `Analyse comparative de vos 3 derniers appels de vente:

**📊 Métriques comparatives:**

| Métrique | Call #1 (Acme) | Call #2 (TechStart) | Call #3 (BigCorp) |
|----------|----------------|---------------------|-------------------|
| Durée | 45 min ⭐ | 28 min | 52 min |
| Temps de parole prospect | 60% ⭐ | 45% | 38% ⚠️ |
| Questions ouvertes posées | 12 ⭐ | 8 | 6 ⚠️ |
| Objections | 2 | 4 ⚠️ | 5 ⚠️ |
| Score sentiment | 8.5/10 ⭐ | 6.5/10 | 7/10 |
| Probabilité closing | 75% | 45% | 55% |

**🎯 Patterns identifiés:**

**Ce qui marche (Call #1 - Acme):**
✅ Vous avez laissé parler le prospect 60% du temps
✅ Questions de découverte en début d'appel (7 min)
✅ Vous avez adressé l'objection budget avec un ROI chiffré
✅ Next steps clairs définis avant la fin (closing prévu)

**À améliorer (Calls #2 et #3):**
⚠️ Trop de temps passé à parler features vs bénéfices business
⚠️ Objections non complètement résolues
⚠️ Manque de questions sur le budget et timeline

**💡 Insight majeur:**
Votre taux de closing est directement corrélé au temps de parole du prospect. Visez 55-65% de temps prospect.

**🎓 Recommandation:**
Reproduisez la structure du Call #1 (Acme): 
1. Découverte approfondie (15% du temps)
2. Présentation ciblée (35% du temps)
3. Adressage objections (30% du temps)
4. Closing/Next steps (20% du temps)`,
    },
  ],
  suggestedQuestions: [
    "Analyse mon dernier appel de vente",
    "Quels sont les pain points récurrents de mes prospects?",
    "Génère un email de follow-up personnalisé",
    "Compare mes 3 derniers appels et donne-moi des insights",
  ],
  defaultResponse: `Je suis une démo interactive du Sales Agent MCP. 

Pour voir des exemples concrets, essayez l'une des questions suggérées ci-dessous!

Cette démo simule l'analyse d'appels Fathom. L'agent réel a accès à toutes vos transcriptions et peut:
• Analyser vos appels en temps réel
• Identifier les patterns de succès
• Extraire les pain points clients
• Générer des follow-ups personnalisés
• Comparer vos performances

**Cas d'usage professionnel concret** pour améliorer vos performances commerciales! 🎯`,
};

export const demoDataEn = {
  scenarios: [
    {
      id: "analyze-call",
      question: "Analyze my last sales call",
      response: `I analyzed your last Fathom call from December 12, 2025 with Acme Corp (45 minutes).

**🎯 Key Points Identified:**

• **Qualified prospect**: Confirmed budget of €50K, decision in 3 weeks
• **Major pain points**: Manual lead management process (3h/day lost), low conversion rate (12%)
• **Main objection**: Concern about implementation time and learning curve

**💡 Insights:**

1. Prospect mentioned "automation" 7 times - strong interest signal
2. Technical question about API at 32:15 = validated technical interest
3. Positive tone throughout the call (score: 8.5/10)

**✅ Recommended Actions:**

1. Send personalized demo on lead automation within 24h
2. Prepare 2-phase implementation plan (quick wins + full deployment)
3. Share fast onboarding case study (2 weeks)
4. Follow-up call in 5 days to address technical questions

**📊 Next Steps:**
Closing meeting scheduled for December 19 - closing probability: 75%`,
    },
    {
      id: "pain-points",
      question: "What are my prospects' recurring pain points?",
      response: `After analyzing your last 15 Fathom calls, here are the most frequent pain points:

**🔥 Top 3 Pain Points (by frequency):**

**1. Time wasted on manual tasks (73% of calls)**
• Average: 3-5 hours/day lost
• Processes mentioned: manual entry, copy-paste, CRM updates
• Typical quote: "We spend more time doing admin than selling"

**2. Lack of pipeline visibility (60% of calls)**
• Difficulty prioritizing leads
• No real-time vision
• Manual and time-consuming reporting
• Typical quote: "We never really know where we stand"

**3. Low conversion rate (53% of calls)**
• Current average: 10-15%
• Lack of structured follow-up
• Leads going "cold"
• Typical quote: "We lose deals we should have closed"

**💡 Interesting Pattern:**
Prospects who mention all 3 pain points have an 85% closing rate vs 45% for others.

**🎯 Recommendation:**
Create 3 pitches adapted to each pain point to qualify faster and personalize your approach.`,
    },
    {
      id: "follow-up",
      question: "Generate a personalized follow-up email",
      response: `Here's a follow-up email based on your last call with Acme Corp:

---

**Subject:** Following up - Acme Corp Implementation Plan

---

Hi [First Name],

Thank you for our 45-minute conversation this morning. I particularly appreciated your transparency about your current challenges.

**Recap of your priorities:**
• Automate lead management (save 3h/day)
• Improve conversion rate from 12% to 20%+
• Fast deployment with your team of 8 AEs

**What I'm sending you today:**

1. **Personalized video demo** (7 min) showing exactly how to automate your current workflow
2. **2-phase implementation plan:**
   - Phase 1 (Week 1-2): Quick wins + team training
   - Phase 2 (Week 3-4): Full deployment
3. **TechCorp case study**: They reduced onboarding from 6 to 2 weeks (similar context to yours)

**Next step:**
Technical call on [date] at [time] with our Head of Product to answer your questions about API and Salesforce integrations?

Looking forward to moving this project forward!

Paul-Antoine

---

**📊 Email Stats:**
Expected open rate: 78% | Response rate: 65%
Best sending time: Tomorrow 9:30am`,
    },
    {
      id: "compare-calls",
      question: "Compare my last 3 calls and give me insights",
      response: `Comparative analysis of your last 3 sales calls:

**📊 Comparative Metrics:**

| Metric | Call #1 (Acme) | Call #2 (TechStart) | Call #3 (BigCorp) |
|--------|----------------|---------------------|-------------------|
| Duration | 45 min ⭐ | 28 min | 52 min |
| Prospect talk time | 60% ⭐ | 45% | 38% ⚠️ |
| Open questions asked | 12 ⭐ | 8 | 6 ⚠️ |
| Objections | 2 | 4 ⚠️ | 5 ⚠️ |
| Sentiment score | 8.5/10 ⭐ | 6.5/10 | 7/10 |
| Closing probability | 75% | 45% | 55% |

**🎯 Identified Patterns:**

**What works (Call #1 - Acme):**
✅ You let the prospect talk 60% of the time
✅ Discovery questions at the beginning of the call (7 min)
✅ You addressed the budget objection with quantified ROI
✅ Clear next steps defined before the end (closing scheduled)

**To improve (Calls #2 and #3):**
⚠️ Too much time talking features vs business benefits
⚠️ Objections not fully resolved
⚠️ Lack of questions about budget and timeline

**💡 Major Insight:**
Your closing rate is directly correlated to prospect talk time. Aim for 55-65% prospect time.

**🎓 Recommendation:**
Replicate Call #1 (Acme) structure: 
1. In-depth discovery (15% of time)
2. Targeted presentation (35% of time)
3. Objection handling (30% of time)
4. Closing/Next steps (20% of time)`,
    },
  ],
  suggestedQuestions: [
    "Analyze my last sales call",
    "What are my prospects' recurring pain points?",
    "Generate a personalized follow-up email",
    "Compare my last 3 calls and give me insights",
  ],
  defaultResponse: `I'm an interactive demo of the Sales Agent MCP. 

To see concrete examples, try one of the suggested questions below!

This demo simulates Fathom call analysis. The real agent has access to all your transcriptions and can:
• Analyze your calls in real-time
• Identify success patterns
• Extract customer pain points
• Generate personalized follow-ups
• Compare your performances

**Concrete professional use case** to improve your sales performance! 🎯`,
};

// Backward compatibility
export const demoScenarios: DemoScenario[] = demoDataFr.scenarios;
export const suggestedQuestions = demoDataFr.suggestedQuestions;
