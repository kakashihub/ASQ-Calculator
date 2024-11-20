import React from 'react';
import { Score } from '../types/asq';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';

interface ResultsProps {
  scores: Score[];
}

const Results: React.FC<ResultsProps> = ({ scores }) => {
  const getStatusIcon = (status: Score['status']) => {
    switch (status) {
      case 'on-track':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'monitor':
        return <Activity className="w-6 h-6 text-yellow-500" />;
      case 'refer':
        return <AlertTriangle className="w-6 h-6 text-red-500" />;
    }
  };

  const getStatusClass = (status: Score['status']) => {
    switch (status) {
      case 'on-track':
        return 'bg-green-50 border-green-200';
      case 'monitor':
        return 'bg-yellow-50 border-yellow-200';
      case 'refer':
        return 'bg-red-50 border-red-200';
    }
  };

  const getRecommendation = (status: Score['status']) => {
    switch (status) {
      case 'on-track':
        return "Continue supporting your child's development through age-appropriate activities.";
      case 'monitor':
        return "Keep a closer eye on this area and discuss with your healthcare provider at the next visit.";
      case 'refer':
        return "We recommend discussing these results with your healthcare provider soon.";
    }
  };

  return (
    <div className="result-card rounded-xl shadow-md p-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Development Summary</h2>
      <div className="space-y-6">
        {scores.map((score, index) => (
          <div 
            key={score.area} 
            className={`border rounded-lg p-6 ${getStatusClass(score.status)} transition-all duration-300 hover:shadow-md`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {getStatusIcon(score.status)}
                <h3 className="text-lg font-semibold capitalize">
                  {score.area.replace('-', ' ')}
                </h3>
              </div>
              <span className="score-badge">
                Score: {score.score}
              </span>
            </div>
            <p className="text-gray-600 mt-2 leading-relaxed">{getRecommendation(score.status)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;