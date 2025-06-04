'use client';

import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import OfficeEnvironment from '@/components/3d/OfficeEnvironment';
import WorkstationInterface from '@/components/sections/WorkstationInterface';
import UserProfile from '@/components/sections/UserProfile';
import QuestSystem from '@/components/sections/QuestSystem';

export default function DemoPage() {
  const [activeWorkstation, setActiveWorkstation] = useState(null);
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Chen',
    level: 12,
    xp: 2450,
    badges: ['Code Master', 'Design Pro', 'Team Player'],
    completedQuests: 23,
    currentStreak: 7
  });

  return (
    <main className="min-h-screen bg-primary-900 overflow-hidden">
      <Navigation />
      
      {/* Demo Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Live Demo</span>
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Experience the future of work simulation. Navigate the office, complete quests, and showcase your skills.
            </p>
          </div>
        </div>
      </div>

      {/* Main Demo Interface */}
      <div className="relative h-screen">
        {/* 2.5D Office Environment */}
        <OfficeEnvironment 
          onWorkstationClick={setActiveWorkstation}
          activeWorkstation={activeWorkstation}
        />
        
        {/* UI Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          {/* User Profile HUD */}
          <div className="absolute top-4 left-4 z-10">
            <UserProfile profile={userProfile} />
          </div>

          {/* Quest System */}
          <div className="absolute top-4 right-4 z-10">
            <QuestSystem />
          </div>
          
          {/* Workstation Interface Modal */}
          {activeWorkstation && (
            <div className="absolute inset-0 pointer-events-auto">
              <WorkstationInterface 
                workstation={activeWorkstation}
                onClose={() => setActiveWorkstation(null)}
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
