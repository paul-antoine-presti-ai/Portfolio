// Données de démonstration pour le Sales Agent
export interface DemoScenario {
  id: string;
  question: string;
  response: string;
  typing?: boolean;
}

export const demoScenarios: DemoScenario[] = [
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
];

// Questions suggérées pour l'interface
export const suggestedQuestions = [
  "Analyse mon dernier appel de vente",
  "Quels sont les pain points récurrents de mes prospects?",
  "Génère un email de follow-up personnalisé",
  "Compare mes 3 derniers appels et donne-moi des insights",
];

