"use client";

import { useState, useRef, useEffect } from "react";
import { suggestedQuestions, demoScenarios } from "@/data/demoData";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    handleSubmit(question);
  };

  const handleSubmit = async (questionText?: string) => {
    const question = questionText || input;
    if (!question.trim() || isTyping) return;

    // Ajouter la question de l'utilisateur
    const userMessage: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simuler un délai de traitement
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Trouver la réponse correspondante
    const scenario = demoScenarios.find((s) =>
      question.toLowerCase().includes(s.question.toLowerCase().slice(0, 15))
    );

    const response = scenario?.response || `Je suis une démo interactive du Sales Agent MCP. 

Pour voir des exemples concrets, essayez l'une des questions suggérées ci-dessous!

Cette démo simule l'analyse d'appels Fathom. L'agent réel a accès à toutes vos transcriptions et peut:
• Analyser vos appels en temps réel
• Identifier les patterns de succès
• Extraire les pain points clients
• Générer des follow-ups personnalisés
• Comparer vos performances

**Cas d'usage professionnel concret** pour améliorer vos performances commerciales! 🎯`;

    // Ajouter la réponse de l'assistant avec effet de typing
    const assistantMessage: Message = { role: "assistant", content: response };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleReset = () => {
    setMessages([]);
    setInput("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="glass-card rounded-2xl p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🤖</div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Sales Agent Assistant - Démo Interactive
              </h3>
              <p className="text-foreground-muted text-sm">
                Testez l'analyse IA de vos appels de vente
              </p>
            </div>
          </div>
          {messages.length > 0 && (
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm text-foreground-muted hover:text-accent transition-colors"
            >
              Réinitialiser
            </button>
          )}
        </div>

        {/* Note démo */}
        <div className="p-3 bg-accent/10 border border-accent/30 rounded-xl">
          <p className="text-sm text-foreground/80">
            💡 <span className="font-medium text-accent">Démo simulée</span> - 
            Données basées sur de vrais cas d'usage. L'agent réel est connecté 
            à l'API Fathom via le Model Context Protocol (MCP).
          </p>
        </div>
      </div>

      {/* Chat Container */}
      <div className="glass-card rounded-2xl overflow-hidden">
        {/* Messages */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">💬</div>
                <p className="text-foreground-muted max-w-md">
                  Posez une question sur l'analyse d'appels de vente ou 
                  cliquez sur une question suggérée ci-dessous
                </p>
              </div>
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.role === "user"
                        ? "bg-accent text-white"
                        : "bg-background-secondary/60 backdrop-blur-sm border border-glass-border text-foreground"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <div className="prose prose-invert max-w-none">
                        {message.content.split("\n").map((line, i) => {
                          if (line.startsWith("**") && line.endsWith("**")) {
                            return (
                              <p key={i} className="font-semibold text-accent mb-2">
                                {line.replace(/\*\*/g, "")}
                              </p>
                            );
                          }
                          if (line.startsWith("•")) {
                            return (
                              <p key={i} className="ml-4 mb-1 text-foreground/90">
                                {line}
                              </p>
                            );
                          }
                          if (line.trim().startsWith("|")) {
                            return (
                              <p key={i} className="font-mono text-sm text-foreground/80 mb-1">
                                {line}
                              </p>
                            );
                          }
                          if (line.trim() === "") {
                            return <br key={i} />;
                          }
                          return (
                            <p key={i} className="mb-2 text-foreground/90 leading-relaxed">
                              {line}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-white">{message.content}</p>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-background-secondary/60 backdrop-blur-sm border border-glass-border rounded-2xl p-4">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Suggested Questions */}
        {messages.length === 0 && (
          <div className="px-6 pb-4">
            <p className="text-sm font-medium text-foreground-muted mb-3">
              📌 Questions suggérées:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-left p-3 bg-background-secondary/40 backdrop-blur-sm border border-glass-border rounded-xl text-sm text-foreground hover:border-accent hover:bg-accent/5 transition-all"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-glass-border p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex gap-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question sur l'analyse d'appels..."
              className="flex-1 px-4 py-3 bg-background-secondary/60 backdrop-blur-sm border border-glass-border rounded-xl text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent transition-colors"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-6 py-3 bg-accent hover:bg-accent-hover disabled:bg-accent/50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all orange-glow"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

