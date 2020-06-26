import {describe, expect, it} from '@jest/globals'
import { FormatUnixtoDate } from "../components/formatUnixtoDate";

describe("Check Dates", () => {
    const formatDate = FormatUnixtoDate(1593122816000);
    it('Check Date ok', () => {

        const date = '25-06-2020'
        expect(formatDate).toBe(date);
    });


    it('Check Date not ok', () => {
        const date = '26-06-2020';
        expect(formatDate).not.toBe(date);
    });
});
