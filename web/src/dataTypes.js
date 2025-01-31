import lock from 'images/lock-01.png';
import global from 'images/global-01.png';
import { PROJECT_DATA_TYPES } from 'domain/project/ProjectDataTypes';
import { PROJECT_TYPES } from 'domain/project/projectTypes';

export const INTEGER = 'INTEGER';
export const FLOAT = 'FLOAT';
export const BOOLEAN = 'BOOLEAN';
export const regExps = { INT: /^[0-9]+$/, FLOAT: /^-?\d*\.\d*$/ };
export const STRING = 'STRING';
export const errorMessages = {
  INTEGER: 'The value should be an integer number',
  FLOAT: 'The value should be a floating number',
  BOOLEAN: 'This parameter can be true or false only.',
  STRING: 'This is not a valid entry for this parameter',
};

export const colorsForCharts = [
  '#f5544d',
  '#2db391',
  '#ffa000',
  '#311b92',
  '#00796b',
];

/* ------------------------- Visibility scopes ------------------------- */

export const PUBLIC = 'PUBLIC';
export const PRIVATE = 'PRIVATE';

/* ------------------------- Statuses for pipelines ------------------------- */

export const RUNNING = 'running';
export const PENDING = 'pending';
export const SUCCESS = 'success';
export const FAILED = 'failed';
export const CANCELED = 'canceled';
export const SKIPPED = 'skipped';
export const EXPIRED = 'expired';

/* ------------------------- ---------------------- ------------------------- */

/*
  Adjectives and Nouns for Random Name Generation
*/

export const Adjectives = ['clever', 'active', 'alive', 'alert', 'amused', 'awake', 'balanced', 'beloved', 'better', 'big', 'bold', 'casual',
  'busy', 'certain', 'calm', 'charming', 'childish', 'civil', 'clean', 'clear', 'clumsy', 'comic', 'cute', 'dear', 'deep', 'desired', 'devoted',
  'elegant', 'epic', 'eternal', 'evolved', 'exact', 'excited', 'exotic', 'expert', 'firm', 'fair', 'flexible', 'fit', 'flashy', 'frank', 'full',
  'flying', 'fresh', 'funny', 'famous', 'gentle', 'generous', 'glowing', 'handy', 'happy', 'harmless', 'healthy', 'heroic', 'hip', 'holy', 'honest',
  'hot', 'huge', 'humble', 'immortal', 'improved', 'infinite', 'inspired', 'intense', 'just', 'keen', 'kind', 'knowing', 'large', 'lasting', 'legal',
  'liberal', 'light', 'literate', 'magical', 'major', 'mint', 'modern', 'modest', 'moved', 'musical', 'native', 'natural', 'neat', 'new', 'nice',
  'noble', 'normal', 'optimum', 'outgoing', 'patient', 'peaceful', 'perfect', 'pleasent', 'pleased', 'poetic', 'polite', 'positive', 'popular',
  'powerful', 'precise', 'premium', 'pretty', 'pro', 'profound', 'proper', 'proud', 'pure', 'quick', 'quiet', 'rapid', 'rare', 'ready', 'real',
  'regular', 'related', 'relaxed', 'renweing', 'resolved', 'rich', 'romantic', 'sacred', 'sensible', 'shaky', 'sharp', 'simple', 'skilled', 'smart',
  'smiling', 'smooth', 'social', 'solid', 'sound', 'special', 'splendid', 'stable', 'steady', 'still', 'sunny', 'super', 'sweet', 'tender',
  'thankful', 'tidy', 'tight', 'top', 'touched', 'well', 'vast', 'wanted', 'warm', 'willing', 'wired', 'corona-virus-infected'];

export const Nouns = ['dolphin', 'barracuda', 'starfish', 'scubadiver', 'plancton', 'ariel', 'nemo', 'anchovy', 'whale', 'shark', 'clownfish',
  'cod', 'coral', 'eel', 'seal', 'shrimp', 'flounder', 'squid', 'herring', 'jellyfish', 'dory', 'krill', 'lobster', 'ray', 'megalodon', 'manatee',
  'warwhal', 'nautilus', 'octopus', 'oyster', 'plankton', 'prawn', 'pufferfish', 'sponge', 'swordfish', 'walrus', 'tuna', 'crab', 'algae', 'kraken',
  'nessie', 'siren', 'moby-dick'];

/**
 * Gitlab actions
 */
export const CREATE = 'create';
export const DELETE = 'delete';
export const MOVE = 'move';
export const UPDATE = 'update';
export const CHMOD = 'chmod';

/*-----------------------------------------*/

/**
 * Merge req states
*/

export const mrStates = [
  'opened',
  'closed',
  'merged',
];

/* the next array is to contain global characters banned for urls */

