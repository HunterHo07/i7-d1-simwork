'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Clock, 
  Star, 
  CheckCircle, 
  Play, 
  ChevronDown,
  ChevronUp,
  Code,
  Palette,
  Users,
  Database,
  Brain
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Button from '../ui/Button';

const QuestSystem = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeQuest, setActiveQuest] = useState(null);
  
  const quests = [
    {
      id: 1,
      title: 'Debug the Login System',
      description: 'Fix authentication issues in the user login flow',
      type: 'developer',
      icon: Code,
      difficulty: 'Medium',
      xp: 150,
      timeEstimate: '15 min',
      status: 'active',
      progress: 60,
      requirements: ['JavaScript', 'React', 'API Integration'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Design Mobile App Icons',
      description: 'Create a set of consistent icons for the mobile application',
      type: 'designer',
      icon: Palette,
      difficulty: 'Easy',
      xp: 100,
      timeEstimate: '20 min',
      status: 'available',
      progress: 0,
      requirements: ['Figma', 'Icon Design', 'Mobile UI'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Plan Sprint Retrospective',
      description: 'Organize and facilitate the team retrospective meeting',
      type: 'pm',
      icon: Users,
      difficulty: 'Hard',
      xp: 200,
      timeEstimate: '30 min',
      status: 'available',
      progress: 0,
      requirements: ['Agile', 'Team Management', 'Communication'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Analyze User Behavior',
      description: 'Create insights from user interaction data',
      type: 'data',
      icon: Database,
      difficulty: 'Medium',
      xp: 175,
      timeEstimate: '25 min',
      status: 'completed',
      progress: 100,
      requirements: ['SQL', 'Python', 'Data Visualization'],
      color: 'from-orange-500 to-red-500'
    }
  ];
  
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-accent-green';
      case 'Medium': return 'text-accent-orange';
      case 'Hard': return 'text-accent-red';
      default: return 'text-neutral-400';
    }
  };
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <Play className="w-4 h-4 text-accent-cyan" />;
      case 'completed': return <CheckCircle className="w-4 h-4 text-accent-green" />;
      default: return <Target className="w-4 h-4 text-neutral-400" />;
    }
  };
  
  const startQuest = (quest) => {
    setActiveQuest(quest);
    // Here you would typically update the quest status and navigate to the workstation
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-96 pointer-events-auto"
    >
      <Card variant="glass" className="border-accent-purple/30">
        <CardHeader 
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-accent-purple" />
              <h3 className="text-lg font-semibold text-neutral-100">Active Quests</h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-neutral-400" />
            </motion.div>
          </div>
        </CardHeader>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <CardContent className="pt-0 max-h-96 overflow-y-auto">
                <div className="space-y-3">
                  {quests.map((quest, index) => (
                    <motion.div
                      key={quest.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        quest.status === 'active' 
                          ? 'bg-accent-cyan/10 border-accent-cyan/30' 
                          : quest.status === 'completed'
                          ? 'bg-accent-green/10 border-accent-green/30'
                          : 'bg-neutral-800/50 border-neutral-700 hover:border-neutral-600'
                      }`}
                    >
                      {/* Quest Header */}
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <quest.icon className="w-4 h-4 text-neutral-300" />
                          <span className="text-sm font-medium text-neutral-100">
                            {quest.title}
                          </span>
                        </div>
                        {getStatusIcon(quest.status)}
                      </div>
                      
                      {/* Quest Description */}
                      <p className="text-xs text-neutral-400 mb-3">
                        {quest.description}
                      </p>
                      
                      {/* Quest Details */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3 text-xs">
                          <span className={`font-medium ${getDifficultyColor(quest.difficulty)}`}>
                            {quest.difficulty}
                          </span>
                          <span className="text-neutral-400 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {quest.timeEstimate}
                          </span>
                          <span className="text-accent-orange flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            {quest.xp} XP
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      {quest.status === 'active' && (
                        <div className="mb-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-neutral-400">Progress</span>
                            <span className="text-xs text-neutral-300">{quest.progress}%</span>
                          </div>
                          <div className="w-full bg-neutral-700 rounded-full h-1.5">
                            <motion.div
                              className="bg-gradient-to-r from-accent-cyan to-accent-purple h-1.5 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${quest.progress}%` }}
                              transition={{ duration: 1 }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {/* Requirements */}
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1">
                          {quest.requirements.slice(0, 2).map((req, reqIndex) => (
                            <span
                              key={reqIndex}
                              className="bg-neutral-700 text-neutral-300 px-2 py-0.5 rounded text-xs"
                            >
                              {req}
                            </span>
                          ))}
                          {quest.requirements.length > 2 && (
                            <span className="text-neutral-500 text-xs">
                              +{quest.requirements.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      {quest.status === 'available' && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs"
                          onClick={() => startQuest(quest)}
                        >
                          Start Quest
                        </Button>
                      )}
                      
                      {quest.status === 'active' && (
                        <Button
                          variant="primary"
                          size="sm"
                          className="w-full text-xs"
                          onClick={() => startQuest(quest)}
                        >
                          Continue
                        </Button>
                      )}
                      
                      {quest.status === 'completed' && (
                        <div className="text-center text-xs text-accent-green font-medium">
                          ✓ Completed
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* Quest Summary */}
                <div className="mt-4 pt-4 border-t border-neutral-700">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-accent-green">
                        {quests.filter(q => q.status === 'completed').length}
                      </div>
                      <div className="text-xs text-neutral-400">Completed</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent-cyan">
                        {quests.filter(q => q.status === 'active').length}
                      </div>
                      <div className="text-xs text-neutral-400">Active</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent-orange">
                        {quests.reduce((sum, q) => sum + (q.status === 'completed' ? q.xp : 0), 0)}
                      </div>
                      <div className="text-xs text-neutral-400">XP Earned</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default QuestSystem;
