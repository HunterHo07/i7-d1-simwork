'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Minimize2, Play, Check, Code, Terminal, Palette, Users, Database, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Button from '../ui/Button';

const WorkstationInterface = ({ workstation, onClose, userProfile, setUserProfile }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeTab, setActiveTab] = useState('task');
  const [taskProgress, setTaskProgress] = useState(0);
  const [code, setCode] = useState(`// SimWork Authentication System
// Fix the login bug - users can't authenticate properly

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
  constructor() {
    this.users = [
      { id: 1, username: 'admin', password: '$2b$10$...' },
      { id: 2, username: 'user', password: '$2b$10$...' }
    ];
  }

  async authenticateUser(username, password) {
    // TODO: Fix this authentication logic
    // Current issue: password comparison always returns false

    const user = this.users.find(u => u.username === username);
    if (!user) {
      throw new Error('User not found');
    }

    // BUG: This line is commented out!
    // const isValid = await bcrypt.compare(password, user.password);
    const isValid = false; // This should be fixed

    if (isValid) {
      return jwt.sign({ userId: user.id }, 'secret_key');
    }

    throw new Error('Invalid credentials');
  }
}

export default AuthService;`);
  
  const workstationContent = {
    developer: {
      tabs: ['task', 'code', 'terminal', 'docs'],
      task: {
        title: 'Fix Authentication Bug',
        description: 'The login system is not properly validating user credentials. Implement the authentication logic in the authenticateUser function.',
        requirements: [
          'Validate username is not empty',
          'Check password length (min 8 characters)',
          'Return true for valid credentials',
          'Handle edge cases'
        ],
        xpReward: 150
      }
    },
    designer: {
      tabs: ['task', 'canvas', 'assets', 'preview'],
      task: {
        title: 'Create App Icons',
        description: 'Design a set of consistent icons for the mobile application following the brand guidelines.',
        requirements: [
          'Create 5 navigation icons',
          'Follow brand color scheme',
          'Ensure accessibility',
          'Export in multiple sizes'
        ],
        xpReward: 100
      }
    },
    pm: {
      tabs: ['task', 'board', 'team', 'metrics'],
      task: {
        title: 'Plan Sprint Retrospective',
        description: 'Organize and facilitate the upcoming sprint retrospective meeting for the development team.',
        requirements: [
          'Review sprint goals',
          'Prepare discussion topics',
          'Schedule team meeting',
          'Create action items'
        ],
        xpReward: 200
      }
    },
    data: {
      tabs: ['task', 'query', 'charts', 'insights'],
      task: {
        title: 'Analyze User Behavior',
        description: 'Examine user interaction data to identify patterns and create actionable insights.',
        requirements: [
          'Query user activity data',
          'Identify usage patterns',
          'Create visualizations',
          'Generate recommendations'
        ],
        xpReward: 175
      }
    },
    ai: {
      tabs: ['task', 'prompt', 'models', 'results'],
      task: {
        title: 'Optimize AI Prompts',
        description: 'Improve AI prompt engineering for better response quality and accuracy.',
        requirements: [
          'Analyze current prompts',
          'Test different approaches',
          'Measure response quality',
          'Document best practices'
        ],
        xpReward: 180
      }
    }
  };
  
  const currentContent = workstationContent[workstation.id] || workstationContent.developer;
  
  const completeTask = () => {
    setTaskProgress(100);
    setUserProfile(prev => ({
      ...prev,
      xp: prev.xp + currentContent.task.xpReward,
      completedQuests: prev.completedQuests + 1
    }));
    
    setTimeout(() => {
      onClose();
    }, 2000);
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'task':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                {currentContent.task.title}
              </h3>
              <p className="text-neutral-300 mb-4">
                {currentContent.task.description}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Requirements:</h4>
              <ul className="space-y-2">
                {currentContent.task.requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      taskProgress >= (index + 1) * 25 
                        ? 'bg-accent-green border-accent-green' 
                        : 'border-neutral-600'
                    }`}>
                      {taskProgress >= (index + 1) * 25 && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className={`text-sm ${
                      taskProgress >= (index + 1) * 25 
                        ? 'text-neutral-100 line-through' 
                        : 'text-neutral-300'
                    }`}>
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-neutral-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-neutral-300">Progress</span>
                <span className="text-sm text-accent-cyan">{taskProgress}%</span>
              </div>
              <div className="w-full bg-neutral-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-accent-cyan to-accent-green h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${taskProgress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button
                variant="primary"
                onClick={() => setTaskProgress(prev => Math.min(prev + 25, 100))}
                disabled={taskProgress >= 100}
              >
                {taskProgress >= 100 ? 'Completed!' : 'Work on Task'}
              </Button>
              {taskProgress >= 100 && (
                <Button variant="secondary" onClick={completeTask}>
                  Submit & Earn {currentContent.task.xpReward} XP
                </Button>
              )}
            </div>
          </div>
        );
        
      case 'code':
        return (
          <div className="space-y-4">
            <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-3 text-neutral-400">
                <Code className="w-4 h-4" />
                <span>main.js</span>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 bg-transparent text-neutral-100 resize-none focus:outline-none"
                spellCheck={false}
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Play className="w-4 h-4 mr-2" />
                Run Code
              </Button>
              <Button variant="outline" size="sm">
                Test
              </Button>
            </div>
          </div>
        );
        
      case 'terminal':
        return (
          <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center space-x-2 mb-3 text-neutral-400">
              <Terminal className="w-4 h-4" />
              <span>Terminal - SimWork Development Environment</span>
            </div>
            <div className="space-y-1 text-neutral-300">
              <div>$ git clone https://github.com/simwork/auth-service.git</div>
              <div className="text-accent-green">Cloning into 'auth-service'...</div>
              <div className="text-accent-green">✓ Repository cloned successfully</div>
              <div>$ cd auth-service</div>
              <div>$ npm install</div>
              <div className="text-accent-cyan">Installing dependencies...</div>
              <div className="text-accent-green">✓ Dependencies installed</div>
              <div>$ npm test</div>
              <div className="text-accent-red">✗ 3 tests failing - authentication module</div>
              <div>$ git status</div>
              <div>On branch feature/auth-fix</div>
              <div className="text-accent-orange">Changes not staged for commit:</div>
              <div className="text-accent-orange">  modified: src/auth.js</div>
              <div>$ npm run debug</div>
              <div className="text-accent-cyan">Starting debug server on port 3001...</div>
              <div className="flex items-center">
                <span>$ </span>
                <div className="w-2 h-4 bg-accent-cyan ml-1 animate-blink"></div>
              </div>
            </div>
          </div>
        );
        
      case 'canvas':
        return (
          <div className="space-y-4">
            <div className="bg-neutral-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-neutral-400">
                  <Palette className="w-4 h-4" />
                  <span>Figma - Mobile App Icons</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-accent-purple text-white rounded text-xs">Vector</button>
                  <button className="px-3 py-1 bg-neutral-700 text-neutral-300 rounded text-xs">Frame</button>
                  <button className="px-3 py-1 bg-neutral-700 text-neutral-300 rounded text-xs">Text</button>
                </div>
              </div>

              {/* Mock Design Canvas */}
              <div className="bg-white rounded-lg p-8 min-h-64">
                <div className="grid grid-cols-5 gap-4">
                  {['Home', 'Search', 'Profile', 'Settings', 'Menu'].map((icon, index) => (
                    <div key={icon} className="text-center">
                      <div className={`w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-accent-cyan' :
                        index === 1 ? 'bg-accent-purple' :
                        index === 2 ? 'bg-accent-green' :
                        index === 3 ? 'bg-accent-orange' :
                        'bg-neutral-600'
                      }`}>
                        {icon[0]}
                      </div>
                      <p className="text-xs text-neutral-600">{icon}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-neutral-100 rounded">
                  <h4 className="font-semibold text-neutral-800 mb-2">Brand Guidelines</h4>
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-accent-cyan rounded mx-auto mb-1"></div>
                      <p className="text-xs text-neutral-600">#00F5FF</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-accent-purple rounded mx-auto mb-1"></div>
                      <p className="text-xs text-neutral-600">#8B5CF6</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-neutral-800 rounded mx-auto mb-1"></div>
                      <p className="text-xs text-neutral-600">#1F2937</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'board':
        return (
          <div className="space-y-4">
            <div className="bg-neutral-900 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-4 text-neutral-400">
                <Users className="w-4 h-4" />
                <span>Sprint Board - Development Team</span>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {['Backlog', 'In Progress', 'Review', 'Done'].map((column, colIndex) => (
                  <div key={column} className="bg-neutral-800 rounded-lg p-3">
                    <h4 className="font-semibold text-neutral-100 mb-3 text-sm">{column}</h4>
                    <div className="space-y-2">
                      {colIndex === 0 && (
                        <>
                          <div className="bg-neutral-700 p-2 rounded text-xs">
                            <p className="text-neutral-200">Fix authentication bug</p>
                            <p className="text-neutral-400 mt-1">Story Points: 5</p>
                          </div>
                          <div className="bg-neutral-700 p-2 rounded text-xs">
                            <p className="text-neutral-200">Design mobile icons</p>
                            <p className="text-neutral-400 mt-1">Story Points: 3</p>
                          </div>
                        </>
                      )}
                      {colIndex === 1 && (
                        <div className="bg-accent-cyan/20 border border-accent-cyan/30 p-2 rounded text-xs">
                          <p className="text-neutral-200">User profile redesign</p>
                          <p className="text-neutral-400 mt-1">Assigned: Alex Chen</p>
                        </div>
                      )}
                      {colIndex === 2 && (
                        <div className="bg-accent-orange/20 border border-accent-orange/30 p-2 rounded text-xs">
                          <p className="text-neutral-200">API integration</p>
                          <p className="text-neutral-400 mt-1">Ready for QA</p>
                        </div>
                      )}
                      {colIndex === 3 && (
                        <div className="bg-accent-green/20 border border-accent-green/30 p-2 rounded text-xs">
                          <p className="text-neutral-200">Database optimization</p>
                          <p className="text-neutral-400 mt-1">Deployed ✓</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'query':
        return (
          <div className="space-y-4">
            <div className="bg-neutral-900 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-4 text-neutral-400">
                <Database className="w-4 h-4" />
                <span>SQL Query Editor</span>
              </div>

              <div className="bg-neutral-800 rounded p-3 font-mono text-sm mb-4">
                <div className="text-accent-green mb-2">-- Analyze user behavior patterns</div>
                <div className="text-neutral-300">
                  <div>SELECT</div>
                  <div className="ml-4">u.user_id,</div>
                  <div className="ml-4">u.username,</div>
                  <div className="ml-4">COUNT(s.session_id) as total_sessions,</div>
                  <div className="ml-4">AVG(s.duration) as avg_session_time,</div>
                  <div className="ml-4">MAX(s.created_at) as last_activity</div>
                  <div>FROM users u</div>
                  <div>LEFT JOIN sessions s ON u.user_id = s.user_id</div>
                  <div>WHERE s.created_at &gt;= DATE_SUB(NOW(), INTERVAL 30 DAY)</div>
                  <div>GROUP BY u.user_id, u.username</div>
                  <div>ORDER BY total_sessions DESC</div>
                  <div>LIMIT 100;</div>
                </div>
              </div>

              <div className="bg-neutral-800 rounded p-3">
                <div className="text-accent-green text-sm mb-2">Query Results (100 rows)</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="text-neutral-400 border-b border-neutral-700">
                        <th className="text-left p-2">User ID</th>
                        <th className="text-left p-2">Username</th>
                        <th className="text-left p-2">Sessions</th>
                        <th className="text-left p-2">Avg Time</th>
                        <th className="text-left p-2">Last Activity</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      <tr className="border-b border-neutral-700/50">
                        <td className="p-2">1001</td>
                        <td className="p-2">alex_chen</td>
                        <td className="p-2 text-accent-cyan">47</td>
                        <td className="p-2">24m 15s</td>
                        <td className="p-2">2024-01-15 14:30</td>
                      </tr>
                      <tr className="border-b border-neutral-700/50">
                        <td className="p-2">1002</td>
                        <td className="p-2">sarah_dev</td>
                        <td className="p-2 text-accent-cyan">42</td>
                        <td className="p-2">31m 42s</td>
                        <td className="p-2">2024-01-15 16:45</td>
                      </tr>
                      <tr className="border-b border-neutral-700/50">
                        <td className="p-2">1003</td>
                        <td className="p-2">mike_pm</td>
                        <td className="p-2 text-accent-cyan">38</td>
                        <td className="p-2">18m 33s</td>
                        <td className="p-2">2024-01-15 12:20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );

      case 'prompt':
        return (
          <div className="space-y-4">
            <div className="bg-neutral-900 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-4 text-neutral-400">
                <Brain className="w-4 h-4" />
                <span>AI Prompt Engineering Lab</span>
              </div>

              <div className="space-y-4">
                <div className="bg-neutral-800 rounded p-3">
                  <div className="text-accent-cyan text-sm mb-2">System Prompt</div>
                  <textarea
                    className="w-full bg-neutral-700 text-neutral-200 p-2 rounded text-sm resize-none"
                    rows="3"
                    defaultValue="You are an expert code reviewer. Analyze the provided code for bugs, security issues, and performance improvements. Provide specific, actionable feedback."
                  />
                </div>

                <div className="bg-neutral-800 rounded p-3">
                  <div className="text-accent-purple text-sm mb-2">User Prompt</div>
                  <textarea
                    className="w-full bg-neutral-700 text-neutral-200 p-2 rounded text-sm resize-none"
                    rows="4"
                    defaultValue="Please review this authentication function and identify any security vulnerabilities or bugs:

function authenticateUser(username, password) {
  const user = users.find(u => u.username === username);
  return user && user.password === password;
}"
                  />
                </div>

                <div className="bg-neutral-800 rounded p-3">
                  <div className="text-accent-green text-sm mb-2">AI Response</div>
                  <div className="bg-neutral-700 p-3 rounded text-sm text-neutral-200">
                    <p className="mb-2"><strong className="text-accent-red">Critical Security Issues Found:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-neutral-300">
                      <li>Plain text password comparison - passwords should be hashed</li>
                      <li>No rate limiting - vulnerable to brute force attacks</li>
                      <li>No input validation - potential injection risks</li>
                      <li>Missing error handling for edge cases</li>
                    </ul>
                    <p className="mt-3 mb-2"><strong className="text-accent-cyan">Recommended Fix:</strong></p>
                    <div className="bg-neutral-900 p-2 rounded font-mono text-xs">
                      <div className="text-accent-green">// Use bcrypt for password hashing</div>
                      <div>const isValid = await bcrypt.compare(password, user.hashedPassword);</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-neutral-400">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} interface coming soon...
            </p>
          </div>
        );
    }
  };
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className={`bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl ${
            isMaximized ? 'w-full h-full' : 'w-full max-w-4xl h-3/4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Window Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-700">
            <div className="flex items-center space-x-3">
              <workstation.icon 
                className="w-6 h-6" 
                style={{ color: workstation.color }} 
              />
              <h2 className="text-xl font-semibold text-neutral-100">
                {workstation.name}
              </h2>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-neutral-700">
            {currentContent.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-accent-cyan border-b-2 border-accent-cyan bg-neutral-800/50'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/30'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="flex-1 p-6 overflow-auto">
            {renderTabContent()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkstationInterface;