export const bannedCharsArray = ['..', '~', '^', ':', '\\', '{', '}', '[', ']', ')', '(', '$', '#', '&', '%', '*', '+', ',', '¨', '"', '!'];


/* -------------------------- Types of Processors -------------------------- */
export const OPERATION = 'OPERATION';
export const ALGORITHM = 'ALGORITHM';
export const VISUALIZATION = 'VISUALIZATION';

/* -------------------------- Project classifications -------------------------- */

export const ML_PROJECT = 'ml-project';
export const MODEL = 'model';
export const DATA_OPERATION = 'data-operation';
export const DATA_VISUALIZATION = 'data-visualization';

export const projectClassificationsProps = [{
  classification: ML_PROJECT,
  searchableType: PROJECT_TYPES.DATA,
  label: 'ML Project',
  color: '#91BD44',
  description: `A Machine Learning (ML) project is where you house your data set (repository),
    where you perform data processing (data pipeline), visualize your data set (data visualization)
    and where you create your experiments`,
},
{
  classification: MODEL,
  typeOfProcessor: ALGORITHM,
  searchableType: PROJECT_TYPES.ALGORITHM,
  label: 'Model',
  color: '#E99444',
  description: `
    A machine learning(ML) model is an algorithm that can be trained
    with data to be a mathematical representation of a real-world process. 

    Create a model repository to use it in your experiment pipelines and publishing it. 
    You can find detailed instructions how to create models in MLReef in the documentation
    `,
},
{
  classification: DATA_OPERATION,
  typeOfProcessor: OPERATION,
  searchableType: PROJECT_TYPES.OPERATION,
  label: 'Data Operation',
  color: '#D2519D',
  description: `A data operation transforms your data in a data pre-processing pipeline. 
    It is a script that need input data to create output data. 

    You can find detailed instructions how to create data operations in the documentation
    `,
},
{
  classification: DATA_VISUALIZATION,
  typeOfProcessor: VISUALIZATION,
  searchableType: PROJECT_TYPES.VISUALIZATION,
  label: 'Data visualization',
  color: '#735DA8',
  description: `A data visualization create undestandable representations of the structure in your data. 
    The output are plots and graphs. 

    You can find detailed instructions how to create data visualizations in the documentation.
    `,
},
];

/* -------------------------- ------------- -------------------------- */

/* -------------------------- The next are access levels implemented by Gitlab -------------------------- */

export const privacyLevelsArr = [
  {
    name: 'Private',
    label: 'Private',
    value: 'private',
    message: 'The #protected-element access must be granted explicitly to every user.',
    icon: lock,
  },
  {
    name: 'Public',
    label: 'Public',
    value: 'public',
    message: 'The #protected-element can be accessed without any authentication.',
    icon: global,
  },
];

/* --------------------------  ------------------------------------- ------------------*/

export const PIPELINE_VIEWS_FORMAT = 'DD/MM - hh:mm';

export const dataTypesMetadata = [
  { label: 'Any', dataTypeName: PROJECT_DATA_TYPES.ANY, icon: 'fas fa-archive' },
  { label: 'Audio', dataTypeName: PROJECT_DATA_TYPES.AUDIO, icon: 'fa fa-volume-up t-info' },
  { label: 'Bin', dataTypeName: PROJECT_DATA_TYPES.BINARY, icon: 'fas fa-barcode t-info' },
  { label: 'None', dataTypeName: PROJECT_DATA_TYPES.NONE, icon: '' },
  { label: 'Hier', dataTypeName: PROJECT_DATA_TYPES.HIERARCHICAL, icon: 'fas fa-sitemap t-info' },
  { label: 'Image', dataTypeName: PROJECT_DATA_TYPES.IMAGE, icon: 'fas fa-images', style: { color: '#D2519D' }},
  { label: 'Tabular', dataTypeName: PROJECT_DATA_TYPES.TABULAR, icon: 'fas fa-grip-lines-vertical t-warning' },
  { label: 'Text', dataTypeName: PROJECT_DATA_TYPES.TEXT, icon: 'fa fa-file t-success' },
  { label: 'T.Series', dataTypeName: PROJECT_DATA_TYPES.TIME_SERIES, icon: 'fas fa-hourglass-end', style: { color: '#D2519D' }},
  { label: 'Video', dataTypeName: PROJECT_DATA_TYPES.VIDEO, icon: 'fa fa-video t-danger' },
  { label: 'Model', dataTypeName: PROJECT_DATA_TYPES.MODEL, icon: 'fas fa-project-diagram', style: { color: '#D2519D' }},
  { label: 'Number', dataTypeName: PROJECT_DATA_TYPES.NUMBER, icon: 'fas fa-calculator t-info' },
];
