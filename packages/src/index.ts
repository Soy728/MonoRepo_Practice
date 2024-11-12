import { parse } from 'parser';
import add from 'utils';

const testParser = parse('30');
const testUtil = add('20', '40');

console.log(testParser, testUtil);
