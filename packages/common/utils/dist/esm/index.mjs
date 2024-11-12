import { parse } from 'parser';
export default function add(num1, num2) {
    return parse(num1) + parse(num2);
}
