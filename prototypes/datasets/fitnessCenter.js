const trainers = [
  { name: 'Tammy', teaches: ['strength', 'cardio'], experienceInYears: 2, rate: 30 },
  { name: 'Chris', teaches: ['yoga', 'meditation', 'recovery'], experienceInYears: 4, rate: 35 },
  { name: 'Jean-Ralphio', teaches: ['yoga', 'pilates'], experienceInYears: 1, rate: 25 },
  { name: 'Donna', teaches: ['strength', 'yoga', 'recovery'], experienceInYears: 5, rate: 40 },
  { name: 'Mona-Lisa', teaches: ['pilates', 'yoga', 'meditation', 'strength'], experienceInYears: 7, rate: 50 },
  { name: 'Bobby Newport', teaches: ['cardio', 'yoga', 'pilates', 'strength'], experienceInYears: 1, rate: 30 }
];

const exercisers = [
  { name: 'Ron', interests: ['yoga', 'strength'], budget: 30 },
  { name: 'April', interests: ['yoga', 'meditation'], budget: 40 },
  { name: 'Leslie', interests: ['pilates', 'strength'], budget: 50 },
  { name: 'Ann', interests: ['yoga', 'recovery'], budget: 30 },
  { name: 'Andy', interests: ['yoga', 'strength'], budget: 15 },
  { name: 'Ben', interests: ['cardio', 'strength'], budget: 40 },
  { name: 'Jerry', interests: ['recovery', 'strength'], budget: 45 },
  { name: 'Mark', interests: ['yoga', 'cardio'], budget: 35 },
];

module.exports = {
  trainers,
  exercisers
}