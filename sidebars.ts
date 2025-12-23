import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Math Functions',
      collapsed: true,
      items: [
        'functions/math/sum',
        'functions/math/average',
        'functions/math/COUNT',
        'functions/math/COUNTA',
        'functions/math/MIN',
        'functions/math/MAX',
        'functions/math/ABS',
        'functions/math/SQRT',
        'functions/math/ROUND',
        'functions/math/ROUNDUP',
        'functions/math/RAND',
        'functions/math/RANDBETWEEN',
        'functions/math/PRODUCT',
        'functions/math/PI',
      ],
    },
    {
      type: 'category',
      label: 'Text Functions',
      collapsed: true,
      items: [
        'functions/text/CONCATENATE',
        'functions/text/LEFT',
        'functions/text/RIGHT',
        'functions/text/MID',
        'functions/text/LEN',
        'functions/text/SUBSTITUTE',
        'functions/text/REPLACE',
        'functions/text/REPT',
        'functions/text/FIND',
      ],
    },
    {
      type: 'category',
      label: 'Date Functions',
      collapsed: true,
      items: [
        'functions/date/TODAY',
        'functions/date/DATE',
        'functions/date/YEAR',
        'functions/date/MONTH',
        'functions/date/DAY',
        'functions/date/EDATE',
      ],
    },
    {
      type: 'category',
      label: 'Logical Functions',
      collapsed: true,
      items: [
        'functions/logical/IF',
        'functions/logical/IFERROR',
        'functions/logical/AND',
        'functions/logical/OR',
        'functions/logical/ISERROR',
        'functions/logical/ISNUMBER',
        'functions/logical/ISTEXT',
        'functions/logical/ISBLANK',
      ],
    },
    {
      type: 'category',
      label: 'Conditional Functions',
      collapsed: true,
      items: [
        'functions/conditional/COUNTIF',
        'functions/conditional/SUMIF',
        'functions/conditional/COUNTIFS',
        'functions/conditional/SUMIFS',
      ],
    },
    {
      type: 'category',
      label: 'Lookup Functions',
      collapsed: true,
      items: [
        'functions/lookup/COLUMN',
        'functions/lookup/ROW',
      ],
    },
    {
      type: 'category',
      label: 'Financial Functions',
      collapsed: true,
      items: [
        'functions/financial/PMT',
      ],
    },
  ],
};

export default sidebars;
