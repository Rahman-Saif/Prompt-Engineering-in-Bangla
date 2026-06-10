import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import type { QuizQuestion } from "@/lib/chapters";
import { saveQuizResult } from "@/lib/progress";

export function QuizSection({ slug, questions }: { slug: string; questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce<number>((acc, a, i) => acc + (a === questions[i].answer ? 1 : 0), 0);
  const total = questions.length;
  const pct = Math.round((score / total) * 100);

  const submit = () => {
    setSubmitted(true);
    saveQuizResult(slug, {
      score,
      total,
      takenAt: Date.now(),
      answers: answers.map((a) => (a === null ? -1 : a)),
    });
  };

  const retake = () => {
    setAnswers(questions.map(() => null));
    setSubmitted(false);
  };

  const allAnswered = answers.every((a) => a !== null);

  return (
    <section className="mt-12 rounded-2xl border border-border bg-surface p-6 md:p-8 shadow-elevated">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="font-serif text-2xl">Chapter Quiz</h2>
        {submitted && (
          <div className="text-sm">
            Score: <span className="font-semibold text-foreground">{score}/{total}</span>
            <span className="text-muted-foreground"> ({pct}%)</span>
          </div>
        )}
      </div>

      <ol className="mt-6 space-y-6">
        {questions.map((q, qi) => {
          const userAns = answers[qi];
          const correct = q.answer;
          return (
            <li key={qi} className="space-y-3">
              <div className="font-medium">{qi + 1}. {q.q}</div>
              <div className="grid gap-2">
                {q.options.map((opt, oi) => {
                  const isSelected = userAns === oi;
                  const isCorrect = submitted && oi === correct;
                  const isWrong = submitted && isSelected && oi !== correct;
                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={submitted}
                      onClick={() => {
                        const next = [...answers];
                        next[qi] = oi;
                        setAnswers(next);
                      }}
                      className={[
                        "flex items-center justify-between rounded-lg border px-4 py-2.5 text-left text-sm transition-colors",
                        isCorrect ? "border-emerald-500/60 bg-emerald-500/10" :
                        isWrong ? "border-destructive/60 bg-destructive/10" :
                        isSelected ? "border-primary bg-primary/10" :
                        "border-border bg-background hover:bg-accent",
                      ].join(" ")}
                    >
                      <span>{opt}</span>
                      {isCorrect && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                      {isWrong && <XCircle className="h-4 w-4 text-destructive" />}
                    </button>
                  );
                })}
              </div>
              {submitted && q.explain && (
                <p className="text-xs text-muted-foreground italic">{q.explain}</p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap gap-3">
        {!submitted ? (
          <button
            onClick={submit}
            disabled={!allAnswered}
            className="inline-flex items-center rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit answers
          </button>
        ) : (
          <button
            onClick={retake}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent"
          >
            <RotateCcw className="h-4 w-4" /> Retake quiz
          </button>
        )}
      </div>
    </section>
  );
}
