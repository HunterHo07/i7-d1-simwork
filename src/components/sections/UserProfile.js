'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Trophy, Zap, Target, Star, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const UserProfile = ({ profile }) => {
  const { name, level, xp, badges, completedQuests, currentStreak } = profile;
  
  // Calculate XP progress to next level
  const xpToNextLevel = level * 250;
  const currentLevelXP = (level - 1) * 250;
  const progressXP = xp - currentLevelXP;
  const progressPercent = (progressXP / (xpToNextLevel - currentLevelXP)) * 100;
  
  const stats = [
    { icon: Trophy, label: 'Quests', value: completedQuests, color: 'text-accent-orange' },
    { icon: Zap, label: 'Streak', value: `${currentStreak}d`, color: 'text-accent-cyan' },
    { icon: Target, label: 'Level', value: level, color: 'text-accent-purple' }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-80 pointer-events-auto"
    >
      <Card variant="glass" className="border-accent-cyan/30">
        <CardContent className="p-4">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent-green rounded-full flex items-center justify-center text-xs font-bold text-primary-900">
                {level}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-100">{name}</h3>
              <p className="text-sm text-neutral-400">Level {level} Simulator</p>
            </div>
          </div>
          
          {/* XP Progress */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-neutral-300">Experience</span>
              <span className="text-sm text-neutral-400">
                {progressXP}/{xpToNextLevel - currentLevelXP} XP
              </span>
            </div>
            <div className="w-full bg-neutral-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-accent-cyan to-accent-purple h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-center"
              >
                <stat.icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
                <div className="text-lg font-bold text-neutral-100">{stat.value}</div>
                <div className="text-xs text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Badges */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-300">Recent Badges</span>
              <Award className="w-4 h-4 text-accent-orange" />
            </div>
            <div className="flex flex-wrap gap-2">
              {badges.slice(0, 3).map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                  className="bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 rounded-full px-2 py-1 text-xs text-neutral-200"
                >
                  <Star className="w-3 h-3 inline mr-1" />
                  {badge}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-4 pt-4 border-t border-neutral-700">
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-accent-cyan transition-colors duration-300 rounded-lg px-3 py-2 text-xs">
                View Profile
              </button>
              <button className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-accent-cyan transition-colors duration-300 rounded-lg px-3 py-2 text-xs">
                Leaderboard
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserProfile;
