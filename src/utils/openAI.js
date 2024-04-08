import OpenAI from 'openai';
import { OPENAI } from './Constants';

const openai = new OpenAI({
  apiKey: OPENAI,
  dangerouslyAllowBrowser: true
});

export default openai;