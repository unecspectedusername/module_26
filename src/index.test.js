import {checkBirthday} from "./index";

describe('tests for checkBirthday', () => {
    it('passing birthday date', () => {
        expect(checkBirthday(4, 9)).toBe('Happy Birthday!');
    });
    it('passing wrong but valid date', () => {
        expect(checkBirthday(1, 12)).toBe('Today is not your birthday, sorry.');
    });
    it('passing invalid date', () => {
        expect(checkBirthday(32, 2)).toBe('Invalid date');
    })
})