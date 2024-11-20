import React from 'react';
import { Question, Answer } from '../types/asq';

interface QuestionSectionProps {
  title: string;
  questions: Question[];
  answers: Record<string, Answer>;
  onAnswerChange: (questionId: string, answer: Answer) => void;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({
  title,
  questions,
  answers,
  onAnswerChange,
}) => {
  return (
    <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-8 question-card animate-fade-in">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-4">{title}</h2>
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div 
            key={question.id} 
            className="border-b border-gray-200 last:border-0 pb-6"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <p className="mb-4 text-gray-700 leading-relaxed">{question.text}</p>
            <div className="flex gap-6">
              {(['yes', 'sometimes', 'not yet'] as Answer[]).map((option) => (
                <label
                  key={option}
                  className="answer-option flex items-center space-x-3 cursor-pointer flex-1"
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => onAnswerChange(question.id, option)}
                    className="form-radio"
                  />
                  <span className="text-sm font-medium text-gray-600 capitalize">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSection;