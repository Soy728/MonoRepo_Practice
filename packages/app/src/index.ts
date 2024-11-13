import { parse } from '@common/parser';
import { add } from '@common/utils';

const testParser = parse('30');
const testUtil = add('20', '40');

console.log({ testParser, testUtil });
