/* global describe, it, expect */

describe('just checking', function () {

    it('works', function () {
        expect('something').toNotEqual('nothing');
    });

    it('still works', function () {
        expect('something').toEqual('something');
    });

});

/* EOF */