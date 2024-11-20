import { ASQData } from '../types/asq';

export const asqData: ASQData = {
  ageGroup: '24 months',
  areas: {
    communication: [
      { id: 'com1', text: 'Does your child point to the correct picture when you say "Show me the kitty" or ask "Where is the dog?"', area: 'communication' },
      { id: 'com2', text: 'Does your child imitate a two-word sentence like "Baby crying" or "Daddy eat?"', area: 'communication' },
      { id: 'com3', text: 'Without showing first, does your child point to at least one body part when you ask?', area: 'communication' },
      { id: 'com4', text: 'Does your child say two or more words together?', area: 'communication' },
      { id: 'com5', text: 'When you ask, "What\'s that?" does your child name at least 5 familiar objects?', area: 'communication' },
    ],
    'gross-motor': [
      { id: 'gm1', text: 'Does your child walk down stairs if you hold onto one of their hands?', area: 'gross-motor' },
      { id: 'gm2', text: 'Does your child run fairly well, stopping themselves without bumping into things?', area: 'gross-motor' },
      { id: 'gm3', text: 'Does your child walk either up or down at least two steps by themselves?', area: 'gross-motor' },
      { id: 'gm4', text: 'Does your child kick a ball by swinging their leg forward?', area: 'gross-motor' },
      { id: 'gm5', text: 'Does your child jump with both feet leaving the floor at the same time?', area: 'gross-motor' },
    ],
    'fine-motor': [
      { id: 'fm1', text: 'Does your child use a spoon to feed themselves with little spilling?', area: 'fine-motor' },
      { id: 'fm2', text: 'Does your child stack at least four small blocks or toys on top of each other by themselves?', area: 'fine-motor' },
      { id: 'fm3', text: 'Does your child turn pages in a book by themselves?', area: 'fine-motor' },
      { id: 'fm4', text: 'Does your child get a spoon into their mouth right side up?', area: 'fine-motor' },
      { id: 'fm5', text: 'Does your child stack six small blocks or toys on top of each other by themselves?', area: 'fine-motor' },
    ],
    'problem-solving': [
      { id: 'ps1', text: 'After watching you draw a line from the top of the paper to the bottom, does your child copy you?', area: 'problem-solving' },
      { id: 'ps2', text: 'After watching you draw a single circle, does your child copy you?', area: 'problem-solving' },
      { id: 'ps3', text: 'Can your child put things away where they belong?', area: 'problem-solving' },
      { id: 'ps4', text: 'If your child wants something they cannot reach, do they find a chair or box to stand on?', area: 'problem-solving' },
      { id: 'ps5', text: 'While your child watches, line up four objects like blocks or cars in a row. Does your child copy or imitate you?', area: 'problem-solving' },
    ],
    'personal-social': [
      { id: 'ps1', text: 'Does your child copy activities you do, such as wipe a table or clap?', area: 'personal-social' },
      { id: 'ps2', text: 'Does your child drink from a cup or glass, putting it down again with little spilling?', area: 'personal-social' },
      { id: 'ps3', text: 'Does your child let you know when they have finished things such as eating or playing?', area: 'personal-social' },
      { id: 'ps4', text: 'Does your child copy the activities you do, such as wipe a table, sweep, or make a noise?', area: 'personal-social' },
      { id: 'ps5', text: 'Does your child eat with a fork?', area: 'personal-social' },
    ],
  },
  cutoffScores: {
    communication: { monitor: 25, refer: 15 },
    'gross-motor': { monitor: 25, refer: 15 },
    'fine-motor': { monitor: 25, refer: 15 },
    'problem-solving': { monitor: 25, refer: 15 },
    'personal-social': { monitor: 25, refer: 15 },
  },
};