import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { Answer, Score, DevelopmentalArea } from './types/asq';
import { asqData } from './data/asqData';
import QuestionSection from './components/QuestionSection';
import Results from './components/Results';

function App() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: string, answer: Answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const calculateScores = (): Score[] => {
    const scores: Score[] = [];
    const answerPoints = { yes: 10, sometimes: 5, 'not yet': 0 };

    Object.entries(asqData.areas).forEach(([area, questions]) => {
      const areaScore = questions.reduce((total, question) => {
        const answer = answers[question.id];
        return total + (answer ? answerPoints[answer] : 0);
      }, 0);

      const cutoffs = asqData.cutoffScores[area as DevelopmentalArea];
      let status: Score['status'] = 'on-track';
      if (areaScore <= cutoffs.refer) status = 'refer';
      else if (areaScore <= cutoffs.monitor) status = 'monitor';

      scores.push({
        area: area as DevelopmentalArea,
        score: areaScore,
        status,
      });
    });

    return scores;
  };

  const isFormComplete = () => {
    return Object.values(asqData.areas).every((questions) =>
      questions.every((q) => answers[q.id])
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <Brain className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold">
                ASQ Development Calculator
              </h1>
              <p className="mt-2 text-gray-600">
                Ages & Stages Questionnaire for {asqData.ageGroup}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {!showResults ? (
          <>
            {Object.entries(asqData.areas).map(([area, questions]) => (
              <QuestionSection
                key={area}
                title={area.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                questions={questions}
                answers={answers}
                onAnswerChange={handleAnswerChange}
              />
            ))}
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowResults(true)}
                disabled={!isFormComplete()}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold
                         hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50
                         disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105
                         disabled:hover:scale-100 shadow-md"
              >
                Calculate Results
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-8">
            <Results scores={calculateScores()} />
            <div className="flex justify-center">
              <button
                onClick={() => setShowResults(false)}
                className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold
                         hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2
                         focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300
                         transform hover:scale-105 shadow-md"
              >
                Back to Questionnaire
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;