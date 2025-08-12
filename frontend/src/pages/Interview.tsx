import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tab,
  Tabs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  CardActions
} from '@mui/material';
import {
  Code,
  Psychology,
  Architecture,
  Quiz,
  CheckCircle,
  ExpandMore,
  Launch,
  Work,
  Timeline,
  PlayArrow,
  OpenInNew
} from '@mui/icons-material';

interface Resource {
  title: string;
  description: string;
  url: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'coding' | 'system-design' | 'behavioral' | 'general';
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`interview-tabpanel-${index}`}
      aria-labelledby={`interview-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Interview: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const resources: Resource[] = [
    {
      title: "LeetCode",
      description: "Practice coding problems used by top tech companies",
      url: "https://leetcode.com",
      difficulty: "Beginner",
      type: "coding"
    },
    {
      title: "Grind 75",
      description: "Curated list of 75 essential coding problems for internships",
      url: "https://www.techinterviewhandbook.org/grind75",
      difficulty: "Intermediate",
      type: "coding"
    },
    {
      title: "Cracking the Coding Interview",
      description: "Comprehensive guide to programming interviews",
      url: "https://www.crackingthecodinginterview.com",
      difficulty: "Intermediate",
      type: "coding"
    },
    {
      title: "System Design Primer",
      description: "Learn how to design large-scale systems",
      url: "https://github.com/donnemartin/system-design-primer",
      difficulty: "Advanced",
      type: "system-design"
    },
    {
      title: "Behavioral Interview Guide",
      description: "Master the STAR method and common behavioral questions",
      url: "https://www.indeed.com/career-advice/interviewing/behavioral-interview-questions",
      difficulty: "Beginner",
      type: "behavioral"
    },
    {
      title: "Simplify - Internship Application Tracker",
      description: "Track your internship applications and deadlines",
      url: "https://simplify.jobs",
      difficulty: "Beginner",
      type: "general"
    },
    {
      title: "GitHub Student Pack",
      description: "Free developer tools and resources for students",
      url: "https://education.github.com/pack",
      difficulty: "Beginner",
      type: "general"
    }
  ];

  const leetcodeProblems = {
    'Arrays & Strings': [
      { name: 'Two Sum', difficulty: 'Easy', url: 'https://leetcode.com/problems/two-sum/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Contains Duplicate', difficulty: 'Easy', url: 'https://leetcode.com/problems/contains-duplicate/', companies: ['Meta', 'Amazon'], frequency: 'High' },
      { name: 'Valid Anagram', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-anagram/', companies: ['Google', 'Spotify'], frequency: 'Medium' },
      { name: 'Valid Palindrome', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-palindrome/', companies: ['Meta', 'Microsoft'], frequency: 'Medium' },
      { name: 'Product of Array Except Self', difficulty: 'Medium', url: 'https://leetcode.com/problems/product-of-array-except-self/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Group Anagrams', difficulty: 'Medium', url: 'https://leetcode.com/problems/group-anagrams/', companies: ['Google', 'Uber'], frequency: 'High' },
      { name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', companies: ['Meta', 'Google'], frequency: 'Very High' },
      { name: 'Container With Most Water', difficulty: 'Medium', url: 'https://leetcode.com/problems/container-with-most-water/', companies: ['Google', 'Amazon'], frequency: 'High' },
      { name: 'Three Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/3sum/', companies: ['Meta', 'Google', 'Amazon'], frequency: 'Very High' },
      { name: 'Minimum Window Substring', difficulty: 'Hard', url: 'https://leetcode.com/problems/minimum-window-substring/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Trapping Rain Water', difficulty: 'Hard', url: 'https://leetcode.com/problems/trapping-rain-water/', companies: ['Google', 'Apple'], frequency: 'Medium' },
      { name: 'Sliding Window Maximum', difficulty: 'Hard', url: 'https://leetcode.com/problems/sliding-window-maximum/', companies: ['Google', 'Amazon'], frequency: 'Medium' },
      { name: 'First Missing Positive', difficulty: 'Hard', url: 'https://leetcode.com/problems/first-missing-positive/', companies: ['Google', 'Meta'], frequency: 'Medium' }
    ],
    'Linked Lists': [
      { name: 'Reverse Linked List', difficulty: 'Easy', url: 'https://leetcode.com/problems/reverse-linked-list/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Merge Two Sorted Lists', difficulty: 'Easy', url: 'https://leetcode.com/problems/merge-two-sorted-lists/', companies: ['Amazon', 'Apple'], frequency: 'High' },
      { name: 'Linked List Cycle', difficulty: 'Easy', url: 'https://leetcode.com/problems/linked-list-cycle/', companies: ['Meta', 'Microsoft'], frequency: 'High' },
      { name: 'Middle of the Linked List', difficulty: 'Easy', url: 'https://leetcode.com/problems/middle-of-the-linked-list/', companies: ['Amazon', 'Google'], frequency: 'Medium' },
      { name: 'Remove Nth Node From End of List', difficulty: 'Medium', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Reorder List', difficulty: 'Medium', url: 'https://leetcode.com/problems/reorder-list/', companies: ['Meta', 'Microsoft'], frequency: 'Medium' },
      { name: 'Copy List with Random Pointer', difficulty: 'Medium', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/', companies: ['Amazon', 'Microsoft'], frequency: 'High' },
      { name: 'Add Two Numbers', difficulty: 'Medium', url: 'https://leetcode.com/problems/add-two-numbers/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Intersection of Two Linked Lists', difficulty: 'Easy', url: 'https://leetcode.com/problems/intersection-of-two-linked-lists/', companies: ['Amazon', 'Microsoft'], frequency: 'Medium' },
      { name: 'Merge k Sorted Lists', difficulty: 'Hard', url: 'https://leetcode.com/problems/merge-k-sorted-lists/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Reverse Nodes in k-Group', difficulty: 'Hard', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/', companies: ['Google', 'Meta'], frequency: 'Medium' }
    ],
    'Trees & Graphs': [
      { name: 'Binary Tree Inorder Traversal', difficulty: 'Easy', url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', companies: ['Meta', 'LinkedIn'], frequency: 'High' },
      { name: 'Same Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/same-tree/', companies: ['Google', 'Bloomberg'], frequency: 'Medium' },
      { name: 'Invert Binary Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/invert-binary-tree/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Diameter of Binary Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/diameter-of-binary-tree/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Validate Binary Search Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/validate-binary-search-tree/', companies: ['Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', companies: ['Google', 'Microsoft'], frequency: 'High' },
      { name: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Binary Tree Right Side View', difficulty: 'Medium', url: 'https://leetcode.com/problems/binary-tree-right-side-view/', companies: ['Meta', 'Amazon'], frequency: 'Medium' },
      { name: 'Course Schedule', difficulty: 'Medium', url: 'https://leetcode.com/problems/course-schedule/', companies: ['Google', 'Airbnb'], frequency: 'High' },
      { name: 'Number of Islands', difficulty: 'Medium', url: 'https://leetcode.com/problems/number-of-islands/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Clone Graph', difficulty: 'Medium', url: 'https://leetcode.com/problems/clone-graph/', companies: ['Meta', 'Google'], frequency: 'High' },
      { name: 'Pacific Atlantic Water Flow', difficulty: 'Medium', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Word Ladder', difficulty: 'Hard', url: 'https://leetcode.com/problems/word-ladder/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' }
    ],
    'Dynamic Programming': [
      { name: 'Climbing Stairs', difficulty: 'Easy', url: 'https://leetcode.com/problems/climbing-stairs/', companies: ['Google', 'Amazon'], frequency: 'High' },
      { name: 'Fibonacci Number', difficulty: 'Easy', url: 'https://leetcode.com/problems/fibonacci-number/', companies: ['Meta', 'Amazon'], frequency: 'Medium' },
      { name: 'House Robber', difficulty: 'Medium', url: 'https://leetcode.com/problems/house-robber/', companies: ['Airbnb', 'LinkedIn'], frequency: 'High' },
      { name: 'Coin Change', difficulty: 'Medium', url: 'https://leetcode.com/problems/coin-change/', companies: ['Google', 'Uber'], frequency: 'Very High' },
      { name: 'Longest Increasing Subsequence', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-increasing-subsequence/', companies: ['Google', 'Microsoft'], frequency: 'High' },
      { name: 'Maximum Subarray', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-subarray/', companies: ['Meta', 'LinkedIn'], frequency: 'High' },
      { name: 'Unique Paths', difficulty: 'Medium', url: 'https://leetcode.com/problems/unique-paths/', companies: ['Google', 'Amazon'], frequency: 'High' },
      { name: 'Jump Game', difficulty: 'Medium', url: 'https://leetcode.com/problems/jump-game/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'House Robber II', difficulty: 'Medium', url: 'https://leetcode.com/problems/house-robber-ii/', companies: ['Google', 'Microsoft'], frequency: 'Medium' },
      { name: 'Decode Ways', difficulty: 'Medium', url: 'https://leetcode.com/problems/decode-ways/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Word Break', difficulty: 'Medium', url: 'https://leetcode.com/problems/word-break/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Edit Distance', difficulty: 'Hard', url: 'https://leetcode.com/problems/edit-distance/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Best Time to Buy and Sell Stock with Cooldown', difficulty: 'Medium', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/', companies: ['Google', 'Amazon'], frequency: 'Medium' }
    ],
    'Two Pointers': [
      { name: 'Valid Palindrome', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-palindrome/', companies: ['Meta', 'Microsoft'], frequency: 'High' },
      { name: 'Two Sum II - Input Array Is Sorted', difficulty: 'Medium', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/', companies: ['Amazon', 'Google'], frequency: 'Medium' },
      { name: 'Three Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/3sum/', companies: ['Meta', 'Google', 'Amazon'], frequency: 'Very High' },
      { name: 'Container With Most Water', difficulty: 'Medium', url: 'https://leetcode.com/problems/container-with-most-water/', companies: ['Google', 'Amazon'], frequency: 'High' },
      { name: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', companies: ['Meta', 'Google'], frequency: 'Medium' },
      { name: 'Trapping Rain Water', difficulty: 'Hard', url: 'https://leetcode.com/problems/trapping-rain-water/', companies: ['Google', 'Apple'], frequency: 'Medium' }
    ],
    'Sliding Window': [
      { name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', companies: ['Meta', 'Google'], frequency: 'Very High' },
      { name: 'Longest Repeating Character Replacement', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-repeating-character-replacement/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Permutation in String', difficulty: 'Medium', url: 'https://leetcode.com/problems/permutation-in-string/', companies: ['Meta', 'Microsoft'], frequency: 'Medium' },
      { name: 'Minimum Window Substring', difficulty: 'Hard', url: 'https://leetcode.com/problems/minimum-window-substring/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Sliding Window Maximum', difficulty: 'Hard', url: 'https://leetcode.com/problems/sliding-window-maximum/', companies: ['Google', 'Amazon'], frequency: 'Medium' }
    ],
    'Binary Search': [
      { name: 'Binary Search', difficulty: 'Easy', url: 'https://leetcode.com/problems/binary-search/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Find First and Last Position of Element in Sorted Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Search in Rotated Sorted Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Search a 2D Matrix', difficulty: 'Medium', url: 'https://leetcode.com/problems/search-a-2d-matrix/', companies: ['Google', 'Amazon'], frequency: 'Medium' },
      { name: 'Koko Eating Bananas', difficulty: 'Medium', url: 'https://leetcode.com/problems/koko-eating-bananas/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Find Peak Element', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-peak-element/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Median of Two Sorted Arrays', difficulty: 'Hard', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' }
    ],
    'Stack & Queue': [
      { name: 'Valid Parentheses', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-parentheses/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Min Stack', difficulty: 'Medium', url: 'https://leetcode.com/problems/min-stack/', companies: ['Google', 'Amazon'], frequency: 'High' },
      { name: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', companies: ['Meta', 'LinkedIn'], frequency: 'Medium' },
      { name: 'Generate Parentheses', difficulty: 'Medium', url: 'https://leetcode.com/problems/generate-parentheses/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Daily Temperatures', difficulty: 'Medium', url: 'https://leetcode.com/problems/daily-temperatures/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Car Fleet', difficulty: 'Medium', url: 'https://leetcode.com/problems/car-fleet/', companies: ['Google', 'Uber'], frequency: 'Medium' },
      { name: 'Largest Rectangle in Histogram', difficulty: 'Hard', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', companies: ['Google', 'Meta'], frequency: 'Medium' }
    ],
    'Heap / Priority Queue': [
      { name: 'Kth Largest Element in a Stream', difficulty: 'Easy', url: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/', companies: ['Google', 'Amazon'], frequency: 'Medium' },
      { name: 'Last Stone Weight', difficulty: 'Easy', url: 'https://leetcode.com/problems/last-stone-weight/', companies: ['Amazon', 'Google'], frequency: 'Medium' },
      { name: 'K Closest Points to Origin', difficulty: 'Medium', url: 'https://leetcode.com/problems/k-closest-points-to-origin/', companies: ['Meta', 'Amazon'], frequency: 'High' },
      { name: 'Kth Largest Element in an Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Task Scheduler', difficulty: 'Medium', url: 'https://leetcode.com/problems/task-scheduler/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Top K Frequent Elements', difficulty: 'Medium', url: 'https://leetcode.com/problems/top-k-frequent-elements/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Find Median from Data Stream', difficulty: 'Hard', url: 'https://leetcode.com/problems/find-median-from-data-stream/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' }
    ],
    'Backtracking': [
      { name: 'Subsets', difficulty: 'Medium', url: 'https://leetcode.com/problems/subsets/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Combination Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/combination-sum/', companies: ['Google', 'Airbnb'], frequency: 'High' },
      { name: 'Permutations', difficulty: 'Medium', url: 'https://leetcode.com/problems/permutations/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Subsets II', difficulty: 'Medium', url: 'https://leetcode.com/problems/subsets-ii/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Word Search', difficulty: 'Medium', url: 'https://leetcode.com/problems/word-search/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Palindrome Partitioning', difficulty: 'Medium', url: 'https://leetcode.com/problems/palindrome-partitioning/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Letter Combinations of a Phone Number', difficulty: 'Medium', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'N-Queens', difficulty: 'Hard', url: 'https://leetcode.com/problems/n-queens/', companies: ['Google', 'Meta'], frequency: 'Medium' }
    ],
    'Tries': [
      { name: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', url: 'https://leetcode.com/problems/implement-trie-prefix-tree/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Design Add and Search Words Data Structure', difficulty: 'Medium', url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Word Search II', difficulty: 'Hard', url: 'https://leetcode.com/problems/word-search-ii/', companies: ['Google', 'Meta'], frequency: 'High' }
    ],
    'Greedy': [
      { name: 'Maximum Subarray', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-subarray/', companies: ['Meta', 'LinkedIn'], frequency: 'High' },
      { name: 'Jump Game', difficulty: 'Medium', url: 'https://leetcode.com/problems/jump-game/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Jump Game II', difficulty: 'Medium', url: 'https://leetcode.com/problems/jump-game-ii/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Gas Station', difficulty: 'Medium', url: 'https://leetcode.com/problems/gas-station/', companies: ['Google', 'Amazon'], frequency: 'Medium' },
      { name: 'Hand of Straights', difficulty: 'Medium', url: 'https://leetcode.com/problems/hand-of-straights/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Merge Intervals', difficulty: 'Medium', url: 'https://leetcode.com/problems/merge-intervals/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Non-overlapping Intervals', difficulty: 'Medium', url: 'https://leetcode.com/problems/non-overlapping-intervals/', companies: ['Google', 'Meta'], frequency: 'Medium' }
    ],
    'Intervals': [
      { name: 'Insert Interval', difficulty: 'Medium', url: 'https://leetcode.com/problems/insert-interval/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Merge Intervals', difficulty: 'Medium', url: 'https://leetcode.com/problems/merge-intervals/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' },
      { name: 'Non-overlapping Intervals', difficulty: 'Medium', url: 'https://leetcode.com/problems/non-overlapping-intervals/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Meeting Rooms', difficulty: 'Easy', url: 'https://leetcode.com/problems/meeting-rooms/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Meeting Rooms II', difficulty: 'Medium', url: 'https://leetcode.com/problems/meeting-rooms-ii/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'Very High' }
    ],
    'Math & Geometry': [
      { name: 'Rotate Image', difficulty: 'Medium', url: 'https://leetcode.com/problems/rotate-image/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Spiral Matrix', difficulty: 'Medium', url: 'https://leetcode.com/problems/spiral-matrix/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Set Matrix Zeroes', difficulty: 'Medium', url: 'https://leetcode.com/problems/set-matrix-zeroes/', companies: ['Google', 'Meta', 'Amazon'], frequency: 'High' },
      { name: 'Happy Number', difficulty: 'Easy', url: 'https://leetcode.com/problems/happy-number/', companies: ['Google', 'Airbnb'], frequency: 'Medium' },
      { name: 'Plus One', difficulty: 'Easy', url: 'https://leetcode.com/problems/plus-one/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Pow(x, n)', difficulty: 'Medium', url: 'https://leetcode.com/problems/powx-n/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Multiply Strings', difficulty: 'Medium', url: 'https://leetcode.com/problems/multiply-strings/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Detect Squares', difficulty: 'Medium', url: 'https://leetcode.com/problems/detect-squares/', companies: ['Google', 'Meta'], frequency: 'Medium' }
    ],
    'Bit Manipulation': [
      { name: 'Single Number', difficulty: 'Easy', url: 'https://leetcode.com/problems/single-number/', companies: ['Google', 'Amazon'], frequency: 'High' },
      { name: 'Number of 1 Bits', difficulty: 'Easy', url: 'https://leetcode.com/problems/number-of-1-bits/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Counting Bits', difficulty: 'Easy', url: 'https://leetcode.com/problems/counting-bits/', companies: ['Google', 'Meta'], frequency: 'Medium' },
      { name: 'Reverse Bits', difficulty: 'Easy', url: 'https://leetcode.com/problems/reverse-bits/', companies: ['Google', 'Airbnb'], frequency: 'Medium' },
      { name: 'Missing Number', difficulty: 'Easy', url: 'https://leetcode.com/problems/missing-number/', companies: ['Google', 'Meta'], frequency: 'High' },
      { name: 'Sum of Two Integers', difficulty: 'Medium', url: 'https://leetcode.com/problems/sum-of-two-integers/', companies: ['Google', 'Meta'], frequency: 'Medium' }
    ]
  };

  const internshipPlatforms = [
    {
      name: 'Simplify',
      url: 'https://simplify.jobs/',
      description: 'One-click apply to hundreds of internships, track applications',
      type: 'Application Platform'
    },
    {
      name: 'GitHub Student Pack',
      url: 'https://education.github.com/pack',
      description: 'Free developer tools, hosting, and resources for students',
      type: 'Student Resources'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/jobs/',
      description: 'Professional network with internship opportunities',
      type: 'Job Board'
    },
    {
      name: 'Handshake',
      url: 'https://joinhandshake.com/',
      description: 'University career platform with exclusive student opportunities',
      type: 'University Platform'
    },
    {
      name: 'AngelList (Wellfound)',
      url: 'https://wellfound.com/',
      description: 'Startup internships and entry-level positions',
      type: 'Startup Platform'
    },
    {
      name: 'Indeed',
      url: 'https://indeed.com/',
      description: 'Large job board with internship filters',
      type: 'Job Board'
    }
  ];

  const systemDesignTopics = [
    {
      topic: "Scalability Basics",
      description: "Understanding horizontal vs vertical scaling, load distribution",
      resources: [
        { title: "Scalability for Dummies", url: "https://www.lecloud.net/tagged/scalability", type: "Article Series" },
        { title: "Harvard CS75 - Scalability", url: "https://www.youtube.com/watch?v=-W9F__D3oY4", type: "Video" },
        { title: "System Design Primer - Scalability", url: "https://github.com/donnemartin/system-design-primer#scalability", type: "GitHub" }
      ]
    },
    {
      topic: "Load Balancing",
      description: "Distributing incoming requests across multiple servers",
      resources: [
        { title: "What is Load Balancing?", url: "https://aws.amazon.com/what-is/load-balancing/", type: "AWS Guide" },
        { title: "Load Balancer Types", url: "https://www.nginx.com/resources/glossary/load-balancing/", type: "NGINX Guide" },
        { title: "Load Balancing Algorithms", url: "https://kemptechnologies.com/in/load-balancer/load-balancing-algorithms-techniques/", type: "Article" }
      ]
    },
    {
      topic: "Database Design",
      description: "SQL vs NoSQL, database partitioning, replication strategies",
      resources: [
        { title: "Database Design Course", url: "https://www.coursera.org/learn/database-design", type: "Course" },
        { title: "SQL vs NoSQL", url: "https://www.mongodb.com/nosql-explained/nosql-vs-sql", type: "MongoDB Guide" },
        { title: "Database Sharding", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding", type: "Tutorial" }
      ]
    },
    {
      topic: "Caching Strategies",
      description: "In-memory caching, CDN, cache invalidation patterns",
      resources: [
        { title: "Caching Best Practices", url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cache-hit-ratio.html", type: "AWS Guide" },
        { title: "Redis Caching Patterns", url: "https://redis.io/docs/manual/patterns/", type: "Redis Docs" },
        { title: "Cache Aside vs Write Through", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside", type: "Microsoft Docs" }
      ]
    },
    {
      topic: "Microservices Architecture",
      description: "Service decomposition, API gateways, service discovery",
      resources: [
        { title: "Microservices.io Patterns", url: "https://microservices.io/patterns/", type: "Pattern Catalog" },
        { title: "Building Microservices", url: "https://www.nginx.com/blog/introduction-to-microservices/", type: "NGINX Series" },
        { title: "Martin Fowler - Microservices", url: "https://martinfowler.com/articles/microservices.html", type: "Article" }
      ]
    },
    {
      topic: "Message Queues",
      description: "Asynchronous communication, pub/sub patterns, event streaming",
      resources: [
        { title: "Message Queue Patterns", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/", type: "Pattern Guide" },
        { title: "Apache Kafka Intro", url: "https://kafka.apache.org/intro", type: "Official Docs" },
        { title: "RabbitMQ Tutorial", url: "https://www.rabbitmq.com/getstarted.html", type: "Tutorial" }
      ]
    },
    {
      topic: "API Design",
      description: "RESTful APIs, GraphQL, API versioning, rate limiting",
      resources: [
        { title: "REST API Design Guide", url: "https://restfulapi.net/", type: "Guide" },
        { title: "GraphQL Best Practices", url: "https://graphql.org/learn/best-practices/", type: "GraphQL Docs" },
        { title: "API Design Patterns", url: "https://swagger.io/resources/articles/best-practices-in-api-design/", type: "Swagger Guide" }
      ]
    },
    {
      topic: "CDN and Storage",
      description: "Content delivery networks, object storage, file systems",
      resources: [
        { title: "How CDNs Work", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/", type: "Cloudflare Guide" },
        { title: "AWS S3 Best Practices", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html", type: "AWS Docs" },
        { title: "Distributed File Systems", url: "https://www.geeksforgeeks.org/distributed-file-system/", type: "GeeksforGeeks" }
      ]
    },
    {
      topic: "Security Considerations",
      description: "Authentication, authorization, encryption, security best practices",
      resources: [
        { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", type: "Security Guide" },
        { title: "OAuth 2.0 Guide", url: "https://auth0.com/intro-to-iam/what-is-oauth-2/", type: "Auth0 Guide" },
        { title: "JWT Best Practices", url: "https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/", type: "Auth0 Blog" }
      ]
    },
    {
      topic: "Monitoring and Logging",
      description: "Application monitoring, distributed tracing, log aggregation",
      resources: [
        { title: "Observability Engineering", url: "https://www.honeycomb.io/what-is-observability/", type: "Honeycomb Guide" },
        { title: "Distributed Tracing", url: "https://opentracing.io/docs/overview/what-is-tracing/", type: "OpenTracing" },
        { title: "ELK Stack Tutorial", url: "https://www.elastic.co/what-is/elk-stack", type: "Elastic Guide" }
      ]
    },
    {
      topic: "Consistency Patterns",
      description: "CAP theorem, eventual consistency, distributed consensus",
      resources: [
        { title: "CAP Theorem Explained", url: "https://www.ibm.com/cloud/learn/cap-theorem", type: "IBM Guide" },
        { title: "Consistency Patterns", url: "https://systemsdesign.cloud/SystemDesign/ConsistencyPatterns", type: "Systems Design" },
        { title: "Distributed Consensus", url: "https://raft.github.io/", type: "Raft Algorithm" }
      ]
    },
    {
      topic: "Data Processing",
      description: "Batch processing, stream processing, ETL pipelines",
      resources: [
        { title: "Batch vs Stream Processing", url: "https://hazelcast.com/glossary/stream-processing/", type: "Hazelcast Guide" },
        { title: "Apache Spark Guide", url: "https://spark.apache.org/docs/latest/", type: "Official Docs" },
        { title: "Data Pipeline Patterns", url: "https://www.oreilly.com/library/view/data-pipelines-pocket/9781492087823/", type: "O'Reilly" }
      ]
    }
  ];

  const behavioralQuestions = [
    {
      question: "Tell me about yourself",
      category: "Introduction",
      template: {
        situation: "Start with your current status (student, recent graduate, etc.)",
        task: "Mention your major/field of study and key interests",
        action: "Highlight 2-3 relevant experiences or projects",
        result: "Connect to why you're interested in this role/company"
      },
      sampleAnswer: "I'm a computer science student at [University] with a passion for building scalable web applications. Through my coursework and personal projects, I've developed strong skills in full-stack development using React, Node.js, and PostgreSQL. Last summer, I interned at a startup where I built a user dashboard that improved customer engagement by 25%. I'm particularly drawn to [Company] because of your focus on innovative technology solutions and the opportunity to work on products that impact millions of users.",
      tips: [
        "Keep it to 60-90 seconds",
        "Focus on professional experiences relevant to the role",
        "End with why you're interested in this specific opportunity",
        "Practice until it sounds natural, not rehearsed"
      ]
    },
    {
      question: "Why do you want to work here?",
      category: "Motivation",
      template: {
        situation: "Reference specific aspects of the company's mission, products, or culture",
        task: "Explain what attracts you to the role and team",
        action: "Connect your skills and interests to the company's needs",
        result: "Show how this aligns with your career goals"
      },
      sampleAnswer: "I'm excited about [Company] because you're at the forefront of [specific technology/industry]. I've been following your work on [specific product/initiative] and I'm impressed by how you're solving [specific problem]. As someone who's passionate about [relevant area], I'd love to contribute to your mission of [company mission]. The opportunity to work with cutting-edge technology while making a real impact on users' lives is exactly what I'm looking for in my career.",
      tips: [
        "Research the company thoroughly beforehand",
        "Mention specific products, initiatives, or values",
        "Avoid generic answers about 'great company culture'",
        "Show genuine enthusiasm and knowledge"
      ]
    },
    {
      question: "Describe a challenging project you worked on",
      category: "Problem Solving",
      template: {
        situation: "Set the context - what was the project and why was it challenging?",
        task: "What was your specific role and what needed to be accomplished?",
        action: "Detail the steps you took to overcome the challenges",
        result: "Quantify the outcome and what you learned"
      },
      sampleAnswer: "During my web development course, I was tasked with building a real-time chat application for our final project. The challenge was implementing WebSocket connections while ensuring message persistence and handling multiple concurrent users. I spent time researching different approaches, ultimately choosing Socket.io for real-time communication and MongoDB for message storage. I also implemented user authentication and message encryption for security. The final application successfully handled 50+ concurrent users during our class demo, and I received the highest grade in the class. This project taught me the importance of thorough research and planning when working with new technologies.",
      tips: [
        "Choose a project that demonstrates relevant technical skills",
        "Focus on your individual contributions, not team achievements",
        "Explain your thought process and decision-making",
        "Quantify results when possible"
      ]
    },
    {
      question: "How do you handle conflict in a team?",
      category: "Teamwork",
      template: {
        situation: "Describe a specific conflict situation you encountered",
        task: "Explain what needed to be resolved and your role",
        action: "Detail the steps you took to address the conflict",
        result: "Share the outcome and what you learned about collaboration"
      },
      sampleAnswer: "In a group project for my software engineering class, two team members had different approaches to implementing a key feature - one wanted to use a third-party library while the other preferred building it from scratch. This disagreement was causing delays and tension. I organized a team meeting where I facilitated a discussion comparing both approaches, considering factors like development time, maintainability, and learning objectives. We created a pros/cons list together and ultimately decided to prototype both solutions quickly to test feasibility. This collaborative approach not only resolved the conflict but led to a hybrid solution that was better than either original proposal. The project was completed on time and our team dynamic improved significantly.",
      tips: [
        "Show that you can remain objective and professional",
        "Demonstrate active listening and empathy",
        "Focus on finding win-win solutions",
        "Highlight your communication and mediation skills"
      ]
    },
    {
      question: "Tell me about a time you failed",
      category: "Growth Mindset",
      template: {
        situation: "Describe the failure honestly and specifically",
        task: "Explain what you were trying to achieve",
        action: "Detail what went wrong and how you responded",
        result: "Focus on what you learned and how you've improved"
      },
      sampleAnswer: "In my first hackathon, I was overly ambitious and tried to build a complex machine learning application in 24 hours without prior ML experience. I spent most of the time struggling with data preprocessing and model training, and ended up with a barely functional prototype that I was embarrassed to present. I realized I had poor time management and didn't play to my strengths. Since then, I've approached projects more strategically - I now break down complex problems into smaller, manageable tasks and always have a minimum viable product as a backup plan. This approach helped me win second place in the next hackathon I participated in.",
      tips: [
        "Choose a real failure, not a disguised strength",
        "Take full responsibility without blaming others",
        "Focus heavily on the learning and improvement",
        "Show how the failure led to positive changes in your approach"
      ]
    },
    {
      question: "Where do you see yourself in 5 years?",
      category: "Career Goals",
      template: {
        situation: "Acknowledge that plans can change while showing you've thought about your future",
        task: "Describe your professional growth aspirations",
        action: "Connect your goals to potential growth at this company",
        result: "Show how this role fits into your career trajectory"
      },
      sampleAnswer: "In five years, I see myself having grown into a senior software engineer role where I'm not only contributing high-quality code but also mentoring junior developers and helping shape technical decisions. I'd love to have deep expertise in distributed systems and cloud architecture, areas that I know are important at [Company]. I also hope to have led a few major projects from conception to deployment. While I know plans can evolve, I'm excited about the possibility of growing my career here and contributing to [Company]'s mission of [specific mission] throughout that journey.",
      tips: [
        "Show ambition but be realistic",
        "Align your goals with the company's growth opportunities",
        "Demonstrate that you plan to stay and grow with the company",
        "Avoid mentioning other companies or completely different career paths"
      ]
    },
    {
      question: "Describe your ideal work environment",
      category: "Culture Fit",
      template: {
        situation: "Reference elements of collaborative and productive work environments",
        task: "Mention what helps you perform your best work",
        action: "Connect these preferences to what you know about the company",
        result: "Show how you can thrive in their specific environment"
      },
      sampleAnswer: "My ideal work environment is collaborative but also allows for focused individual work when needed. I thrive in places where there's open communication, regular feedback, and opportunities to learn from experienced team members. I appreciate when teams use modern development practices like code reviews and agile methodologies. From what I've learned about [Company], your emphasis on engineering excellence and collaborative culture seems like a perfect fit. I'm particularly excited about your mentorship programs and the opportunity to work with diverse, talented teams.",
      tips: [
        "Research the company's actual work environment and culture",
        "Mention specific practices or values that align with the company",
        "Show flexibility and adaptability",
        "Avoid being too specific about physical workspace preferences"
      ]
    },
    {
      question: "How do you prioritize tasks when everything seems urgent?",
      category: "Time Management",
      template: {
        situation: "Describe a specific scenario where you faced competing priorities",
        task: "Explain the different demands on your time",
        action: "Detail your prioritization process and decision-making",
        result: "Share the outcome and any frameworks you now use"
      },
      sampleAnswer: "During finals week last semester, I had three major projects due, a part-time job, and a family commitment all happening simultaneously. I started by listing all tasks and their true deadlines, then categorized them by impact and urgency using the Eisenhower Matrix. I also estimated the time needed for each task. I communicated proactively with my professors about my timeline and negotiated a small extension on one project that had flexibility. I blocked time for focused work on high-priority items and used time-boxing to avoid perfectionism. All projects were completed successfully, and I learned the importance of early communication and systematic prioritization.",
      tips: [
        "Show a systematic approach to prioritization",
        "Mention specific frameworks or methods you use",
        "Demonstrate proactive communication skills",
        "Show that you can make tough decisions when needed"
      ]
    },
    {
      question: "Tell me about a time you learned something new quickly",
      category: "Learning Ability",
      template: {
        situation: "Describe when you needed to learn a new skill or technology rapidly",
        task: "Explain why quick learning was necessary",
        action: "Detail your learning approach and resources used",
        result: "Quantify how quickly you learned and applied the knowledge"
      },
      sampleAnswer: "When I joined a group project that was already using React, I had only worked with vanilla JavaScript before and needed to contribute meaningfully within a week. I created a structured learning plan: I spent the first two days going through React's official tutorial and documentation, then built a small personal project to practice the concepts. I also found a team member who was willing to answer questions and review my code. By day 5, I was contributing components to our main project. By the end of the two-week sprint, I had implemented three major features and was comfortable with React hooks and state management. This experience taught me that combining multiple learning methods - documentation, hands-on practice, and mentorship - accelerates the learning process.",
      tips: [
        "Choose an example that shows structured learning approach",
        "Mention specific resources and methods you used",
        "Show how you applied the knowledge practically",
        "Demonstrate that you can learn independently but also seek help when needed"
      ]
    },
    {
      question: "Describe a time you had to work with someone whose communication style was very different from yours",
      category: "Communication",
      template: {
        situation: "Set up the context of working with someone with different communication preferences",
        task: "Explain what needed to be accomplished together",
        action: "Detail how you adapted your communication approach",
        result: "Share how this improved the working relationship and project outcome"
      },
      sampleAnswer: "I was paired with a classmate for a database design project who preferred very detailed, formal written communication while I tend to be more informal and prefer quick verbal check-ins. Initially, our different styles caused some confusion and delays. I realized I needed to adapt my approach to work effectively with them. I started sending more structured emails with clear agenda items before our meetings and followed up with written summaries of our decisions. I also made sure to give them time to process information before expecting responses. This adjustment improved our collaboration significantly - we completed the project ahead of schedule and both felt heard and respected. I learned that effective teamwork requires adapting to others' communication preferences, not expecting them to adapt to mine.",
      tips: [
        "Show emotional intelligence and adaptability",
        "Demonstrate that you can work with diverse personality types",
        "Focus on mutual respect and finding common ground",
        "Show that you learned something valuable about communication"
      ]
    }
  ];

  const interviewTips = [
    {
      category: "Before the Interview",
      tips: [
        "Research the company thoroughly",
        "Review your resume and be ready to discuss each experience",
        "Practice coding problems daily for 2-3 weeks",
        "Prepare questions to ask the interviewer",
        "Set up your coding environment"
      ]
    },
    {
      category: "During Technical Interviews",
      tips: [
        "Think out loud and explain your approach",
        "Ask clarifying questions about the problem",
        "Start with a brute force solution if needed",
        "Test your code with examples",
        "Discuss time and space complexity"
      ]
    },
    {
      category: "During Behavioral Interviews",
      tips: [
        "Use the STAR method (Situation, Task, Action, Result)",
        "Be specific and provide concrete examples",
        "Show your impact with numbers when possible",
        "Demonstrate growth mindset and learning ability",
        "Ask thoughtful questions about the role and team"
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'error';
      default: return 'default';
    }
  };

  const getFilteredResources = (type: string) => {
    return resources.filter(resource => resource.type === type);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ 
        mb: 6, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 4,
        py: 6,
        px: 3,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          borderRadius: 4,
        }
      }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ 
            fontWeight: 700, 
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 2
          }}>
            🚀 Interview Preparation Hub
          </Typography>
          <Typography variant="h5" sx={{ 
            opacity: 0.95,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.3rem' }
          }}>
            Master technical interviews with comprehensive resources, practice problems, and expert guidance
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip 
              label="🎯 Interview Ready" 
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 'bold'
              }} 
            />
            <Chip 
              label="💪 Practice Daily" 
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 'bold'
              }} 
            />
            <Chip 
              label="📈 Track Progress" 
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 'bold'
              }} 
            />
          </Box>
        </Box>
      </Box>

      {/* Quick Stats */}
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)'
        },
        gap: 3,
        mb: 6
      }}>
        <Card sx={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          transform: 'scale(1)',
          transition: 'all 0.3s ease',
          '&:hover': { 
            transform: 'scale(1.05)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
          }
        }}>
          <CardContent sx={{ textAlign: 'center', py: 3 }}>
            <Code sx={{ fontSize: 50, mb: 2, opacity: 0.9 }} />
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
              500+
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Coding Problems
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ 
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          transform: 'scale(1)',
          transition: 'all 0.3s ease',
          '&:hover': { 
            transform: 'scale(1.05)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
          }
        }}>
          <CardContent sx={{ textAlign: 'center', py: 3 }}>
            <Architecture sx={{ fontSize: 50, mb: 2, opacity: 0.9 }} />
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
              50+
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              System Design Cases
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ 
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: 'white',
          transform: 'scale(1)',
          transition: 'all 0.3s ease',
          '&:hover': { 
            transform: 'scale(1.05)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
          }
        }}>
          <CardContent sx={{ textAlign: 'center', py: 3 }}>
            <Psychology sx={{ fontSize: 50, mb: 2, opacity: 0.9 }} />
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
              100+
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Behavioral Questions
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ 
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          color: 'white',
          transform: 'scale(1)',
          transition: 'all 0.3s ease',
          '&:hover': { 
            transform: 'scale(1.05)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
          }
        }}>
          <CardContent sx={{ textAlign: 'center', py: 3 }}>
            <Quiz sx={{ fontSize: 50, mb: 2, opacity: 0.9 }} />
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
              25+
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Mock Interviews
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Main Content Tabs */}
      <Card sx={{ 
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <Box sx={{ 
          background: 'linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)',
          borderBottom: 1, 
          borderColor: 'divider' 
        }}>
          <Tabs 
            value={tabValue} 
            onChange={(e, newValue) => setTabValue(newValue)}
            aria-label="interview preparation tabs"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                minHeight: 72,
                fontWeight: 600,
                fontSize: '0.95rem',
                textTransform: 'none',
                color: '#6c757d',
                '&.Mui-selected': {
                  color: '#495057',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                  backgroundClip: 'text'
                }
              },
              '& .MuiTabs-indicator': {
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }
            }}
          >
            <Tab 
              label="🧩 LeetCode Problems" 
              icon={<Code />} 
              iconPosition="start"
              sx={{ gap: 1 }}
            />
            <Tab 
              label="📚 Study Resources" 
              icon={<Quiz />} 
              iconPosition="start"
              sx={{ gap: 1 }}
            />
            <Tab 
              label="🏗️ System Design" 
              icon={<Architecture />} 
              iconPosition="start"
              sx={{ gap: 1 }}
            />
            <Tab 
              label="💬 Behavioral Prep" 
              icon={<Psychology />} 
              iconPosition="start"
              sx={{ gap: 1 }}
            />
            <Tab 
              label="🔗 Platforms" 
              icon={<Work />} 
              iconPosition="start"
              sx={{ gap: 1 }}
            />
            <Tab 
              label="💡 Tips & Strategy" 
              icon={<Timeline />} 
              iconPosition="start"
              sx={{ gap: 1 }}
            />
          </Tabs>
        </Box>

        {/* LeetCode Problems Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              backgroundClip: 'text',
              mb: 2
            }}>
              🧩 Essential LeetCode Problems by Topic
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
              Curated problems frequently asked at Google, Meta, Amazon, and other top tech companies for internships
            </Typography>

            {/* Quick Progress Stats */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 2,
              mb: 4,
              p: 3,
              backgroundColor: '#f8f9fa',
              borderRadius: 2,
              border: '1px solid #e9ecef'
            }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" color="primary">
                  150+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Problems
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" color="success.main">
                  15
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Topic Categories
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" color="warning.main">
                  3-6 months
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Recommended Practice
                </Typography>
              </Box>
            </Box>
          </Box>

          {Object.entries(leetcodeProblems).map(([topic, problems]) => (
            <Accordion 
              key={topic} 
              sx={{ 
                mb: 2,
                borderRadius: '12px !important',
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                '&:before': { display: 'none' },
                '&.Mui-expanded': {
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                  transform: 'scale(1.01)'
                }
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMore />}
                sx={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  '&.Mui-expanded': {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}>
                    {topic}
                  </Typography>
                  <Chip 
                    label={`${problems.length} problems`}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#fcfcfd' }}>
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    md: 'repeat(2, 1fr)'
                  },
                  gap: 3,
                  p: 2
                }}>
                  {problems.map((problem, index) => (
                    <Card 
                      key={index} 
                      variant="outlined"
                      sx={{
                        borderRadius: 2,
                        border: '1px solid #e9ecef',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor: '#667eea',
                          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.15)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <CardContent sx={{ pb: 2 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                          <Typography 
                            variant="subtitle1" 
                            fontWeight="bold"
                            sx={{ 
                              color: '#2d3748',
                              lineHeight: 1.4,
                              fontSize: '1.1rem'
                            }}
                          >
                            {problem.name}
                          </Typography>
                          <Box display="flex" gap={1} flexDirection="column" alignItems="flex-end">
                            <Chip 
                              label={problem.frequency} 
                              size="small"
                              sx={{
                                fontWeight: 'bold',
                                ...(problem.frequency === 'Very High' && {
                                  backgroundColor: '#fee2e2',
                                  color: '#dc2626',
                                  border: '1px solid #fecaca'
                                }),
                                ...(problem.frequency === 'High' && {
                                  backgroundColor: '#fef3c7',
                                  color: '#d97706',
                                  border: '1px solid #fde68a'
                                }),
                                ...(problem.frequency === 'Medium' && {
                                  backgroundColor: '#dbeafe',
                                  color: '#2563eb',
                                  border: '1px solid #bfdbfe'
                                })
                              }}
                            />
                            <Chip 
                              label={problem.difficulty} 
                              size="small"
                              variant="outlined"
                              sx={{
                                fontWeight: 'bold',
                                ...(problem.difficulty === 'Easy' && {
                                  borderColor: '#10b981',
                                  color: '#10b981'
                                }),
                                ...(problem.difficulty === 'Medium' && {
                                  borderColor: '#f59e0b',
                                  color: '#f59e0b'
                                }),
                                ...(problem.difficulty === 'Hard' && {
                                  borderColor: '#ef4444',
                                  color: '#ef4444'
                                })
                              }}
                            />
                          </Box>
                        </Box>
                        <Box display="flex" gap={1} flexWrap="wrap" mt={2}>
                          {problem.companies.map(company => (
                            <Chip 
                              key={company} 
                              label={company} 
                              size="small" 
                              variant="outlined"
                              sx={{
                                fontSize: '0.75rem',
                                height: '24px',
                                borderColor: '#e5e7eb',
                                color: '#6b7280',
                                backgroundColor: '#f9fafb',
                                '&:hover': {
                                  borderColor: '#667eea',
                                  backgroundColor: '#eef2ff'
                                }
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Button 
                          size="small" 
                          href={problem.url} 
                          target="_blank"
                          startIcon={<PlayArrow />}
                        >
                          Solve Problem
                        </Button>
                      </CardActions>
                    </Card>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </TabPanel>

        {/* Coding Practice Tab - Now merged with LeetCode */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom>
            LeetCode Study Plan & Practice Resources
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Follow this structured approach to master coding interviews at top tech companies
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              📚 Recommended Study Plan (8-12 weeks)
            </Typography>
            <Card sx={{ p: 3, mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Week 1-2: Foundation Building
              </Typography>
              <Typography variant="body2" paragraph>
                Focus on Arrays & Strings, Two Pointers. Aim for 2-3 Easy problems daily.
              </Typography>
              
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Week 3-4: Core Data Structures
              </Typography>
              <Typography variant="body2" paragraph>
                Master Linked Lists, Stack & Queue, Binary Search. Mix Easy and Medium problems.
              </Typography>
              
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Week 5-6: Advanced Structures
              </Typography>
              <Typography variant="body2" paragraph>
                Dive into Trees & Graphs, Heap/Priority Queue. Focus on Medium problems.
              </Typography>
              
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Week 7-8: Algorithmic Patterns
              </Typography>
              <Typography variant="body2" paragraph>
                Dynamic Programming, Backtracking, Sliding Window. Tackle Medium to Hard problems.
              </Typography>
              
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Week 9-12: Company-Specific Practice
              </Typography>
              <Typography variant="body2" paragraph>
                Focus on problems frequently asked by your target companies. Mock interviews.
              </Typography>
            </Card>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              🎯 Essential Coding Resources
            </Typography>
            <List>
              {getFilteredResources('coding').map((resource, index) => (
                <ListItem key={index} divider>
                  <ListItemIcon>
                    <Launch />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </Link>
                        <Chip
                          label={resource.difficulty}
                          size="small"
                          color={getDifficultyColor(resource.difficulty) as any}
                        />
                      </Box>
                    }
                    secondary={resource.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ 
            mb: 4,
            p: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 3,
            color: 'white'
          }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              💡 Pro Tips for LeetCode Success
            </Typography>
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)'
              },
              gap: 3
            }}>
              <Card sx={{ 
                p: 3,
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#2d3748' }}>
                  📝 Problem-Solving Approach
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon><CheckCircle sx={{ color: '#10b981' }} fontSize="small" /></ListItemIcon>
                    <ListItemText 
                      primary="Read problem 2-3 times carefully" 
                      sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon><CheckCircle sx={{ color: '#10b981' }} fontSize="small" /></ListItemIcon>
                    <ListItemText 
                      primary="Trace through examples manually" 
                      sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon><CheckCircle sx={{ color: '#10b981' }} fontSize="small" /></ListItemIcon>
                    <ListItemText 
                      primary="Think of brute force solution first" 
                      sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon><CheckCircle sx={{ color: '#10b981' }} fontSize="small" /></ListItemIcon>
                    <ListItemText 
                      primary="Optimize step by step" 
                      sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                    />
                  </ListItem>
                </List>
              </Card>
              
              <Card sx={{ 
                p: 3,
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#2d3748' }}>
                  🎯 Interview Simulation
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon><CheckCircle sx={{ color: '#10b981' }} fontSize="small" /></ListItemIcon>
                    <ListItemText 
                      primary="Practice on whiteboard/paper" 
                      sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon><CheckCircle sx={{ color: '#10b981' }} fontSize="small" /></ListItemIcon>
                    <ListItemText 
                      primary="Explain your thought process aloud" 
                      sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon><CheckCircle sx={{ color: '#10b981' }} fontSize="small" /></ListItemIcon>
                    <ListItemText 
                      primary="Time yourself (45 minutes max)" 
                      sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon><CheckCircle sx={{ color: '#10b981' }} fontSize="small" /></ListItemIcon>
                    <ListItemText 
                      primary="Discuss time/space complexity" 
                      sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                    />
                  </ListItem>
                </List>
              </Card>
            </Box>
          </Box>
        </TabPanel>

        {/* System Design Tab */}
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              backgroundClip: 'text',
              mb: 2
            }}>
              🏗️ System Design Topics
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
              Learn to design scalable and reliable systems with comprehensive resources and practical examples
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)'
            },
            gap: 3,
            mb: 4
          }}>
            {systemDesignTopics.map((topicObj, index) => (
              <Card 
                key={index} 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 3,
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                    borderColor: '#667eea'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Architecture sx={{ color: '#667eea', fontSize: 28 }} />
                    <Typography variant="h6" fontWeight="bold" sx={{ color: '#2d3748' }}>
                      {topicObj.topic}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
                    {topicObj.description}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ color: '#4a5568', mb: 2 }}>
                      📚 Resources:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {topicObj.resources.map((resource, resourceIndex) => (
                        <Box 
                          key={resourceIndex}
                          sx={{
                            p: 2,
                            backgroundColor: '#f7fafc',
                            borderRadius: 2,
                            border: '1px solid #e2e8f0',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              backgroundColor: '#edf2f7',
                              borderColor: '#667eea'
                            }
                          }}
                        >
                          <Link 
                            href={resource.url} 
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              textDecoration: 'none',
                              color: '#2d3748',
                              fontWeight: 600,
                              fontSize: '0.9rem',
                              '&:hover': {
                                color: '#667eea'
                              }
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                              <Typography variant="body2" fontWeight="medium" sx={{ flexGrow: 1 }}>
                                {resource.title}
                              </Typography>
                              <Chip 
                                label={resource.type} 
                                size="small" 
                                variant="outlined"
                                sx={{ fontSize: '0.7rem' }}
                              />
                              <OpenInNew sx={{ fontSize: 16, color: '#667eea' }} />
                            </Box>
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              System Design Resources
            </Typography>
            <List>
              {getFilteredResources('system-design').map((resource, index) => (
                <ListItem key={index} divider>
                  <ListItemIcon>
                    <Launch />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </Link>
                        <Chip
                          label={resource.difficulty}
                          size="small"
                          color={getDifficultyColor(resource.difficulty) as any}
                        />
                      </Box>
                    }
                    secondary={resource.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </TabPanel>

        {/* Behavioral Prep Tab */}
        <TabPanel value={tabValue} index={3}>
          <Typography variant="h6" gutterBottom>
            Common Behavioral Questions with STAR Templates
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Use the STAR method (Situation, Task, Action, Result) to structure your answers effectively
          </Typography>

          {behavioralQuestions.map((questionObj, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}>
                    {questionObj.question}
                  </Typography>
                  <Chip 
                    label={questionObj.category} 
                    size="small" 
                    variant="outlined"
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    STAR Method Template:
                  </Typography>
                  <Box sx={{ pl: 2 }}>
                    <Typography variant="body2" paragraph>
                      <strong>Situation:</strong> {questionObj.template.situation}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      <strong>Task:</strong> {questionObj.template.task}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      <strong>Action:</strong> {questionObj.template.action}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      <strong>Result:</strong> {questionObj.template.result}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Sample Answer:
                  </Typography>
                  <Typography variant="body2" style={{ fontStyle: 'italic' }}>
                    "{questionObj.sampleAnswer}"
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Key Tips:
                  </Typography>
                  <List dense>
                    {questionObj.tips.map((tip, tipIndex) => (
                      <ListItem key={tipIndex}>
                        <ListItemIcon>
                          <CheckCircle color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={tip} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Behavioral Interview Resources
            </Typography>
            <List>
              {getFilteredResources('behavioral').map((resource, index) => (
                <ListItem key={index} divider>
                  <ListItemIcon>
                    <Launch />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </Link>
                        <Chip
                          label={resource.difficulty}
                          size="small"
                          color={getDifficultyColor(resource.difficulty) as any}
                        />
                      </Box>
                    }
                    secondary={resource.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </TabPanel>

        {/* Platforms Tab */}
        <TabPanel value={tabValue} index={4}>
          <Typography variant="h6" gutterBottom>
            Internship Application Platforms
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Essential platforms and tools for finding and applying to internships
          </Typography>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 3,
            mb: 4
          }}>
            {internshipPlatforms.map((platform, index) => (
              <Card key={index} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {platform.name}
                  </Typography>
                  <Chip 
                    label={platform.type} 
                    size="small" 
                    sx={{ mb: 2 }}
                    variant="outlined"
                  />
                  <Typography variant="body2" color="text.secondary">
                    {platform.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    href={platform.url} 
                    target="_blank"
                    endIcon={<OpenInNew />}
                    fullWidth
                    variant="outlined"
                  >
                    Visit Platform
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </TabPanel>

        {/* Resources Tab - Now index 5 */}
        <TabPanel value={tabValue} index={5}>
          <Typography variant="h6" gutterBottom>
            Interview Tips & Strategy
          </Typography>
          
          {interviewTips.map((section, sectionIndex) => (
            <Accordion key={sectionIndex} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">{section.category}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {section.tips.map((tip, tipIndex) => (
                    <ListItem key={tipIndex}>
                      <ListItemIcon>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={tip} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              All Interview Resources
            </Typography>
            <List>
              {resources.map((resource, index) => (
                <ListItem key={index} divider>
                  <ListItemIcon>
                    <Launch />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </Link>
                        <Chip
                          label={resource.difficulty}
                          size="small"
                          color={getDifficultyColor(resource.difficulty) as any}
                        />
                        <Chip
                          label={resource.type}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    }
                    secondary={resource.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </TabPanel>
      </Card>
    </Container>
  );
};

export default Interview;
